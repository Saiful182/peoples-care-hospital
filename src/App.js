
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PageNotFound from './component/404Page/PageNotFound';
import AboutUs from './component/AboutUs/AboutUs';
import Department from './component/Departments/Department';
import Footer from './component/Footer/Footer';
import Gallary from './component/Gallery/Gallary';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Services from './component/Services/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/departments">
            <Department></Department>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route><Route exact path="/gallary">
            <Gallary></Gallary>
          </Route><Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
