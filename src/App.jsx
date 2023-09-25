import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import priceOptions from "./components/priceOptions/priceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-5xl bg-rose-600">Vite + React</h1>
      <priceOptions></priceOptions>
    </>
  );
}

export default App;
