import css from './App.module.css'
import { useState } from 'react';
import Product from '../Product/Product'
import Modal from "../Modal/Modal"

// const myKey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <h1 className={css.title}>Products</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && <Modal onClose={closeModal}><h2>Custom Modal Content</h2>
          <p>This is a reusable modal with dynamic content.</p></Modal>}
    </>
  )
}

