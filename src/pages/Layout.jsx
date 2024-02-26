import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";
import useCheckTokenExpiration from "../../hooks/useCheckTokenExpiration";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";

const Layout = () => {
  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isExpired] = useCheckTokenExpiration();
  const navigate = useNavigate();
  useEffect(() => {
    if (isExpired) {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    }
  }, [isExpired]);

  return (
    <>
      <IoIosArrowDropupCircle
        onClick={onScrollTop}
        className="text-appgreen w-[50px] h-[50px] fixed bottom-5 right-5 z-10 cursor-pointer"
      />
      <div>
        <NavBar />
        <div className="min-h-screen max-w-commonwidth mx-auto">
          <Outlet />
        </div>
        <div className="relative">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
