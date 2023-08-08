import React from "react";
import styled from "styled-components";
// import {
//   addDoc,
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   query,
//   setDoc,
//   updateDoc,
//   where,
// } from "firebase/firestore";
// import { db } from "../../../firebase.config";

const DivWraper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #545151;
  color: #f5f7f6;
  padding: 16px;
`;

const TextWrapper = styled.span`
  font-size: 32px;
`;
const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;
const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const BtnWrapper = styled.button`
  border: unset;
  background-color: #c4c0c0;
  height: 24px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
  outline: unset;
`;

const TodayBtm = styled(BtnWrapper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
`;

const PeriodMonitor = ({
  month,
  year,
  prevHandelMonth,
  todayCurrentMonth,
  nextHandelMonth,
}) => {
  // const handlerClick = async () => {
  //   const docRef = doc(db, "tasks", "task1");
  //   const docSnap = await getDoc(docRef);
  //   await setDoc(doc(db, "tasks", "task1"), {
  //     task1: {
  //       name: "test",
  //       time: "12:00",
  //     },
  //   });
  // };
  return (
    <DivWraper>
      <div>
        <TitleWrapper>{month}</TitleWrapper>
        <TextWrapper>{year}</TextWrapper>
      </div>
      {/* <button
        onClick={() => {
          handlerClick();
        }}
      >
        Test
      </button> */}
      <BtnsWrapper>
        <BtnWrapper onClick={prevHandelMonth}> &lt; </BtnWrapper>
        <TodayBtm onClick={todayCurrentMonth}>Today</TodayBtm>
        <BtnWrapper onClick={nextHandelMonth}> &gt; </BtnWrapper>
      </BtnsWrapper>
    </DivWraper>
  );
};

export default PeriodMonitor;
