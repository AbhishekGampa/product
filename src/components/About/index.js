import Topnav from "../../Topnav";
import AllProducts from "../../images/dairyproducts.png";

function About() {
  return (
    <div>
      <Topnav />
      <img src={AllProducts} alt="AllProducts" style={{ width: "100%" }} />
      <center>
        <h2 className="text-center mt-5">About Our Products</h2>
        <p style={{textAlign:"justify",padding:"5px"}}>
          Lorem ipsum dolor sit amet consectetu adipisicing elit. Quasi, quae!
          Voluptates eaque nesciunt voluptatum ipsam dolorum accusantium
          laboriosam excepturi explicabo aspernatur? Labore, temporibus.
          Quisquam repudiandae, est qui veritatis aliquid fugiat velit
          architecto cumque quod expedita unde laudantium, magnam atque
          necessitatibus in cul
        </p>
      </center>
    </div>
  );
}

export default About;
