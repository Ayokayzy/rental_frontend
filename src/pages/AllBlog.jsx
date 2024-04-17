import { FaSearch } from "react-icons/fa";
import BlogCard from "../components/BlogCard";
import "../assets/css/blog.css";
import BookFormMain from "../components/BookFormMain";
import hero from "../assets/images/blog_header2.jpeg";
import LatestPost from "../components/latestPost";
const AllBlog = () => {
  return (
    <div className=" bg-[#F6F7EB] pb-20">
      <div
        className="h-[450px] relative p-8 flex justify-center items-center"
        style={{
          background: `url(${hero}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#1c1919] opacity-50 0 z-10"></div>
        <div className="text-center text-white relative z-20">
          <p className="text-4xl">
            Planning a vacation in the near future?
            <br />
            <span className="font-black text-primary_pink">Read our blog</span>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-xs font-bold py-4">
          <span className="x hover:text-primary_pink text-[#79745C]">
            Home /{" "}
          </span>
          All Blog
        </p>
        <h1 className="text-[#272932] font-bold text-2xl mb-4">Blog Posts</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div>
            <div className="space-y-4">
              <div className="flex items-center h-12 border rounded pl-5 justify-between  border-[#fe598d] mb-10">
                <input
                  type="text"
                  placeholder="Seearch here"
                  className="outline-none bg-transparent w-full"
                />
                <FaSearch className=" text-[#fff] bg-[#fe598d] w-[80px] h-full p-1 cursor-pointer" />
              </div>
              <div className="bg-white p-8 rounded-md border border-[#7c79664b]">
                <div className="flex items-center gap-3">
                  <p className="text-lg">Categories</p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <p>Travel</p>
                  <span className="font-medium">(0) </span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-md border border-[#7c79664b]">
                <div className="flex items-center gap-3">
                  <p className="text-lg">Latest Post</p>
                </div>
                <LatestPost />
                <LatestPost />
                <LatestPost />
                <LatestPost />
                <LatestPost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
