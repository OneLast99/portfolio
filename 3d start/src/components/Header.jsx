import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      {/* Logo Section */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex flex-col items-center"
      >
        {/* User Icon */}
        <i className="bx bxs-user-rectangle text-4xl md:text-5xl text-orange-400 mb-1"></i>

        {/* Full Name */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light m-0">
          LAXMI PRASAD MISHRA
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#description"
        >
          Description
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#academics"
        >
          Academics
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#techstack"
        >
          Tech Stack
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#certifications"
        >
          Certifications
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#achievements"
        >
          Achievements
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6">
          <a href="#description" className="text-base tracking-wider transition-colors hover:text-gray-300">Description</a>
          <a href="#academics" className="text-base tracking-wider transition-colors hover:text-gray-300">Academics</a>
          <a href="#techstack" className="text-base tracking-wider transition-colors hover:text-gray-300">Tech Stack</a>
          <a href="#certifications" className="text-base tracking-wider transition-colors hover:text-gray-300">Certifications</a>
          <a href="#achievements" className="text-base tracking-wider transition-colors hover:text-gray-300">Achievements</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
