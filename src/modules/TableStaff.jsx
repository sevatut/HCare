import { useEffect, useState } from "react";
import Doctor from "./Doctor";

export default function TableStaff( {doctors} ) {
    const [page, setPage] = useState(0);

    useEffect(()=> {
        setPage(0);
    }, [doctors]);

    return ( <>
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
                {
                
                doctors?.slice(page * 5, (page * 5) + 5).map((doctor) => (
                    <Doctor doctor={doctor} key={doctor.id}></Doctor>
                ))}
            </tbody>
            
        </table>
        <div className="pagination">
             {Array.from({ length: Math.ceil(doctors.length / 5) }, (_, index) => <button key={index} onClick={() => setPage(index)}>{index + 1}</button>
            )}
        </div>
    </>
    )
}