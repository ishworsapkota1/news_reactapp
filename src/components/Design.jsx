import React from "react";
import PrimaryButton from "./PrimaryButton";
import { CgProfile } from "react-icons/cg";
import apples from "../assets/instagram.png";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

const Design = () => {
  return (
    <>
      <h1>Infosys Offers ₹9 Lakh CTC for Campus Roles</h1>
      <div className="flex gap-4 mt-5">
        <div className="flex gap-4">
          <CgProfile style={{ fontSize: "40px" }} />
          <div>
            <p>Sojo News Team</p>
            <p>13 Feb 2024</p>
          </div>
        </div>
        <div>
          <PrimaryButton title={"Technology"} />
        </div>
      </div>
      <img src={apples} alt="" width={600} height={200} className="mt-5" />
      <p style={{ width: "50%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo soluta
        aliquam repellendus optio consequatur nisi expedita et deserunt natus
        totam at voluptate nulla, adipisci recusandae assumenda accusantium
        quos. Perspiciatis, asperiores alias. Earum, ipsum accusantium!
        Obcaecati quaerat assumenda facere itaque, explicabo recusandae qui,
        ipsam autem iure illum praesentium ut libero numquam! Quia eligendi sed
        porro facilis eius vel maiores, inventore magni veritatis. Eius tenetur
        magnam illum, ipsum blanditiis delectus, ex, aliquid aut vitae ut
        ratione officia culpa voluptas porro dignissimos impedit ab! Reiciendis
        laudantium accusamus tempora voluptate eligendi eveniet ipsam quaerat.
        Asperiores perferendis rem mollitia, repellendus eaque quae corporis.
        Aliquam sint et architecto animi sequi ducimus hic itaque accusantium
        deserunt quae.
      </p>
      <div
        style={{
          backgroundColor: "#E6E7E9",
          marginBottom: "100px",
          width: "50%",
        }}
        className="p-5 "
      >
        <h1 className="font-medium">Share this story</h1>
        <div className="flex align-center  gap-5 font-large text-green-600 text-center mt-2   ">
          <div className="flex align-center gap-5">
            <div>
              <CiFacebook />
            </div>
            <h1 className="fw-500">Facebook</h1>
          </div>
          <div className="flex align-center gap-5">
            <div>
              <FaTwitter />
            </div>
            <h1 className="fw-500">Twitter</h1>
          </div>
          <div className="flex align-center gap-5">
            <div>
              <MdOutlineMailOutline />
            </div>
            <h1 className="fw-500">Email</h1>
          </div>
          <div className="flex align-center gap-5 green-500 ">
            <div>
              <FaCopy />
            </div>
            <h1>Copy Link</h1>
          </div>
        </div>
      </div>
    </>
  );
};
// style={{ backgroundColor: "#E2F2E9" }}
export default Design;
