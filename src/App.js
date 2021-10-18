
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PageNotFound from './component/404Page/PageNotFound';
import AboutUs from './component/AboutUs/AboutUs';
import Departments from './component/Departments/Departments';
import Footer from './component/Footer/Footer';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Services from './component/Services/Services';
import Consultant from './component/Consultant/Consultant';

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
            <Departments></Departments>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route><Route exact path="/consultant">
            <Consultant></Consultant>
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
