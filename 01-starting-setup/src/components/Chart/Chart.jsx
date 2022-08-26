import ChartBar from './ChartBar';
import './Chart.scss';

const Chart = (props) => {
	const valArr = props.dataPoints.map((dataPoint) => dataPoint.value);
	const maxValue = Math.max(...valArr);
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					label={dataPoint.label}
					value={dataPoint.value}
					maxValue={maxValue}
				/>
			))}
		</div>
	);
};
export default Chart;
