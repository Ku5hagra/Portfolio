import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Zoom } from "react-awesome-reveal";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4j6api",
        "template_rqhbjgh",
        form.current,
        "ImQy02VmKrdufC-l_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clear();
  };
  const clear = () => {
    document.getElementById("form").reset();
  };

  return (
    <div className="container-fluid contact py-5">
      <Zoom>
        <h1 className="font-weight-light text-light text-center pt-5 mb-0 ">
          <span style={{ color: "lightgreen" }}>Thank you! </span>for showing
          interest
        </h1>
        <br />
        <br />
        <br />
        <div className="row justify-content-center ">
          <div className="col-11 col-md-4 mt-0">
            <form ref={form} className="" id="form" onSubmit={sendEmail}>
              <div className="form-group text-light ">
                <label htmlFor="n">
                  <h4 className=" font-weight-light">Name *</h4>
                </label>
                <br />
                <input
                  required
                  className="form-control"
                  name="from_name"
                  id="n"
                  type="text"
                />
              </div>
              <div className="form-group text-light">
                <label htmlFor="e">
                  <h4 className=" font-weight-light">Email-id *</h4>
                </label>
                <br />
                <input
                  required
                  className="form-control"
                  name="user_email"
                  id="e"
                  type="email"
                />
              </div>
              <div className="form-group text-light">
                <label htmlFor="d">
                  <h4 className=" font-weight-light">Message*</h4>
                </label>
                <br />
                <textarea
                  className="form-control"
                  name="message"
                  id="d"
                  cols="40"
                  rows="5"
                  placeholder="write your message/review"
                ></textarea>
              </div>
              <div className="form-group text-center pt-3">
                <button
                  type="submit"
                  id="submitbutton"
                  className="btn btn-outline-light btn-secondary "
                  name="submitbutton"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Zoom>
    </div>
  );
};
