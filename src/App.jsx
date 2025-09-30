import "./App.css";
import AllTheBooks from "./Components/AllTheBooks";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <MyNav brandName="React-MyBooks" />
      <Welcome sottoTitolo="Qui non troverai nessuna storia BANALE!" emote="👇" istruzioni="Seleziona il genere che vuoi visualizzare:" />
      <AllTheBooks />
      <MyFooter
        brandName="React-MyBooks"
        description="Piccolo editoriale, nessuna storia superficiale"
        email="inventata@gmail.com"
        telephone="+333 54 91 648"
      />
    </>
  );
}

export default App;
