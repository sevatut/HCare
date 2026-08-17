import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { updateUser } from "../services/usersSlice";

export default function ContactPreferences( {initialPreferences} ) { 
    const dispatch = useDispatch();

    const [preferences, setPreferences] = useState(initialPreferences ? initialPreferences : {
        email: false,
        phone: false,
        mail: false
    });

    
    const handleChange = (field, value) => {
        const updatedPreferences = {
            ...preferences,
            [field]: value,
        };

        dispatch(updateUser({
            id: 1,
            changes: {
                contactPreferences: updatedPreferences
            }
        }));

        setPreferences(updatedPreferences);
    };

    return (
    <div className='card'>
                        <div className='label'>
                            <h2>Contact preferences</h2>
                        </div>

                        <p className='method'>Contact Method</p>

                        <div className='preferences'>

                            <div>
                                <p>Email</p>

                                <div>
                                    <span className='deny'>DENY</span>
                                    <label className="switch">
                                        <input type="checkbox" checked={preferences.email} onChange={(e) => handleChange("email", e.target.checked)} />
                                        <span className="slider round"></span>
                                    </label>
                                    <span className='allow'>ALLOW</span>
                                </div>
                            </div>

                            <div>
                                <p>Mobile phone</p>

                                <div>
                                    <span className='deny'>DENY</span>
                                    <label className="switch">
                                        <input type="checkbox" checked={preferences.phone} onChange={(e) => handleChange("phone", e.target.checked)}/>
                                        <span className="slider round"></span>
                                    </label>
                                    <span className='allow'>ALLOW</span>
                                </div>
                            </div>

                            <div>
                                <p>Mail</p>

                                <div>
                                    <span className='deny'>DENY</span>
                                    
                                    <label className="switch">
                                        <input type="checkbox" checked={preferences.mail} onChange={(e) => handleChange("mail", e.target.checked)}/>
                                        <span className="slider round"></span>
                                    </label>

                                    <span className='allow'>ALLOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}