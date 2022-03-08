import './index.css';
import React, { useState } from 'react';

import Form from './components/Form';
import Item from './components/item';
import Header from './components/header';

export default function App() {
  const [items, setItems] = useState([
    { text: 'Pixie and Bella' },
    { text: 'Being Healthy' },
    { text: 'Having my mind healthy' },
    { text: 'Having a Son' },
  
  ]);

  const addItem = (text) => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  return (
    <>
      <div className='App'>
        <Header />
        {items.map((item, index) => (
          <Item key={index} index={index} item={item} />
        ))}
        <Form addItem={addItem} />
      </div>
    </>
  );
}
