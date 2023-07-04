import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const navi = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      navi("/login");
    }
  });
  return (
    <div>
      <div className="header">
        <ul>
          <li>
            {" "}
            <Link to={"/login"}>Logout</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>

      <motion.div
        animate={{ scale: 0.8, x: [null, 100, 0] }}
        transition={{ ease: "easeOut", duration: 5 }}
      >
        <h1 className="hello">Welcome to BeetleAI</h1>
      </motion.div>
    </div>
  );
};

export default Home;
