import styles from '../style';
import { contact, bg2, user, mail, phone, book, edit } from '../assets';
import { GetInTouch } from '../constants';

const ContactCard = ({id, icon, title, sub}) => (
  <div className='flex gap-8 items-center'>
    <img src={icon} alt={id} height="55px" width="55px" className=''  />
    <div className='flex flex-col'>
      <h3 className='font-playfair_display font-bold text-[12px] ss:text-[24px] text-dullBlack tracking-[-0.01em] w-full leading-[130%]'>
        {title} :
      </h3>
      <p className='font-manrope font-semibold text-dimWhite text-[12px] ss:text-[16px] leading-[170%] uppercase'>
        {sub}
      </p>
    </div>
  </div>
)

const Contact = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>

      <div className={`${styles.flexStart} bg-[url('./assets/Banner.png')] bg-cover bg-center bg-no-repeat`}>
        <div className={`${styles.flexCenter} ${styles.boxWidth} ${styles.paddingY}`}>
          <div className='flex flex-col justify-center items-center'>
            <p className={`uppercase ${styles.SmallHeading}`}>get in touch with us</p>
            <h1 className={`${styles.headingWhite}`}>We Are Ready To Assist <br /> You 24x7</h1>
          </div>
        </div>

      </div>

      <div className={`${styles.flexStart} bg-white`}>
        <div className={`${styles.boxWidth}`}>

          <div className={`flex md:flex-row flex-col ${styles.paddingX} ${styles.paddingY} md:gap-[120px] sm:gap-[50px] gap-[20px] justify-center items-center`}>

            <div className='relative mb-8 mx-8 mt-4 '>
              <img src={bg2} alt="" height="576px" width="500px" className='absolute object-contain left-4 bottom-3 z-10' />
              <img src={contact} alt="" height="576px" width="500px" className='relative right-4 top-4 object-contain z-20 shadow-2xl ' />
            </div>

            <div className='flex flex-col gap-[16px] md:pb-0 pb-8'>
              <p className={`${styles.SmallHeading2}`}>get in touch</p>
              <h1 className={`${styles.heading2}`}>We are here to help <br /> you always...</h1>
              <p className={`${styles.paragraph} xs:max-w-[529px] max-w-[309px]`}>Contact us for appointment scheduling, questions and feedback. Call, email or fill out our online form. Our friendly team is always ready to assist.</p>

              <div className='flex flex-col gap-8 pt-4'>
                {GetInTouch.map((git, index)=>(
                  <ContactCard key={git.id}{...git}/>
                ))}
              </div>

            </div> 
          </div>

          <div className={`flex flex-col items-center bg-lightBlue ${styles.paddingX} ${styles.paddingY}`}>

            <div className='flex flex-col text-center mb-14'>
              <p className={`${styles.SmallHeading2}`}>schedule your presence</p>
              <h1 className={`${styles.heading2} mb-6`}>Make an Appointment</h1>
              <p className={`${styles.paragraph} max-w-[622px]`}>Book your appointment now! Choose from a range of services, select a date and time that works best for you, and let us pamper you. Relax, we've got you covered.</p>
            </div>

            <form className='bg-white sm:p-[100px] xs:p-[50px] p-[20px] flex flex-col w-full max-w-[1019px] gap-4 shadow-xl' action='' method='POST'>

              <input type="text" id="name" name="name" className={`border border-dullBlue2 w-full h-[65px] placeholder:${styles.placeholder} placeholder:text-dullBlack focus:outline-none focus:border-dashed focus:bg-lightBlue`} placeholder='Name'/>

              <img src={user} alt="user" width="24px" height="24px" className='absolute mt-5 ml-3' />

              <input type="email" id="email" name="email" className={`border border-dullBlue2 w-full h-[65px] placeholder:${styles.placeholder} placeholder:text-dullBlack focus:outline-none focus:border-dashed focus:bg-lightBlue`} placeholder='Email'/>

              <img src={mail} alt="mail" width="24px" height="24px" className='absolute mt-[6.35rem] ml-3' />

              <input type="text" id="phone" name="phone" className={`border border-dullBlue2 w-full h-[65px] placeholder:${styles.placeholder} placeholder:text-dullBlack focus:outline-none focus:border-dashed focus:bg-lightBlue`} placeholder='Phone'/>

              <img src={phone} alt="phone" width="24px" height="24px" className='absolute mt-[11.4rem] ml-3' />

              <input type="text" id="service" name="service" className={`border border-dullBlue2 w-full h-[65px] placeholder:${styles.placeholder} placeholder:text-dullBlack focus:outline-none focus:border-dashed focus:bg-lightBlue`} placeholder='Service You Need'/>

              <img src={book} alt="book" width="24px" height="24px" className='absolute mt-[16.6rem] ml-3' />

              <textarea id="note" name="note" className={`border border-dullBlue2 w-full placeholder:${styles.placeholder} placeholder:text-dullBlack pt-4 focus:outline-none focus:border-dashed focus:bg-lightBlue`} placeholder='Any Note For Us' rows="4" ></textarea>

              <img src={edit} alt="edit" width="24px" height="24px" className='absolute mt-[21.3rem] ml-3' />
              
              <button type="submit" className={`${styles.buttonText} bg-dullBlue2 py-[24px]`}>make an appointment</button>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact