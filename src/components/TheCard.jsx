import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaProvider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'

export const TheCard = () => {

  const navigate = useNavigate();

  const {pizzasData, addCart, setAddCart, agregadas, setAgregadas} = useContext(PizzaContext)

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


  function setNavigate(e){
    e.preventDefault();
    navigate(`/pizza/${pizzasData.id}`)
  }
  function agregarAlCarrito(e){
    e.preventDefault();
    const pizzaEscogida = pizzasData.find((element)=>{
      return element.id === pizzasData.id;
    })
    setAddCart([...addCart, pizzaEscogida])
    if(!agregadas.some(item => item.id === pizzaEscogida.id)){
      setAgregadas([...agregadas, pizzaEscogida])
    }
    
  }

  return (
    <div className='cardContainer'>
      <Slider {...settings}>
      {pizzasData.map((pizza,id) =>(
        <div key={id} value={pizza} className='pizzaCard'>
          <div className='cardTop'>
          <img src={pizza.img} alt={pizza.name}/>
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
            <Button onClick={setNavigate} variant="info" style={{width:'7vw', color: 'beige', fontSize: '85%'}}>Ver más👀</Button>
            <Button onClick={agregarAlCarrito} variant="danger" style={{width:'7vw', fontSize: '85%'}}>Añadir🛒</Button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  )
}
