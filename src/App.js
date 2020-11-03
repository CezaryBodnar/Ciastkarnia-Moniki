import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollToTop from "react-scroll-to-top";
import Home from './components/Home'
import Orders from './components/Orders'
import Pricelist from './components/Pricelist'
import './components/mediaquery.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/orders" component={Orders} />
          <Route path="/pricelist" component={Pricelist} />

        </Switch>
      </div>
      <footer>
        <div className="footer-content">
          <div className="socials">
            <span className="social-links"><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></span>
            <span className="social-links"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></span>
            <span className="social-links"><a href="https://youtube.com"><i className="fab fa-youtube"></i></a></span>
          </div>
          <span className="copyright">Copyright 2020 Simi Development. Wszelkie prawa zastrzeżone. | Polityka Prywatności</span>

        </div>
        <ScrollToTop smooth style={scrollButton} component={<i className="fas fa-chevron-up"></i>}>
          <button className="scrollButton"></button>
        </ScrollToTop>
      </footer>
    </Router>
  );
}

export default App;

const scrollButton = {
  width: "44px",
  height: "44px",
  border: "3px solid #707070",
  backgroundColor: "#343434",
  color: "white",
  borderRadius: "8px",
  outline: "none",
  fontSize: "18px",
  boxShadow: "none"
}