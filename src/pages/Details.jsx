import { useContext } from "react"
import { PizzaContext } from "../context/PizzaProvider"


export const Details = () => {

  const {pizzas} = useContext(PizzaContext)

  return (
    <>
      {
        pizzas.map((pizza,id)=>(
          <div className="detailsCard" key={id} value={pizza}>
            <div className="detailsImg">{pizza.img}</div>
            <div className="detailsTxt">
              <div className="txtInfo">
                <h2>{pizza.name}</h2>
                <hr/>
                <p>{pizza.desc}</p>
                <p><strong>Ingredientes:</strong></p>
                <ul>
                {pizza.ingredients.map((ingrediente, i) => (
                  <li key={i}>🍕 {ingrediente}</li>
                ))}
                </ul>
                
              </div>
              <div className="txtBottom"></div>
            </div>
          </div>
        ))
      }
    </>
  )
}
