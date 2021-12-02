import { State, Metric, Players } from '../types/types';

export const getPlayersSelector = (state: State): Players[] | undefined => state.players;
export const getMetricsSelector = (state: State): Metric[] | undefined => state.playerMetrics;
