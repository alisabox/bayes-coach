import { Action } from 'redux';
import { ThunkAction}  from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { reducer } from '../store/reducer';

export type PlayerBio = {
  name: string;
  score: number;
  number: number;
  club: string;
  img: string;
}

export type Metric = {
  metric: string;
  value: number;
}

export type Players = {
  id: number;
  player: PlayerBio;
  metrics: Metric[];
}

export type InitialState = {
  players?: Players[],
  playerMetrics?: Metric[],
}

export type State = ReturnType<typeof reducer>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;