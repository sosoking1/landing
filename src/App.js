import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { games } from './data';
import GameCard from './components/GameCard';

function App() {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);

  useEffect(() => {
    const checkAdBlocker = () => {
      const isBlocked = typeof _JF === 'undefined';
      setAdBlockerDetected(isBlocked);
    };

    checkAdBlocker();
    const interval = setInterval(checkAdBlocker, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Helmet>
      <title>UnlockedGamer - Premium Mod Games APKs</title>
        <meta
          name="description"
          content="Download premium mod APK games for Android. All features unlocked, unlimited money, no ads. Top modded games free download."
        />
        <meta property="og:title" content="UnlockedGamer - Premium Mod APKs" />
        <meta
          property="og:description"
          content="Download modded games with unlimited resources, unlocked features, and ad-free experience."
        />
        <meta property="og:image" content="https://unlockedgamer.netlify.app/logo.png" />
      </Helmet>

      {/* AdBlocker Warning */}
      {adBlockerDetected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-md w-full p-4 text-center border border-red-500">
            <h2 className="text-red-500 text-xl font-bold mb-3">⚠️ Ad-Blocker Detected</h2>
            <p className="text-gray-300 mb-4 text-sm">
              Please disable your ad-blocker to support us and access all games.
            </p>
            <button
              onClick={handleRefresh}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium w-full text-sm"
            >
              I've Disabled It - Refresh Page
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={`container mx-auto py-8 px-4 ${adBlockerDetected ? 'blur-sm pointer-events-none' : ''}`}>
        <h1 className="text-3xl font-bold text-center mb-8">Premium Game Mods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;