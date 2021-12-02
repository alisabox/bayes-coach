import { createAction } from '@reduxjs/toolkit';
import { Players, Metric } from '../types/types';
import { ActionType } from '../utils/const';

export const getPlayers = createAction(
  ActionType.GetPlayers,
  (players: Players[]) => ({
    payload: {
      players,
    },
  }),
);

export const getMetrics = createAction(
  ActionType.GetMetrics,
  (metrics: Metric[]) => ({
    payload: {
      metrics,
    },
  }),
);