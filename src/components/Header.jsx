import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <>
        <header className='menu'>
            <div className='navigation'>
                <button><img src="buttons/hamburger.png" alt="hamburger" onClick={() => setBurger(true)}/></button>

                <div>
                    <img src="other/hcare.jpg" alt="HCare logo" />
                    <h2>HCare</h2>
                </div>

            </div>

            <div className='personal'>
            <img src="buttons/notification.png" alt="Notification" />
            <img src="other/avatar.jpg" alt="Avatar" />
            </div>
      </header>

      { burger ? <nav className='burger'>
        <button className='action'><img src="buttons/close_burger.png" alt="Close" onClick={() => setBurger(false)}/></button>
        <ul>
            <li><Link to="/" className='link'>Profile</Link></li>
            <li><Link to="/doctors" className='link'>Medical Staff</Link></li>
            <li><Link to="/feedback" className='link'>Feedback</Link></li>
        </ul>
      </nav>
      : null }
    </>
  )
}