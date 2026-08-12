import Doctor from "./Doctor";

export default function TableStaff( {doctors} ) {

    return (
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
            {doctors?.map((doctor) => (
                <Doctor doctor={doctor} key={doctor.id}></Doctor>
            ))}
        </tbody>
    </table>
    )
}