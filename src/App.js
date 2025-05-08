import React from "react";
import { games } from "./data";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-8"> {/* Added py-8 for padding-top/bottom */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid with gap */}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default App;