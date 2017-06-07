import movies from './movies';
import idioms from './idioms';
import medium from './things/medium';
import hard from './things/hard';
import veryHard from './things/very-hard';

export default {
  Movies: movies,
  Idioms: idioms,
  Things: [...medium, ...hard, ...veryHard]
};
