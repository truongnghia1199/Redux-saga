import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addUser" component={AddEditUser} />
          <Route path="/editUser/:id" component={AddEditUser} />
          <Route path="/userInfo/:id" component={UserInfo} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App
