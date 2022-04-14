import './ExpenseItem.css'
import './Expenses'

function ExpenseItem (props) {
    
    return (
        <div className='expense-item'>
            <div>
                <h1>{props.date}</h1>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;