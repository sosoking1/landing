import React, { useEffect, useState } from 'react';
import { games } from './data';
import GameCard from './components/GameCard';
import { Helmet } from 'react-helmet-async';

function App() {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);

  useEffect(() => {
    const checkAdBlocker = () => {
      // If already detected, no need to check again
      if (adBlockerDetected) return;

      // Create a bait element that ad blockers typically block
      const bait = document.createElement('div');
      bait.className = 'ad-container adsbox doubleclick ad-placement';
      bait.style.height = '1px';
      bait.style.width = '1px';
      bait.style.position = 'absolute';
      bait.style.left = '-1000px';
      bait.style.top = '-1000px';
      document.body.appendChild(bait);

      // Check if the bait was blocked
      setTimeout(() => {
        const isBlocked = 
          bait.offsetHeight === 0 || 
          bait.offsetWidth === 0 || 
          bait.style.display === 'none' ||
          window.getComputedStyle(bait).display === 'none';
        
        setAdBlockerDetected(isBlocked);
        document.body.removeChild(bait);
      }, 100);
    };

    checkAdBlocker();
  }, [adBlockerDetected]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
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

      {/* Full-Screen Blocking Overlay */}
      {adBlockerDetected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-md w-full p-5 text-center border border-red-500 shadow-lg">
            <h2 className="text-red-500 text-xl font-bold mb-3">⚠️ Ad-Blocker Detected</h2>
            <p className="text-gray-300 mb-4 text-sm">
              Our website relies on ads to stay free. Please disable your ad-blocker to continue.
            </p>
            <button
              onClick={handleRefresh}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium w-full text-sm"
            >
              I've Disabled It - Refresh Page
            </button>
          </div>
        </div>
      )}

      {/* Main Content (Blurred if Ad-Blocker is ON) */}
      <main className={`container mx-auto py-6 px-4 ${adBlockerDetected ? 'blur-sm pointer-events-none' : ''}`}>
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          UnlockedGamer - Download Premium Mod APKs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;