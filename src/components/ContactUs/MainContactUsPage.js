import classes from './ContactUs.module.css';
import { useHistory } from "react-router";
import { Helmet } from 'react-helmet';
import postMessage from './ContactUsService';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const MainContactUsPage = (error) => {
    const history = useHistory();
    const {register, handleSubmit, errors } = useForm();
    const [status, setStatus] = useState("SUBMIT");

    const onSubmit = async(data, e) => {
        e.preventDefault();
        setStatus("SENDING...")
        let response = await postMessage(data);

        if(response === "Message Sent" ) {
            history.push("/complete-message")
        }
        else {
            history.push("/error-message")
        }
    }

    const required = "*Please complete this required field";
    const pattern = "*Email is not valid";

    const errorMessage = (error) => {
        return <p className={classes.errorMsg}>{error}</p>;
    };

    return (
        <div className={classes.contact_container}>
            <Helmet>
                <title>Contact Us </title>
                <meta
                name="description"
                content="Contact Us" 
                />
                <meta
                    name="keywords"
                    content="EMS industry, ERP, MES, EQS"
                />
            </Helmet>

            <form className={classes.contact_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.contact_title}>
                    Contact Us
                </div>
                <div className={classes.message}>
                    <p>
                        Thank you for your interest in our CUBE system. <br/> 
                        Please complete the form below  so we can respond back to you properly.<br/>
                    </p>
                </div>
                <div>
                    <input type="text"  id="name" name="name" placeholder="Name*"  ref={register({required: true,})} />
                    {errors.name && errors.name.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <input type="text" id="title" name="title" placeholder="Job Title*" ref={register({required: true,})}/>
                    {errors.title && errors.title.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <input type="text" id="company" name="company" placeholder="Company*" ref={register({required: true,})}/>
                    {errors.company && errors.company.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <input type="text" id="city" name="city" placeholder="City*" ref={register({required: true,})}/>
                    {errors.city && errors.city.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <input type="text" id="state" name="state" placeholder="State/Province*" ref={register({required: true,})}/>
                    {errors.state && errors.state.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <input type="text" id="country" name="country" placeholder="Country*" ref={register({required: true,})}/>
                    {errors.country && errors.country.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <input type="text" id="phone" name="phone" placeholder="Phone Number*" ref={register({required: true,})}/>
                    {errors.phone && errors.phone.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <input type="email" id="email" name="email" placeholder="Email Address*"  ref={register({
                            required: true,
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            },
                        })} />
                    {errors.email && errors.email.type === "required" && errorMessage(required)}
                    {errors.email && errors.email.type === "pattern" && errorMessage(pattern)}
                </div>
                <div>
                    <input type="text" id="subject" name="subject" placeholder="Subject*" ref={register({required: true,})}/>
                    {errors.subject && errors.subject.type === "required" && errorMessage(required)}
                </div>
                <div>
                    <textarea id="message" name="message" placeholder="Message*" ref={register({required: true,})} />
                    {errors.message && errors.message.type === "required" && errorMessage(required)}
                </div>
                <button type="submit">{status}</button>
            </form>
        </div>
    );

}

export default MainContactUsPage;
