/* global _JF */
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const GameCard = ({ game }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": `${game.title} MOD`,
    "description": game.description,
    "image": game.banner,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": game.rating.split(' ')[0],
      "reviewCount": game.rating.match(/\d+/g)[1] + "000"
    }
  };
  return (
    <>
    <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
    <motion.div
      className="max-w-md bg-gray-800 rounded-xl shadow-lg p-4 mb-1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Banner with size badge */}
      <div className="relative">
        <img
          src={game.banner}
          alt={game.title}
          loading="lazy" 
          className="rounded-lg w-full h-auto"
        />
        {/* Game size badge (top-right) */}
        <span className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm">
          📦 {game.size}
        </span>
      </div>

      {/* Game type as rounded gray box */}
      <div className="flex justify-between items-center mt-3 mb-2">
        <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs">
          {game.type}
        </span>
        <p className="text-yellow-400 text-sm">⭐ {game.rating}</p>
      </div>

      <h1 className="text-2xl font-bold mt-2 text-white">{game.title}</h1>
      <p className="mb-4 mt-2 text-gray-300">{game.description}</p>

      <ul className="list-disc ml-5 mb-4 space-y-2">
        {game.features.map((feature, idx) => (
          <li key={idx} className="text-gray-300">{feature}</li>
        ))}
      </ul>

      <a
        href={game.link}
        className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold"
        onClick={(e) => {
          e.preventDefault();
          if (typeof _JF === 'function') {
            _JF(); // Trigger CPA locker
          } else {
            window.location.href = game.link; // Fallback
          }
        }}
      >
        Download Game
      </a>
    </motion.div>
    </>
  );
};

export default GameCard;