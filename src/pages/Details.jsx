import { useContext } from "react"
import { PizzaContext } from "../context/PizzaProvider"
import { useParams } from "react-router-dom";


export const Details = () => {

  const {pizzasData, setAddCart, addCart, agregadas, setAgregadas} = useContext(PizzaContext)

  const {id} = useParams();
  const pizzaSeleccionada = pizzasData.find((pizza)=>{
    return pizza.id === id;
  })

  function agregarAlCarrito(){
    setAddCart([...addCart, pizzaSeleccionada]);
    if(!agregadas.some(item => item.id === pizzaSeleccionada.id)){
      setAgregadas([...agregadas, pizzaSeleccionada])
    }
  }

  return (
    <>
      {
        pizzasData.map((pizza,id)=>(
          <div className="detailsCard" key={id} value={pizza}>
            <div className="imgDetails">
              <img src={pizzaSeleccionada.img} alt={pizzaSeleccionada.name} />
            </div>
            <div className="detailsTxt">
              <div className="txtInfo">
                <h2>{pizzaSeleccionada.name}</h2>
                <hr/>
                <p>{pizzaSeleccionada.desc}</p>
                <p><strong>Ingredientes:</strong></p>
                <ul>
                {pizzaSeleccionada.ingredients.map((ingrediente, i) => (
                  <li key={i}>🍕 {ingrediente}</li>
                ))}
                </ul>
              </div>
              <div className="txtBottom">
                <h2>
                  Precio: {pizzaSeleccionada.price}
                </h2>
                <button onClick={agregarAlCarrito}>
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
};