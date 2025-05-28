import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Zoom } from "react-awesome-reveal";

export default function Contact() {
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
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  return (
    <div
      className="container-fluid contact d-flex align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#000" }}
    >
      <Zoom className="w-100">
        <div className="row justify-content-center w-100">
          <div className="col-12 text-center mb-5">
            <h1 className="font-weight-light text-light mb-0">
              <span style={{ color: "lightgreen" }}>Thank you! </span>for showing interest
            </h1>
          </div>
          <div className="col-11 col-md-4">
            <form ref={form} id="form" onSubmit={sendEmail}>
              <div className="form-group text-light mb-4">
                <label htmlFor="n">
                  <h4 className="font-weight-light">Name *</h4>
                </label>
                <input
                  required
                  className="form-control"
                  name="from_name"
                  id="n"
                  type="text"
                />
              </div>
              <div className="form-group text-light mb-4">
                <label htmlFor="e">
                  <h4 className="font-weight-light">Email-id *</h4>
                </label>
                <input
                  required
                  className="form-control"
                  name="user_email"
                  id="e"
                  type="email"
                />
              </div>
              <div className="form-group text-light mb-4">
                <label htmlFor="d">
                  <h4 className="font-weight-light">Message *</h4>
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="d"
                  rows="5"
                  placeholder="Write your message/review"
                ></textarea>
              </div>
              <div className="form-group text-center pt-3">
                <button
                  type="submit"
                  className="btn btn-outline-light btn-secondary"
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
}
