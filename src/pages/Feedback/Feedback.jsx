import './Feedback.css'
import Score from '../../components/Score'

export default function Feedback() {
  return (
    <>
                <h2>Feedback</h2>
                
                <img src="feedback.png" alt="Hand with smartphone" className='poster'/>

                <section className='feedback'>
                    <Score title="How satisfied are you with making an appoitment?"></Score>

                    <Score title="How satisfied are you with the doctor?"></Score>
                </section>
    </>
  )
}
