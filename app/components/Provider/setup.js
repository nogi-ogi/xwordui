import WordStore from '../../stores/WordStore';
import GridStore from '../../stores/GridStore';

export default alt => {
  alt.addStore('WordStore', WordStore);
  alt.addStore('GridStore', GridStore);
}