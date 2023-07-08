import React from "react";
import { useState } from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import TextsmsSharpIcon from "@mui/icons-material/TextsmsSharp";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="bg-gray-200 mt-2 rounded-md mx-2 py-4">
      <div className="mx-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            className="rounded-[50%] h-8 w-8"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt=""
          />
          <Link to={`/profile/${post.userId}`}>
            <h1 className="font-semibold">Jhon Doe</h1>
          </Link>
        </div>
        <p className="text-sm mx-11">a few seconds ago</p>
        <h1 className="mt-2">Lorem ipsum dolor sit amet.</h1>
        <img
          className="mt-4"
          src="https://techcrunch.com/wp-content/uploads/2022/11/postnews.jpg"
          alt=""
        />
      </div>
      <div className="flex mt-2 mx-4 gap-4">
        <div className="flex gap-2 cursor-pointer">
          <FavoriteBorderSharpIcon />
          <h1>Likes</h1>
        </div>
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => setCommentOpen(!commentOpen)}
        >
          <TextsmsSharpIcon />
          <h1>Comments</h1>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <ShareTwoToneIcon />
          <h1>Share</h1>
        </div>
      </div>
      {commentOpen && <Comments />}
    </div>
  );
};

export default Post;
