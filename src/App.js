import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import AddEditUser from './pages/AddEditUser';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

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
