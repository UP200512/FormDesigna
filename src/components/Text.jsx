import React from 'react'

const Text = ({question, register}) => {
  return (
    <div>
        <h3>{question.title}</h3>
        <input type={question.type || ''}
          name={question.name || ''}
          required={question.required===false? false : true}
          id={question.name || ''}
          // placeholder={question.name?.toUpperCase()}
          {...register(question.name)}
        />
      </div>
  )
}

export default Text
