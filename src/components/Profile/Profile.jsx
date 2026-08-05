import { useState } from 'react'
import './Profile.css'

export default function Profile() {

  return (
        <>
            <header className='user'>
                <img src="avatar.jpg" alt="User avatar" />
                <div className='name'>
                    <h2>James Brown</h2>
                    <span>Patient</span>
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

            <section>
                <div>
                    <div className='card'>
                        <div className='label'>
                            <h2>Contact info</h2>
                            <button className='action'><img src="edit.png" alt="Redact" /></button>
                        </div>

                        <hr />

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

                        <hr />

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
                            <dd>2589489948</dd>
                        </dl>
                    </div>
                </div>

                <div>
                    <div className='card'>
                        <div className='label'>
                            <h2>Activities</h2>
                            <button className='action'><img src="add.png" alt="Add" /></button>
                        </div>

                        <input type="text" placeholder='Type a post ...'/>

                        <nav>
                            <ul>
                                <li><button>Time line</button></li>
                                <li><button>Tasks</button></li>
                                <li><button>Notes</button></li>
                            </ul>
                        </nav>

                        <ul className='logs'>
                            <li>
                                <img src="message.png" alt="icon"/>
                                <div>
                                    <h4>Screening test</h4>
                                    <p>Sent by marketing</p>
                                </div>

                                <time datetime="21-04-2021">21-04-2021</time>
                            </li>
                        </ul>
                    </div>

                    <div className='card'>
                        <div className='label'>
                            <h2>Insurance info</h2>
                            <button className='action'><img src="edit.png" alt="Redact" /></button>
                        </div>

                        <hr />

                        <dl>
                            <dt>Member ID</dt>
                            <dd>439260324906</dd>
                            <dt>Insurance Provider</dt>
                            <dd>Green cross shield</dd>
                        </dl>
                    </div>
                </div>

                <div>
                    <div className='card'>
                        <div className='label'>
                            <h2>Appointments</h2>
                            <button className='action'><img src="add.png" alt="Add" /></button>
                        </div>

                        <table className='three-columns'>
                            <thead>
                                <tr>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">Speciality</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><time datetime="2021-12-12 9:40">12-12-2021 9:40 AM</time></td>
                                    <td>Radiologist</td>
                                    <td>Cancelled</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='card'>
                        <div className='label'>
                            <h2>Surveys</h2>
                            <button className='action'><img src="add.png" alt="Add" /></button>
                        </div>

                        <table className='two-columns'>
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
                            <button className='action'><img src="add.png" alt="Add" /></button>
                        </div>

                        <table className='three-columns'>
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
                                    <td><time datetime="15-12-2021">15-12-2021</time></td>
                                    <td>⭐⭐⭐⭐⭐</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

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
                                        <input type="checkbox" />
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
                                        <input type="checkbox" />
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
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>

                                    <span className='allow'>ALLOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}