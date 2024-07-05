import React, { useContext } from 'react'
import './Contact.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MyContext from '../Context/MyContext';


const Contact = () => {

  const {setOpenalert,setLoadingin,loadingin,setMessage} = useContext(MyContext)

  const formik = useFormik({

    initialValues: {
    name: '',
    email: '',
    mobile:'',
    message: '',
    },
    validationSchema: yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        message: yup.string().required('Message is required').min(5,'minimum 5 character is required'),
        mobile: yup.string().required('Mobile is required'),
        
      }),
    onSubmit: async(values,{ resetForm }) => {
   
      setLoadingin(true)
  
      const response =   await fetch('http://localhost:3032/contact', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(values),
         });
   
         const data = await response.json();
   
         if(data.go==='success'){
          
        setMessage(data.message)
        setOpenalert(true)
        resetForm()
     
         }else{
           setMessage(data.error)
           setOpenalert(true)
         }
         setLoadingin(false)
        
  
    },
    });
    
    
  return (
    <div className='contact'>
   
    <div className="contact-right">

   <div className="contact-detail">
    <>
   <div className='contact-page' >
<h1>Contact Me !</h1>
<form onSubmit={formik.handleSubmit} className='contact-form'>
<TextField
id="name"
name="name"
value={formik.values.name || ''}
onChange={formik.handleChange}
error={formik.touched.name && Boolean(formik.errors.name)}
helperText={formik.touched.name && formik.errors.name}
label="Name"
variant="standard" />


<TextField
id="email"
name="email"

value={formik.values.email || ''}
onChange={formik.handleChange}
error={formik.touched.email && Boolean(formik.errors.email)}
helperText={formik.touched.email && formik.errors.email}
label="Email"
variant="standard" />

<TextField
id="mobile"
name="mobile"

value={formik.values.mobile || ''}
onChange={formik.handleChange}
error={formik.touched.mobile && Boolean(formik.errors.mobile)}
helperText={formik.touched.mobile && formik.errors.mobile}
label="mobile"
variant="standard" />

<TextField
id="message"
name="message"
rows={4}
multiline
value={formik.values.message || ''}
onChange={formik.handleChange}
error={formik.touched.message && Boolean(formik.errors.message)}
helperText={formik.touched.message && formik.errors.message}
label="Message"
variant="standard" />

<Button variant="contained" className='SM' type='submit' >{loadingin?'wait...':'Send Message'}</Button>

</form>
</div>

</>
   </div>
   
    </div>
   
</div>
  )
}

export default Contact