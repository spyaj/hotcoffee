import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { blogs } from "../models/blogs";
import { Card } from "../shared/Card";
import { Button } from "../shared/Button";
import * as Icons from "../../assets/icons";


const BlogSection = () => {
  const firstBlog = blogs[0];
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [lastIndex, setLastIndex] = useState(4);
  useEffect(() => {
    setFilteredBlogs(blogs.slice(1, lastIndex)); //4 //7
  }, [lastIndex]);
  const handleSeeMoreClick = () => {
    // const newLastIndex = lastIndex + 3; //7
    // setLastIndex(newLastIndex); //7
    // setFilteredBlogs(blogs.slice(1, newLastIndex)); //7

    // if (blogs.length < lastIndex) {
    //   alert("No more blogs!");
    // } else {
    setLastIndex(lastIndex + 3); //7
    // }
  };
  return (
    <>
      <div className="">
        {/* main class */}
        <div className="flex border border-gray-400 rounded-2xl mb-5">
          <div className="mr-3 flex flex-col place-content-center px-10">
            <h3 className="font-bold text-2xl mb-3">{firstBlog.title}</h3>
            <p className="font-medium text-lg">{firstBlog.description}</p>
            <div className="flex mt-5 justify-between">
              <p className="font-medium text-gray-800">
                {firstBlog.created_at}
              </p>
              <Link to={`/article/${firstBlog.id}`} className="text-blue-700 underline">
                Read More
              </Link>
            </div>
          </div>
          <div className="ml-3 w-3/5">
            <img
              src={firstBlog.img}
              className="object-cover rounded-r-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10">
        {filteredBlogs.map((blog, index) => {
            return (
              <Card
                key={index}
                blog={blog}
                // title={blog.title}
                // description={blog.description}
                // uploadedDate={blog.created_at}
              />
            );
          })}
        </div>
        {blogs.length > lastIndex && (
          <div className="py-2 px-4 bg-purple-700 flex w-20 h-10">
            <Button className=""
              title="See More"
              handleClick={handleSeeMoreClick}
              Icon={Icons.ArrowDownIcon}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogSection;
