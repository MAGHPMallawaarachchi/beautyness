import styles from '../style';
import {aboutUs} from '../constants';
import { facial1, bg2 } from '../assets';

const AboutUsCard = ({id, image, title}) =>(
  <div className='flex flex-col items-center justify-center max-w-[165px] max-h-[180px] p-2 border-[1px] border-darkGreen bg-white gap-[14px]'>
    <img src={image} alt={title} className='object-contain max-h-[60px] xs:max-h-[78px]' />
    <p className='font-manrope font-bold sm:text-[22px] xs:text-[15px] text-[12px] text-center leading-[120%] max-w-[140px]'>{title}</p>
  </div>
)

const AboutUs = () => (
  <section id='AboutUs' className={`flex md:flex-row flex-col bg-lightBlue ${styles.paddingX} ${styles.paddingY} md:gap-[119px] sm:gap-[50px] gap-[20px] justify-center items-center`}>
    
    <div className='flex flex-col gap-[16px] md:pb-0 pb-8'>
      <p className='font-manrope uppercase sm:text-[15px] text-[12px] font-semibold text-dullBlue2 leading-[154.5%] tracking-[0.1em]'>about us</p>
      <h1 className={`${styles.heading2}`}>The Beauty is about <br /> being Comfortable <br /> in your own skin!</h1>
      <p className={`${styles.paragraph} xs:max-w-[529px] max-w-[309px]`}>Our beauty salon is dedicated to providing luxurious, personalized experiences for each of our clients. Our highly trained professionals use only the best products to bring out your natural beauty. Come in for a pampering session today and leave feeling refreshed and beautiful.</p>

      <div className='flex gap-[10px]'>
        {aboutUs.map((aboutUs, index)=>(
          <AboutUsCard key={aboutUs.id}{...aboutUs}/>
        ))}
      </div>
    </div>

    <div className='relative mx-8 mb-4'>
      <img src={bg2} alt="" height="576px" width="500px" className='absolute object-contain left-4 bottom-4 z-10' />
      <img src={facial1} alt="" height="576px" width="500px" className='relative right-4 top-4 object-contain z-20 shadow-2xl ' />    
    </div>

  </section>
)

export default AboutUs