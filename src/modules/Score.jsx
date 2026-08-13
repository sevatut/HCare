import { defineGrade } from "../utls/definder";

export default function Score( {title} ) {
  return (
            <div className='score'>
                    <h4>{title}</h4>
                    <div className='circles'>
                        {Array.from({ length: 10 }, (_, index) => {
                            const number = index + 1;
                            return <div key={index} className={defineGrade(number)}>{number}</div>;
                        })}
                    </div>

                    <div className='scale'>
                        <p>Absolutely not satisfied</p>
                        <p>Absolutely satisfied</p>
                    </div>                        
            </div>
  )
}
