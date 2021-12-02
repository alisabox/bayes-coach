import { Metric } from '../../types/types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  metrics: Metric[];
}


const Chart = ({metrics}: ChartProps): JSX.Element => {
  const positiveMetrics = metrics.filter((item) => item.value >= 0).sort((a, b) => b.value - a.value);
  const negativeMetrics = metrics.filter((item) => item.value < 0).sort((a, b) => b.value - a.value);
  const labels = [...positiveMetrics, ...negativeMetrics].map((item) => item.metric);

  const options = {
    indexAxis: 'y' as const,
    barThickness: 15,
    scales: {
      yAxes: {
        grid:  {
          display:  false,
        }
      }
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  const data = {
    labels,
    datasets: [{
      data: labels.map((label) => positiveMetrics.find((item) => item.metric === label)?.value),
      borderColor: 'rgb(240, 85, 111, 1)',
      backgroundColor: 'rgba(240, 85, 111, 1)',
    },
    {
        data: labels.map((label) => negativeMetrics.find((item) => item.metric === label)?.value),
        borderColor: 'rgb(170, 208, 243, 1)',
        backgroundColor: 'rgba(170, 208, 243, 1)',
      }
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
	    height=''
      width=''
    />
  )
}

export default Chart;
