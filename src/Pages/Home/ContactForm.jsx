import React, { useRef } from 'react';
import { BsCalendar3, BsTelephoneForward } from 'react-icons/bs';
import { MdMyLocation } from 'react-icons/md';
import { BiSend } from 'react-icons/bi';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ButtonSpinner from '../../Buttons/ButtonSpinner';
import { useState } from 'react';
import photo from '../../assets/logo.png'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const form = useRef();
  const handleMessage = e => {
    setLoading(true)
    e.preventDefault();
    emailjs.sendForm('service_144r5le', 'template_taqtiju', form.current, 'xSBDCtNmdYIgrslH4')
      .then((result) => {
        if (result.text) {
          Swal.fire({
            icon: 'success',
            title: 'Message has sent successfully',
            showConfirmButton: false,
            timer: 1500
          })
          setLoading(false)
        }

      }, (error) => {
        if (error.text) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.text}`,
          })
        }
      });
    e.target.reset()
  }
  return (
    <div>
      <div className='lg:w-[67vw] lg:h-[70vh] 2xl:w-[50vw] mx-auto rounded-xl'>
        <h1 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className='pt-10 text-3xl font-semibold text-primary'>Contact with us</h1>
        <div className='lg:flex items-center p-5'>
          <div data-aos="fade-right"
            data-aos-duration="2000" className='lg:w-1/2'>
            <div className='flex justify-center lg:justify-start mb-5'>
              <img src={photo} alt="Tuku" className='w-36 mr-3' />
            </div>
          </div>
          <div data-aos="fade-left"
            data-aos-duration="2000" className='lg:w-1/2 pt-10'>
            <form ref={form} onSubmit={handleMessage}>
              <div className='form-control w-full'>
                <input name='name' type='name' className='rounded-lg input-bordered input' placeholder='Your name' required />
              </div>
              <div className='form-control w-full my-2'>
                <input name='email' type='email' className='rounded-lg input-bordered input' placeholder='Email' required />
              </div>
              <div className='form-control w-full my-2'>
                <input name='location' type='location' className='rounded-lg input-bordered input' placeholder='Address' required />
              </div>
              <div className='form-control w-full my-2'>
                <input name='subject' type='text' className='rounded-lg input-bordered input' placeholder='Subject' required />
              </div>
              <div className='form-control w-full'>
                <textarea name='message' type='message' className='rounded-lg input-bordered input h-20 pt-2' placeholder='Message' />
              </div>
              <div className='lg:flex items-center justify-between'>
                <button type='submit' className='btn btn-primary w-32 lg:flex my-5 text-lg'>
                  {loading ? <ButtonSpinner /> : <>Send <BiSend className='h-6 w-6 ml-2' /></>}
                </button>
                <p>To <span className='text-primary'>mdjahirulislamtuku@gmail.com</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;