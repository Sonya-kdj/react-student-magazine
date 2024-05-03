import React from 'react'
import './GroupBlock.css'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import StudentBlock from './StudentBlock'

const GroupBlock = () => {
	const groupArray = useLoaderData()

	const array = groupArray.map(group => {
		// console.log(group)
		return (
			<div>
				<NavLink className='link' to={`/student/${group.id}`}>
					<div>{group.title}</div>
					{group.name}
				</NavLink>
			</div>
		)
	})

	return (
		<div className='wrapper'>
			<div className='groupBlock'>{array}</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default GroupBlock
