import React from 'react';
import * as yup from 'yup';

const contactSchema = yup.object().shape({
    fullname: yup.string("Enter a valid input").required("Required"),
    email: yup.string("Enter a valid input").email("Enter a valid email").required("Required"),
    message: yup.string("Enter a valid input").required("Required"),
    phone: yup.string("Enter a valid input"),//isn't required
    website: yup.string("Enter a valid input")//isn't required
})

export default contactSchema