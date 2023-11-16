import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Background from './components/Background';
import Hobbies from './components/Hobbies';
import Languages from './components/Languages';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Languages/>
      <Profile />
      <Background />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
