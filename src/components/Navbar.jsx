import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/navbar.css'

function Navbar({ isLoggedIn, onLogout }) {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (!isLoggedIn) return null

  return (
    <nav className="navbar">
      <Link to="/">Loja</Link>
      <Link to="/cart">Carrinho ({totalItems})</Link>
      <button onClick={onLogout}>Sair</button>
    </nav>
  )
}

export default Navbar
