import React from "react";
import ShoesCard from "./ShoesCard";
import data from "../../data.json";

const ShoesStore = () => {
  const renderShoesCard = () => {
    return data.map((item) => {
      return (
        <div className="col-4 my-2" key={item.id}>
          <ShoesCard detail={item} />
        </div>
      );
    });
  };
  return <div className="row">{renderShoesCard()}</div>;
};

export default ShoesStore;
