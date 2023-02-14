import React from 'react'
import Card from './Card'
import classes from './UserList.module.css'

const checkUserAge = (age) => {
    if(age < 21){
        return "menor de idade"
    }
    else{
        return "Maior de Idade"
    }
}

export default function UserList(props) {
  return (
    <Card className={classes.users}>
    <ul>
        {props.users.map(user =>
            <li key={user.id}>
                
                {user.name} ({user.age} {checkUserAge(user.Age)})
        
            </li>
        )}
    </ul>
    </Card>
  )
}
