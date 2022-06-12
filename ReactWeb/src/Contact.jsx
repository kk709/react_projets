import React, { useState } from 'react';

const Contact = () => {
    const[ data, setData ] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(` My name is ${data.fullname}. My Mobile number is ${data.phone}. My email is ${data.email}. Here is my message that i want to say ${data.message} 
        `);
    };

    return(
        <>
            <div className="my-4">
                <h1 className="text-center"> Contact us </h1>
            </div>
            <div className="container contact_div">
                <dov className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone </label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </dov>
            </div>
        </>
    );
}

export default Contact;