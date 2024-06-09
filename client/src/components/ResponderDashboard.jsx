// Dashboard for PartyB in a settlement
import React, { useContext } from 'react';
import Button from '../components/base/Button';
import Text from '../components/base/Text';
import Card from '../components/base/Card';
// import SettlementContext from '../context/SettlementContext';

const ResponderDashboard = () => {
//   const { currentSettlement, setCurrentSettlement } = useContext(SettlementContext);
  const { currentSettlement, setCurrentSettlement } = { currentSettlement: {proposedAmount: 100, status: "pending"}, setCurrentSettlement: () => {} };

  const handleAgree = () => {
    // TODO: Send agreement to server
    setCurrentSettlement({ ...currentSettlement, status: 'agreed' });
  };

  const handleDispute = () => {
    // TODO: Send dispute to server
    setCurrentSettlement({ ...currentSettlement, status: 'disputed' });
  };

  return (
    <Card className="bg-gray-50">
      <Text variant="h2">Current Settlement Proposal</Text>

      <div className="mt-4">
        <Text variant="body">
          Proposed Amount:{' '}
          <span className="font-semibold">
            {currentSettlement?.proposedAmount || 'N/A'}
          </span>
        </Text>

        {/* Add this section to display the initiator's status */}
        <Text variant="body" icon={currentSettlement?.status}>
          Initiator's Status:{' '}
          {currentSettlement?.status === 'agreed'
            ? 'Agreed'
            : currentSettlement?.status === 'disputed'
            ? 'Disputed'
            : 'Pending'}
        </Text>
      </div>

      <div className="mt-6 flex justify-end"> 
        <Button onClick={handleAgree} disabled={currentSettlement?.status !== 'pending'}>
          Agree
        </Button>
        <Button 
          variant="secondary" 
          onClick={handleDispute} 
          disabled={currentSettlement?.status !== 'pending'} 
          className="ml-2"
        >
          Dispute
        </Button>
      </div>
    </Card>
  );
};

export default ResponderDashboard;
