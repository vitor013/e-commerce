import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/home.css'

function Home() {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">
      <h1 style={{ marginBottom: '20px' }}>Produtos</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
            <div className="actions">
              <button onClick={() => addToCart(product)}>Adicionar</button>
              <Link to={`/product/${product.id}`}>Ver detalhes</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
