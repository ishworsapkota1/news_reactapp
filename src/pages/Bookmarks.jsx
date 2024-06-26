// import React, { useEffect, useState } from "react";
// import useLocalStorageGetItem from "../../hooks/useLocalStorageGetItem";
// import axios from "axios";
// import { BASE_URL } from "../api/server";
// import Card from "../components/Card";
// function Bookmarks() {
//   const [bookmarks, setBookmarks] = useState([]);
//   const token = useLocalStorageGetItem("token");
//   useEffect(() => {
//     if (token) {
//       getAllBookmarks();
//     }
//   }, [token]);
//   const getAllBookmarks = async () => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}users/bookmarks/getBookmarkedNews`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//           },
//         }
//       );
//       setBookmarks(response.data.bookmarkedNews);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return bookmarks.length > 0 ? (
//     <div>
//       <h1 className="font-semibold mb-10">Your bookmarks</h1>
//       <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-between px-[20px]">
//         {bookmarks?.map((item) => {
//           return <Card item={item} />;
//         })}
//       </div>
//     </div>
//   ) : (
//     <p>No any bookmarks</p>
//   );
// }

// export default Bookmarks;
import { useEffect, useState } from "react";
import useLocalStorageGetItem from "../../hooks/useLocalStorageGetItem";
import axios from "axios";
import { BASE_URL } from "../api/server";
import Card from "../components/Card";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const token = useLocalStorageGetItem("token");

  useEffect(() => {
    if (token) {
      getAllBookMarks();
    }
  }, [token]);

  const getAllBookMarks = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}users/bookmarks/getBookmarkedNews`,
        { 
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      setBookmarks(response.data.bookmarkedNews);
    } catch (error) {
      console.log(error);
    }
  };

  return bookmarks.length > 0 ? (
    <div>
      <h1 className="font-semibold mb-10">Your bookmarks</h1>
      <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-between px-[20px]">
        {bookmarks?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  ) : (
    <p>No any bookmarks</p>
  );
};

export default Bookmarks;
