import Header from '../components/sections/Header';
import Testimonial from '../components/sections/Testimonial';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

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