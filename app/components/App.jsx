import React from 'react';
import Puzzles from './Puzzles';
import uuid from 'uuid';
import connect from '../libs/connect';
import WordActions from '../actions/WordActions';

class App extends React.Component {
  	render() {
      const {puzzles} = this.props;
      console.log(this.props);

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
  		this.props.WordActions.create({
  			id: uuid.v4(),
  			a: "new word"
  		});
  	}

  	deletePuzzle = (id, e) => {
  		e.stopPropagation();

  		this.props.WordActions.delete(id);
  	}

    activatePuzzleEdit = (id) => {
      this.props.WordActions.update({id, editing: true});
    }

    editPuzzle = (id,a) => {
      const {WordActions} = this.props;
      WordActions.update({id, a, editing: false});
    }
}

export default connect(({puzzles}) => ({
  puzzles
}), {
  WordActions
})(App)