import React, { useState } from 'react';
import './StudentBlock.css';

const StudentBlock = ({ studentsArray }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const toggleSelection = (studentId) => {
    setSelectedStudents((prevSelectedStudents) => {
      if (prevSelectedStudents.includes(studentId)) {
        return prevSelectedStudents.filter((id) => id !== studentId);
      }
      return [...prevSelectedStudents, studentId];
    });
  };

  const dateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const save = async () => {
    const studentsData = studentsArray.map((student) => ({
      id: student.id,
      event: selectedStudents.includes(student.id),
    }));

    const dataSend = {
      students: studentsData,
      date: selectedDate,
    };

    try {
      const response = await fetch('https://my-json-server.typicode.com/kosipov/1425-iro-placeholder-api/disciplines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataSend),
      });

      if (response.ok) {
        console.log('Данные отправлены на сервер');
      }
    } catch (error) {
      console.log('Ошибка')
    }
  };

  const studentElements = studentsArray.map((student) => (
    <div className="checkbox_container" key={student.id}>
      <div className="student_wrap">
        <p className="studentsList">
          {student.first} {student.last}
        </p>
        <input
          type="checkbox"
          className="checkbox"
          checked={selectedStudents.includes(student.id)}
          onChange={() => toggleSelection(student.id)}
        />
      </div>
    </div>
  ));

  return (
    <div className="StudentContainer">
      <div className="dateTime">
        <input type="date" value={selectedDate} onChange={dateChange} />
      </div>
      {studentElements}
      <button className="btn" onClick={save}>
        Сохранить
      </button>
    </div>
  );
};

export default StudentBlock;
