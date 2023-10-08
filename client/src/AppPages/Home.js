import React from "react";
import Navbar from "../AppComponents/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 relative overflow-visible col-span-12 justify-center items-center mb-8">
        <img
          // src="https://plus.unsplash.com/premium_photo-1663076063751-80c3da778a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGZpcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          // src="https://images.unsplash.com/photo-1602980068989-cb21869ab2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZpcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlydHVhbCUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          className="col-span-12 inset-0 h-[100vh] w-full object-fill object-right z-0 md:object-center"
        />
        <div className="bg-black opacity-40 absolute inset-0 z-10"></div>
        <div className="flex flex-col col-span-6 col-start-2 absolute mx-auto max-w-7xl z-20">
          <span
            className="text-5xl text-gray-100"
            style={{
              fontFamily: "'Paytone One', sans-serif",
              textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
            }}
          >
            Virtual Academe
          </span>
          <span className="text-xl mt-4 text-gray-200">
            In the halls of Virtual Academe, students and educators find not
            just a virtual campus but a thriving intellectual community, a place
            where curiosity is nurtured, and potential finds its wings.
          </span>
          <div className="px-2 py-[1px] rounded-sm my-4 border-2 border-white bg-white  text-black text-center hover:bg-gray-100 hover:shadow-md hover:shadow-gray-500 hover:text-inherit w-32">
            <Link to="/signup" className="text-xs">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
