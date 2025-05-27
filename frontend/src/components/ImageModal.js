import React from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/ImageModal.css';

const ImageModal = ({ show, onHide, image }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="image-modal"
    >
      <Modal.Header closeButton className="border-0">
      </Modal.Header>
      <Modal.Body className="p-0">
        <img src={image} alt="Enlarged menu item" className="modal-image" />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal; 