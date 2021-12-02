import { getPlayers, getMetrics } from './actions';
import { Players, Metric, ThunkActionResult } from '../types/types';
import { getFakePlayers } from '../utils/mock';

const fakePlayers: Players[] = Array(15).fill(null).map(item => getFakePlayers());

export const fetchPlayers = (game_id: number, team_id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Players[]>(`/games/${game_id}/lineup/?team_id=${team_id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(fakePlayers);
    dispatch(getPlayers(fakePlayers));
  };


export const fetchMetrics = (game_id: number, team_id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Metric[]>(`/stats/features/?game_id=${game_id}&team_id=${team_id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    const metrics = fakePlayers.find((item) => item.id === team_id)?.metrics;
    if (metrics) {
      dispatch(getMetrics(metrics));
    }
  };