import Footer from './components/Footer.js';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js';
export default function Home() {
  return (
    <>
      <Navbar />
      <section className='landing-main-section'>
        <h1>Your Ultimate Goto <br></br> UI Library</h1>
        <div><Input /></div>
        <button id='element-button'> <img src='./assets/rocket.png'></img> Browse All Elements</button>        
      </section>
      <Footer />      
    </>
  );
}
