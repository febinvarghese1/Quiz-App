import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewOption } from "../redux/Actions/actionCreators";

const AnswerOptions = () => {
 const [answerOption,setAnswerOption] = useState("");


 const dispatch = useDispatch();
  const submitHandler = e =>{
    e.preventDefault();
    if(answerOption === '') return;
      dispatch(addNewOption(answerOption));
      setAnswerOption("");
  }


  return (
    <div className="answer__container_input">
      <form onSubmit={submitHandler}>
      <input value={answerOption}  onChange={e=> setAnswerOption(e.target.value)} placeholder="add New Option" />
      </form>
    </div>
  );
};

export default AnswerOptions;
