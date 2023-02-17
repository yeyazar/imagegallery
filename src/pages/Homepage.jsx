import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  /*   console.log(data); */
  return (
    <div className="Homepage">
      <h1 className="title">Albums</h1>
      <div className="everypic">
        {data.map((item) => {
          return (
            <div>
              <Picture item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
