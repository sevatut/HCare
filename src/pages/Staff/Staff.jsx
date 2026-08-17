import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import './Staff.css'
import HeaderStaff from '../../components/HeaderStaff';
import TableStaff from '../../modules/TableStaff';

export default function Staff() {
    const doctors = useSelector((state) => state.users.users).filter((user) => user.id !== 1);
    const [filtering, setFiltering] = useState(false);
    
    const [name, setName] = useState("");

    const handleClick = () => {
      setFiltering(!filtering);
    } 

  return (
    <>
                <HeaderStaff onFilter={handleClick}></HeaderStaff>
                
                {filtering ? <div>
                  <label>
                    <span>Name</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                  </label>
                </div> : null}

                <section className='doctors'>
                     <TableStaff doctors={name ? doctors.filter((doctor) => 
                     `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(name.toLowerCase()))
                      : doctors}></TableStaff>
                </section>
    </>
  )
}
