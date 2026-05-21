import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'


function funo(){
  alert("Love you too my guy")
}

function App() {

  const navi =  useNavigate();
  
  
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
    </div>
    <div className='Body'>
      
      <h1>About us</h1>
      <p><br></br>
Farmer’s Friend is a simple web application designed to support farmers by providing easy access to essential agricultural products such as fertilizers and farming supplies.<br></br>
 The platform aims to make purchasing farm inputs straightforward and efficient by allowing users to browse products, add them to a cart, adjust quantities, and view the total cost before purchase.<br></br>
 <br></br>

The application focuses on simplicity and usability.<br></br>
 Farmers or users can quickly navigate between the shop and the cart, manage their selected products, and track their orders easily.<br></br>
 <br></br>

  The cart system ensures that users can modify quantities, remove items, and instantly see the updated total price.<br></br>
<br></br>
Farmer’s Friend was built as a modern web application using <strong>JavaScript</strong> and <strong>React</strong>, emphasizing responsive design and smooth user interaction.<br></br>
 Product data is handled efficiently and the cart state is stored locally so that users can retain their selections even after refreshing the page.<br></br>
<br></br>
The goal of Farmer’s Friend is to create a user-friendly digital tool that makes it easier for farmers to access the supplies they need while demonstrating how modern web technologies can simplify everyday agricultural tasks.<br></br>
<br></br>
This is just a passion project and my first react powered website. Still dont feel empathy for me and grade this website like you are a pro web inspector. If you have any suggestions dont forget to email me.
<br></br>
</p>
    </div>
    <div>
      <nav className='links'>
        <ul>
          <li><a>dharunkumarwork@gmail.com</a></li>
          <li><a href='https://github.com/blizza4d' target='_blank'>Github</a></li>

          <li><a href='https://www.instagram.com/ark_dharun?igsh=MTJucW5uM2x1bTI0dg==' target='_black'>Insta</a></li>
          

        </ul>
      </nav>
    </div>
    <a id = "hid" href='https://youtu.be/QDia3e12czc?si=14VB8c4Mnfh_aTtW' target='black'>ㅤㅤㅤㅤㅤㅤㅤㅤㅤ</a>
    <h1 id="cred" onClick={()=> funo()}>Made by Dharunkumar</h1>
    </>
  )}



export default App
