import { Helmet } from 'react-helmet-async';

const SEO = ({ game }) => {
  const baseTitle = "UnlockedGamer - Premium Mod APKs with Unlimited Features";
  const description = game
    ? `Download ${game.title} MOD APK with ${game.features.join(', ')}`
    : "Download premium modded games with unlocked features, unlimited resources, and no ads.";

  const image = game?.banner || "https://unlockedgamer.netlify.app/logo.png";
  const pageTitle = game ? `${game.title} Mod APK Download` : baseTitle;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="UnlockedGamer" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://unlockedgamer.netlify.app/" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://unlockedgamer.netlify.app/" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
