import bg from "../assets/edit.png";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-t from-slate-300 to-transparent sm:px-28">
        <div className="hero-content flex-col text-center">
          <h1 className="text-5xl font-bold" data-aos="fade-down">
            CONTACT US
          </h1>
          <p className="font-bold" data-aos="zoom-in-up">
            Jika Belum Paham dengan Penjelasan nya bisa Chat Nomer Di Bawah
          </p>
          <div
            className="btn btn-success text-white"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            chat Nomer Wa
          </div>
          <div>
            <img
              src={bg}
              alt="bacground"
              className="h-80"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
