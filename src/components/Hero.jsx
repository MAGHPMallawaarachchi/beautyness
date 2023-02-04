import styles from '../style';
import { exclamation, bg1, main } from '../assets';

const Hero = () => (

  <section className={`md:pt-0 sm:pt-[100px] xxs:pt-[50px] w-full flex md:flex-row flex-col justify-end items-center sm:gap-40 xl:gap-60 gap-20`}>

      <div className='flex flex-col sm:px-0 px-[50px]'>
        <div className='flex sm:gap-3 gap-2 items-center'>
          <img src={exclamation} alt="exclamation" className='sm:w-[20px] sm:h-[20px] w-[13px] h-[13px]' />
          <p className='uppercase font-manrope font-semibold text-dullBlue2 tracking-[0.1em] sm:text-[15px] text-[10px]'>Welcome to Beautyness!!!</p>
        </div>
        <div className='flex flex-col gap-[24px]'>
          <h1 className={styles.heading1}>
            Beauty is power <br /> a smile is its <br /> sword.
          </h1>
          <p className={`${styles.paragraph} max-w-[508px]`}>
            Welcome to Beautyness, where beauty and wellness meet to enhance your natural radiance.
          </p>
          <a href="" className={`bg-dullBlue1 ${styles.buttonText} flex flex-col justify-center items-center sm:w-[250px] sm:h-[65px] w-[150px] h-[40px]`}>
            make a reservation
          </a>
        </div>
      </div>

      <div className='w-full md:w-[45%] xs:h-[240px] sm:h-[480px] md:h-[900px] xxs:h-[180px]'>
        <img src={bg1} alt="bg" className='object-cover md:h-[900px] w-full' />
      </div>

      <div className={`absolute md:left-[50%] md:top-[275px] xxs:top-[530px] xs:top-[460px] sm:top-[700px] top-[580px]`}>
        <img src={main} alt="" className='sm:h-[545px] sm:w-[550px] xs:h-[300px] xs:w-[300px] h-[250px] w-[250px] shadow-[0px_-6px_25px_rgba(0,0,0,0.3)]' />
      </div>

      <div className='md:block hidden absolute left-[50%] border-y-[10px] border-r-[10px] border-lightBlue h-[663px] w-[612px]'></div>


  </section>
)

export default Hero