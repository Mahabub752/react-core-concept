import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const singers = ['sonu nigham', 'atif aslam', 'tony kaakar', 'arman malik', 'nusrat fateh ali', 'aamaal malik', 'tulsi kumar']
  const products = [
    {name :'photoshop',  price : '$99.99'},
    {name : 'Illstator', price : '$199.99'},
    {name : 'PDF Reader', price : '$59.99'},
    {name : 'Abobe Indesign', price : '$399.55'
  }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>i am a react person</p>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            singers.map(singers => <li>{singers}</li>)
          }
          <br />
          {
            products.map(products => <li>{products.name}, <br /> {products.price}</li>)
          }
        </ul>
        {
          products.map(products => <Product product={products}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        
        <Person name={singers[0]} job="Pakistani Playback Singer" song="Tere Sang yarra"></Person>
        <Person name="Arjt Singh" job="Indian Playback Singer" song="Kalank nahin ishq hai"></Person>
        <Person name="A. R. Rahman" job="Indian Music Composer" song="Nadan Parinde"></Person>
        <Person name="pritam" job="Indian Music Composer" song="Yeh Dooriyan"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrese = () => setCount(count + 1,);
  return(
    <div>
      <h1>Count : {count} </h1>.
      <button onMouseOver={() => setCount (count - 1)}>Decrese</button>
      <button onMouseOver={handleIncrese}>Increse</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      <ul>
        {
          users.map(user=> <li>{user.name}, <br /> phone : {user.phone}, <br /> email : {user.email}, <br /> Website: {user.website}</li> )
        }
      </ul>
    </div>
  )
}



function Product(prps){
  const productStle = {
    border : '1px solid lightgreen',
    borderRadius : '5px',
    backgroundColor : 'blue',
    height : '200px',
    width : '200px',
    float : 'center',
    padding : '50px'
  }
  const {name, price} = prps.product;
  console.log(name, price);
  return(
    <div style={productStle}>
        <h3>{name} </h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
    </div>
  )
}

function Person(prps){
  const personStyle = {border: '2px solid red', 
  margin: '20px',
  padding: '15px 50px',
  width: '600px',
  height: '250px' }
  return (
  <div style={personStyle}> 
        <h1>Singer: {prps.name} </h1>
        <h3>{prps.job}</h3>
        <p>{prps.song}</p>
  </div>
  )
};

export default App;
