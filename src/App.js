import { BrowserRouter } from "react-router-dom";
import Authmiddleware from "./middleware/Authmiddleware";

function App() {
  return (
      <BrowserRouter>
        <Authmiddleware/>
      </BrowserRouter>
  );
}

export default App;
