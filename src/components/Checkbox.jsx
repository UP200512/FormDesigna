import React from 'react'

const Checkbox = ({ question, register }) => {
    return (
        <div>
            <label htmlFor={question.name}>{question.title}</label>
            {question.options.map((option, index) => (
                <div key={index}>
                    <input
                    
                        type={question.type || ''}
                        name={question.name || ''}
                        required={question.required===false? false : true}
                        id={question.name || ''}
                        {...register(question.name)}
                        placeholder={option}
                    />{option}
                </ div>


            ))}

        </div>
    )
}

export default Checkbox
