
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Routes,Route} from "react-router-dom"
import About from './components/About/About';
import Courses from './components/courses/Courses';
import PageNotFound from './components/NotFound';
import Contact from './Contact/Contact';
import FooterSection from './components/Footer/Foter';

function App() {
  return (
    <>
       <Header/>
       <Routes>
           <Route index exact path='/' element={<Home/>}/>
           <Route exact path='/about' element={<About/>}/>
           <Route exact path='/courses' element={<Courses/>}/>
           <Route exact path='/contact' element={<Contact/>}/>
           <Route exact path='*' element={<PageNotFound/>}/>
       </Routes>
       <FooterSection/>
    </>
  );
}

export default App;
