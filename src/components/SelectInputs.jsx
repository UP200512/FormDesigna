import React from 'react'

const SelectInputs = ({ question, register }) => {
  return (
    <div>
      <h3>{question.title}</h3>
      <select
        name={question.name}
        id={question.name}
        required={question.required===false? false : true}
        {...register(question.name)}
      >
        {question.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInputs
