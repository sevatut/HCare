
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from "../services/usersSlice";
import { useSelector } from 'react-redux';

export default function InformationCard( {info} ) { 
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false); 
    const fieldsRef = useRef({});

    const user = useSelector(
    (state) => state.users.users.find(
        (user) => user.id === 1
    )
  );


    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
            const changes = {};

            Object.entries(fieldsRef.current).forEach(([key, element]) => {
                if (element) {
                    changes[key] = element.innerText;
                }
            });

            dispatch(
                updateUser({
                    id: 1,
                    changes
                })
            );

        setIsEditing(false);
    };

    useEffect(() => {
}, [user]);

    return (
                    <div className='card'>
                        <div className='label'>
                            <h2>{info.category}</h2>
                            { info.isEditable ? <button className='action' onClick={isEditing ? handleSave : handleEdit}><img src="buttons/edit.png" alt="Redact" /></button> : null }
                        </div>

                        <hr />

                        <dl>
                            {Object.entries(info.fields).map(([key, field]) => (
                                <React.Fragment key={key}>
                                    <dt>{field.name}</dt>
                                    <dd contentEditable={isEditing} ref={(el) => fieldsRef.current[key] = el}>{field.value}</dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    </div>
    )
}