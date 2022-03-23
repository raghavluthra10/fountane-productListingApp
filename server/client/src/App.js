import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ErrorPage from './pages/errorPage/ErrorPage';
import Logout from './pages/logout/Logout';
import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext();

const Routing = () => {
  return (
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        
        <Route path='/listing'>
          <Listing />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/logout'>
          <Logout />
        </Route>


        <Route>
          <ErrorPage />
        </Route>

      </Switch>
  )
}

const App = () => {

  const [ state, dispatch ] = useReducer( reducer, initialState )

  

  return (
    <Router>
      <UserContext.Provider value={{ state, dispatch }} >
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
