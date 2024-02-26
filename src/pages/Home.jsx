import AppleStoreBtn from "../assets/appleBtn1.png";
import GoogleStoreBtn from "../assets/googleBtn.png";
import Card from "../components/Card";
import CategorySlider from "../components/CategorySlider";
import SelectComponent from "../components/SelectComponent";
import PrimaryButton from "../components/PrimaryButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "../api/server";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [selectOptionsFiltered, setSelectOptionsFiltered] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getNews();
    fetchCategories();
  }, [page]);

  const getNews = async () => {
    const response = await Axios.get(`news?page=${page}&limit=15`);

    if (news?.length > 0) {
      setNews((prev) => [...prev, ...response.data.data]);
    } else {
      setNews(response.data.data);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await Axios.get("topics");
      const categoriesData = response.data.data;
      const options = categoriesData.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setSelectOptionsFiltered(options);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const darkMode = useSelector((state) => state.darkMode.value);
  // const selectOptionsFiltered = categories.map((item) => {
  //   return { value: item.name, label: item.name };
  // });
  return (
    <>
      <div className="mb-[100px]">
        <div className="flex flex-col mx-auto justify-center items-center text-center">
          <h1
            style={{ color: darkMode ? "white" : "black" }}
            className="font-semibold text-4xl mb-[15px]"
          >
            Short, Summarized <br /> &
            <span className="text-appgreen"> Uplifting</span> News.
          </h1>
          <p
            style={{ color: darkMode ? "white" : "black" }}
            className="mt-5 font-medium"
          >
            Get Robust Filter And All The Other Feature On Our App, Download Now
            !!
          </p>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <a href="">
            <img
              src={AppleStoreBtn}
              alt="apple store button"
              className="w-[140px] h-[120px] object-contain"
            ></img>
          </a>
          <a href="">
            <img
              src={GoogleStoreBtn}
              alt="apple store button"
              className="w-[180px] h-[140px] object-contain"
            ></img>
          </a>
        </div>
        <CategorySlider />
        <div className="flex justify-between my-[40px] xsm:flex-col sm:flex-row xsm:px-5 sm:px-0 gap-4">
          <h1
            style={{ color: darkMode ? "white" : "black" }}
            className="font-semibold"
          >
            Top News of the Day
          </h1>
          <SelectComponent
            options={selectOptionsFiltered}
            navigate={navigate}
          />
        </div>
        <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-between px-[20px]">
          {news?.map((item) => {
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
    </>
  );
};

export default Home;
