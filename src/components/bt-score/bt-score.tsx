import Chart from '../chart/chart';
import { PlayerBio } from '../../types/types';
import { useSelector } from 'react-redux';
import { getMetricsSelector } from '../../store/selectors';

type BtScoreProps = {
  playerData: PlayerBio;
}

const BtScore = ({playerData}: BtScoreProps): JSX.Element => {

  const metrics = useSelector(getMetricsSelector);

  return (
      <div className="bt-score__result">
          <div className="bt-score__result-header">
              <h3 className="bt-score__result-title">Значимость каждого показателя в расчете оценки игрока</h3>
              <div className="bt-score__result-bio">
                  <p className="bt-score__result-bio__score">{playerData.score}</p>
                  <div className="bt-score__result-bio__left">
                      <p className="bt-score__result-bio__name">{playerData.name}</p>
                      <div className="bt-score__result-bio__club">
                          <p>{playerData.club.toUpperCase()}</p>
                          <img src="img/flag_of_argentina.jpg" width="12" height="8" alt="" />
                      </div>
                  </div>
                  <div className="bt-score__result-bio__right">
                      <p className="bt-score__result-bio__number">{playerData.number}</p>
                      <img className="bt-score__result-bio__pic" src={playerData.img} width="47" height="59"alt="" />
                  </div>
              </div>
              <a href="#/" className="bt-score__result-bio__download">
                  <img src="img/icons/download_white.svg" width="18" height="22" alt="" />
              </a>
          </div>
          <div className="bt-score__result-chart">
              {
                metrics 
                  ? <Chart metrics={metrics}/>
                  : ''
              }
          </div>
      </div>
  )
}

export default BtScore;