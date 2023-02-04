import styles from './style';

import {Navbar, Hero, AboutUs, Benefits, Blog, Discount, Features, Footer, Testimonials, Services} from './components';

const App = () => (
  <div className='bg-white w-full overflow-hidden'>
    <div className={`sm:px-16 px-6 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.flexStart} bg-lightBlue`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`${styles.flexStart} bg-white`}>
      <div className={`${styles.boxWidth}`}>
        <Features/>
        <AboutUs/>
        <Services/>
        <Testimonials/>
        <Benefits/>
        <Discount/>
        <Blog/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default App