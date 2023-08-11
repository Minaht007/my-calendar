import React, { useState } from "react";
import styled from "styled-components";
import styles from "../helper/helper.module.scss";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import { SvgGenerater } from "../image/icons/SvgGeneraterSvgSelector";

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

  const icons = ["cross", "disc-2"];

  return (
    <ModalOverlay>
      <ModalContent className={styles.modalContent}>
        <h2>Add Event</h2>

        <FormControl variant="standard" className="w-[80%]">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            className="w-[100%] justify-center align-center"
            id="component-simple"
            defaultValue=""
          />
        </FormControl>

        <div className="mt-5 w-[90%] flex justify-around mb-5 ">
          <TextField
            className="w-[40%] mr-4 pl-9 pr-9"
            id="time"
            label="Start"
            type="time"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className="w-[40%] mr-4 pl-9 pr-9"
            id="time"
            label="End"
            type="time"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <TextField
          className="w-[80%] "
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>

        <button>
          <SvgGenerater id={icons["cross"]} />
        </button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EventModal;
