import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCorrectAnswer,
  removeOption,
  setCorrectAnswer,
} from "../redux/Actions/actionCreators";
const DisplayOptions = ({ answers, id }) => {
  const [btn, setBtn] = useState(false);
  const dispatch = useDispatch();

  const btnHandler = () => {
    
    setBtn(!btn);
    console.log(btn);
    btn
      ? dispatch(removeCorrectAnswer(id))
      : dispatch(setCorrectAnswer({ answers, id: id }));
  };
  const removeHandler = () => {
    dispatch(removeOption({ answers }));
  };

 

  return (
    <div className="displayAnswers">
      <p>{answers}</p>
      <div className="">
        <i onClick={btnHandler} className={btn ? "activeBtn" : "inactive"}>
          {btn ? <RxCross2 /> : <TiTick />}
        </i>
        <i onClick={removeHandler}>
          <FaTrashAlt />
        </i>
      </div>
    </div>
  );
};

export default DisplayOptions;
