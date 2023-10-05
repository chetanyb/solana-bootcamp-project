import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Token from "./components/Token";
import TokenPage from "./components/TokenPage";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <TokenPage />
      <Footer />
      <Token />
    </div>
  );
}

export default App;
