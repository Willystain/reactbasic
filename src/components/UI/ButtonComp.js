import React from 'react'
import classes from './Button.module.css'





export default function ButtonComp(props) {
  return (
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
  )
}
