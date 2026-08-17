import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";
import PopUp from "./PopUp";

export default function SurveysCard( {surveys} ) {     
    const [popUp, setPopUp] = useState(false);

    return ( <>
         <div className='card'>
                        <div className='label'>
                            <h2>Surveys</h2>
                            <button className='action'><img src="buttons/add.png" alt="Add" onClick={() => setPopUp(true)}/></button>
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


                    { popUp ? <PopUp addition={{
                        subject: "surveys",
                        inputs: {
                            title: {
                                type: "text",
                                name: "Title"
                            },
                            completedOn: {
                                type: "text",
                                name: "Completed on"
                            }
                        }       
                    }
                    } onClose={setPopUp} list={surveys}></PopUp> : null }
            </>
    )
}

