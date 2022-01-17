import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


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
      </div>
    </>
  );
}

export default App;
