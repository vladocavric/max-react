import './ChartBar.scss';

const ChartBar = (props) => {
	let chartBarFillHight = '0%';
	if (props.maxValue > 0) {
		chartBarFillHight = `${Math.round((props.value / props.maxValue) * 100)}%`;
	}
	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: chartBarFillHight }}></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</div>
	);
};

export default ChartBar;
