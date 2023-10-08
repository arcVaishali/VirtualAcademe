import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import Navbar from "../AppComponents/Navbar";

const DiscussionForum = () => {
  const [tasks, setTasks] = useState([]);
  const { id } = useParams(); // Get the id from the URL parameter

  useEffect(() => {
    const q = query(collection(db, "forum"), orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const stats = [
    {
      star: "1.4k",
      views: "2.4k",
      // courses: "20 completed",
    },
  ];

  // Find the specific discussion topic by ID
  const discussionTopic = tasks.find((x) => x.id === id);

  if (!discussionTopic) {
    return (
      <div>
        <h2 className="text-3xl font-bold underline bg-red-500">Error 404</h2>
        <div>
          <Link to="/discussion-forum">Back to all forums</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="grid grid-cols-12 col-span-9 justify-center items-center px-16 py-16">
          <div className="grid grid-cols-12 col-span-12 justify-center items-center">
            <div className="grid col-start-1 col-span-10">
              <span className="text-3xl col-span-10">
                {discussionTopic.data.title}
              </span>
              {/* <span className="text-sm text-gray-300 col-span-3">
              {discussionTopic.data.description}
              </span> */}
            </div>
            <div className="bg-black border-black border-2 border-solid rounded-sm px-[5px] py-[5px] text-center text-white hover:bg-white hover:text-black hover:border-black hover:border-2 hover:border-solid w-16">
              <button
                // to="/"
                className="flex flex-row justify-center items-center text-center text-xs"
              >
                Comment
              </button>
            </div>
            <div className="bg-black border-black border-2 border-solid rounded-sm px-[5px] py-[5px] text-center text-white hover:bg-white hover:text-black hover:border-black hover:border-2 hover:border-solid w-[90px]">
              <Link
                to="/discussion-forum"
                className="flex flex-row justify-center text-center items-center text-xs"
              >
                Back to forum
              </Link>
            </div>
          </div>

          <div className="col-span-8 mb-8">
            {stats.map((element) => (
              <div className="grid grid-cols-12 col-span-8 col-start-1">
                <span className="flex col-span-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  {element.star}
                </span>
                <span className="flex col-span-3 items-center justify-center">
                  <i className="ri-eye-line text-black"></i>
                  {element.views}
                </span>

                <span className="flex col-span-3 items-center justify-center">
                  {/* <i className="ri-play-circle-line text-black"></i> */}
                  {element.courses}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 col-span-12">
            <span className="text-base text-gray-800 col-span-12">
              {discussionTopic.data.description}
            </span>
          </div>
        </div>
        {/* <div className="px-8 py-4 my-4">
          <Link to="/discussion-forum" className='bg-gray-400 text-white px-2 py-2 rounded-sm'>Back to all forums</Link>
        </div> */}
      </div>
    );
  }
};

export default DiscussionForum;
