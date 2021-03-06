
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PageNotFound from './component/404Page/PageNotFound';
import AboutUs from './component/AboutUs/AboutUs';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import OthersFecilities from './component/OthersFecilities/OthersFesilities';
import Consultants from './component/Consultants/Consultants';
import Services from './component/Services/Services';
import Selected from './component/Selected/Selected/Selected';
import Registration from './component/Registration/Registration';
import Success from './component/Success/Success';
import AuthProvider from './component/context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div>
      <AuthProvider>
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
            <Route exact path="/consultants">
              <Consultants></Consultants>
            </Route><Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>

            <PrivateRoute exact path="/success">
              <Success></Success>
            </PrivateRoute>
            <Route exact path="/selected/:serviceId">
              <Selected></Selected>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
