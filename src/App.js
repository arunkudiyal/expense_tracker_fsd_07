import './App.css';
import Header from './components/Header';
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header title="Expense Tracker" />
        <div className="container">
          <Balance />
          {/* <IncomeExpense /> */}
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
