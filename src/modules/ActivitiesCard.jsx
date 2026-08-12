
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from "../services/usersSlice";

export default function ActivitesCard( {activities} ) {
    const dispatch = useDispatch();
    
    const [tab, setTab] = useState("Time line"); 
    const [popUp, setPopUp] = useState(false);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("message");

    const handleSumbit = (e) => {
        e.preventDefault();
            if (!(title && author && date && type)) 
            return;

            
        dispatch(updateUser({
                    id: 1,
                    changes: {
                        activities: [
                            ...activities,
                            {
                                title,
                                author,
                                date,
                                type,
                                id: Date.now()
                            }
                        ]
                    }
                })
                );
        setPopUp(false);
        setTitle("");
        setAuthor("");
        setDate("");
        setType("message");
        }

    return ( <>     <div className='card'>
                        <div className='label'>
                            <h2>Activities</h2>
                            <button className='action' onClick={() => setPopUp(true)}><img src="add.png" alt="Add" /></button>
                        </div>

                        <nav>
                            <ul>
                                <li><button onClick={() => setTab("Time line")}>Time line</button></li>
                                <li><button onClick={() => setTab("Tasks")}>Tasks</button></li>
                                <li><button onClick={() => setTab("Notes")}>Notes</button></li>
                            </ul>
                        </nav>

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

                    { popUp ? <>
                    <form>
                        <button className='action close' onClick={() => setPopUp(false)}><img src="close.png" alt="Close" /></button>



                        <label>
                            <h4>Title</h4>
                            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                        </label>

                        <label>
                            <h4>Author</h4>
                            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author}/>
                        </label>
                        <label>
                            <h4>Date</h4>
                            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
                        </label>

                        <label>
                            <h4>Type</h4>
                            <select onChange={(e) => setType(e.target.value)} value={type}>
                                <option value="message">Message</option>
                                <option value="appoitment">Appoitment</option>
                                <option value="outcall">Outcoming call</option>
                                <option value="incall">Incoming call</option>
                                <option value="patient">Patient</option>
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

