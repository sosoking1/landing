/* global _JF */
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const GameCard = ({ game }) => {
  const jsonLd = {
    '@context': 'https://schema.org ',
    '@type': 'VideoGame',
    name: `${game.title} MOD`,
    description: game.description,
    image: game.banner,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: game.rating.split(' ')[0],
      reviewCount: game.rating.match(/\d+/g)?.[1] + '000' || '1000',
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <motion.div
        className="w-full bg-[#111827] border border-gray-700 rounded-2xl shadow-lg p-4 mb-4 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '95vw' }}
      >
        <div className="relative">
          <img
            src={game.banner}
            alt={game.title}
            loading="lazy"
            className="rounded-xl w-full h-auto object-cover"
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
          <span className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
            📦 {game.size}
          </span>
        </div>

        <div className="flex justify-between items-center mt-3 mb-1">
          <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {game.type}
          </span>
          <span className="text-yellow-400 text-sm font-semibold">⭐ {game.rating}</span>
        </div>

        <h2 className="text-xl font-bold text-white font-game mt-2">{game.title}</h2>
        <p className="text-gray-300 text-sm mt-2 mb-3">{game.description}</p>

        {game.features.length > 0 && (
          <ul className="list-disc ml-5 mb-4 space-y-1 text-sm">
            {game.features.map((feature, idx) => (
              <li key={idx} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        )}

<a
          href={game.link}
          className="block text-center bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg text-sm shadow-md mt-2"
          onClick={(e) => {
            e.preventDefault();
            if (typeof _JF === 'function') {
              _JF();
            } else {
              window.location.href = game.link;
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