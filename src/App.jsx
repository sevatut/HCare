import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import { useGetUsersQuery } from './services/usersApi'
import { setUsers } from './services/usersSlice';
import './App.css'
import Profile from './components/Profile/Profile'
import Staff from './components/Staff/Staff'
import Feedback from './components/Feedback/Feedback'
import { defaultSerializeQueryArgs } from '@reduxjs/toolkit/query';
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUsersQuery();

  useEffect(() => {
    
    if (data?.users) {
      const users = [...data.users];

      users[0] = {
        ...users[0],
        birthAge: `${users[0].birthDate} (${users[0].age})`, 
        address: "MBS Residence number 28C",
        fullName: users[0].firstName + " " + users[0].lastName,
        role: 'Patient',
        homePhone: users[0].phone,
        nationality: 'Germany',
        materialStatus: 'Not married',
        emergencyContact: '2589489948',
        memberID: '439260324906',
        insuranceProvider: 'Green cross shield',
        activities: [],
        appointments: [],
        surveys: [],
        feedback: [],
        contactPreferences: 
        {
            email: false,
            phone: false,
            mail: false,
        }
      };

      

      console.log(users);
    dispatch(setUsers(users));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header className='menu'>
        <div className='navigation'>
          <img src="hamburger.png" alt="hamburger" />

          <div>
            <img src="hcare.jpg" alt="HCare logo" />
            <h2>HCare</h2>
          </div>

        </div>

        <div className='personal'>
          <img src="notification.png" alt="Notification" />
          <img src="avatar.jpg" alt="Avatar" />
        </div>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/doctors" element={<Staff />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<p>No such page</p>} /> 
          
        </Routes>
      </main>
    </>
  )
}

export default App
