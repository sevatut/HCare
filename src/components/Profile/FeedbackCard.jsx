import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../services/usersSlice";

export default function FeedbackCard( {feedback} ) { 
    const dispatch = useDispatch();
    
    const [popUp, setPopUp] = useState(false);
    
    const [caseTitle, setCaseTitle] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState(1);

    const handleSumbit = (e) => {
        e.preventDefault();

        if (!(caseTitle && date && status)) 
            return;

            
        dispatch(updateUser({
                    id: 1,
                    changes: {
                        feedback: [
                            ...feedback,
                            {
                                caseTitle,
                                date,
                                status,
                                id: Date.now()
                            }
                        ]
                    }
                })
                );
        
        setCaseTitle("");
        setDate("");
        setStatus(1);

        setPopUp(false);
    } 

    return ( <>
                <div className='card'>
                    <div className='label'>
                        <h2>Feedback</h2>
                        <button className='action'><img src="add.png" alt="Add" onClick={() => setPopUp(true)}/></button>
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
                { popUp ? <>
                    <form>
                        <button className='action close' onClick={() => setPopUp(false)}><img src="close.png" alt="Close" /></button>

                        <label>
                            <h4>Case Title</h4>
                            <input type="input" onChange={(e) => setCaseTitle(e.target.value)} value={caseTitle}/>
                        </label>

                        <label>
                            <h4>Date</h4>
                            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
                        </label>

                        <label>
                            <h4>Status</h4>
                            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
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

