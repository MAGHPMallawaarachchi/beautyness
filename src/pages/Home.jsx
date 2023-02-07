import styles from '../style';

import {Hero, AboutUs, Benefits, Blog, Discount, Features, Footer, Testimonials, Services} from '../components';

const Home = () => {
    return (
        <div className='bg-white w-full overflow-hidden'>
            <div className={`${styles.flexStart} md:bg-[url('./assets/Background.png')] bg-[url('./assets/Background2.jpg')]  bg-cover bg-center bg-no-repeat`}>
                <div className={`${styles.flexCenter} ${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`${styles.flexStart} bg-white`}>
                <div className={`${styles.boxWidth}`}>
                    <Features />
                    <AboutUs />
                    <Services />
                    <Testimonials />
                    <Benefits />
                    <Discount />
                    <Blog />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home