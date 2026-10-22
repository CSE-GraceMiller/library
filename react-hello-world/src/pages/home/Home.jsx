import Hero from "../../components/hero/Hero";
import MLBooks from "../../components/mlbooks/MLBooks";
import UpComing from "../../components/upcoming/UpComing";
import Spaces from "../../components/spaces/Spaces";

const Home = () => {
  return (
    <>
      <Hero />
      <MLBooks />
      <UpComing />
      <Spaces />
    </>
  );
};

export default Home;