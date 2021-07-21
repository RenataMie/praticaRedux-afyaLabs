import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./components/Home";
import Sobre from "./components/Sobre";


function App() {
  return (
    <>
    <Provider store={store}>
     <Home />
     <Sobre />
     <ToastContainer />
     </Provider>
    </>
  )
}

export default App;
