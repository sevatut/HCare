import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";

export default function PopUp( {addition, onClose, list} ) {
    const dispatch = useDispatch();

    const [update, useUpdate] = useState({
        ...Object.keys(addition.inputs).map((key) => {
            
            if (addition.inputs[key].type == "checkbox") {
                return { 
                    [key]: false };
            }

            else if (addition.inputs[key].type == "select") {
                return {
                    [key]: Object.keys(addition.inputs[key].options)[0]
                };
            }

            else {
                return {
                    [key]: ""
                }
            }

        }).reduce((acc, curr) => ({ ...acc, ...curr }), {})
        }
    );

    const handleSubmit = (e) => {
            e.preventDefault();
            
            

            for (const input of Object.values(update)) {
                if (input === "") {
                    return;
                }
            } 

            dispatch(updateUser({
                        id: 1,
                        changes: {
                            [addition.subject]: [
                                ...list,
                                {
                                    ...update,
                                    id: Date.now()
                                }
                            ]
                        }
                    })
                    );

            onClose(false);
        }

    return (
    <form>
        <button className='action close' onClick={() => onClose(false)}><img src="close.png" alt="Close" /></button>
        
         {Object.entries(addition.inputs).map(([key, input]) => {
            if (input.type == "checkbox") {
                return (
                    <label key={key}>
                        <h4>{input.name}</h4>
                        <input type="checkbox" checked={update[key]} onChange={(e) => useUpdate( {...update, [key]: e.target.checked} )}/>
                    </label>
                )
            }

            else if (input.type == "select") {
                return (
                    <label key={key}>
                        <h4>{input.name}</h4>
                        <select onChange={(e) => useUpdate( {...update, [key]: e.target.value} ) } value={update[key]}>
                            {
                                Object.entries(input.options).map(([key, option]) => (
                                    <option value={key} key={key}>{option}</option>
                                ))
                            }
                        </select>
                    </label>
                )
            }

            else {
                return (
                <label key={key}>
                    <h4>{input.name}</h4>
                    <input type={input.type} className={key} onChange={(e) => useUpdate( {...update, [key]: e.target.value} ) } value={update[key]}/>
                </label>
                )
            }
        }
    )}

    <div>
        <button className='action' onClick={handleSubmit}><img src="send.png" alt="Send" /></button>
    </div>
    </form>
    )
}