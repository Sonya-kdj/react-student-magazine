import React, { useState } from 'react'
import './StudentBlock.css'

const StudentBlock = ({ studentsArray }) => {
	const [selectedStudents, setSelectedStudents] = useState([])
	const [selectedDate, setSelectedDate] = useState('')

	const toggleSelection = studentId => {
		setSelectedStudents(prevSelectedStudents => {
			if (prevSelectedStudents.includes(studentId)) {
				return prevSelectedStudents.filter(id => id !== studentId)
			} else {
				return [...prevSelectedStudents, studentId]
			}
		})
	}

	const dateChange = event => {
		setSelectedDate(event.target.value)
	}

	const save = () => {
		const studentsData = studentsArray.map(student => ({
			id: student.id,
			event: selectedStudents.includes(student.id),
		}))

		console.log('Данные отправленные на сервер:', {
			students: studentsData,
			date: selectedDate,
		})
	}

	const studentElements = studentsArray.map(student => (
		<div className='checkbox_container' key={student.id}>
			<div className='student_wrap'>
				<p className='studentsList'>
					{student.first} {student.last}
				</p>
				<input
					type='checkbox'
					className='checkbox'
					checked={selectedStudents.includes(student.id)}
					onChange={() => toggleSelection(student.id)}
				/>
			</div>
		</div>
	))

	return (
		<div className='StudentContainer'>
			<div className='dateTime'>
				<input type='date' value={selectedDate} onChange={dateChange} />
			</div>
			{studentElements}
			<button className='btn' onClick={save}>
				Сохранить
			</button>
		</div>
	)
}

export default StudentBlock
