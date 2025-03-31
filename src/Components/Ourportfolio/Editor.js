import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Editor = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handlePortClose = () => setShowPortfolio(false);
  const handlePortShow = () => setShowPortfolio(true);
  return (
    <div>
      <Button variant="primary" onClick={handlePortShow}>
        Launch demo modal
      </Button>

      <Modal show={showPortfolio} onHide={handlePortClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePortClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePortClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
