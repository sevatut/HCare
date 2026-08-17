import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";
import PopUp from "./PopUp";
import TableAppointments from "./TableAppointments";

export default function AppointmentsCard( {appointments} ) {     
    const [popUp, setPopUp] = useState(false);

    return (    <>
                    <div className='card'>
                        <div className='label'>
                            <h2>Appointments</h2>
                            <button className='action' onClick={() => setPopUp(true)}><img src="buttons/add.png" alt="Add"/></button>
                        </div>

                        <TableAppointments appointments={appointments}></TableAppointments>   
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

