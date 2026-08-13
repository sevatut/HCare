function defineGrade(number) {

    switch (true) {
        case number >= 1 && number <= 3:
            return "bad";
        case number >= 4 && number <= 6:
            return "normal";
        case number >= 7 && number <= 9:
            return "good";
        case number == 10:
            return "excellent";
        default: 
            return "bad";
    }
} 

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
