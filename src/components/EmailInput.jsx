import React from 'react'

const EmailInput = ({question, register, watch, errors}) => {
  return (
    <div>
        <label htmlFor={question.name ? question.name : ''}>{question.title}</label>
        <input type={question.type || ''}
          name={question.name || ''}
          required={question.required === false ? false : true}
          {...register(question.name, {
            validate: (value) => {
              if (question.equalTo) {
                console.log(value === watch(question.equalTo) || "No coinciden")
                return value === watch(question.equalTo) || "No coinciden"
              }
            }

          }
          )}
        />
        {
          errors[question.name] && <span>{errors[question.name].message}</span>
        }
      </div>
  )
}

export default EmailInput
