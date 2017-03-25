import easy from './easy';
import medium from './medium';
import hard from './hard';
import veryHard from './very-hard';

export default {
  easy: easy,
  medium: medium ,
  hard: [...hard, ...veryHard]
}