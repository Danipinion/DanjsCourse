import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
const Course = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-t from-slate-300 via-transparent to-slate-100 sm:px-28">
        <div className="hero-content flex-col w-full">
          <h1 className="text-5xl font-bold mt-16">COURSES</h1>
          <div className="wrapper w-full">
            <div
              className="box bg-slate-500 p-4 rounded-md"
              data-aos="flip-left"
            >
              <div className="title text-white text-3xl text-center font-semibold">
                ✨Linux✨
              </div>
              <div className="cards mt-4">
                <Carousel responsive={responsive}>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
            <div
              className="box bg-slate-500 p-4 rounded-md mt-10"
              data-aos="flip-left"
            >
              <div className="title text-white text-3xl text-center font-semibold">
                ✨Mikrotik✨
              </div>
              <div className="cards mt-4">
                <Carousel responsive={responsive}>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card w-72 bg-base-100 shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        Mengkonfigurasi jaringan dasar dimikrotik
                      </h2>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Lihat</button>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
