import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../api/server";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import SelectComponent from "../components/SelectComponent";
import { useSelector } from "react-redux";

const Category = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [newsList, setNewsList] = useState([]);

  const darkMode = useSelector((state) => state.darkMode.value);

  const params = useParams();

  const newsByCategory = async () => {
    const res = await Axios.get(
      `news/categories/${params.id}?page=${page}&limit=15`
    );
    if (news?.length > 0) {
      setNews((prev) => [...prev, ...res.data.data]);
    } else {
      setNews(res.data.data);
    }
  };

  const categoryList = async () => {
    const response = await Axios.get("topics");
    setNewsList(response.data.data);
  };

  const selectOptionsFiltered = newsList.map((item) => {
    return { value: item.id, label: item.name };
  });

  useEffect(() => {
    newsByCategory();
  }, [page, params.id]);

  useEffect(() => {
    categoryList();
  }, []);

  return (
    <div className="max-w-commonwidth mx-auto flex flex-col mb-[100px]">
      <div className="flex mb-[20px] justify-between">
        <p
          className="text-3xl font-bold "
          style={{ color: darkMode ? "white" : "black" }}
        >
          Top News in "{}"
        </p>
        <SelectComponent options={selectOptionsFiltered} setNews={setNews} />
      </div>
      <div className="grid xms:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-between px-[20px] ">
        {news?.map((item) => {
          return <Card item={item} />;
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
};

export default Category;
