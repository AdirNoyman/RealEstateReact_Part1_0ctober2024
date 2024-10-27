import './homePage.scss';
import SearchBar from '../components/searchbar/SearchBar';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            eveniet iusto aspernatur exercitationem magni.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <p>Years of experience</p>
            </div>
            <div className="box">
              <h2>200</h2>
              <p>Awards for excellence</p>
            </div>
            <div className="box">
              <h2>1200</h2>
              <p>Houses already sold</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
