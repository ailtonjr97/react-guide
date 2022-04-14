import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
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
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
