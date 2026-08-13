import { useRef } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Doctor( {doctor: {id, image, firstName, lastName, address}} ) {
    const booking = useRef({});

    return (
    <tr>
        <td className='doctor--name'>
            <img src={image} alt="" />
            <div>
                <h4>{firstName} {lastName}</h4>
                <p>Harmony Health</p>
                <p>Therapist</p>
            </div>
        </td>

        <td>{address.city}, {address.country}</td>
        <td>15:00 - 22:00</td>
        <td>
            <p className='booking'>
                <input type="date" ref={booking} onChange={() => toast("The date has been booked")}/>
                <button onClick={() => {booking.current.showPicker()}}><img src="buttons/calendar.png" alt="calendar"/>Book date</button>
            </p>    
        </td>
        <td>Confirmed</td>

        
    </tr>
    )
}