import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs
		  .sendForm('service_nurkd1g', 'template_oyv0abf', form.current, {
			publicKey: 'f7iOpXXf4b4dgx09t',
		  })
		  .then(
			() => {
			  console.log('SUCCESS!');
			  document.getElementById('success_fail_info').innerHTML = 'Email sent successfully!';
			  document.getElementById('success_fail_info').style.color = 'green';
			  document.getElementById('success_fail_info').style.display = 'block';
			  setTimeout(() => {
				document.getElementById('success_fail_info').style.display = 'none';
			  }, 5000);
			  form.current.reset();
			},
			(error) => {
			  console.log('FAILED...', error);
			  document.getElementById('success_fail_info').innerHTML = 'Failed to send email!';
			  document.getElementById('success_fail_info').style.color = 'red';
			  document.getElementById('success_fail_info').style.display = 'block';
			  setTimeout(() => {
				document.getElementById('success_fail_info').style.display = 'none';
			  }, 5000);
			},
		  );
	  };

    return (
	    <div className="row justify-content-center">
	      <div className="col-12 col-md-10 col-lg-8">
	        <div className="contact_form">
	          <form ref={form} onSubmit={sendEmail}>
	            <div className="row">
	              <div className="col-12">
	                <div id="success_fail_info" />
	              </div>
	              <div className="col-12 col-md-6" data-aos="fade-up">
	                <div className="group wow fadeInUp" data-wow-delay="0.2s">
	                  <input type="text" name="name" id="name" required />
	                  <span className="highlight" />
	                  <span className="bar" />
	                  <label>Name</label>
	                </div>
	              </div>
	              <div className="col-12 col-md-6" data-aos="fade-up">
	                <div className="group wow fadeInUp" data-wow-delay="0.3s">
	                  <input type="text" name="email" id="email" required />
	                  <span className="highlight" />
	                  <span className="bar" />
	                  <label>Email</label>
	                </div>
	              </div>
	              <div className="col-12" data-aos="fade-up">
	                <div className="group wow fadeInUp" data-wow-delay="0.4s">
	                  <input type="text" name="subject" id="subject" required />
	                  <span className="highlight" />
	                  <span className="bar" />
	                  <label>Subject</label>
	                </div>
	              </div>
	              <div className="col-12" data-aos="fade-up">
	                <div className="group wow fadeInUp" data-wow-delay="0.5s">
	                  <textarea name="message" id="message" required defaultValue={""} />
	                  <span className="highlight" />
	                  <span className="bar" />
	                  <label>Message</label>
	                </div>
	              </div>
	              <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.6s">
	                <button type="submit" className="btn dream-btn" data-aos="fade-up">Send Message</button>
	              </div>
	            </div>
	          </form>
	        </div>
	      </div>
	    </div>
    );
}

export default Form