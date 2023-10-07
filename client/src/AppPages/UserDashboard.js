import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const greeting = "Good Morning";
  const user = "James";
  const stats = [
    {
      star: "1.4k",
      views: "2.4k",
      courses: "20 completed",
    },
  ];

  const list = [
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
    {
      index: "0",
      icon: "",
      courseName: "Introduction to Python Programming",
      insights: { lessons: "35", minutes: "240" },
      instructor: "Dr. Hemant Sharma",
      coursePrice: "$850",
    },
  ];

  const lessonSchedule = [
    {
      date: "20/12/2023",
      lessons: [
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "length: 50min" },
          { time: "time: 10:00 AM" },
        ],
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "length: 50min" },
          { time: "time: 10:00 AM" },
        ],
      ],
    },
    {
      date: "23/12/2023",
      lessons: [
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "length: 50min" },
          { time: "time: 10:00 AM" },
        ],
        [
          { courseName: "Course 1" },
          { lesson: "lesson1" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "length: 50min" },
          { time: "time:10: 00 AM" },
        ],
      ],
    },
  ];

  const discussionList = [
    {
      date: "20/12/2023",
      lessons: [
        [
          { courseName: "Announcement" },
          { lesson: "2 minute read" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "posted yesterday" },
          { time: "12.4k likes" },
        ],
        [
          { courseName: "Announcement" },
          { lesson: "2 minute read" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "posted yesterday" },
          { time: "12.4k likes" },
        ],
      ],
    },
    {
      date: "23/12/2023",
      lessons: [
        [
          { courseName: "Announcement" },
          { lesson: "2 minute read" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "posted yesterday" },
          { time: "12.4k likes" },
        ],
        [
          { courseName: "Announcement" },
          { lesson: "2 minute read" },
          { lecturer: "Mr.Hemant Sharma" },
          { length: "posted yesterday" },
          { time: "12.4k likes" },
        ],
      ],
    },
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 justify-between items-center gap-8 pt-8 col-start-2">
      <div className="grid col-span-2 bg-white shadow-gray-400 shadow-2xl ml-8 px-2 py-2">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          className="w-fill"
        />
      </div>
      <div className="grid grid-cols-12 col-span-9 justify-center items-center">
        <div className="grid grid-cols-12 col-span-12 justify-center items-center">
          <div className="grid grid-rows-2 col-start-1 col-span-10">
            <span className="text-3xl col-span-10">James Johannes</span>
            <span className="text-sm text-gray-300 col-span-3">
              Forum Role: Keymaster
            </span>
          </div>
          <div className="bg-black border-black border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-black hover:border-black hover:border-2 hover:border-solid w-32">
            <Link
              to="/new-course"
              className="flex flex-row justify-center items-center text-sm"
            >
              Follow
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 col-span-12">
          <span className="text-sm text-gray-400 col-span-12">
            Exercitation est consectetur amet Lorem adipisicing mollit
            reprehenderit excepteur culpa voluptate labore nulla. Magna veniam
            sunt nisi sint reprehenderit aute quis.Qui velit irure adipisicing
            duis. Exercitation est consectetur amet Lorem adipisicing mollit
            reprehenderit excepteur culpa voluptate labore nulla. Magna veniam
            sunt nisi sint reprehenderit aute quis.Qui velit irure adipisicing
            duis.
          </span>
          <div className="col-span-8">
            {stats.map((element) => (
              <div className="grid grid-cols-12 col-span-8">
                <span className="flex col-span-3 items-center justify-center">
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
                  <i className="ri-play-circle-line text-black"></i>
                  {element.courses}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 justify-center items-center">
        <div className="grid grid-cols-10 justify-center items-center col-span-12 px-12 py-12 rounded-sm bg-blue-100 bg-opacity-50">
          <span className="grid grid-rows-2 col-span-6">
            <span className="text-3xl font-bold">My Courses</span>
            <span className="text-xl font-extralight">
              {greeting} {user} !
            </span>
          </span>

          <span className="flex col-span-2 col-start-12">
            <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-[200px]">
              <Link
                to="/new-course"
                className="flex flex-row justify-center items-center"
              >
                <i class="ri-calendar-2-line mr-2"></i>
                January
              </Link>
            </div>
          </span>
        </div>
        <div className="grid grid-cols-12 col-span-12 col-start-1 justify-center gap-4 items-center my-8 mx-8">
          {list.map((element) => (
            <div className="flex flex-col col-span-3 px-4 py-4 bg-white border-2 border-gray-100 shadow-2xl shadow-gray-400 rounded-md transition ease-in delay-0 hover:-translate-y-2 duration:1000">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>

              <span className="flex text-xl text-black leading-6 my-4">
                {element.courseName}
              </span>
              <div className="flex justify-between items-center my-2">
                <span className="flex items-center">
                  <i class="ri-book-line text-orange-500 text-[25px] mr-2"></i>{" "}
                  {element.insights.lessons} lessons
                </span>
                <span className="flex items-center">
                  <i class="ri-time-line  text-violet-500 mx-2 text-[25px]"></i>
                  {element.insights.minutes} minutes
                </span>
              </div>
              <span className="text-l font-extralight my-2">
                {element.instructor}
              </span>
              <span className="border-b-[1px] border-gray-200 my-4"></span>
              <div className="flex justify-between items-center">
                <span className="flex">{element.coursePrice}</span>
                <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-32">
                  <Link
                    to="/new-course"
                    className="flex flex-row justify-center items-center"
                  >
                    Watch now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 col-span-12 gap-8">
          <div className="grid grid-cols-6 col-span-6 justify-between items-center px-8">
            <span className="col-span-5 col-start-1 text-2xl font-bold">
              Lesson Schedule
            </span>
            <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-32">
              <Link
                to="/new-course"
                className="flex flex-row justify-center items-center"
              >
                Watch now
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-6 col-span-5 justify-between items-center col-start-7 px-8">
            <span className="col-span-5 text-2xl font-bold">
              Discussions
            </span>
            <div className="bg-[#3484B4] border-[#3484B4] border-2 border-solid rounded-md px-2 py-2 text-center text-white hover:bg-white hover:text-[#3484B4] hover:border-[#3484B4] hover:border-2 hover:border-solid w-32">
              <Link
                to="/new-course"
                className="flex flex-row justify-center items-center"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 justify-between items-center col-span-12 gap-16 px-8">
          <div className="grid grid-cols-6 justify-between items-center col-span-6">
            {lessonSchedule.map((element) => (
              <div className="grid grid-cols-6 col-span-6">
                <span className="text-xl font-semibold mb-4">
                  {element.date}
                </span>
                <div className="grid grid-cols-6 col-span-6">
                  {element.lessons.map((key, index) => (
                    <div
                      key={key}
                      className="grid grid-cols-3 col-span-6 shadow-[#3484B4] shadow-sm transition delay-50 hover:-translate-y-2 duration-500 rounded-md px-4 py-4 mb-4"
                    >
                      {element.lessons[index].map((elements) => (
                        <div className="grid">
                          <div className="grid">
                            <span className="font-semibold">
                              {elements.courseName}
                            </span>
                            <span className="text-l font-semibold">
                              {elements.lesson}
                            </span>
                          </div>

                          <div className="grid">
                            <div className="grid"></div>

                            <span className="text-sm font-extralight">
                              {elements.lecturer} {elements.time}
                            </span>

                            <span className="font-extralight text-sm">
                              {elements.length}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 justify-between items-center col-span-6">
            {discussionList.map((element) => (
              <div className="grid grid-cols-4 justify-between items-center col-span-4">
                <span className="text-xl font-semibold mb-4">
                  {element.date}
                </span>
                <div className="grid grid-cols-6 col-span-6">
                  {element.lessons.map((key, index) => (
                    <div
                      key={key}
                      className="grid grid-cols-3 col-span-6 shadow-[#3484B4] shadow-sm transition delay-50 hover:-translate-y-2 duration-500 rounded-md px-4 py-4 mb-4 bg-[#3484B4]"
                    >
                      {element.lessons[index].map((elements) => (
                        <div className="grid">
                          <div className="grid">
                            <span className="font-semibold text-white">
                              {elements.courseName}
                            </span>
                            <span className="text-l font-semibold text-white">
                              {elements.lesson}
                            </span>
                          </div>

                          <div className="grid">
                            <div className="grid"></div>

                            <span className="text-sm font-extralight text-white">
                              {elements.lecturer} {elements.time}
                            </span>

                            <span className="font-extralight text-sm text-white">
                              {elements.length}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
