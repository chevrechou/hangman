import React, {Component} from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    color: 'black',
    height:'0px',
    width: '100%',

    border:'black solid 2px',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: '50px',
      bottom:'50px',
      left:'8px',
      right:'8px',// jss-plugin-default-unit makes this 5px
// jss-plugin-default-unit makes this 5px

    },
    textAlign:'center',

  }
})

const Underscore = () => {
const style = useStyles();

 return (
   <div className={style.container}>
   </div>
 )
}
export default Underscore;
