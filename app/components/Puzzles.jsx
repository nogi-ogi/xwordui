import React from 'react';
import Puzzle from './Puzzle';
import Editable from './Editable';

export default ({puzzles, onPuzzleClick=() => {}, onEdit=() => {}, onDelete=() => {} }) => (
    <ul className="puzzles">{puzzles.map(({id,editing,a}) =>
	        <li key={id}>
	        	<Puzzle className="puzzle" onClick={onPuzzleClick.bind(null,id)}>
	        		<Editable
	        			className="editable"
	        			editing={editing}
	        			value={a}
	        			onEdit={onEdit.bind(null,id)} />
					<button className="delete" onClick={onDelete.bind(null,id)}>x</button>
				</Puzzle>
	        </li>
    	)}
    </ul>
)