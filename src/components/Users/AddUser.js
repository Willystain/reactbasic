import React, { useState } from 'react'
import ButtonComp from '../UI/ButtonComp'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

export default function AddUser(props) {

    const [enteredUserName, setUsername] = useState('')

    const [enteredAge, setAge] = useState('')

    const [showError, setError] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        if(enteredAge.trim().length === 0 || enteredUserName.trim().length === 0){
          setError({
            title:"Input not Valid",
            message:"Please fill the form"
          })
        }
        if(+enteredAge < 1){
          return console.log('Please entere a number greater than 1')
        }
        // console.log(enteredUserName, enteredAge)
        props.adduser({name:enteredUserName, age:enteredAge})
        setAge('')
        setUsername('')
    }

    function changeuserName (event){
      setUsername(event.target.value)
    }
    
    function changeuserAge (event){
      setAge(event.target.value)
    }
    
    function handleClick(){
      console.log("apertou o botao")
      setError(false)
    }

  return (
    <div>
      {showError && <ErrorModal onConfirm={handleClick} title={showError.title} message={showError.message}/>}
      <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>username</label>
        <input id='username' type='text' value={enteredUserName} onChange={changeuserName}/>
        <label htmlFor='age'> Age(Years)</label>
        <input id='age' type='number' value={enteredAge} onChange={changeuserAge}/>
        <ButtonComp type='submit'>Add user</ButtonComp>
    </form>
    </Card>

    </div>
  )
}
