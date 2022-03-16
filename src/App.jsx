// components
import Product from "./components/product";
import Hero from "./components/hero";

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
      </main>
    </>
  );
}

export default App;
