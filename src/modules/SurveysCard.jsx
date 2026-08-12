import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";

export default function SurveysCard( {surveys} ) { 
    const dispatch = useDispatch();
    
    const [popUp, setPopUp] = useState(false);

    const [title, setTitle] = useState("");
    const [completedOn, setCompletedOn] = useState("");

    const handleSumbit = (e) => {
            e.preventDefault();
    
            if (!(title && completedOn)) 
                return;
    
                
            dispatch(updateUser({
                        id: 1,
                        changes: {
                            surveys: [
                                ...surveys,
                                {
                                    title,
                                    completedOn,
                                    id: Date.now()
                                }
                            ]
                        }
                    })
                    );
            
            setTitle("");
            setCompletedOn("");
    
            setPopUp(false);
        } 

    return ( <>
         <div className='card'>
                        <div className='label'>
                            <h2>Surveys</h2>
                            <button className='action'><img src="add.png" alt="Add" onClick={() => setPopUp(true)}/></button>
                        </div>

                        <table className='two-columns'>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Completed on</th>
                                </tr>
                            </thead>

                            <tbody>
                                {surveys?.map((survey) => <tr key={survey.id}>
                                    <td>{survey.title}</td>
                                    <td>{survey.completedOn}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>

                    { popUp ? <>
                    <form>
                        <button className='action close' onClick={() => setPopUp(false)}><img src="close.png" alt="Close" /></button>

                        <label>
                            <h4>Title</h4>
                            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                        </label>

                        <label>
                            <h4>Completed on</h4>
                            <input type="text" onChange={(e) => setCompletedOn(e.target.value)} value={completedOn}/>
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

