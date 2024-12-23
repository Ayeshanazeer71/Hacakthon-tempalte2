
import Brand from "./components/brand";
import Brand2 from "./components/brand2";
import FeaturesSection from "./components/feature/feature";
import Footer from "./components/footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import Popular from "./components/popular";
import ProductCard from "./components/cermic";
import SecondHome from "./components/second-home";
import SingUp from "./components/sing-up";
import Newcermics from "./components/cermic";
import Productcard from "./components/productcard";
import Idea from "./components/idea";
import SimpleNewsletterSignup from "./components/newsignup";
import Culbsignup from "./components/culb-signup";
import Card from "./components/cards";
import Listing from "./components/listing";
import Might from "./components/might";
import Container from "./components/container";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      
      <main>
      <Navbar />
      <Hero />
      <Newcermics />
      <FeaturesSection />
      <Popular />
      <SingUp />
      <Brand />
      <Footer />
      <SecondHome />
      <Brand2 />
      <Productcard />
      <Idea />
      <SimpleNewsletterSignup />
      <Footer />
      <Listing />
      <Might />
      <FeaturesSection />
      <Culbsignup />
      <Footer />
      <Idea />
      <Container />
      <FeaturesSection />
      <Culbsignup />
      <Footer />
      <Productcard />
      <Card />
      <Productcard />
      <Footer />
      

      
      
      
      
      
      </main>
    </div>
  )
}
