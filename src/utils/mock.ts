import { name, datatype, lorem } from 'faker';
import { Players } from '../types/types';

const { number, float } = datatype;

export const getFakePlayers = (): Players => ({
  id: number(),
  player: {
    name: name.firstName(),
    score: float({ max: 10 }),
    number: number(40),
    club: lorem.word(2),
    img: 'img/playerpic.png',
  },
  metrics: Array(15).fill(null).map((item, index) => (
      {
        metric: `Метрика ${index}`,
        value: float({ min: -3, max: 3 }),
      }
    ))
})

