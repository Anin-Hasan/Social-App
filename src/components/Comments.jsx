import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="mx-4 mt-3">
      <div className="flex gap-3">
        <img
          className="w-8 h-8 rounded-full"
          src={currentUser.profilePic}
          alt=""
        />
        <input
          className="outline-none px-4 rounded-md w-2/4"
          type="text"
          placeholder="Write a comment"
        />
        <button className="bg-blue-400 px-4 rounded-md  hover:bg-blue-500 duration-300">
          POST
        </button>
      </div>
      {comments.map((comment) => (
        <div className="flex gap-3 mt-4">
          <img
            className=" h-8 w-8 rounded-[50%]"
            src={comment.profilePicture}
            alt=""
          />
          <div>
            <div>
              <span className="font-semibold">{comment.name}</span>
              <p className="text-sm font-light w-2/3">{comment.desc}</p>
            </div>
            <span className="text-sm font-semibold">1 hour ago</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
