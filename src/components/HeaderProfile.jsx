export default function HeaderProfile( {user} ) {
  return (
        <header className='user'>
                <img src={user?.image} alt="User avatar" />
                <div className='name'>
                    <h2>{user?.firstName} {user?.lastName}</h2>
                    <span>{user?.role}</span>
                </div>
        </header>
  )
}