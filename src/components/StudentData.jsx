import { useLoaderData } from 'react-router-dom'
import Checkbox from './Checkbox'
import StudentBlock from './StudentBlock'
import './StudentData.css'

const StudentData = () => {
	const data = useLoaderData()
	// console.log(data)

	return (
		<div className='dataWrapper'>
			<div className='studentBlock'>
				<StudentBlock studentsArray={data[0]} />
			</div>
			<>
				<Checkbox datesArray={data[1]} studentsArray={data[0]} />
			</>
		</div>
	)
}

export default StudentData
