import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Itemlist from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>

      <div className='wrapper'>
        <ItemListContainer />
        <br/>
        <ItemDetailContainer />        
      </div>
    </>
  );
}

export default App;
