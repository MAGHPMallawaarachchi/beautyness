import styles from '../style';
import { exclamation, bg1, main } from '../assets';

const Hero = () => (

  <section className={`flex md:flex-row flex-col ${styles.paddingX} ${styles.paddingY} justify-start items-center md:gap-[90px] gap-[50px] pb-10`}>

      <div className='flex flex-col gap-[16px]'>
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

      <img src={main} alt="" height="545px" width="550px" className='shadow-2xl' />

      <div className='object-contain lg:flex hidden absolute left-[50%] border-y-[10px] border-r-[10px] border-lightBlue h-[650px] w-[650px] mr-10'>

      </div>


      {/* <div className='w-full md:w-[45%] md:h-[900px] md:pt-0 pt-20'>
        <img src={bg1} alt="bg" className='object-cover md:h-[900px] w-full' />
      </div>

      <div className={`absolute md:left-[50%]`}>
        <img src={main} alt="" className='relative object-contain max-h-[545px] max:w-[550px] shadow-2xl ss:px-0 px-10' />
      </div>

      <div className='object-contain md:flex hidden absolute left-[50%] border-y-[10px] border-r-[10px] border-lightBlue h-[563px] w-[512px] mr-10'></div> */}

      {/* xs:h-[300px] xs:w-[300px] h-[250px] w-[250px] */}


  </section>
)

export default Hero