import React from "react";

const Card = (props) => {
  const { detail, onViewDetail } = props;

  return (
    <div>
      <div className="card">
        <img src={detail.image} className="card-img-top" alt={detail.name} />
        <div className="card-body text-center">
          <h5 className="card-title fs-3">{detail.name}</h5>
          <div className="d-flex justify-content-center gap-4 pt-3">
            <button
              className="btn btn-primary fs-5"
              onClick={() => onViewDetail(detail)}
            >
              Xem chi tiết
            </button>
            <button className="btn btn-info fs-5">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
