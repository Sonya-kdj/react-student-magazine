import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GroupBlock from './components/GroupBlock'
import StudentBlock from './components/StudentBlock'
import Checkbox from './components/Checkbox'
import StudentData from './components/StudentData'

let url =
	'https://my-json-server.typicode.com/kosipov/1425-iro-placeholder-api/disciplines'
const response = await fetch(url)
const data = await response.json()

const groupArray = []
const studentsArray = []

data.forEach(group => {
	groupArray.push({ id: group.id, title: group.title, name: group.group })
})

data.forEach(group => {
	group.students.forEach(student => {
		studentsArray.push({
			id: student.id,
			first: student.firstName,
			last: student.lastName,
			stats: student.stats,
		})
	})
})
const datesArray = studentsArray.map(student => {
	return student.stats
})
// console.log(datesArray)

const router = createBrowserRouter([
	{
		path: '/',
		element: <GroupBlock />,
		loader: () => {
			return groupArray
		},
		children: [
			{
				path: '/student/:student',
				element: <StudentData />,
				loader: () => {
					return [studentsArray, datesArray]
				},
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

reportWebVitals()
