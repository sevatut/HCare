
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from "../services/usersSlice";
import PopUp from './PopUp';
import Tabs from './Tabs';

export default function ActivitesCard( {activities} ) {    
    const [tab, setTab] = useState("Time line"); 
    const [popUp, setPopUp] = useState(false);

    return ( <>     <div className='card'>
                        <div className='label'>
                            <h2>Activities</h2>
                            <button className='action' onClick={() => setPopUp(true)}><img src="add.png" alt="Add" /></button>
                        </div>

                        <Tabs tabs={["Time line", "Tasks", "Notes"]} onChange={setTab}></Tabs>

                        {(() => {
                            switch(tab) {
                                case "Time line": 
                                return (
                                    <ul className='logs'>
                                        {activities?.map((activity) => <li key={activity.id}>
                                            <img src={activity.type + ".png"} alt={activity.type}/>
                                            <div>
                                                <h4>{activity.title}</h4>
                                                <p>{activity.type == "message" ? "Sent" : null} by {activity.author}</p>
                                            </div>

                                            <time dateTime={activity.date}>{activity.date}</time>
                                        </li>)}
                                    </ul>
                                )
                                case "Tasks": 
                                return <p>Tasks</p>
                                case "Notes": 
                                return <p>Notes</p>
                            }
                        })()}
                    </div>

                    { popUp ? <PopUp addition={{
                        subject: "activities",
                        inputs: {
                            title: {
                                type: "text",
                                name: "Title"
                            },
                            author: {
                                type: "text",
                                name: "Author"
                            },
                            date: {
                                type: "date",
                                name: "Date"
                            },
                            type: {
                                type: "select",
                                name: "Type",
                                options: {
                                    message: "Message",
                                    appoitment: "Appoitment",
                                    outcall: "Outcoming call",
                                    incall: "Incoming call",
                                    patient: "Patient"
                                }
                            }
                        }       
                    }
                    } onClose={setPopUp} list={activities}></PopUp> : null }
                </>

    )
}

