// components
import Product from "./components/product";
import Hero from "./components/hero";

// css
import "./css/app.css";
import "./css/general.css";
import * as data from "./descriptions.json";

const { limoncello, proseccobrut } = data;

function App() {
  return (
    <>
      <Hero />
      <Product
        title="Limoncello Artigianale Fattorie Cilentane, Liquore di Limoni 30°"
        imgsrc={require("./img/limoncello.png")}
        description={limoncello.description}
      />
      <Product
        title="Conegliano-Valdobbiadene Prosecco Superiore Brut"
        imgsrc={require("./img/proseccoBrut.png")}
        description={proseccobrut.description}
      />
    </>
  );
}

export default App;
