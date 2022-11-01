import Header from "./components/header/Header";
import HeaderContent from "./components/headercontent/HeaderContent";
import LinkBuilding from "./components/linkbuilding/LinkBuilding";
import RightPlan from "./components/right-plan/RightPlan";
import ContactUs from "./components/contact us/ContactUs";
import FooterHead from "./components/footerhead/FooterHead";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderContent/>
      <LinkBuilding/>
      <RightPlan/>
      <ContactUs/>
      <FooterHead/>
      <Footer/>
 
    </div>
  );
}

export default App;
