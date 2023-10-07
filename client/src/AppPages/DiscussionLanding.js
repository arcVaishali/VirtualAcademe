import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateDiscussion from "./CreateDiscussion";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase";

const DiscussionLanding = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "forum"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const stats = [
    { icon: "ri-pushpin-line bg-gray-500", text: "Posts", stat: "30" },
    { icon: "ri-volume-up-line bg-red-500", text: "Topics", stat: "30" },
    { icon: "ri-chat-1-line bg-green-500", text: "Replies", stat: "30" },
  ];

  return (
    <div className="grid grid-cols-12 justify-center items-center px-20 py-20">
      <div className="grid col-span-12 col-start-1">
        <img
          src="https://themes.thememasters.club/disputo/wp-content/uploads/sites/14/2020/08/homepage-bg.jpg"
          className="transition delay-50 hover:scale-110 duration-500 z-10"
        />
        <div className="col-span-8 px-16 pt-32 pb-[477px] z-20 absolute bg-[#1d84b5] w-[600px] justify-center items-center h-screen">
          <span className="grid col-span-8 col-start-2 mb-2 text-2xl leading-10 text-white uppercase">
            Welcome to Discussion Forum
          </span>
          <span className="grid col-span-8 col-start-2 italic text-base text-[#364253] leading-10">
            Talk about anything that's on your mind and see what others think.
            As a guest to our forum you are only able to view posts. When you
            register with the Forumix forum you can join in with topics, start
            new topics and generally be a part of the first level of our
            community.
            <br />
          </span>
          <div className="grid col-span-8 mt-4 col-start-2 bg-[#364253] border-[#364253] border-2 border-solid px-2 py-2 text-center text-white hover:bg-transparent hover:text-white hover:border-[#364253] hover:border-2 hover:border-solid w-64 ">
            <Link
              to="/"
              className="flex flex-row justify-center items-center text-sm font-extralight"
            >
              Learn more
            </Link>
          </div>
        </div>
        {/* <div className="absolute inset-0 bg-gray-500 opacity-90 w-fill h-screen object-cover"></div> */}
      </div>
      <div className="grid grid-cols-12 col-span-12 gap-2 justify-center items-center mb-16 relative top-[50px]">
        {stats.map((element) => (
          <div className="grid grid-cols-4 col-span-4 justify-between rounded-sm items-center shadow-md shadow-gray-300 px-8 py-4">
            <span className="col-span-1">
              <i
                className={
                  element.icon + " text-6xl rounded-full px-2 py-2 text-white"
                }
              ></i>
            </span>
            <div className="grid grid-rows-1 col-start-4 col-span-1">
              <span className="uppercase font-semibold text-gray-400 text-xl">
                {element.text}
              </span>
              <span className="text-xl font-semibold">{element.stat}</span>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-12 col-span-12">
          <div className="col-span-12">
            <tr>
              <th className="col-span-4 px-4 py-2">Discussion Topic</th>
              <th className="col-span-4 px-4 py-2">Actions</th>
            </tr>
          </div>
          <div className="col-span-12 col-start-1">
            {tasks.map((val) => (
              <div key={val.id} className="grid grid-cols-12 col-span-12 ">
                <div className="border px-4 py-2 col-span-1">
                  <Link to={`/discussion-forum/${val.id}`}>
                    {val.data.title}
                  </Link>
                </div>
                <div className="border px-4 py-2 col-span-11">
                  <p>{val.data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CreateDiscussion />
      </div>
    </div>
  );
};

export default DiscussionLanding;
