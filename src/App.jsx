import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Token from "./components/Token";
import TokenPage from "./components/TokenPage";
import CreateToken from "./components/CreateToken";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <CreateToken />
      <Footer />
      <Token />
    </div>
  );
}

export default App;
