import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/pizzaicon.svg'
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaProvider';
import { NavLink } from 'react-router-dom';

export const Navigate = () => {

  const {addCart} = useContext(PizzaContext);

  const allPizzas = addCart.reduce((total, pizza) => {
    const pizzaPrice = typeof pizza.price === 'number' ? pizza.price : 0;
    const pizzaQuantity = typeof pizza.quantity === 'number' ? pizza.quantity : 0;
    return total + (pizzaPrice * pizzaQuantity);
  }, 0);

  return (
    <Navbar bg="secondary" data-bs-theme="dark" className='fixed-top'>
        <Container>
          <NavLink to="/" style={{textDecoration: 'none'}}>
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Pizzería Mamma Mía
          </NavLink>
          <NavLink to="/carrito">
            <p>🛒${allPizzas.toFixed(2)}</p>
          </NavLink>
        </Container>
      </Navbar>
  )
}
