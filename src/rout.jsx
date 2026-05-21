import { Route , Router , Routes, useNavigate } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Cart from "./cart";

function Rout(){

    return(
        <Routes>
            <Route path="/About" element={<App></App>}></Route>
            <Route path="/" element = {<Shop></Shop>}></Route>
            <Route path="/Cart" element= {<Cart/>}></Route>
        </Routes>
    )
}

export default Rout;