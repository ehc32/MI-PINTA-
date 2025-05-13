import Header from '../components/sections/Header';
import Testimonial from '../components/sections/Testimonial';
import About from '../components/sections/About';
import Faq from '../components/sections/Faq';
import Service from '../components/sections/Service';
import Pricing from '../components/sections/Pricing';
import Blog from '../components/sections/Blog';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Subscribe from '../components/sections/Subscribe';
import Footer from '../components/layouts/Footer';
import CompanyVideos from './CompanyVideos';

const Home = () => {
    return (
        <div className="bg-white">
        <Header />
{/*         <Testimonial />

 */}    
 <Testimonial />
      <Blog />
        <Contact />
    </div>
    );
};

export default Home;