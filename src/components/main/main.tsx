import { memo, MouseEvent } from 'react';
import './main.scss';
import MainNav from '../main-nav/main-nav';
import BtScore from '../bt-score/bt-score';
import { Players } from '../../types/types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayersSelector } from '../../store/selectors';
import { fetchMetrics } from '../../store/api-actions';

const Main = (): JSX.Element => {
  const players = useSelector(getPlayersSelector);
  const [player, setPlayer] = useState<Players | undefined>(undefined);

  const dispatch = useDispatch();

  const inputHandler = (evt: MouseEvent<HTMLInputElement>) => {
    const id: number = parseInt(evt.currentTarget.value, 10);
    dispatch(fetchMetrics(0, id));
    const selectedPlayer = players?.find((player) => player?.id === id)
    setPlayer(selectedPlayer);
  }

  return (
    <main className="main">
        <div className="main-wrapper">
            <MainNav />
            <section className="bt-score">
                <form className="bt-score__form" action="">
                    <p className="bt-score__form-title">Выбрать игрока</p>
                    {
                      players?.map((player) => (
                        <div className="bt-score__form-group" key={player.id}>
                            <input type="radio" id={player.player.name} name="player" value={player.id} onInput={inputHandler}/>
                            <label htmlFor={player.player.name}>{player.player.name}</label>
                            <p>{player.player.score}</p>
                        </div>
                      ))
                    }
                </form>
                {
                  player
                    ? <BtScore playerData={player.player} />
                    : 'Выберите игрока'
                }
            </section>
        </div>
    </main>
  )
}
export default memo(Main);