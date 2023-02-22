import "./css/airbym.css";

// component
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Main from "./component/Main";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
