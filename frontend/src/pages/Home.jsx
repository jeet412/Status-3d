import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedSections from '../components/FeaturedSections';
import FavouritesSection from '../components/FavouritesSection';
import StatusOnYouSection from '../components/StatusOnYouSection';
import ServiceHighlights from '../components/ServiceHighlights';
const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <TopBar />
      <Navbar />
      
      {/* If hero has full-width bg/image, keep it outside the container */}
      <HeroSection />
      <CategoryGrid />
      <FeaturedSections />
      <FavouritesSection />
      <StatusOnYouSection />
      <ServiceHighlights />
      {/* Wrap only content you want centered */}
      <div className="max-w-7xl mx-auto px-4">
        {/* other center-aligned sections here */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
