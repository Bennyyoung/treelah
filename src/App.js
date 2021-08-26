import { Route, Switch } from 'react-router-dom';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ShopDetail from './Pages/ShopDetail'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Copyright from './Components/Copyright'
import StartInstagramFeed from './Components/StartInstagramFeed'


function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/shop-detail" component={ShopDetail} />

        <Route path="/gallery" component={Gallery} />
      </Switch>
      <br />
      <StartInstagramFeed />

      <Footer />
      <Copyright />
      <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>&uarr;</a>

    </>
  );
}

export default App;
