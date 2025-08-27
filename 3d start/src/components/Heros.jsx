import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Heros = () => {
  return (
    <section className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] relative">
      {/* Left Side Text */}
      <div data-aos="fade-right" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        
        {/* Introducing Badge */}
        <div className='relative w-[95%] sm:w-80 h-12 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,0.4)] rounded-full'>
          <div className='absolute inset-[5px] bg-black rounded-full flex items-center justify-center gap-2 px-4'>
            <i className='bx bx-diamond-alt text-orange-400'></i>
            <span className="font-semibold tracking-wide">
              Introducing Laxmi Prasad Mishra
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          Portfolio of
          <br />
          Laxmi Prasad Mishra
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg">
          A passionate Software Developer eager to build impactful and scalable solutions 🚀
        </p>

        {/* Buttons */}
        <div className='flex gap-4 mt-12'>
          <a 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-5 sm:px-6 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' 
            href='#description'
          >
            View Resume <i className='bx bx-paperclip'></i>
          </a>
          <a 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' 
            href='#contact'
          >
            Contact Me <i className='bx bx-send'></i>
          </a>
        </div>
      </div>

      {/* 3D Robot */}
      <Spline  
        data-aos="zoom-in" 
        data-aos-duration='3000' 
        className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' 
        scene="https://prod.spline.design/O3QOszxZAbOTtyqw/scene.splinecode" 
      />

      {/* Floating text */}
      <div className="absolute bottom-[15%] right-[20%] text-2xl font-bold text-orange-400 hidden md:block">
        Software Developer
      </div>
    </section>
  );
}

export default Heros;
