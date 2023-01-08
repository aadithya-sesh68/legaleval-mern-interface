import Namedentity from "./Namedentity";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <Namedentity />
    </div>
  );
};

export default Home;