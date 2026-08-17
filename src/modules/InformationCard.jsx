import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUser } from '../services/usersSlice';

export default function InformationCard({ info }) {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);

    const [fields, setFields] = useState(() => {
        const initialFields = {};

        Object.entries(info.fields).forEach(([key, field]) => {
            initialFields[key] = field.value;
        });

        return initialFields;
    });

    const [previousFields, setPreviousFields] = useState({});

    const handleEdit = () => {
        setPreviousFields({ ...fields });
        setIsEditing(true);
    };

    const handleCancel = () => {
        setFields(previousFields);
        setIsEditing(false);
    };

    const handleSave = () => {
        dispatch(
            updateUser({
                id: 1,
                changes: fields
            })
        );

        setIsEditing(false);
    };

    return (
        <div className="card">
            <div className="label">
                <h2>{info.category}</h2>

                {info.isEditable
                    ? isEditing
                        ? (
                            <>
                                <button className="action" onClick={handleCancel}><img src="buttons/cancel.png" alt="Cancel"/></button>
                                <button className="action" onClick={handleSave}><img src="buttons/confirm.png" alt="Confirm"/></button>
                            </>
                        )
                        : (
                            <button className="action" onClick={handleEdit}><img src="buttons/edit.png" alt="Redact" /></button>
                        )
                    : null}
            </div>

            <hr />

            <dl>
                {Object.entries(info.fields).map(([key, field]) => (
                    <React.Fragment key={key}>
                        <dt>{field.name}</dt>

                        <dd>
                            {isEditing ? ( <input value={fields[key]} onChange={(e) => {
                                        setFields((prev) => ({
                                            ...prev,
                                            [key]: e.target.value
                                        }));
                                    }}
                                />
                            ) : fields[key]}
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
}