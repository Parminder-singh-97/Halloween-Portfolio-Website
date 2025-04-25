
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object to send as POST data
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    console.log(formData);
    // Send data to Google Apps Script Web App URL
    fetch(
      "https://script.google.com/macros/s/AKfycbxuUledksoyE3d2jJYuGIRKZm5pbTCKvcYKeZLrscfLroRKfFiNTDJZAQHDEpzneqx3/exec",
      {
        // Replace with your actual Google Apps Script URL
        method: "POST",
        body: formData,
        mode: 'no-cors'
      }
    )
      .then((response) => response.text())
      .then((data) => {
        setResponseMessage(data); // Show the response message from Google Apps Script
        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");
        // alert
        alert(responseMessage);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMessage("There was an error submitting your form.");
      });
  };

  return (
    <>
      <section id="contact" className="contact relative w-full min-h-screen" >
        <div className="bg-contact">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover md:bg-center bg-start -z-10"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="../contact-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="blur"></div>
        <div className="contactblur-bottm"></div>
        <div className="min-h-screen w-full">
          <h2
            className="text-center text-[clamp(1.5rem,5vw,3rem)] font-bold text-orange-500 my-8 pt-16"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            ⚡ Contact Me ⚡
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-9 max-w-md mx-auto p-6 bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg shadow-orange-500 border-4 border-orange-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-2xl font-bold text-orange-800 text-center mb-6" data-aos="zoom-in">
              🎃 Haunted Contact Form
            </h2>

            <div className="mb-4" data-aos="fade-right">
              <label
                htmlFor="name"
                className="block text-orange-300 font-semibold mb-2"
              >
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4" data-aos="fade-left">
              <label
                htmlFor="email"
                className="block text-orange-300 font-semibold mb-2"
              >
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-6" data-aos="fade-up">
              <label
                htmlFor="message"
                className="block text-orange-300 font-semibold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-700 hover:bg-orange-600 text-white font-bold rounded shadow-md transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Send Boo! 👻
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
