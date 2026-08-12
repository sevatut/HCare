import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import './Staff.css'
import Score from '../../components/Score';
import HeaderStaff from '../../components/HeaderStaff';
import TableStaff from '../../components/TableStaff'; 

export default function Staff() {
    const doctors = useSelector((state) => state.users.users).filter((user) => user.id !== 1);

  return (
    <>
                <HeaderStaff></HeaderStaff>
                
                <section>
                     <TableStaff doctors={doctors}></TableStaff>
                </section>
    </>
  )
}
