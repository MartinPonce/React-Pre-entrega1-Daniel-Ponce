import "./App.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";




export default function App() {
  function funcionLogin() {
    
  }
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"WELCOME"} />
      <Footer />      
    </div>
  );
}


