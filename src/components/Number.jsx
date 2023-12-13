import React from 'react'

const Number = ({question, register}) => {
  return (
    <div>
        <h3>{question.title}</h3>
        <input type={question.type}
          name={question.name}
          id={question.name}
          required={question.required===false? false : true}
          max={question.max || ""}
          min={question.min || ""}
          step={question.step || ""}
          {...register(question.name)}
        />
      </div>
  )
}

export default Number
