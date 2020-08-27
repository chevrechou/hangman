import React, {Component} from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    color: 'green',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: '50px',
      bottom:'50px',// jss-plugin-default-unit makes this 5px

    },
    textAlign:'center',

  }
})

const Word = ({word}) => {
  const style = useStyles()

 return (
   <div className={style.container}>
     {word}
   </div>
 )
}
export default Word;
