import { useCart } from '../context/CartContext'
import '../styles/cart.css'

function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart-page">
      <h1>Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>R$ {item.price.toFixed(2)}</p>
                <div className="cart-item-actions">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
