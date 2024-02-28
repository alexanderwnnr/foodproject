import Input from '../../UI/Input'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true)
    const amountInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault()

        const inputAmount = amountInputRef.current.value
        if(inputAmount.trim().length === 0 || +inputAmount < 1){
            setIsAmountValid(false)
            return
        }

        props.onAddToCart(+inputAmount)
    }

    return <form className="flex items-center justify-between mt-4" onSubmit={submitHandler}>
        <Input label='Кол-во'
            ref={amountInputRef}
            input={{
            id: props.id,
            type: 'number',
            min: '1',
            step: '1',
            defaultValue: '1'
        }}/>
        <button className="text-white bg-purple-700 hover:bg-purple-800 active:ring-4 active:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Добавить</button>
        {!isAmountValid && <p>Пожалуйста, введите количество</p>}
    </form>
}

export default MealItemForm