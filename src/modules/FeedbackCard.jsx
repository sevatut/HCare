import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";
import PopUp from "./PopUp";

export default function FeedbackCard( {feedback} ) { 
    const [popUp, setPopUp] = useState(false);

    return ( <>
                <div className='card'>
                    <div className='label'>
                        <h2>Feedback</h2>
                        <button className='action'><img src="buttons/add.png" alt="Add" onClick={() => setPopUp(true)}/></button>
                    </div>

                    <table className='three-columns'>
                        <thead>
                            <tr>
                                <th scope="col">Case Title</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>                                
                            </tr>
                        </thead>

                        <tbody>
                            {feedback?.map((response) => <tr key={response.id}>
                                    <td>{response.caseTitle}</td>
                                    <td><time dateTime={response.date}>{response.date}</time></td>
                                    <td>{"⭐".repeat(response.status)}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>

                { popUp ? <PopUp addition={{
                    subject: "feedback",
                    inputs: {
                        caseTitle: {
                            type: "text",
                            name: "Case Title"
                        },
                        date: {
                            type: "date",
                            name: "Date"
                        },
                        status: {
                            type: "select",
                            name: "Status",
                            options: {
                                1: "1",
                                2: "2",
                                3: "3",
                                4: "4",
                                5: "5"
                            }
                        }
                    }       
                }
                } onClose={setPopUp} list={feedback}></PopUp> : null }
            </>
    )
}

