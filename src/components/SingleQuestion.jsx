import React from 'react'
import SelectInputs from './SelectInputs'
import Number from './Number'
import Text from './Text'
import List from './List'
import Checkbox from './Checkbox'
import TableQuestion from './TableQuestion'
import EmailInput from './EmailInput'



function SingleQuestion({ question, register, watch, errors }) {
  // console.log(errors)
  switch (question.type) {
    case 'select': return <SelectInputs question={question} register={register} />
    case 'number': return <Number question={question} register={register} />
    case 'text': return <Text question={question} register={register} />
    case 'list': return <List question={question} register={register} />
    case 'checkbox': return <Checkbox question={question} register={register} />
    case 'table': return <TableQuestion question={question} register={register} />
    case 'email': return <EmailInput question={question} register={register} errors={errors} watch={watch} />

    default: return (
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




}

export default SingleQuestion
