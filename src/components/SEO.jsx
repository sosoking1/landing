import { Helmet } from 'react-helmet-async';

const SEO = ({ game }) => {
  return (
    <Helmet>
      <title>{game ? `${game.title} Mod APK Download` : "Premium Mod Games"}</title>
      <meta 
        name="description" 
        content={game ? 
          `Download ${game.title} MOD APK with ${game.features.join(', ')}` : 
          "Free download modded games with unlimited resources"
        }
      />
      <meta property="og:title" content={`${game?.title || 'Premium'} Mod APK`} />
      <meta property="og:image" content={game?.banner || 'https://hmgamess.netlify.app/default-banner.jpg'} />
    </Helmet>
  );
};

export default SEO;