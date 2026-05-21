import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './cart.css'

function Cart(){



    const [items , Setitems] = useState([])

    function remov(id){
        let carta = [...items];
        carta = carta.filter(item => item.id != id)
        Setitems(carta)
        localStorage.setItem("cart",JSON.stringify([...carta]))
    }

    useEffect(() => { 
        const temp_cart = JSON.parse(localStorage.getItem("cart")) || [];

        const load = temp_cart.map(id =>{
            const produca = database.find(p => p.id === id)
            return {...produca,quantity:1}
        })
        
        Setitems(load)

    }, [])

    


    function incre(id){
        const inc = (items.map(
            item => item.id === id ? {...item , quantity: item.quantity + 1 } : item
        ))
        Setitems(inc)
        localStorage.setItem("cart",JSON.stringify(inc))
    }

    function decre(id){
        let dec = (items.map(
            item => item.id === id  ? {...item , quantity: item.quantity - 1 }: item
        ))
        


        dec = dec.filter(item => (item.quantity > 0))
        Setitems(dec)
        localStorage.setItem("cart",JSON.stringify(dec))
    }

    function clio(){
        alert("Still in Development")
    }


    const database  = [
        {id:1,name:"Urea",price:"70",quantity:1},
        {id:2,name:"Potash Fertilizer",price:"100",quantity:1},
        {id:3,name:"Diammonium phosphate",price:"120",quantity:1},
        {id:4,name:"Muriate of Potash",price:"150",quantity:1},
        {id:5,name:"Calcium ammonium nitrate",price:"50",quantity:1},
        {id:6,name:"Ammonium Sulphate",price:"30",quantity:1},
        {id:7,name:"Potassium Sulphate",price:"45",quantity:1}

    ]

    
    const navi =  useNavigate();

    
    return(
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
    </div>
    <div id='lef'>
    <div>
        <h1 id='ct'>CART</h1>
        <div id='cart_box'>
            {items.length === 0 ? (
             <h1 id='no'>There is nothing here add some stuff lil bro </h1>):
                (
            items.map(item_1 => (
                <div key={item_1.id}>
                    <ul id='produ'>
                        <h2 id='name'>{item_1.name}</h2>
                        <h2>{Number(item_1.price) * Number(item_1.quantity)}$</h2>
                        <button onClick={() => remov(item_1.id)} id='rem'>Remove</button><br></br>
                        
                        <button onClick={() => decre(item_1.id)} id="Buttt">-</button>
                        <a>{item_1.quantity}</a>
                        <button onClick={() => incre(item_1.id)} id="Buttt">+</button>
                    </ul>
                        
                </div>
            )))
        
        }       
        

        </div>
        <span id='tot'>TOTAL : {items.reduce(
        (sum , item) => sum + Number(item.price) * Number(item.quantity) ,  0
    )} $ </span>
    <button id='buyo' onClick={() => clio()}>Buy</button>
    </div>
     </div>

    <div>
        <h1 id="don">Donate for a greater cause</h1>
        <pre id='emp'>Donate for millions of farmers who are below 
            the poverty line struggling to support their family.                
            You can help this cause by donating any amount of money you can.
            Even a single rupee goes a long way.
            Donate using the button below.
        </pre>
        <a href="https://donate.uvsociety.org/" target="_blank"><button id="butto"  >Donate</button></a>
    </div>
    

        </>
    )
}

export default Cart