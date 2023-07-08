const RightBar = () => {
  return (
    <div className="flex flex-col w-1/3 font-poppins h-full top-[70px]  sticky ">
      <div className="container">
        <div className="bg-gray-200 my-3 px-3 py-3 rounded-md shadow-navbar">
          <span className="text-sm">Suggestions For You</span>
          <div className="flex justify-between my-2">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="ml-2 text-sm">Jane Doe</span>
            </div>
            <div className="flex items-center">
              <button className="bg-sky-600 mx-2 px-2 rounded-sm font-semibold">
                follow
              </button>
              <button className="bg-red-600 mx-2 px-2 rounded-sm font-semibold">
                dismiss
              </button>
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="text-sm ml-2">Jane Doe</span>
            </div>
            <div className="buttons">
              <button className="bg-sky-600 mx-2 px-2 rounded-sm font-semibold">
                follow
              </button>
              <button className="bg-red-600 mx-2 px-2 rounded-sm font-semibold">
                dismiss
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-200 my-3 px-3 py-3 rounded-md shadow-navbar">
          <span className="text-sm">Latest Activities</span>
          <div className="flex justify-between my-2 items-center">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className=" text-sm text-sky-700">
                <span className="ml-2 text-sm text-black">Jane Doe</span>{" "}
                changed their cover picture
              </p>
            </div>
            <span className="text-sm">1 min ago</span>
          </div>
          <div className="flex justify-between my-2 items-center">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className=" text-sm text-sky-700">
                <span className="ml-2 text-sm text-black">Jane Doe</span> liked
                a post
              </p>
            </div>
            <span className="text-sm">1 min ago</span>
          </div>
          <div className="flex justify-between my-2 items-center">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className=" text-sm text-sky-700">
                <span className="ml-2 text-sm text-black">Jane Doe</span> liked
                a comment
              </p>
            </div>
            <span className="text-sm">1 min ago</span>
          </div>
          <div className="flex justify-between my-2 items-center">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className=" text-sm text-sky-700">
                <span className="ml-2 text-sm text-black">Jane Doe</span> posted
              </p>
            </div>
            <span className="text-sm">1 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
