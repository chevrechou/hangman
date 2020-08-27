import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Word from './Word';
import Underscore from './Underscore';
import Letter from './Letter';
import Button from '@material-ui/core/Button';

var isAlpha = function(ch){
  return /^[A-Z]$/i.test(ch);
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      secretWord:["p","a","t","a", "t", "e"],
      currWord:['-','-','-','-','-','-'],
      correct:0,
      wrong:[],
    }
  }
  addLetter = (letter) =>{
    this.setState({
      currWord:this.state.currWord+letter
    })
  }
  checkWord = () => {
    if ( this.state.correct==this.state.secretWord.length){

      return true;
    }else{
      return false;
    }

  }
  checkLetter=(letter) => {
    // empty string separator
    var str=this.state.secretWord;
    if (str.includes(letter)){
      // console.log('correct');
      return (str.indexOf(letter)).toString();
    }else{
      if(letter != "{space}" && ! (this.state.wrong.includes(letter))){
        this.setState(prevState => ({
          wrong: [...prevState.wrong, letter]
        }))
      }
      return false;
    }


  }

  onKeyPress = (button) => {
    var done=false
    while (!done){
      var c=this.checkLetter(button)
      if (c){
        var new_word=this.state.currWord;
        new_word[c]=button;
        var updatedSecretWord=this.state.secretWord;
        updatedSecretWord[c]="-";
        this.setState({
          currWord:new_word,
          secretWord:updatedSecretWord,
          correct:this.state.correct+1
        })
      }
      else{
        done=true;
      }
    }

  }
  onKeyUp(event) {
    if (event.key === "Enter") {
      this.setState({ inputValue: event.target.value });
    }
    console.log(event.key);
  }

  render(){
    const {secretWord, correct,currWord, wrong} = this.state;
    const items = [];
    const wrong_items=[];
    const length=secretWord.length;

  for (let i=0; i<length; i++){
     if (isAlpha(currWord[i])){
       items.push(<Letter letter={currWord[i]} />);
     }else{
       items.push(<Underscore/>)
     }
   }
   for (let i=0; i<wrong.length; i++){

      wrong_items.push(<Letter letter={wrong[i]} />);

    }
   const win=this.checkWord();
   console.log(win);
    return (
      <div onKeyPress={this.onKeyUp}>
        <div className="flexbox-container">{items} </div>

        <div className="keyboard">
          <Keyboard
          onKeyPress={this.onKeyPress}  />

          {win?
            <div className="win"> You Win !</div>:
            <div> GUESSED LETTERS:
              <div className="flexbox-container-guessed">{wrong_items} </div>
            </div>

          }
        </div>
        <div className="button" >
          <Button  variant="contained" color="primary">
            Play again with a new word
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
