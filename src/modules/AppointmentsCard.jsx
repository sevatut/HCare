import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";

export default function AppointmentsCard( {appointments} ) { 
    const dispatch = useDispatch();
    
    const [popUp, setPopUp] = useState(false);
    
    const [startTime, setStartTime] = useState("");
    const [speciality, setSpeciality] = useState("Radiologist");
    const [status, setStatus] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();

        if (!(startTime && speciality)) 
            return;

            
        dispatch(updateUser({
                    id: 1,
                    changes: {
                        appointments: [
                            ...appointments,
                            {
                                startTime,
                                speciality,
                                status,
                                id: Date.now()
                            }
                        ]
                    }
                })
                );
        
        setStartTime("");
        setSpeciality("Radiologist");
        setStatus(false);

        setPopUp(false);
    } 

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
                                    <td>{appointment.speciality}</td>
                                    <td>{appointment.status ? "Confirmed" : "Cancelled"}</td>
                                </tr>)}
                            </tbody>
                        </table>    
                    </div>

                    { popUp ? <>
                    <form>
                        <button className='action close' onClick={() => setPopUp(false)}><img src="close.png" alt="Close" /></button>

                        <label>
                            <h4>Start Time</h4>
                            <input type="datetime-local" onChange={(e) => setStartTime(e.target.value)} value={startTime}/>
                        </label>

                        <label>
                            <h4>Speciality</h4>
                            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality}>
                                <option value="Radiologist">Radiologist</option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatrician">Pediatrician</option>
                                <option value="Neurologist">Neurologist</option>
                            </select>
                        </label>

                        <label>
                            <h4>Is confirmed?</h4>
                            <input type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)}/>
                        </label>

                        

                        <div>
                            <button className='action' onClick={handleSumbit}><img src="send.png" alt="Send" /></button>
                        </div>
                    </form>
                    </>
                    : null
                    }
                </>
    )
}

