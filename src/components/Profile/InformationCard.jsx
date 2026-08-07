import React from 'react'
import './Profile.css'

export default function InformationCard( {info} ) { 

    return (
                    <div className='card'>
                        <div className='label'>
                            <h2>{info.category}</h2>
                            { info.isEditable ? <button className='action'><img src="edit.png" alt="Redact" /></button> : null }
                        </div>

                        <hr />

                        <dl>
                            {Object.entries(info.fields).map(([key, value]) => (
                                <React.Fragment key={key}>
                                    <dt>{key}</dt>
                                    <dd>{value}</dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    </div>
    )
}