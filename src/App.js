import About from './About';
import AllInOne from './AllInOne';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar'
import Pricing from './Pricing';
import Support from './Support';
import {Helmet} from "react-helmet";
function App() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Clouder</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;