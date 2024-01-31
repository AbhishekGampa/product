import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import styles from "./style.module.css";

function Topnav() {
  return (
    <div className={styles.main}>
      <div>
        <img src={Logo} alt="MilkImage" style={{ width: "80px" }} />
      </div>
      <div className={styles.nav}>
        <Link to={"/"} style={{textDecoration:"none",color:"black"}}>Home</Link>
        <Link to={"/about"} style={{textDecoration:"none",color: "black"}}>About</Link>
        <Link to={"/products"} style={{textDecoration:"none",color: "black"}}>Products</Link>
        <Link to={"/category"} style={{textDecoration:"none",color: "black"}}>Category</Link>
        <Link to={"/addtocart" } style={{textDecoration:"none",color: "black"}}> AddToCart</Link>
      </div>
    </div>
  );
}

export default Topnav;
