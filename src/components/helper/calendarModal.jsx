import React, { useContext, useState } from "react";
import styled from "styled-components";
import styles from "../helper/helper.module.scss";
import TextField from "@mui/material/TextField";
import { DateField } from "@mui/x-date-pickers/DateField";

import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import CloseIcon from "@mui/icons-material/Close";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { lightGreen } from "@mui/material/colors";
import { CalendarContext } from "../context/contextWrapper";
import { format } from "date-fns";

import { nanoid } from "nanoid";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";

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

const ModalContent = styled.div`
  position: relative;

  background-color: rgb(250, 249, 230);

  border-radius: 8px;
  @media screen and (max-width: 400px) {
    width: 95vw;
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
  const { currentDay } = useContext(CalendarContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskComment, setTaskComment] = useState("");

  const id = nanoid();

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleTaskCommentChange = (e) => {
    setTaskComment(e.target.value);
  };

  const handleSave = async () => {
    const docRef = doc(db, "calendar", "task");
    const docSnap = await getDoc(docRef);
    await setDoc(doc(db, "calendar", "task1"), {
      task1: {
        id: id,
        name: taskTitle,
        startTime: startTime,
        endTime: endTime,
        textTask: taskComment,
      },
    });
    onClose();
  };

  if (!isOpen) return null;

  const formattedCurrentDay = format(currentDay, "MMMM dd, EEEE");

  return (
    <>
      <ModalOverlay>
        <ModalContent className={styles.modalContent}>
          <input
            type="text"
            value={formattedCurrentDay}
            className="bg-[rgb(250, 249, 230)] w-[80%] p-2 rounded-md "
            style={{
              backgroundColor: "rgb(250, 249, 230)",
            }}
          />
          <FormControl variant="standard" className="w-[80%]">
            <InputLabel htmlFor="title">Task title</InputLabel>
            <Input
              className="w-[100%] justify-center align-center"
              id="title"
              value={taskTitle}
              onChange={handleTitleChange}
            />
          </FormControl>
          <div className="mt-8 w-[90%] flex justify-around mb-10 ">
            <TextField
              className="w-[40%] mr-4 "
              id="time"
              label="Start"
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className="w-[40%] mr-4 "
              id="time"
              label="End"
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <TextField
            className="w-[80%]"
            id="outlined-textarea"
            label="Task comment"
            placeholder="type the task"
            multiline
            value={taskComment}
            onChange={handleTaskCommentChange}
          />
          <button onClick={handleSave} className="pt-10 pb-6 ">
            {" "}
            <AddTaskIcon fontSize="large" sx={{ color: lightGreen[500] }} />
          </button>
          <button onClick={onClose} className="absolute top-3 right-3 ">
            <CloseIcon
              icon="close"
              className=" text-emerald-600  hover:bg-red-500  scale: 1.5 rounded-full"
            />
          </button>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default EventModal;
