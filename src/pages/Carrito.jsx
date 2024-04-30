import { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { ItemsCarrito } from "../components/ItemsCarrito";

export const Carrito = () => {

  const { addCart, setaddCart, total, agregadas, setAgregadas } = useContext(PizzaContext);
  
  function pagar(){
    alert(`Se acaba de realizar un pago por ${total} pesos.`)
    setAgregadas([])
    setaddCart([])
  }

  return (
    <div>
      <div className='container containerCarrito'>
        <h1>Detalles del pedido:</h1>
        <div className='elementosCarrito'>
          {agregadas.length > 0 ? (
            agregadas.map((pizza) =>{
              const cantidadPizzas = addCart.filter((cantidad) =>{
                return cantidad.id === pizza.id;
              })
              return <ItemsCarrito key={pizza.id} pizzaAgregada = {pizza} cantidadPizzas = {cantidadPizzas.length} />
            })
          ): (
            <div className='carroVacio'>
              <p>El carrito está vacío 🛒</p>
              <br />
              <p>😞</p>
            </div>
          )}
        </div>
        <div className='totalIrAPagar'>
          <h2>{total}</h2>
          <button onClick={pagar}>Ir A Pagar</button>
        </div>
      </div>
    </div>
  )
}
