import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideBar from'./sideBar'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <div className='post-section'>
      <Post></Post>
        </div>
        <div className='sidebar-section'>
          <SideBar></SideBar>
        </div>

      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
