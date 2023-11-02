import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Profile/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
