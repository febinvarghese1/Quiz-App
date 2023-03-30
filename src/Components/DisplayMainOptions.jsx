import React from "react";

const DisplayMainOptions = ({option,correctAnswerOption}) => {
  console.log(correctAnswerOption)
  return (
    <>
      <span className={correctAnswerOption.includes(option) ? "greenBorder":"redBorder"}>{option}</span>
    </>
  );
};

export default DisplayMainOptions;
