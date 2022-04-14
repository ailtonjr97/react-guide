import { useState } from 'react'

import './ExpenseItem.css'
import './Expenses'

function ExpenseItem (props) {
    const [title, setTitle] = useState(props.title);

    function clickHandler(){
        setTitle('Update');
    }
    
    return (
        <div className='expense-item'>
            <div>
                <h1>{props.date}</h1>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;