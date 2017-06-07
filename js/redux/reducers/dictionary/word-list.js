import movies from './movies';
import idioms from './idioms';
import medium from './medium';
import hard from './hard';
import veryHard from './very-hard';

export default {
  Movies: movies,
  Idioms: idioms,
  Things: [...hard, ...veryHard, medium]
};
