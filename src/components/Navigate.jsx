import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/pizzaicon.svg'

export const Navigate = () => {
  return (
    <Navbar bg="secondary" data-bs-theme="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Pizzería Mamma Mía
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
