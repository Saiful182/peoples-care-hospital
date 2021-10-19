
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PageNotFound from './component/404Page/PageNotFound';
import AboutUs from './component/AboutUs/AboutUs';

import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import OthersFecilities from './component/OthersFecilities/OthersFesilities';
import Consultant from './component/Consultant/Consultant';
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
          <Route exact path="/othersfecilities">
            <OthersFecilities></OthersFecilities>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/consultant">
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
