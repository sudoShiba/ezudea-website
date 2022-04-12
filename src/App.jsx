import React from "react";

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
      <main>
        <h1 className="center">Artikelen</h1>
        <section className="products">
          <Product item="limoncello" />
          <Product item="proseccobrut" />
          <Product item="proseccoextradry" />
          <Product item="proseccotreviso" />
          <Product item="rosenoir" />
          <Product item="roseblanc" />
          <Product item="pesto" />
        </section>
        {/* TO DO
        <h1 className="center">Kampioenschappen</h1>
        <section>

        </section>*/}
      </main>
      <Footer />
    </>
  );
}

export default App;
