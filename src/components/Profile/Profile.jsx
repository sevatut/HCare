import { useState } from 'react'

export default function Profile() {

  return (
        <>
            <header className='user'>
                <div className='avatar'>avatar</div>
                <div className='name'>
                    <h2>name</h2>
                    <span>role</span>
                </div>
            </header>

            <nav>
                <ul>
                    <li><button>Summary</button></li>
                    <li><button>Care plan</button></li>
                    <li><button>Lab results</button></li>
                    <li><button>PGHD</button></li>
                    <li><button>Prescribtions</button></li>
                </ul>
            </nav>

            <section className='information'>
                <div className='card'>
                    <div className='label'>
                        <h2>Contact info</h2>
                        <button>Redact</button>
                    </div>

                    <dl>
                        <dt>Full Name</dt>
                        <dd>James Brown</dd>
                        <dt>Phone</dt>
                        <dd>085780157</dd>
                        <dt>Home Phone</dt>
                        <dd>20255240524</dd>
                        <dt>Address</dt>
                        <dd>Minsk</dd>
                        <dt>Email</dt>
                        <dd>blabla@gmail.com</dd>
                    </dl>
                </div>

                <div className='card'>
                    <div className='label'>
                        <h2>Personal</h2>
                    </div>

                    <dl>
                        <dt>Gender</dt>
                        <dd>Male</dd>
                        <dt>Birth (Age)</dt>
                        <dd>07/03/1987 (36)</dd>
                        <dt>Patient ID</dt>
                        <dd>9790</dd>
                        <dt>Nationality</dt>
                        <dd>Germany</dd>
                        <dt>Material status</dt>
                        <dd>Not married</dd>
                        <dt>Emergency contact</dt>
                        <dd>Not married</dd>
                    </dl>
                </div>

                <div className='card'>
                    <div className='label'>
                        <h2>Activities</h2>
                        <button>Add</button>
                    </div>

                    <input type="text" placeholder='Type a post'/>

                    <nav>
                        <ul>
                            <li><button>Time line</button></li>
                            <li><button>Tasks</button></li>
                            <li><button>Notes</button></li>
                        </ul>
                    </nav>

                    <ul className='logs'>
                        <li>
                            <img src="" alt="icon" />
                            <div>
                                <h2>Screening test</h2>
                                <p>Sent by marketing</p>
                            </div>

                            <time datetime=""></time>
                        </li>
                    </ul>
                </div>

                <div className='card'>
                    <div className='label'>
                        <h2>Insurance info</h2>
                    </div>

                    <dl>
                        <dt>Member ID</dt>
                        <dd>439260324906</dd>
                        <dt>Insurance Provider</dt>
                        <dd>Green cross shield</dd>
                    </dl>
                </div>

                <div className='card'>
                    <div className='label'>
                        <h2>Appointments</h2>
                        <button>Add</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Start Time</th>
                                <th scope="col">Speciality</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><time datetime=""></time></td>
                                <td>Radiologist</td>
                                <td>Cancelled</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='card'>
                    <div className='label'>
                        <h2>Surveys</h2>
                        <button>Add</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Completed on</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Chest examination</td>
                                <td>Details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='card'>
                    <div className='label'>
                        <h2>Feedback</h2>
                        <button>Add</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Case Title</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>                                
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Dr.Johnes</td>
                                <td><time datetime=""></time></td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='card'>
                    <div className='label'>
                        <h2>Contact preferences</h2>
                    </div>

                    <span>Contact Method</span>

                    <div>

                        <div>
                            <p>Email</p>

                            <div>
                                <span>DENY</span>
                                <input type="checkbox" />
                                <span>ALLOW</span>
                            </div>
                        </div>

                        <div>
                            <p>Mobile phone</p>

                            <div>
                                <span>DENY</span>
                                <input type="checkbox" />
                                <span>ALLOW</span>
                            </div>
                        </div>

                        <div>
                            <p>Mail</p>

                            <div>
                                <span>DENY</span>
                                <input type="checkbox" />
                                <span>ALLOW</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
  )
}