import React, { useState } from "react";
import styled from "styled-components";
import styles from "../helper/helper.module.scss";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

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
  @media screen and (max-width: 400px) {
    width: 60vw;
    padding: 10px 16px;
  }
  @media screen and (min-width: 401px) and (max-width: 767px) {
    width: 56vw;
    padding: 20px 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 40vw;
    padding: 30px 16px;
  }
  @media screen and (min-width: 1201px) and (max-width: 1900px) {
    width: 30vw;
    padding: 30px 16px;
  }
  @media screen and (min-width: 1901px) {
    width: 44vw;
    padding: 30px 16px;
  }
`;

const EventModal = ({ isOpen, onClose, onSave }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedTime, setSelectedTime] = useState(new Date());

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

        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" defaultValue="" />
        </FormControl>

        {/* <TextField
          id="outlined-multiline-flexible"
          label="title task"
          multiline
          maxRows={2}
          size="small"
        /> */}

        <div>
          <TextField
            id="time"
            label="Start"
            type="time"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="End"
            type="time"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

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
