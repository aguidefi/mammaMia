import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaProvider';

export const TheCard = () => {

  const {pizzas, addCart, setAddCart, agregadas, setAgregadas} = useContext(PizzaContext)

  return (
    <div className='cardContainer'>
      {
        pizzas.map((pizza,id) =>
        <Card key={id} value={pizza} style={{ width: '20vw'}}>
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <hr/>
            <Card.Text>
              <p><strong>Ingredientes:</strong></p>
              <ul>
                  {pizza.ingredients.map((ingrediente, i) => (
                    <li key={i}>🍕 {ingrediente}</li>
                  ))}
              </ul>
              <hr />
              <span className='cardSpan'>${pizza.price}</span>
            </Card.Text>
            <div className='buttons'>
            <Button variant="info" style={{width:'7vw', color: 'beige', fontSize: '85%'}}>Ver más👀</Button>
            <Button onClick={() => addCart(pizza)} variant="danger" style={{width:'7vw', fontSize: '85%'}}>Añadir🛒</Button>
            </div>
          </Card.Body>
        </Card>
      )
      }
    </div>
  )
}
