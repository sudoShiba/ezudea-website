// components
import Product from "./components/product";
import Hero from "./components/hero";
import Footer from "./components/footer";

// css
import "./css/app.css";
import "./css/general.css";

function App() {
  return (
    <>
      <Hero />
      <main className="products">
        <Product item="limoncello" />
        <Product item="proseccobrut" />
        <Product item="proseccoextradry" />
        <Product item="proseccotreviso" />
        <Product item="rosenoir" />
        <Product item="pesto" />
      </main>
      <Footer />
    </>
  );
}

export default App;
