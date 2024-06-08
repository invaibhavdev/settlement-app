import React from 'react';
import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

const Layout = ({ children }) => {
  // const { user, logout } = useContext(AuthContext);

  // Placeholder for user data
  const partyName = 'Party A'; // Replace with actual party name from Context

  const handleLogout = () => {
    // todo logout logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Settlement App</h1>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <span className="font-medium">{partyName}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-500 hover:bg-blue-100 font-bold py-2 px-4 rounded"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {children}
      </main>

      {/* Footer (Optional) */}
      <footer className="bg-gray-200 text-center p-2">
        {/* Your footer content here */}
      </footer>
    </div>
  );
};

export default Layout;
