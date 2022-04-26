import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Route, Switch, withRouter } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import Notfound from './component/pages/Notfound';
import AddUser from './component/pages/user/AddUser';
import UpdateUser from './component/pages/user/UpdateUser';
import UserDetails from './component/pages/user/UserDetails';
import Login from './component/pages/Login';

const  App = withRouter(({location}) => {
  return (
    <div className="App">
      {
        location.pathname !== '/' && location.pathname !== '/signup' && <Navbar />
      }
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component = {Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/user/save' component={AddUser} />
          <Route exact path='/user/edit/:id' component={UpdateUser} />
          <Route exact path='/user/:id' component={UserDetails} />
          <Route component={Notfound} />
        </Switch>
    </div>
  );
})

export default App;
