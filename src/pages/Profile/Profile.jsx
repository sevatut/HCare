import { useState } from 'react'
import { useSelector } from 'react-redux';
import './Profile.css'
import InformationCard from '../../modules/InformationCard';
import ActivitesCard from '../../modules/ActivitiesCard';
import ContactPreferences from '../../modules/ContactPreferences';
import AppointmentsCard from '../../modules/AppointmentsCard';
import FeedbackCard from '../../modules/FeedbackCard';
import SurveysCard from '../../modules/SurveysCard';
import Tabs from '../../modules/Tabs';

const FIELDS_NAME = {
    fullName: "Full Name",
    phone:  "Phone",
    homePhone: "Home Phone",
    address:  "Address",
    email: "Email",
    gender: "Gender",
    birthAge: "Birth (Age)",
    id: "Patient ID",
    nationality:  "Nationality", 
    materialStatus: "Material",
    emergencyContact: "Emergency contact", 
    memberID: "Membed ID",
    insuranceProvider: "Insurance Provider",
};

export default function Profile() {
    const [tab, setTab] = useState();

   const user = useSelector(
    (state) => state.users.users.find(
        (user) => user.id === 1
    )
  );

  console.log();

  return (
        <>
            <header className='user'>
                <img src={user?.image} alt="User avatar" />
                <div className='name'>
                    <h2>{user?.firstName} {user?.lastName}</h2>
                    <span>{user?.role}</span>
                </div>
            </header>
            
            <Tabs tabs={["Summary", "Care plan", "Lab results", "PGHD", "Prescribtions"]} onChange={setTab}></Tabs>

            <section>
                <div>
                    <InformationCard info={{
                        category: "Contact info",
                        isEditable: true,
                        fields: {
                            fullName: { name: FIELDS_NAME.fullName, value: user?.fullName},
                            phone: { name: FIELDS_NAME.phone, value: user?.phone},
                            homePhone: { name: FIELDS_NAME.homePhone, value: user?.homePhone},
                            address: { name: FIELDS_NAME.address, value: user?.address},
                            email: { name: FIELDS_NAME.email, value: user?.email},
                        }
                    }}></InformationCard>

                    <InformationCard info={{
                        category: "Personal",
                        isEditable: false,
                        fields: {
                            gender: { name: FIELDS_NAME.gender, value: user?.gender[0].toUpperCase() + user?.gender.slice(1)},
                            birthAge: { name: FIELDS_NAME.birthAge, value: user?.birthAge},
                            id: { name: FIELDS_NAME.id, value: user?.id},
                            nationality: { name: FIELDS_NAME.nationality, value: user?.nationality},
                            materialStatus: { name: FIELDS_NAME.materialStatus, value: user?.materialStatus},
                            emergencyContact: { name: FIELDS_NAME.emergencyContact, value: user?.emergencyContact},
                        }
                    }}></InformationCard>
                </div>  
                <div>
                    <ActivitesCard activities={user?.activities}></ActivitesCard>
                    <InformationCard info={{
                        category: "Insurance info",
                        isEditable: true,
                        fields: {
                            memberID: { name: FIELDS_NAME.memberID, value: user?.memberID},
                            insuranceProvider: { name: FIELDS_NAME.insuranceProvider, value: user?.insuranceProvider},
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