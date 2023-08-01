import React, { useState } from "react";
import styled from "styled-components";
import styles from "../helper/helper.module.scss";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const EventModal = ({ isOpen, onClose, onSave }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleSave = () => {
    onSave({ title: eventTitle, description: eventDescription });
    setEventTitle("");
    setEventDescription("");
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent className={styles.modalContent}>
        <h2>Add Event</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Event Description"
          value={eventDescription}
          onChange={handleDescriptionChange}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EventModal;
