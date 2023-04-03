
import './App.css'
//import {Route,Routes,BrowserRouter} from "react-router-dom";
import{Route,Routes,BrowserRouter} from"react-router-dom";
import { Navbar } from './components/public/Navbar';
import Main from './components/public/Main';
import Detail from './components/public/Detail';
import UserForm from './components/public/UserForm';
import { Footer } from './components/public/Footer';
//import App from './App';
function App() {
  return (
    <div>
    <BrowserRouter>
   <Navbar/>
   
   <Routes>
    <Route exact path={"/"} element={<Main/>}/>
    <Route path={"/details/:id"} element={<Detail/>}/> 
    <Route path={"/user-form"} element={<UserForm/>}/> 
    </Routes>   
   
   <Footer/> 
   </BrowserRouter>

    </div>
  );
}

export default App;
