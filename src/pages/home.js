import Header from '../components/header';
import Banner from '../components/banner';
import Blogs from '../components/blogs';
import Gallery from '../components/gallery';
import WhyChoose from '../components/why-choose';
import Destinations from '../components/destinations';
import Subscriber from '../components/subscriber';
import Footer from '../components/footer';
import SignUp from '../components/signup';

function Home() {
    return (
      <div>
         <Header/>
         <Banner/>
         <Blogs/>
         <Gallery/>
         <WhyChoose/>
         <Destinations/>
         <Subscriber/>
         <Footer/>
         <SignUp/>
      </div>
    );
  }
  
  export default Home;