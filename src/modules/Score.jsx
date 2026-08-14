import { defineGrade } from "../utls/definder";
import { toast } from 'react-toastify';

export default function Score( {title} ) {
  return (
            <div className='score'>
                    <h4>{title}</h4>
                    
                        <div className='circles'>
                            {Array.from({ length: 10 }, (_, index) => {
                                const number = index + 1;
                                return <button key={index} onClick={() => toast(`You rated our work ${number}`)}>
                                        <div className={defineGrade(number)}>{number}</div>
                                    </button>
                            })}
                        </div>
                    

                    <div className='scale'>
                        <p>Absolutely not satisfied</p>
                        <p>Absolutely satisfied</p>
                    </div>                        
            </div>
  )
}
