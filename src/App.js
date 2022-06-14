import React, { useState } from 'react';
import Phones from './Phones';
import Buttons from './Buttons';
import products from './data';

const categories = new Set(products.map(item=> item.category));
const buttons = ['All', ...categories];
// console.log(buttons)



function App() {
  const [phones, setPhones] = useState(products)

  const filterPhones = (category) =>{
    if(category === 'All'){
      setPhones(products);
    }
    else{
      const newPhones = products.filter(phone => phone.category === category);
      setPhones(newPhones)
    }
  }

  return (
    <>
    <header>
      <h1> Phones </h1>
    </header>
    <Buttons buttons={buttons} filterPhones={filterPhones}/>
    <Phones phone= {phones}/>
    </>
  );
}

export default App;
