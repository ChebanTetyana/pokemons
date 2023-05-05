import Home from "./components/template/home";
// import HomeType from "./components/template/home/indexType";
import ListPokemons from "./components/ListPokemons";
import Footer from "./components/template/footer";
import './App.css'

function App() {
  return (
    <>
      <Home />
      {/* <HomeType/> */}
      
      <ListPokemons />  

      <Footer />
    </>
  );
}

export default App;

