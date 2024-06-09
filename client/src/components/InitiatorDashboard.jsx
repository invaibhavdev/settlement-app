// Dashboard for PartyA in a settlement

import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Text from "../components/base/Text";
// import SettlementContext from "../context/SettlementContext";

const InitiatorDashboard = () => {
//   const { currentSettlement, setCurrentSettlement } =
//     useContext(SettlementContext);  
  const { currentSettlement, setCurrentSettlement } = { currentSettlement: {proposedAmount: 100, status: "pending"}, setCurrentSettlement: () => {} };
  const [proposedAmount, setProposedAmount] = useState(
    currentSettlement?.proposedAmount || ""
  );
  const settlementId = useParams().settlementId || 1;
  useEffect(() => {
    const fetchSettlementData = async () => {
      try {
        // setIsLoading(true);

        // Fetch settlement data based on settlement ID (if applicable)
        const response = await fetch(`/api/settlements/${settlementId}`);

        if (response.ok) {
          const data = await response.json();
          setCurrentSettlement(data);
          setProposedAmount(data.proposedAmount || '');
        } else {
          // Handle errors
          // ...
        }
      } finally {
        // setIsLoading(false);
      }
    };

    fetchSettlementData(); // Fetch data when component mounts
  }, [settlementId]); // Re-fetch if settlement ID changes

  const handleSubmitProposal = () => {
    // TODO: send `proposedAmount` to server
    setCurrentSettlement({ ...currentSettlement, proposedAmount });
  };

  const handleModifyProposal = () => {
    // logic to handle modifying the proposal
  };

  return (
    <div className="grid gap-6"> 
      <Card className="bg-gray-50"> {/* Add subtle background color */}
        <Text variant="h2">Settlement Proposal</Text>
        <Input
          type="number"
          value={proposedAmount}
          onChange={(e) => setProposedAmount(e.target.value)}
          placeholder="Enter Amount"
          className="mt-2"
        />
        <div className="mt-4 flex justify-end"> 
          <Button 
            onClick={handleSubmitProposal} 
            disabled={!proposedAmount}
            className="hover:opacity-90" // Add hover effect
          >
            {currentSettlement?.status === 'pending' ? 'Submit Proposal' : 'Resubmit Proposal'}
          </Button>
          {currentSettlement?.status === 'disputed' && (
            <Button 
              variant="secondary" 
              onClick={handleModifyProposal} 
              className="ml-2 hover:opacity-90" // Add hover effect
            >
              Modify
            </Button>
          )}
        </div>
      </Card>

      <Card className="bg-gray-50"> {/* Add subtle background color */}
        <Text variant="h2">Settlement Status</Text>
        <div className="mt-2"> 
          <Text variant="body">
            Current Proposal: <span className="font-semibold">{currentSettlement?.proposedAmount || 'N/A'}</span> 
          </Text>
          <Text variant="body">
            Responder's Status:{' '}
            <span className="font-semibold">
              {currentSettlement?.status === 'agreed'
                ? 'Agreed'
                : currentSettlement?.status === 'disputed'
                ? 'Disputed'
                : 'Pending'}
            </span>
          </Text>
        </div>
      </Card>
    </div>
  );
};


export default InitiatorDashboard;
