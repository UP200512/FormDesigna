import React, { useEffect } from 'react'
import { TutorFormData } from "./assets/TutorFormData"
import { useState } from 'react';
import SingleQuestion from './components/SingleQuestion';
import './App.css'

import { useForm } from 'react-hook-form';

function App() {

  const [current, setCurrent] = useState(0);



  const ListOfQuestions = TutorFormData();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    current == ListOfQuestions.length - 1 ? setCurrent(current) : setCurrent(current + 1)
  })
  // console.log([current])

  return (
    <div className='principal'>
      {ListOfQuestions ? (
        <section>
          <h1>{ListOfQuestions[current].section} {ListOfQuestions[current].validate} </h1>
          <form onSubmit={onSubmit} >
            {ListOfQuestions[current].questions.map((question, index) => (
              <div key={index}>
                {(!question.hideField || !question.condition) ||
                  (question.hideField && question.condition && watch(question.hideField) === question.condition) ? (
                  <div>
                    <SingleQuestion question={question} register={register} watch={watch} errors={errors} />
                    <div dangerouslySetInnerHTML={{ __html: question.extra }} />
                  </div>


                ) : null}

              </div>

            ))}
            <button onClick={(e) => {
              e.preventDefault()
              current == 0 ? setCurrent(current) : setCurrent(current - 1)
            }} >Atras</button>
            <button type='submit'
            >Siguiente</button>
          </form>
          
          {/* <pre>
            {JSON.stringify(watch(), null, 2)}
          </pre> */}
          {console.log(watch())}
        </section>
      ) : <h1>No hay preguntas disponibles</h1>}
    </div>
  )
}

export default App
