import { createContext, useEffect, useState } from "react"

export const PizzaContext = createContext();

// eslint-disable-next-line react/prop-types
export const PizzaProvider = ({children}) => {

  const [pizzasData, setPizzasData] = useState([])
  const [addCart, setAddCart] = useState([])
  const [agregadas, setAgregadas] = useState([])
  const [total, setTotal] = useState(null)

  useEffect(() => {
    const getPizzas = async () => {
      try{
        const res = await fetch ('https://mocki.io/v1/e2f93739-6ae9-4f90-9d0e-c37707ee851d')
        const data = await res.json()
        setPizzasData(data)
      } catch (error) {
        console.error(error);
      } 
    }
    getPizzas()

    let sumaTotal = 0

    function calculoTotal(addCart){
      for(let i = 0; i < addCart.length; i++){
        sumaTotal+=addCart[i].price;
      }
    }
    calculoTotal(addCart);
    setTotal(sumaTotal);
  },[addCart])

  const addToCart = (pizza) => {
    setAddCart([...addCart, pizza]);
  };

  return (
    <PizzaContext.Provider value={{pizzasData, setPizzasData, addCart, setAddCart, agregadas, setAgregadas, total, addToCart}}>
      {children}
    </PizzaContext.Provider>
  )
}
