import './Checkbox.css'

const Checkbox = ({ studentsArray, datesArray }) => {
	const saveDateElements = datesArray[0].map((stats, i) => {
		
		return (
			<div className='statWrapper'>
				<p className='saveDate'>{stats.date}</p>
				<>
					{studentsArray.map(student => (
						<div className='checkbox_container'>
							<div className='checkbox_wrap'>
								<input
									type='checkbox'
									className='checkbox'
									checked={student.stats[i].value}
								></input>
							</div>
						</div>
					))}
				</>
			</div>
		)
	})

	

	return <>{saveDateElements}</>
}

export default Checkbox
