const styles = {
    boxWidth: "xl:max-w-[100%] w-full",
  
    heading1: "font-playfair_display font-bold text-[40px] ss:text-[70px] text-dullBlack tracking-[-0.01em] w-full leading-[115%]",
    heading2: "font-playfair_display font-bold text-[25px] ss:text-[45px] text-dullBlack tracking-[-0.01em] w-full leading-[130%]",

    paragraph: "font-manrope font-normal text-dimWhite text-[12px] ss:text-[19px] text-[14px] leading-[170%]",

    buttonText: "text-white font-manrope font-semibold uppercase ss:text-[14px] text-[9px] tracking-[0.25em] leading-[125%]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "md:px-[360px] px-[32px]",
    paddingY: "md:py-[150px] py-[54px]",
    paddingY1: "sm:py-[165px] py-[6]",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;