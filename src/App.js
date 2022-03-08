import {BrowserRouter,Route,Routes} from 'react-router-dom';

import HeaderIndex from './components/Header/HeaderIndex';
import AboutIndex from './components/About/AboutIndex';
import ContactIndex from './components/Contact/ContactIndex';
import BlogListIndex from './components/BlogsList/BlogListIndex';
import NotFoundIndex from './components/NotFound/NotFoundIndex';

import './App.css';

const App = ()=>{
  return(
    <BrowserRouter>
    <HeaderIndex/>
      <Routes>
        <Route exact path = '/' element = {<BlogListIndex/>}/>
        <Route exact path = '/about' element = {<AboutIndex/>}/>
        <Route exact path = '/contact' element = {<ContactIndex/>}/>
        <Route exact path = '*' element = {<NotFoundIndex/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
