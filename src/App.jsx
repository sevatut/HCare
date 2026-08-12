import { useEffect, useState, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { useGetUsersQuery } from './services/usersApi'
import { setUsers } from './services/usersSlice';
import './App.css'
import { defaultSerializeQueryArgs } from '@reduxjs/toolkit/query';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';

const Profile = lazy(() => import('./pages/Profile/Profile'));
const Staff = lazy(() => import('./pages/Staff/Staff'));
const Feedback = lazy(() => import('./pages/Feedback/Feedback'));

const AppRoutes = {
  Profile: "/",
  Staff: "/doctors",
  Feedback: "/feedback"
}

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
      <Header></Header>

      <main>
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Routes>
            <Route path={AppRoutes.Profile} element={<Profile />} />
            <Route path={AppRoutes.Staff} element={<Staff />} />
            <Route path={AppRoutes.Feedback} element={<Feedback />} />
            <Route path="*" element={<p>No such page</p>} /> 
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
