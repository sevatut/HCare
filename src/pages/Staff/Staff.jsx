import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import './Staff.css'
import Score from '../../components/Score';

export default function Staff() {
    const booking = useRef({});
    const doctors = useSelector((state) => state.users.users).filter((user) => user.id !== 1);

  return (
    <>
                <header>
                    <h2>Medical Staff</h2>
                    <button className='filter'><img src="filter.png" alt="Filter"/> <span>Filter</span></button>
                </header>
                
                <section>
                     <table className='staff'>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">City/Country</th>
                                    <th scope="col">Available hours</th>
                                    <th scope="col">Schedule an appointment</th>
                                    <th scope="col">Confirmation</th>                                            
                                </tr>
                            </thead>

                            <tbody>
                                {doctors.map((doctor) => (
                                        <tr key={doctor.id}>
                                            <td className='doctor--name'>
                                                <img src={doctor.image} alt="" />
                                                <div>
                                                    <h4>{doctor.firstName} {doctor.lastName}</h4>
                                                    <p>Harmony Health</p>
                                                    <p>Therapist</p>
                                                </div>
                                            </td>

                                            <td>{doctor.address.city}, {doctor.address.country}</td>
                                            <td>15:00 - 22:00</td>
                                            <td>
                                                <p className='booking'>
                                                    <input type="date" ref={(el) => booking.current[doctor.id] = el} onChange={() => alert("Дата забронирована")}/>
                                                    <button onClick={() => {booking.current[doctor.id].showPicker()}}><img src="calendar.png" alt="calendar"/>Book date</button>
                                                </p>    
                                            </td>
                                            <td>Confirmed</td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                </section>
    </>
  )
}
