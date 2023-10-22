import '../css/style.css';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    Tooltip,
    Legend
);

function Chart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                data: [2, 4, 6, 8, 4, 6, 2, 6, 8, 6, 8, 9],
                backgroundColor: ['aqua', 'red', 'purple', 'red', 'green', 'blue', 'yellow', 'cyan', 'gray', 'pink', 'orange', 'lime'],
                indexAxis: 'y'
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Monthly Data Chart',
                padding: {
                    top: 10
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.7',
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        return `Value: ${context.parsed.y}`;
                    }
                }
            }
        }
    };

    return (
        <div className='PieChart'
             style={{
                 padding: '20px',
                 width: '60%',
                 backgroundColor: 'white',
                 alignItems: 'center'
             }}
        >
            <Bar data={data} options={options} />
        </div>
    );
}

export default Chart;