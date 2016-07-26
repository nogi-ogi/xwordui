import GridActions from '../actions/GridActions';

export default class GridStore {
  constructor() {
    this.bindActions(GridActions);

    this.grid = [['a', 'b', 'c'],
    			['d', 'e', 'f'],
    			['g', 'h', 'i']
    ];
  }

  create(row) {
    this.setState({
      grid: this.grid.concat(row)
    });
  }
}