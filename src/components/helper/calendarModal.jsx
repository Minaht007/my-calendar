import React, { useState } from "react";
import styled from "styled-components";
import styles from "../helper/helper.module.scss";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import SvgIcon from "@mui/material/SvgIcon";
import CloseIcon from "@mui/icons-material/Close";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

import { SvgGenerater } from "../image/icons/SvgGeneraterSvgSelector";

const ModalOverlay = styled.div`
  display: flex;
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

const ModalBtmCloset = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  display: flex;
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

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const EventModal = ({ isOpen, onClose, onSave }, props) => {
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
    <>
      <ModalOverlay>
        <ModalContent className={styles.modalContent}>
          <ModalBtmCloset>
            <button>
              <SvgGenerater id={"cross"} className="flex justify-end" />
            </button>
          </ModalBtmCloset>
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
          <button onClick={onClose}>
            <CloseIcon icon="close" />
            Cancel
          </button>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default EventModal;
