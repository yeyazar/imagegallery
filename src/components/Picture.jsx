const Picture = ({ item }) => {
  console.log(item);

  return (
    <div className="pictures">
      <div className="image-container">
        <img className="imager" src={item.src.large} alt="" />
      </div>

      <h2 className="person">{item.photographer}</h2>
    </div>
  );
};

export default Picture;
