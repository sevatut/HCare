import './Feedback.css'

export default function Feedback() {
  return (
    <>
                <h2>Feedback</h2>
                
                <img src="feedback.png" alt="Hand with smartphone" className='poster'/>

                <section className='feedback'>
                    <h3>We value your feedback!</h3>

                    <p>Share your opinion on the quality of our services</p>

                    <div className='score'>
                        <h4>How satisfied are you with making an appoitment?</h4>
                        <div className='circles'>
                            <div className='bad'>1</div>
                            <div className='bad'>2</div>
                            <div className='bad'>3</div>
                            <div className='normal'>4</div>
                            <div className='normal'>5</div>
                            <div className='normal'>6</div>
                            <div className='good'>7</div>
                            <div className='good'>8</div>
                            <div className='good'>9</div>
                            <div className='excellent'>10</div>
                        </div>

                        <div className='scale'>
                            <p>Absolutely not satisfied</p>
                            <p>Absolutely satisfied</p>
                        </div>                        
                    </div>

                    <div className='score'>
                        <h4>How satisfied are you with the doctor?</h4>
                        <div className='circles'>
                            <div className='bad'>1</div>
                            <div className='bad'>2</div>
                            <div className='bad'>3</div>
                            <div className='normal'>4</div>
                            <div className='normal'>5</div>
                            <div className='normal'>6</div>
                            <div className='good'>7</div>
                            <div className='good'>8</div>
                            <div className='good'>9</div>
                            <div className='excellent'>10</div>
                        </div>

                        <div className='scale'>
                            <p>Absolutely not satisfied</p>
                            <p>Absolutely satisfied</p>
                        </div>                        
                    </div>

                    
                </section>
    </>
  )
}
