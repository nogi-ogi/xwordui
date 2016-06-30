import React from 'react';
import Puzzles from './Puzzles';
import uuid from 'uuid';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
  			puzzles: [
    			{ id: uuid.v4(), d:'', n:'', x:'', y:'', a:"REPEATS", c:'' },
    			{ id: uuid.v4(), d:'', n:'', x:'', y:'', a:"NINES", c:'' },
    			{ id: uuid.v4(), d:'', n:'', x:'', y:'', a:"DIAL", c:'' },
    			{ id: uuid.v4(), d:'', n:'', x:'', y:'', a:"ASTRONOMER", c:'' },
    			{ id: uuid.v4(), d:'', n:'', x:'', y:'', a:"WEIGHING", c:''}
        ]
  		};
  	}

  	render() {
  		const {puzzles} = this.state;

  		return (
  			<div>
  				<button className="add-puzzle" onClick={this.addPuzzle}>Add a word</button>
  				<Puzzles 
            puzzles={puzzles}
            onPuzzleClick={this.activatePuzzleEdit}
            onEdit={this.editPuzzle} 
            onDelete={this.deletePuzzle} 
          />
          <button className="grow-words" onClick={() => console.log('find moar words')}> Grow word list (Useless button atm) </button>
  			</div>
  		);
  	}

  	addPuzzle = () => {
  		this.setState({
  			puzzles: this.state.puzzles.concat([{
  				id: uuid.v4(),
  				a: "new word"
  			}])
  		});
  	}

  	deletePuzzle = (id, e) => {
  		e.stopPropagation();

  		this.setState({
  			puzzles: this.state.puzzles.filter(puzzle => puzzle.id !== id)
  		});
  	}

    activatePuzzleEdit = (id) => {
      this.setState({
        puzzles: this.state.puzzles.map(puzzle => {
          if(puzzle.id === id){
            puzzle.editing = true;
          }

          return puzzle;
        })
      })
    }

    editPuzzle = (id,a) => {
      this.setState({
        puzzles: this.state.puzzles.map(puzzle => {
          if(puzzle.id === id){
            puzzle.editing = false;
            puzzle.a = a;
          }

          return puzzle;
        })
      })
    }
}