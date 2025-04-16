import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/navbar.css'

function Navbar() {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="navbar">
      <Link to="/">Loja</Link>
      <Link to="/cart">Carrinho ({totalItems})</Link>
    </nav>
  )
}

export default Navbar
