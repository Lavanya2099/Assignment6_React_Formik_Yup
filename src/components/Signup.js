import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './login.css'

function Signup(props) {

    let initialValues = {
        firstName: '',
        lastName: '',
        userName:'',
        password:'',
        remember: false
    }

    let validationSchema = yup.object().shape({
        firstName: yup.string().min(7).required("firstName is required"),
        lastName: yup.string().min(3).required("lastName is required"),
        userName: yup.string().email("enter valid email").required("email is required"),
        password: yup.string().required("password is required").min(5)
    })

    let onSubmit = (values, props) => {
        console.log(values);
        props.resetForm()
    }

    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/')
       }
   
    return (
        <div className='container border mt-5'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                {(props) => (
                    <Form>
                        <div className='container'>



                        <div className="mb-3">
                                <label>FirstName</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter FirstName"
                                    name="firstName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="firstName" /></p>
                            </div>

                            <div className="mb-3">
                                <label>LastName</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter LastName"
                                    name="lastName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="lastName" /></p>
                            </div>

                            <div className="mb-3">
                                <label>Email</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    name="userName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="userName" /></p>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <Field

                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="password"
                                />
                                <p className='error'><ErrorMessage name="password" /></p>

                            </div>
                        <div className='mb-3 form-check'>
                        
                        <Field
                        type='checkbox'
                        className='form-check-input'
                        id='exampleCheck1'
                        name="remember"
                       />
                     <label className='form-check-label' htmlFor='exampleCheck1'>
                         check me out
                     </label>
                       
                    </div>
                            <button type="submit" className="btn btn-primary" >Signup</button>

                            <h4 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h4>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default withRouter(Signup)
