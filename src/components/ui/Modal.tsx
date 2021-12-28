import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({
  title,
  show,
  handleClose,
  youtubeUri,
}: {
  show: boolean;
  handleClose: (show: boolean) => any;
  title: string;
  youtubeUri: string;
}) => {
  return (
    <>
      <Modal dialogClassName="CustomModal" show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="CustomModal_trailer">
            <h1 className="CustomModal_title">Video is comming soon</h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(show)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { CustomModal };
