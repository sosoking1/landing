import React, { useEffect, useState } from 'react';
import { games } from './data';
import GameCard from './components/GameCard';

function App() {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);

  useEffect(() => {
    const checkAdBlocker = () => {
      if (localStorage.getItem('adblockDismissed')) return;
      const isBlocked = typeof _JF === 'undefined';
      setAdBlockerDetected(isBlocked);
    };

    checkAdBlocker();
    const interval = setInterval(checkAdBlocker, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    localStorage.removeItem('adblockDismissed');
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Global Ad-Blocker Overlay */}
      {adBlockerDetected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-md w-full p-6 text-center border border-red-500">
            <h2 className="text-red-500 text-2xl font-bold mb-3">⚠️ Ad-Blocker Detected</h2>
            <p className="text-gray-300 mb-6">
              Please disable your ad-blocker to access our games. Refresh after disabling.
            </p>
            <button
              onClick={handleRefresh}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold w-full"
            >
              I've Disabled It - Refresh Page
            </button>
          </div>
        </div>
      )}

      {/* Game Cards Container */}
      <div className={`container mx-auto py-8 px-4 ${adBlockerDetected ? 'blur-sm' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;