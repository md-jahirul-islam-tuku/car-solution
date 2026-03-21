import React, { useRef } from "react";
import { BiSend } from "react-icons/bi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import ButtonSpinner from "../../Buttons/ButtonSpinner";
import { useState } from "react";
import photo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const handleMessage = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mbqd7qo",
        "template_eog9pgd",
        form.current,
        "3BJ0Rz1QiydsvKtlC",
      )
      .then(
        (result) => {
          if (result.text) {
            Swal.fire({
              icon: "success",
              title: "Message has sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
          }
        },
        (error) => {
          if (error.text) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.text}`,
            });
          }
        },
      );
    e.target.reset();
  };
  return (
    <div className="lg:w-[67vw] lg:h-[70vh] 2xl:w-[50vw] mx-auto rounded-xl">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="pt-10 text-3xl font-semibold text-primary text-center"
      >
        Contact with us
      </h1>
      <div className="lg:flex items-center p-5">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="lg:w-1/2"
        >
          <div>
            <Link to="/" className="flex flex-col items-center">
              <img src={photo} alt="Logo" className="w-36" />
              <h2 className="text-3xl font-bold text-gray-600">Car Solution</h2>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="lg:w-1/2 pt-10"
        >
          <form ref={form} onSubmit={handleMessage}>
            <div className="form-control w-full">
              <input
                name="name"
                type="name"
                className="rounded-lg input-bordered input"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-control w-full my-2">
              <input
                name="email"
                type="email"
                className="rounded-lg input-bordered input"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-control w-full my-2">
              <input
                name="location"
                type="location"
                className="rounded-lg input-bordered input"
                placeholder="Address"
                required
              />
            </div>
            <div className="form-control w-full my-2">
              <input
                name="subject"
                type="text"
                className="rounded-lg input-bordered input"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-control w-full">
              <textarea
                name="message"
                type="message"
                className="rounded-lg input-bordered input h-20 pt-2"
                placeholder="Message"
              />
            </div>
            <div className="lg:flex items-center justify-between">
              <button
                type="submit"
                className="btn btn-primary w-32 lg:flex my-5 text-lg tooltip tooltip-secondary tooltip-right normal-case"
                data-tip="To: mdjahirulislamtuku@gmail.com"
              >
                {loading ? (
                  <ButtonSpinner />
                ) : (
                  <>
                    Send <BiSend className="h-6 w-6 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
