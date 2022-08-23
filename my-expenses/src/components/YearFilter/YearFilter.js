import Select from 'react-select';
import './YearFilter.scss';

export default function YearFilter({ filterByYear }) {
	const options = [
		{ value: 2022, label: 2022 },
		{ value: 2021, label: 2021 },
		{ value: 2020, label: 2020 },
	];

	const handleFilter = (e) => {
		filterByYear(e.value);
	};
	return (
		<div className='year-filter'>
			<span>Filter by year</span>
			<Select
				name='year'
				defaultValue={options[0]}
				isSearchable={false}
				className='year-filter__select'
				options={options}
				onChange={handleFilter}
			/>
		</div>
	);
}

// export default YearFilter;
