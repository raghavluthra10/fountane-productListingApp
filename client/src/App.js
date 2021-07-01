import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ErrorPage from './pages/errorPage/ErrorPage';

function App() {
  return (
    <Router>

    <Navbar />

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

       <Route>
         <ErrorPage />
       </Route>

     </Switch>
    </Router>
  );
}

export default App;
