import React from "react";
import Sidebar from "./../components/elements/Sidebar";

const Home = () => {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users?username=dayen&password=123456")
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div className="text-3xl">
      <Sidebar />
    </div>
  );
};

export default Home;
