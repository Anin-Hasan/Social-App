import React from "react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 2,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 3,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 4,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 5,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 6,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 7,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 8,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
    {
      id: 9,
      name: "Joy Mondol",
      img: "https://s3.amazonaws.com/export.easil.com/10d97666-6f2e-488e-9688-eef18ac4fadb/0b5ea399c3d8a5ef80.png",
    },
  ];
  return (
    <div className="bg-gray-200 rounded-md mx-2">
      <div className="flex px-1 h-[250px] mt-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex-1 rounded-md overflow-hidden px-2 py-2"
          >
            <img
              className="w-full h-5/6 object-cover rounded-md cursor-pointer"
              src={story.img}
              alt=""
            />
            <span className=" absolute top-[210px] px-2 font-semibold mt-10 text-sm">
              {story.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
