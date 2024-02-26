import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { categories } from "../../fakeData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "../api/server";

function CategorySlider() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await Axios.get("topics");
        // console.log(response.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      responsive={responsive}
    >
      {categories?.map((item) => {
        return (
          <Link
            key={item.id}
            className="bg-appgray text-black no-underline rounded-lg text-center mx-5 h-[48px] flex justify-center items-center"
            to={`/news/category/${item.id}/${item.name}`}
          >
            {item.name}
          </Link>
        );
      })}
    </Carousel>
  );
}

export default CategorySlider;
