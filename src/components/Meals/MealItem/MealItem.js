import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
    
    const cartContext = useContext(CartContext)
    const formattedPrice = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return <div className="group relative">     
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
            <img className="h-full w-full object-cover object-center  lg:w-full" src="https://st3.depositphotos.com/1000504/18378/i/450/depositphotos_183780180-stock-photo-bowl-of-beet-root-soup.jpg" alt="Картинка"/>
            </div>
            <div className="flex justify-between ">
                <div>
                  <h3 className="text-sm text-gray-bold">
                    <a href={`#`}>
                      <span aria-hidden="true" className="absolute" />
                      {props.name}
                    </a>
                  </h3>
                  <p className="mt-1 h-16 overflow-hidden text-sm text-gray-500">{props.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{formattedPrice}</p>
            </div>  
            
            <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>

    </div>
    
}

export default MealItem


