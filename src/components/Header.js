import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="mb-9">
        <a className="text-base font-semibold font-sans leading-6 pr-10">
          All Products
        </a>
        <a
          className="text-base font-sans leading-6 pr-10"
          style={{ color: "#777777" }}
        >
          T-Shirt
        </a>
        <a
          className="text-base  font-sans leading-6 pr-10"
          style={{ color: "#777777" }}
        >
          Hoddies
        </a>
        <a
          className="text-base  font-sans leading-6"
          style={{ color: "#777777" }}
        >
          Jackets
        </a>
      </div>
      <div>
            <button className="text-base py-1 px-3" style={{background: "#1E2832", color: "white"}}>Show All</button>
        </div>
    </div>
  );
};

export default Header;
