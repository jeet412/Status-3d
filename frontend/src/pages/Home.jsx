// Home.jsx
import HeroSection from '../components/HeroSection';

import CategoryGrid from '../components/CategoryGrid';
import FeaturedSections from '../components/FeaturedSections';
import FavouritesSection from '../components/FavouritesSection';
import StatusOnYouSection from '../components/StatusOnYouSection';
import ServiceHighlights from '../components/ServiceHighlights';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* All navbars are handled globally in App.jsx */}
      <HeroSection />
      <CategoryGrid />
      <FeaturedSections />
      <FavouritesSection />
      <StatusOnYouSection />
      <ServiceHighlights />

      <div className="max-w-7xl mx-auto px-4">
        {/* Any center-aligned sections can go here */}
      </div>

    
    </div>
  );
};

export default Home;
