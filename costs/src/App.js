import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import ProjectCard from './components/project/ProjectCard'
import Navbar from './components/layout/Navbar'


// import Container from './components/layout/Container'
import styles from './components/layout/Container.module.css'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router  >
      <Navbar/>
     
     <div className={styles.customClass}>
      <Routes >
            
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/ProjectCard' exact element={<ProjectCard/>}></Route>
        <Route path='/company' exact element={<Company/>}></Route>
        <Route path='/contact' exact element={<Contact/>}></Route>
        <Route path='/newproject' exact element={<NewProject/>}></Route>
              
      </Routes>
      </div>
      <Footer/>
     
      
    </Router>
    
  );
}

export default App;
