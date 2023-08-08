import "./App.css";
import Header from "./components/HeaderComponent";
import ButtonsComponent from "./components/ButtonsComponent";
import YTComponent from "./components/YTComponent";
import PrincipalTitle from "./components/PrincipalTitle";
import {
  nikeInfoBogota,
  nikeInfoMedellin,
  nikeInfoCali,
  nikeInfoBarranquilla,
  nikeInfoManizales,
  nikeInfoPereira,
} from "./constants";

import InfoButtons from "./components/InfoButtons";

function App() {
  return (
    <>
      <Header />
      <ButtonsComponent />
      <YTComponent />
      <div className="container">
        <PrincipalTitle
          src="https://ugc.production.linktr.ee/CoLnugQkRb6lKeQNbk1D_fD6eg5qEWP4tfQz9"
          title="Nike Pegasus 40"
        ></PrincipalTitle>
        <h6>Siéntelo para creerlo. Disponible en Nike Store.</h6>
      </div>
      <section>
        <h3 className="infoTitle"> Bogotá </h3>
        {nikeInfoBogota.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </section>
      <section>
        <h3 className="infoTitle"> Medellín </h3>
        {nikeInfoMedellin.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </section>
      <section>
        <h3 className="infoTitle"> Cali </h3>
        {nikeInfoCali.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </section>
      <section>
        <h3 className="infoTitle"> Barranquilla </h3>
        {nikeInfoBarranquilla.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </section>
      <section>
        <h3 className="infoTitle"> Manizales </h3>
        {nikeInfoManizales.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </section>
      <section>
        <h3 className="infoTitle"> Pereira </h3>
        {nikeInfoPereira.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </section>
    </>
  );
}

export default App;
