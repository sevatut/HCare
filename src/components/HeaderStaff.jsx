export default function HeaderStaff( {onFilter} ) {
  return (
        <header>
            <h2>Medical Staff</h2>
            <button className='filter' onClick={onFilter}><img src="buttons/filter.png" alt="Filter"/> <span>Filter</span></button>
        </header>
  )
}