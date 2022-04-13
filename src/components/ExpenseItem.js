import './ExpenseItem.css'

function ExpenseItem (props) {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date().toLocaleDateString('pt-BR'),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date().toLocaleDateString('pt-BR') },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date().toLocaleDateString('pt-BR'),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date().toLocaleDateString('pt-BR'),
        },
      ];
    
    return (
        <div className='expense-item'>
            <div>
                <h1>{expenses[0].date}</h1>
            </div>
            <div className='expense-item__description'>
                <h2>{expenses[0].title}</h2>
                <div className='expense-item__price'>{expenses[0].amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;