import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-links">
          <a className="navbar-link" href="#">
            Home
          </a>
          <a className="navbar-link" href="#">
            About
          </a>
          <a className="navbar-link" href="#">
            About
          </a>
          <a className="navbar-link" href="#">
            Services
          </a>
          <a className="navbar-link" href="#">
            Contact
          </a>
          <a className="navbar-link" href="#">
            Blog
          </a>
          <a className="navbar-link" href="#">
            Login
          </a>
          <a className="navbar-link" href="#">
            Registration
          </a>
          <button className="btn">Logout</button>
        </div>
        <h2>Simanto</h2>
        <h3>Mern stack developer</h3>
        <h4>From developer simanto</h4>
      </nav>
      <div>
        <form>
          <label>Name: </label>
          <input type="text" />
        </form>
      </div>
    </>
  );
}

export default App;
