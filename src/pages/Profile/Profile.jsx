import { useState } from 'react'
import { useSelector } from 'react-redux';
import './Profile.css'
import InformationCard from './InformationCard';
import ActivitesCard from './ActivitiesCard';
import ContactPreferences from './ContactPreferences';
import AppointmentsCard from './AppointmentsCard';
import FeedbackCard from './FeedbackCard';
import SurveysCard from './SurveysCard';

export default function Profile() {

   const user = useSelector(
    (state) => state.users.users.find(
        (user) => user.id === 1
    )
  );

  return (
        <>
            <header className='user'>
                <img src={user?.image} alt="User avatar" />
                <div className='name'>
                    <h2>{user?.firstName} {user?.lastName}</h2>
                    <span>{user?.role}</span>
                </div>
            </header>

            <nav>
                <ul>
                    <li><button>Summary</button></li>
                    <li><button>Care plan</button></li>
                    <li><button>Lab results</button></li>
                    <li><button>PGHD</button></li>
                    <li><button>Prescribtions</button></li>
                </ul>
            </nav>

            <section>
                <div>
                    <InformationCard info={{
                        category: "Contact info",
                        isEditable: true,
                        fields: {
                            fullName: { name: "Full Name", value: user?.fullName},
                            phone: { name: "Phone", value: user?.phone},
                            homePhone: { name: "Home Phone", value: user?.homePhone},
                            address: { name: "Address", value: user?.address},
                            email: { name: "Email", value: user?.email},
                        }
                    }}></InformationCard>

                    <InformationCard info={{
                        category: "Personal",
                        isEditable: false,
                        fields: {
                            gender: { name: "Full Name", value: user?.gender[0].toUpperCase() + user?.gender.slice(1)},
                            birthAge: { name: "Birth (Age)", value: user?.birthAge},
                            id: { name: "Patient ID", value: user?.id},
                            nationality: { name: "Nationality", value: user?.nationality},
                            materialStatus: { name: "Material", value: user?.materialStatus},
                            emergencyContact: { name: "Emergency contact", value: user?.emergencyContact},
                        }
                    }}></InformationCard>
                </div>  
                <div>
                    <ActivitesCard activities={user?.activities}></ActivitesCard>
                    <InformationCard info={{
                        category: "Insurance info",
                        isEditable: true,
                        fields: {
                            memberID: { name: "Membed ID", value: user?.memberID},
                            insuranceProvider: { name: "Insurance Provider", value: user?.insuranceProvider},
                        }
                    }}></InformationCard>
                </div>
                <div>
                    <AppointmentsCard appointments={user?.appointments}></AppointmentsCard>
                    <SurveysCard surveys={user?.surveys}></SurveysCard>
                    <FeedbackCard feedback={user?.feedback}></FeedbackCard>
                    <ContactPreferences preferences={user?.contactPreferences}></ContactPreferences>
                </div>

            </section> 
        </>
  )
}