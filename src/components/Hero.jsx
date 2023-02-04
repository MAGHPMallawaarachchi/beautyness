import styles from '../style';
import { exclamation, bg1, main } from '../assets';

const Hero = () => (

  <section className={`w-full flex md:flex-row flex-col justify-end items-center md:gap-36 gap-0`}>

      <div className='flex flex-col px-16 py-16'>
        <div className='flex sm:gap-3 gap-2 items-center'>
          <img src={exclamation} alt="exclamation" className='ss:w-[20px] ss:h-[20px] w-[13px] h-[13px]' />
          <p className='uppercase font-manrope font-semibold text-dullBlue2 tracking-[0.1em] ss:text-[15px] text-[10px]'>Welcome to Beautyness!!!</p>
        </div>
        <div className='flex flex-col gap-[24px]'>
          <h1 className={styles.heading1}>
            Beauty is power <br /> a smile is its <br /> sword.
          </h1>
          <p className={`${styles.paragraph} ss:max-w-[508px] max-w-[300px]`}>
            Welcome to Beautyness, where beauty and wellness meet to enhance your natural radiance.
          </p>
          <a href="" className={`bg-dullBlue1 ${styles.buttonText} flex flex-col justify-center items-center ss:w-[250px] ss:h-[65px] w-[150px] h-[40px]`}>
            make a reservation
          </a>
        </div>
      </div>

      <div className='w-full md:w-[45%] md:h-[900px] md:pt-0 pt-20'>
        <img src={bg1} alt="bg" className='object-cover md:h-[900px] w-full' />
      </div>

      <div className={`absolute md:left-[50%]`}>
        <img src={main} alt="" className='relative object-contain max-h-[445px] max:w-[450px] sm:shadow-[0px_-6px_25px_rgba(0,0,0,0.3)] ss:px-0 px-10' />
      </div>

      <div className='object-contain md:flex hidden absolute left-[50%] border-y-[10px] border-r-[10px] border-lightBlue h-[563px] w-[512px] mr-10'></div>

      {/* xs:h-[300px] xs:w-[300px] h-[250px] w-[250px] */}


  </section>
)

export default Hero