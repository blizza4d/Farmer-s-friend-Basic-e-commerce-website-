import './shop.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ammonia from './assets/Ammonia.jpg'
import Potash from "./assets/Potash.jpg"
import Mop from "./assets/Mop.jpg"
import Potassi from "./assets/Potassi.jpg"
import Dap from "./assets/Dap.jpg"
import Can from "./assets/Can.jpg"
import Urea from "./assets/Urea.jpg"


function Shop(){

    const navi =  useNavigate();
    const [cart,setcart] = useState(new Set())

    useEffect(() => {
        const scart = new Set(JSON.parse(localStorage.getItem("cart")) || [])
        setcart(new Set(scart))

    }, [])

function dynacol(e){
    if (e.target.textContent === "ADD TO CART"){
        e.target.style.backgroundColor = "red";
    }
    else{
         e.target.style.backgroundColor = "rgb(39, 232, 39)";
    }
    }
  

    

    function upd(id){

        let necart = new Set(cart)
        if (necart.has(id)){
            necart.delete(id);
            
        }
        else{
            necart.add(id);
        }
        setcart(necart);
        localStorage.setItem("cart", JSON.stringify([...necart]));

    }

    return (
        
        <>
         
    <div>
      
      <nav className='Topnav'>
      <ul>
          <li><h1 id = "head_title">Farmer's friend</h1></li>
          <li><a id="Sho" onClick={() => (navi("/"))}>Shop</a></li>

          <li><a onClick={() => (navi("/Cart"))}>Cart</a></li>
          <li><a onClick={() => (navi("/About"))}>About</a></li>

        </ul>
      </nav>
      <h2 id = "web_quote">-Built to serve and help farmers</h2>

    </div><br></br><br/>
        <div id = 'item_cont'>


    <div className="item">
        <img src={Urea}></img>
        <h2>Urea</h2>
        <h3>70$</h3>
        <button id='stat' onClick={(e) => {upd(1); dynacol(e)}}>{cart.has(1) ? "REMOVE ITEM" : "ADD TO CART"}</button>
    </div>

    <div className="item">
        <img src={Potash}></img>
        <h2>Potash fertilizer</h2>
        <h3>100$</h3>
        <button onClick={(e) => {upd(2); dynacol(e)}}>{cart.has(2) ? "REMOVE ITEM" : "ADD TO CART"}</button>
    </div>

    <div className="item">
        <img src={Dap}></img>
        <h2>Diammonium Phosphate</h2>
        <h3>120$</h3>
        <button onClick={(e) => {upd(3); dynacol(e)}}>{cart.has(3) ? "REMOVE ITEM" : "ADD TO CART"}</button>
    </div>

    <div className="item">
        <img src={Mop}></img>
        <h2>Muriate of Potash</h2>
        <h3>150$</h3>
        <button onClick={(e) => {upd(4); dynacol(e)}}>{cart.has(4) ? "REMOVE ITEM" : "ADD TO CART"}</button>
    </div>
    
    <div className="item">
        <img src={Can}></img>
        <h2>Calcium ammonium nitrate</h2>
        <h3>50$</h3>
        <button onClick={(e) => {upd(5); dynacol(e)}}>{cart.has(5) ? "REMOVE ITEM" : "ADD TO CART"}</button>
    </div>

    <div className="item">
        <img src={Ammonia}></img>
        <h2>Ammonium sulphate</h2>
        <h3>30$</h3>
        <button onClick={(e) => {upd(6); dynacol(e)}}>{cart.has(6) ? "REMOVE ITEM" : "ADD TO CART"}</button>
    </div>

    <div className="item">
        <img src={Potassi}></img>
        <h2>Potassium sulphate</h2>
       <h3>45$</h3>
        <button onClick={(e) => {upd(7); dynacol(e)}}>{cart.has(7) ? "REMOVE ITEM" : "ADD TO CART"}</button>
    </div>
    


    
    </div>
        </>
    )
   
    
}
 export default Shop