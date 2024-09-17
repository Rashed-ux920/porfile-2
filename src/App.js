/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

export  function Logo(){
  <a href="#home" className="logo">
    rashed <span>alaqrabawy</span>
  </a>
}
export function Navbar(){
  return(
    <nav class="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}
export function Header(){
  <header className="header">
      <Logo /> 
      <i class="bx bx-menu" id="menu-icon"></i>
      <Navbar/>
  </header>
}
export function Homesec(){
  return (
      <section className="home" id="home">
          <div className="homecontent">
          <h1>
            Hi, it's <span>Rashed</span>
          </h1>
          <h3>
            I'm a <span>full-stack developer</span>
          </h3>
          <p>
            I'm junior web developer with alot of energy to learn more about web and
            how it works. <br />
            right know I'm studying computer informations system in the university of
            jordan. <br />
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/rashed-alaqrabawy-28899b257/">
              <i className="bx bxl-linkedin-square" />
            </a>
            <a href="https://github.com/Rashed-ux920">
              <i className="bx bxl-github" />
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt" />
            </a>
            <a href="#">
              <i className="bx bxl-discord" />
            </a>
          </div>
          <div className="btn-group">
            <a href="#" className="btn">
              HIRE
            </a>
            <a href="#contact" className="btn">
              CONTACT
            </a>
          </div>
        </div>
        <div className="homeimg">
          <img src="img/WhatsApp Image 2024-06-01 at 8.35.45 PM.jpeg" alt="photo" />
        </div>
      </section>

  )
}
export function Aboutsec(){
  return (
    <sectoin className="about" id="about">
  <div className="about-img">
    <img src="img/WhatsApp Image 2024-06-01 at 8.35.45 PM.jpeg" alt="" />
  </div>
  <div className="about-content">
    <h2>
      About <span>me</span>
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam
      voluptas ex numquam nesciunt error, dolorum ipsam iure laboriosam facilis
      excepturi necessitatibus vero voluptatibus sunt sit expedita accusamus
      pariatur reprehenderit!
    </p>
    <a href="#" className="btn">
      Read more
    </a>
  </div>
</sectoin>

  )
}
export function Servicessec(){
  return (
    <section className="services" id="services">
    <h2 className="heading">services</h2>
    <div className="services-container">
      <div className="service-box">
        <div className="service-info">
          <i className="bx bxs-devices" />
          <h4>ui/ux</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            dignissimos facilis magni, laborum, sapiente, quidem expedita numquam
            labore voluptas dolores ad a aliquam. Libero aperiam ad assumenda
            doloribus placeat mollitia!
          </p>
        </div>
      </div>
      <div className="service-box">
        <div className="service-info">
          <i className="bx bxs-devices" />
          <h4>frontend developer</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            dignissimos facilis magni, laborum, sapiente, quidem expedita numquam
            labore voluptas dolores ad a aliquam. Libero aperiam ad assumenda
            doloribus placeat mollitia!
          </p>
        </div>
      </div>
      <div className="service-box">
        <div className="service-info">
          <i className="bx bxs-devices" />
          <h4>backend developer</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            dignissimos facilis magni, laborum, sapiente, quidem expedita numquam
            labore voluptas dolores ad a aliquam. Libero aperiam ad assumenda
            doloribus placeat mollitia!
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
function Contactsec(){
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        contact <span>me</span>
      </h2>
      <form action="">
        <div className="input-group">
          <div className="input-box">
            <label htmlFor="text">Full Name</label>
            <br />
            <input type="text" name="text" id="text" />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-box">
            <label htmlFor="phone">phonenumber</label>
            <input type="number" name="phone" id="phone" />
          </div>
        </div>
        <div className="input-group2">
          <textarea
            name="massage"
            id="massage"
            cols={30}
            rows={10}
            value="send massage"
            className="btn"
            defaultValue={""}
          />
          {/* <a href="#contact" class="btn">send massage</a>
          */}
          <input type="submit" defaultValue="send massage" className="btn" />
        </div>
      </form>
    </section>

  )
}
function App() {
  return (
    

    <>
      <Header />
      <Homesec />
      <Aboutsec />
      <Servicessec />
      <Contactsec />

 
    </>
  );
}

export default App;
