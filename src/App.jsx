// components
import Product from "./components/product";
import Hero from "./components/hero";

// css
import "./css/app.css";
import "./css/general.css";

// data
import * as data from "./descriptions.json";

const { limoncello, proseccobrut } = data;

function App() {
  return (
    <>
      <Hero />
      <div className="products">
        <Product
          title="Limoncello Artigianale Fattorie Cilentane, Liquore di Limoni 30°"
          imgsrc={require("./img/limoncello.png")}
          description={limoncello.description}
          producent={limoncello.producent}
          formaten={limoncello.formaten}
        />
        <Product
          title="Conegliano-Valdobbiadene Prosecco Superiore Brut"
          imgsrc={require("./img/proseccoBrut.png")}
          description={proseccobrut.description}
          producent={proseccobrut.producent}
          formaten={proseccobrut.formaten}
      />
      </div>
    </>
  );
}

export default App;
