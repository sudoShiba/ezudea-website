import React from "react";

// components
import Product from "./components/product";
import ProductSmall from "./components/productsmall";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Award from "./components/award";

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
          <Product item="contenegroni" />
          <Product item="contenogroni" />
          <Product item="vermouth" />
          <Product item="pesto" />
        </section>
        <h1 className="center">Nieuw in het gamma</h1>
        <section className="products-small">
          <ProductSmall item="salsatartufata" />
          <ProductSmall item="olioextravergine" />
        </section>
        <h1 className="center">Internationale erkenningen</h1>
        <section className="awards">
          <Award item="proseccoextradry" />
          <Award item="sanpiero"/>
          <Award item="proseccobrut" />
          <Award item="roseblanc" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
