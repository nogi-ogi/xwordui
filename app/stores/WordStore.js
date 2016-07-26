import uuid from 'uuid';
import WordActions from '../actions/WordActions';

export default class WordStore {
  constructor() {

    this.bindActions(WordActions);

    this.puzzles = [
      { id: uuid.v4(), d:'', n:'', x:'', y:'', a:"REPEATS", c:'' },
      { id: uuid.v4(), d:'', n:'', x:'', y:'', a:"NINES", c:'' },
      { id: uuid.v4(), d:'', n:'', x:'', y:'', a:"DIAL", c:'' },
      { id: uuid.v4(), d:'', n:'', x:'', y:'', a:"ASTRONOMER", c:'' },
      { id: uuid.v4(), d:'', n:'', x:'', y:'', a:"WEIGHING", c:''}
    ];
  }

  create(word){
    this.setState({
      puzzles: this.puzzles.concat(word)
    });
  }

  update(updatedWord){
    this.setState({
      puzzles: this.puzzles.map(word => {
        if(word.id === updatedWord.id) {
          return Object.assign({}, word, updatedWord);
        }

        return word;
      })
    });
  }
  
  delete(id) {
    this.setState({
      puzzles: this.puzzles.filter(word => word.id !== id)
    });
  }
}