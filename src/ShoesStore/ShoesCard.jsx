import React from "react";

const ShoesCard = (props) => {
  console.log("props", props);
  const { detail } = props;
  return (
    <div>
      <div className="card">
        <img src={detail.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{detail.name}</h5>
          <p className="card-text">{detail.description}</p>
          <a href="#" className="btn btn-primary">
            {detail.price}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
