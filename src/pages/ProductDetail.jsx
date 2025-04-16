import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import '../styles/productDetail.css'


function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
  }, [id])

  if (!product) return <p>Carregando...</p>

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <strong>R$ {product.price}</strong>
        <br />
        <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  )
}

export default ProductDetail
