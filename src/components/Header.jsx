export default function Header() {
  return (
    <>
        <header className='menu'>
            <div className='navigation'>
            <img src="hamburger.png" alt="hamburger" />

            <div>
                <img src="hcare.jpg" alt="HCare logo" />
                <h2>HCare</h2>
            </div>

            </div>

            <div className='personal'>
            <img src="notification.png" alt="Notification" />
            <img src="avatar.jpg" alt="Avatar" />
            </div>
      </header>
    </>
  )
}