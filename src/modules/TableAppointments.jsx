export default function TableAppointments({appointments}) {
  return (
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
  )
}