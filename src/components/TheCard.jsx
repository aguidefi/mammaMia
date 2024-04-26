import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaProvider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TheCard = () => {

  const {pizzas, addCart, setAddCart, agregadas, setAgregadas } = useContext(PizzaContext)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='cardContainer'>
      <Slider {...settings}>
      {pizzas.map((pizza,id) =>(
        <div key={id} value={pizza} className='pizzaCard'>
          <div className='cardTop'>
          <img src={pizza.img} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          </div>
          <hr/>
          <div className='cardBody'>
            <p><strong>Ingredientes:</strong></p>
            <ul>
              {pizza.ingredients.map((ingrediente, i) => (
                <li key={i}>🍕 {ingrediente}</li>
              ))}
            </ul>
            <hr />
            <span className='cardSpan'>${pizza.price}</span>
          </div>
          <div className='buttons'>
            <Button variant="info" style={{width:'7vw', color: 'beige', fontSize: '85%'}}>Ver más👀</Button>
            <Button variant="danger" style={{width:'7vw', fontSize: '85%'}}>Añadir🛒</Button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  )
}
