import Topnav from "../../Topnav";
import MainImage from "../../images/main.webp";
import styles from "./style.module.css";
import Milk from "../../images/milk.avif";
import Curd from "../../images/curd.jpg";
import Gee from "../../images/Gee.webp";

import Paneer from "../../images/panner.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [Details, setDetails] = useState([
    {
      category: "milk",
      volumn: "1L",
      price: "50",
      iscart: false,
      isfav: false,
    },
  ]);
  console.log(setDetails);
  const addToCart = (val) => {
    alert("add to cart");
  };
  return (
    <>
      <Topnav />
      <br></br>
      <img src={MainImage} alt="" className={styles.main} />
      <br></br>
      <br></br>
      <center className={styles.Category}>Category</center>
      <br></br>
      <br></br>
      <div className={styles.box}>
        <div
          style={{
            padding: "50px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "10px",
          }}
        >
          <div className={styles.subbox}>
            <img src={Milk} alt="" className={styles.image} />
            <span
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Milk
            </span>
          </div>
          <div className={styles.subbox}>
            <img src={Curd} alt="" className={styles.image} />
            <span
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Curd
            </span>
          </div>
          <div className={styles.subbox}>
            <img src={Gee} alt="" className={styles.image} />
            <span
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Gee
            </span>
          </div>
          <div className={styles.subbox}>
            <img src={Paneer} alt="" className={styles.image} />
            <span
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Paneer
            </span>
          </div>
        </div>
      </div>
      <center>
        <h1>Products</h1>
      </center>
      <div className={styles.box}>
        <div
          style={{
            padding: "50px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "10px",
          }}
        >
          {Details.map((val, index) => {
            return (
              <div className={styles.subbox1} key={index}>
                <img src={Milk} alt="" className={styles.image} />
                <span
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <span>{`${val.category}(${val.volumn})`}</span>
                  <span>{`₹${val.price}`}</span>
                </span>
                <button
                  onClick={() => addToCart(val)}
                  className={styles.button}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
          {Details.map((val, index) => {
            return (
              <div className={styles.subbox1} key={index}>
                <img src={Milk} alt="" className={styles.image} />
                <span
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <span>{`${val.category}(${val.volumn})`}</span>
                  <span>{`₹${val.price}`}</span>
                </span>
                <button
                  onClick={() => addToCart(val)}
                  className={styles.button}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
          {Details.map((val, index) => {
            return (
              <div className={styles.subbox1} key={index}>
                <img src={Milk} alt="Milk" className={styles.image} />
                <span
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <span>{`${val.category}(${val.volumn})`}</span>
                  <span>{`₹${val.price}`}</span>
                </span>
                <button
                  onClick={() => addToCart(val)}
                  className={styles.button}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
          {Details.map((val, index) => {
            return (
              <div className={styles.subbox1} key={index}>
                <img src={Milk} alt="" className={styles.image} />
                <span
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <span>{`${val.category}(${val.volumn})`}</span>
                  <span>{`₹${val.price}`}</span>
                </span>
                <button
                  onClick={() => addToCart(val)}
                  className={styles.button}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.DownBox}>
        <div className={styles.Downtext}>
          <h1> QUICK LINK </h1>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              textDecorationLine: "none",
            }}
          >
            {" "}
            <span>&#9702;</span> Home
          </Link>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              textDecorationLine: "none",
            }}
          >
            {" "}
            <span>&#9702;</span> About
          </Link>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              textDecorationLine: "none",
            }}
          >
            {" "}
            <span>&#9702;</span> Products
          </Link>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              textDecorationLine: "none",
            }}
          >
            {" "}
            <span>&#9702;</span> Category
          </Link>
        </div>
        <div>
          <div className={styles.Downtext}>
            <h1>CONTACT US</h1>
            <span>&#9702; &#x260E; +91 5454554652</span>
            <span>&#9702; &#9993; arun@gmail.com</span>
          </div>
        </div>
        <div>
          <div className={styles.Downtext}>
            <h1>Address</h1>
            <span>
              &#9702; vysha college of arts and sciences <br></br> &nbsp; 4-5-12 chennai
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
