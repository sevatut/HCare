import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";
import PopUp from "./PopUp";

export default function AppointmentsCard( {appointments} ) {     
    const [popUp, setPopUp] = useState(false);

    return (    <>
                    <div className='card'>
                        <div className='label'>
                            <h2>Appointments</h2>
                            <button className='action' onClick={() => setPopUp(true)}><img src="add.png" alt="Add"/></button>
                        </div>

                        <table className='three-columns'>
                            <thead>
                                <tr>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">Speciality</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {appointments?.map((appointment) => <tr key={appointment.id}>
                                    <td><time dateTime={appointment.startTime}>{new Date(appointment.startTime).toLocaleString('en-US', {dateStyle:'short', timeStyle:'short'})}</time></td>
                                    <td>{appointment.speciality[0].toUpperCase() + appointment.speciality.slice(1)}</td>
                                    <td>{appointment.status ? "Confirmed" : "Cancelled"}</td>
                                </tr>)}
                            </tbody>
                        </table>    
                    </div>


                    { popUp ? <PopUp addition={{
                        subject: "appointments",
                        inputs: {
                            startTime: {
                                type: "datetime-local",
                                name: "Start Time"
                            },
                            speciality: {
                                type: "select",
                                name: "Speciality",
                                options: {
                                    radiologist: "Radiologist",
                                    cardiologist: "Cardiologist",
                                    dermatologist: "Dermatologist",
                                    pediatrician: "Pediatrician",
                                    neurologist: "Neurologist"
                                }
                            },
                            status: {
                                type: "checkbox",
                                name: "Is confirmed?"
                            },
                            
                        }       
                    }
                    } onClose={setPopUp} list={appointments}></PopUp> : null }
                </>
    )
}

