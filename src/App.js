import './App.scss';
import AskedQuestion from './components/askedQuestion/AskedQuestion';
import BayProduct from './components/buyProduct/BayProduct';
import ChooseOurApp from './components/chooseOurApp/ChooseOurApp';
import DesignedWithBuild from './components/designedWithBuild/DesignedWithBuild';
import Download from './components/download/Download';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Partners from './components/partners/Partners';
import Reviews from './components/reviews/Reviews';
import UltimateFeatures from './components/ultimateFeatures/UltimateFeatures';

function App() {

  let scroll = (type) =>{
    let element = document.getElementById(type);
    window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
  }

  return (
    <div className="App">
      <Header scroll={scroll}/>
      <Partners />
       <Features /> 
      <DesignedWithBuild />
      <ChooseOurApp />
      <UltimateFeatures />
      <BayProduct />
      <Reviews />
      <AskedQuestion />
      <Download />
      <Footer scroll={scroll}/>
    </div>
  );
}

export default App;
