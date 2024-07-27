import logo from './logo.svg';
import './App.css';
import { Desserts } from './components/Desserts';
import { Cart } from './components/Cart'; 
function App() {
  return (
    <div className="body">
      <div className='main-container'>
        <div>
          <h1 className='title'>Desserts</h1>
        <div className='dessertList'>
            <Desserts />
        </div>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
