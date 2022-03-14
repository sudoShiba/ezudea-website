import Product from "./product";

import "./App.css";
import "./general.css";
import * as data from "./descriptions.json";

const { limoncello, brut } = data;

function App() {
  return (
    <>
      <Product
        title="Limoncello Artigianale Fattorie Cilentane, Liquore di Limoni 30°"
        img="./img/limoncello.png"
        description={limoncello.description}
      />
      <Product
        title="Conegliano-Valdobbiadene Prosecco Superiore Brut"
        img="./img/prosseco.png"
        description={brut.description}
      />
    </>
  );
}

export default App;
