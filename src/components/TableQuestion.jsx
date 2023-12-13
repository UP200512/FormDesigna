import React from 'react'
import SingleQuestion from './SingleQuestion'

const TableQuestion = ({ question, register }) => {
    return (
        <div>
            <h3>{question.title}</h3>

            <table>
                <tbody>
                    {question.rows.map((row, index) => (
                        <tr key={index} >
                            <td>{row.title}</td>
                            <td><SingleQuestion register={register} question={row} /></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            
        </div>
    )
}

export default TableQuestion
