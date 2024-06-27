import logo from "./logo.svg";
import "./App.css";
import Article from "./Article";
// import Header from "./Header";
// import Post from "./Post";
// import SideBar from "./sideBar";
function App() {
  const firstArticle =` my name is ahmed awadallah ,
  i'm is a good boy `
  return (
    <div className="App">
      
      {/* First Challenge */}
      {/* <Header></Header>
      <div className="row">
        <div className="post-section">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          
        </div>
        <div className="sidebar-section">
          <SideBar></SideBar>
        </div>
      </div> */}


      {/* React Introduction */}

      <header className="App-header">
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
        <Article name="Hadeer" email="hadeer@gmail.com">
          <h1>Hello World</h1>
        </Article>
        <Article name="Ahmed" email="ahmed@gmail.com" content={firstArticle}></Article>
      </header>
    </div>
  );
}

export default App;
