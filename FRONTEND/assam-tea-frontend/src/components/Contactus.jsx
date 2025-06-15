import React, { useState } from 'react';
import './Contactus.css';
import contactbg from '../assets/images/contact-bg.jpg';
import axios from 'axios';

const Contactus = () => {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
   
  });

  const [bulkForm, setBulkForm] = useState({
  address: '',
  email: '',
  phone: '',
  workingHours: ''
});

const handleBulkChange = (e) => {
  setBulkForm({ ...bulkForm, [e.target.name]: e.target.value });
};

const handleBulkSubmit = async () => {
  try {
    const res = await axios.post(`http://localhost:5000/api/contact/bulk`, bulkForm);
    alert("Bulk order contact submitted successfully!");
    setBulkForm({ address: '', email: '', phone: '', workingHours: '' });
  } catch (error) {
    alert("Failed to submit bulk order contact.");
    console.log(error);
  }
};



  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value});
  }


  const handleSubmit = async()=>{

    try {
      const res = await axios.post('http://localhost:5000/api/contact', form);
      alert("Message sent successfully!");
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert("Failed to send message.");
      console.log(error);
    }
  }
  return (
    <>
      <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(15,10,9,0.3),rgba(15,10,9,0.3)),url(${contactbg})`}}>
        <div className="hero-content">
          <h1 id='content-h1'>Get In Touch</h1>
          <p id='content-p'>“We’re happy to answer your questions”</p>
        </div>
      </div>
      <div className='contact-form'>
        <div className='contact-heading'>
          <h1 id='contact-heading-h1'>
            Contact From
          </h1>
        </div>
        <div className='contact-fields'>
          <div className='f-name'>
            <label> First Name : </label><br/>
            <input type='text' name="firstName" value={form.firstName} onChange={handleChange} placeholder='Enter Your First Name : '/>
          </div>
          <div className='l-name'>
            <label> Last Name : </label><br/>
            <input type='text' name="lastName" value={form.lastName} onChange={handleChange} placeholder='Enter Your Last Name : '/>
          </div>
          <div className='email'>
            <label> Email : </label><br/>
            <input type='mail' name="email" value={form.email} onChange={handleChange} placeholder='Enter Your Email : '/>
          </div>
          <div className='phone'>
            <label> Phone : </label><br/>
            <input type='telephone' name="phone" value={form.phone} onChange={handleChange} placeholder='Enter Your Phone No. : '/>
          </div>
          <div className='message'>
            <label> Message : </label><br/>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder='Write Your Message : '/>
          </div>
          <div className='submit-btn'>
            <button onClick={handleSubmit} id='submit-btn'> SUBMIT </button>
          </div>
        </div>
      </div>
     <div className='contact-detail'>
  <div className='contact-detail-heading'>
    <h1 id='contact-detail-h1'>Bulk Order Contact</h1>
  </div>
  <div className='contact-detail-form'>
    <div className='address-map'>
      <label>Address With Map:</label><br/>
      <textarea
        name="address"
        placeholder='Write Your Address With Map'
        value={bulkForm.address}
        onChange={handleBulkChange}
      />
    </div>
    <div className='contact-detail-email'>
      <label>Email:</label><br/>
      <input
        type="email"
        name="email"
        placeholder='Write Your Email'
        value={bulkForm.email}
        onChange={handleBulkChange}
      />
    </div>
    <div className='contact-detail-phone'>
      <label>Phone:</label><br/>
      <input
        type="tel"
        name="phone"
        placeholder='Write Your Phone'
        value={bulkForm.phone}
        onChange={handleBulkChange}
      />
    </div>
    <div className='contact-detail-work'>
      <label>Working Hour:</label><br/>
      <input
        type="text"
        name="workingHours"
        placeholder='Write Your Working Hour'
        value={bulkForm.workingHours}
        onChange={handleBulkChange}
      />
    </div>
    <div className='contact-detail-btn'>
      <button id='submit-btn' onClick={handleBulkSubmit}>SUBMIT</button>
    </div>
  </div>
</div>

    </>
  );
};

export default Contactus;