import React, { Component } from "react";
import Field from "../Common/Field";
import { ErrorMessage, withFormik } from "formik";
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name *'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email *'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone *'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message *'}
        ]
    ]
}




class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                                {fields.sections.map((section, sectionIndex) => {
                                    console.log("Render section", sectionIndex, "with", section);
                                    return (
                                        <div className="col-md-6" key={sectionIndex}>
                                            {section.map((field, index) => {
                                                return <Field 
                                                    {...field} 
                                                    key={index} 
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={(this.props.touched[field.name])}
                                                    errors={this.props.errors[field.name]}
                                                />
                                            })}
                                        </div>
                                    )
                                })}
                        </div>
                        <div className="text-center">
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="submitButton" 
                                type="submit"
                                
                                >
                                    Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on, your name is longer than that.').required('You must give us your name.'),
        email: Yup.string().email('You need to give a valid email.').required('We need your email.'),
        phone: Yup.string()
            .min(10, 'Please provide your 10 digit phone number')
            .max(15, 'Your phone number is too long.')
            .required('We need your phone number.'),
        message: Yup.string()
            .min(1, 'Please provide more information.')
            .required('Please write a small message for your recipient.')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);