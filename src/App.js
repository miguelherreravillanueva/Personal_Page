import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Background from './components/Background/Background';
import Hobbies from './components/Hobbies/Hobbies';
import Languages from './components/Languages/Languages';


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
