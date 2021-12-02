import { InitialState } from '../types/types';
import { createReducer } from '@reduxjs/toolkit';
import { getPlayers, getMetrics } from './actions';

export const initialState: InitialState = {
  players: undefined,
  playerMetrics: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPlayers, (state, action) => {
      state.players = action.payload.players;
    })
    .addCase(getMetrics, (state, action) => {
      state.playerMetrics = action.payload.metrics;
    });
});
