/**
 * Created by Dan on 2017-02-05.
 */

import type { Action } from './types';

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const GENERATE_WORD = 'GENERATE_WORD';


export function setDifficulty(difficulty):Action {
    return {
        type: SET_DIFFICULTY,
        difficulty: difficulty
    };
}

export function generateWord():Action {
    return {
        type: GENERATE_WORD,
    };
}
