import React from "react";

const DetailModal = ({ content, onClose }) => {
  if (!content) return null;
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-3">{content.name}</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body ">
            <img
              style={{ height: "350px" }}
              src={content.image}
              className="img-fluid"
            />
            <p className="fs-4">
              <strong>Giá:</strong> ${content.price}
            </p>

            <p className="fs-4">
              <strong>Mô tả:</strong> {content.description}
            </p>
            <p className="fs-4">
              <strong>Tồn kho:</strong> {content.quantity}
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary fs-5" onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
