import React from 'react'
import SingleQuestion from './SingleQuestion'

const List = ({ question, register }) => {
    return (
        <fieldset>
            <legend><b>{question.title}</b></legend>
            {question.rows.map((row, index) => (
                <div key={index}>
                    
                        <label htmlFor={row.name ||""} >{row.title || ""}</label>
                        <input name={row.name || ""} 
                        key={index} 
                        type={row.type || ""}
                        required={question.required===false? false : true}
                        min={0} max={question.max}
                        {...register(row.name)}
                        />
                    
                    
                </div>

            ))}

        </fieldset>
    )
}

export default List
