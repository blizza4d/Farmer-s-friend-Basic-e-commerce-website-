import './shop.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Shop(){

    const navi =  useNavigate();
    const [cart,setcart] = useState(new Set())

    useEffect(() => {
        const scart = new Set(JSON.parse(localStorage.getItem("cart")) || [])
        setcart(new Set(scart))

    }, [])

    function upd(id){

        let necart = new Set(cart)
        if (necart.has(id)){
            necart.delete(id);
            
        }
        else{
            necart.add(id);
        }
        setcart(necart)
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
        <img src='src\assets\Urea.jpg'></img>
        <h2>Urea</h2>
        <h3>70$</h3>
        <button id='stat' onClick={() => upd(1)}>{cart.has(1) ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>
    <div className="item">
        <img src='src\assets\Potash.jpg'></img>
        <h2>Potash fertilizer</h2>
        <h3>100$</h3>
        <button onClick={() => upd(2)}>{cart.has(2) ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>

    <div className="item">
        <img src='src\assets\Dap.jpg'></img>
        <h2>Diammonium Phosphate</h2>
        <h3>120$</h3>
        <button onClick={() => upd(3)}>{cart.has(3) ? "REMOVE FROM CART" : "ADD TO CART"}</button>
        
    </div>

    <div className="item">
        <img src='src\assets\Mop.jpg'></img>
        <h2>Muriate of Potash</h2>
        <h3>150$</h3>
        <button onClick={() => upd(4)}>{cart.has(4) ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>
    
    <div className="item">
        <img src='src\assets\Can.jpg'></img>
        <h2>Calcium ammonium nitrate</h2>
        <h3>50$</h3>
        <button onClick={() => upd(5)}>{cart.has(5) ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>
    <div className="item">
        <img src='src\assets\Ammonia.jpg'></img>
        <h2>Ammonium sulphate</h2>
        <h3>30$</h3>
        <button onClick={() => upd(6)}>{cart.has(6) ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>
    <div className="item">
        <img src='src\assets\Potassi.jpg'></img>
        <h2>Potassium sulphate</h2>
       <h3>45$</h3>
        <button onClick={() => upd(7)}>{cart.has(7) ? "REMOVE FROM CART" : "ADD TO CART"}</button>
    </div>
    


    
    </div>
        </>
    )
   
    
}
 export default Shop