import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { updateUser } from "../../services/usersSlice";

export default function ContactPreferences( {preferences} ) { 
    const dispatch = useDispatch();

    const [email, setEmail] = useState(preferences?.email);
    const [phone, setPhone] = useState(preferences?.phone);
    const [mail, setMail] = useState(preferences?.mail);

    
    const handleChange = (field, value) => {
        const updatedPreferences = {
            email,
            phone,
            mail,
            [field]: value,
        };

        dispatch(updateUser({
            id: 1,
            changes: {
                contactPreferences: updatedPreferences
            }
        }));

        if (field === "email") setEmail(value);
        if (field === "phone") setPhone(value);
        if (field === "mail") setMail(value);
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
                                    <label class="switch">
                                        <input type="checkbox" checked={email} onChange={(e) => handleChange("email", e.target.checked)} />
                                        <span class="slider round"></span>
                                    </label>
                                    <span className='allow'>ALLOW</span>
                                </div>
                            </div>

                            <div>
                                <p>Mobile phone</p>

                                <div>
                                    <span className='deny'>DENY</span>
                                    <label class="switch">
                                        <input type="checkbox" checked={phone} onChange={(e) => handleChange("phone", e.target.checked)}/>
                                        <span class="slider round"></span>
                                    </label>
                                    <span className='allow'>ALLOW</span>
                                </div>
                            </div>

                            <div>
                                <p>Mail</p>

                                <div>
                                    <span className='deny'>DENY</span>
                                    
                                    <label class="switch">
                                        <input type="checkbox" checked={mail} onChange={(e) => handleChange("mail", e.target.checked)}/>
                                        <span class="slider round"></span>
                                    </label>

                                    <span className='allow'>ALLOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}