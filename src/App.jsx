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
      <div className="products">
        <Product
          item="limoncello"
          title="Limoncello Artigianale Fattorie Cilentane, Liquore di Limoni 30°"
          imgsrc={require("./img/limoncello.png")}
        />
        <Product
          item="proseccobrut"
          title="Conegliano-Valdobbiadene Prosecco Superiore Brut"
          imgsrc={require("./img/proseccoBrut.png")}
        />
      </div>
    </>
  );
}

export default App;
