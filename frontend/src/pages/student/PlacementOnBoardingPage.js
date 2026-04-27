import { useState } from 'react';
import { createPlacement } from '../../services/api';
import './PlacementOnBoarding.css';

function PlacementOnBoardingPage() {
    const [form, setForm] =  useState({
        company_name: '', position: '', start_date: '', end_date: ''
    });
    const [submitted, setSubmitted] = usestate(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = usestate(false);

    const update = (key, val) => setForm(prev => ({...prev, [key]: val}));
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);setError('');
        try {
            await createPlacement(form);
            setSubmitted(true);
        } catch (err) {
            setError('Could not submit. Please try again.');
        } finally { setLoading(false);}
    };

    if (submitted) return (
        <div className="onboarding-page">
            <div className="onboarding-success">
                <span className="onboarding-icon">"✅</span> 
                <h2>Request submitted!</h2> 
                <p>Your internship placement request has been sent to the Internship Administrator. 
                You will gain access to your full dashboard once it is approved.</p>          
            </div>
        </div>
    );
    
}