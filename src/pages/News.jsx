import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../api/server";
import avatar from "../assets/user.png";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCopySharp } from "react-icons/io5";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [similarStories, setSimilarStories] = useState([]);

  const darkMode = useSelector((state) => state.darkMode.value);

  const { id } = useParams();

  useEffect(() => {
    getNewsById();
  }, [id]);

  useEffect(() => {
    getSimilarNewsById();
  }, [page]);
  const getSimilarNewsById = async () => {
    try {
      const response = await Axios.get(`news/similar/${id}?page=1&limit=12`);
      if (similarStories?.length > 0) {
        setSimilarStories((prev) => [...prev, ...response.data.data]);
      } else {
        setSimilarStories(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getNewsById = async () => {
    try {
      const response = await Axios.get(`news/${id}`);
      setNews(response.data.data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="mb-20 px-3">
      <div className="w-[60%] xsm:w-[100%] sm:w-[60%]">
        <h1
          className="font-semibold text-3xl mb-[35px]"
          style={{ color: darkMode ? "white" : "black" }}
        >
          {news?.title}
        </h1>
        <div className="flex items-center gap-6">
          <img src={avatar} alt="avatar" className="w-[40px] h-[40px]" />
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: darkMode ? "white" : "black" }}
            >
              News Team
            </p>
            <p
              className="text-xs text-gray-500"
              style={{ color: darkMode ? "white" : "black" }}
            >
              {new Date(news?.createdAt).toDateString()}
            </p>
          </div>
          <div className="bg-applightgreen shadow-sm px-4 py-2 rounded-lg text-appgreenhover text-sm font-semibold">
            {news ? news.topics?.[0]?.name : ""}
          </div>
        </div>
        <img
          className="mt-10 w-full h-[500px] object-cover rounded-lg"
          src={news?.image}
          alt=""
        />
        <p className="mt-5" style={{ color: darkMode ? "white" : "black" }}>
          {news?.previewText}
        </p>

        <div className="bg-darkModebglight p-6 my-10 w-full rounded-lg">
          <h2
            className="font-semibold mb-6"
            style={{ color: darkMode ? "white" : "black" }}
          >
            Share this story
          </h2>
          <div className="flex flex-wrap gap-6 items-center text-lg text-appgreen">
            <div className="flex gap-2 items-center cursor-pointer">
              <SiFacebook />
              <p>Facebook</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <FaSquareXTwitter />
              <p>Twitter</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <MdEmail />
              <p>Email</p>
            </div>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() =>
                window.navigator.clipboard.writeText("hello what is up")
              }
            >
              <IoCopySharp />
              <p>Copy Link</p>
            </div>
          </div>
        </div>
      </div>
      <h2
        className="font-semibold text-2xl my-6"
        style={{ color: darkMode ? "white" : "black" }}
      >
        Similar Stories
      </h2>
      <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-between px-[20px]">
        {similarStories?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-[50px]">
        <PrimaryButton
          title={"Load More News"}
          onClick={() => setPage((prev) => prev + 1)}
          width={"250px"}
        />
      </div>
    </div>
  );
}

export default News;
