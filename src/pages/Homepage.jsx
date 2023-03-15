import course from "../assets/course.svg";
const Homepage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-t from-slate-300 to-transparent sm:px-28">
        <div className="hero-content flex-col lg:flex-row-reverse text-center  w-96 sm:w-full">
          <img
            src={course}
            className="max-w-sm rounded-lg shadow-2xl"
            data-aos="fade-left"
            data-aos-delay="1000"
          />
          <div>
            <h1 className="sm:text-5xl text-2xl font-bold" data-aos="fade-down">
              WELCOME TO DAN<span className="text-yellow-200">JS</span> COURSE
            </h1>
            <p
              className="py-6 font-semibold text-sm sm:w-full"
              data-aos="fade-right"
              data-aos-delay="1500"
            >
              Ingin belajar Tentang Mikrotik, Cisco packet tracer, Linux?
              Bergabunglah dengan kursus online kami dan pelajari keterampilan
              Mikrotik, Cisco packet tracer, Linux mulai dari dasar.
            </p>
            <button className="btn" data-aos="fade-right" data-aos-delay="500">
              <span>Join Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
