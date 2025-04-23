import React, { useState } from 'react'

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
      <section className="contact relative w-full  min-h-screen">
        <div className="blur"></div>
        <div className='bg-black  opacity-50 min-h-screen w-full '>

        <h2 className="text-center text-3xl font-bold text-orange-500 my-8 pt-16 ">
        ⚡ Contact Me ⚡
      </h2>

        <form
  onSubmit={handleSubmit}
  className="mt-9 max-w-md mx-auto p-6 bg-gradient-to-br from-black via-gray-900 to-purple-900 rounded-lg shadow-lg border border-orange-500"
>
  <h2 className="text-2xl font-bold text-orange-400 text-center mb-6 ">
    🎃 Haunted Contact Form
  </h2>

  <div className="mb-4">
    <label className="block text-orange-300 font-semibold mb-2">Name:</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>

  <div className="mb-4">
    <label className="block text-orange-300 font-semibold mb-2">Email:</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>

  <div className="mb-6">
    <label className="block text-orange-300 font-semibold mb-2">Message:</label>
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
      rows="4"
      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded shadow-md transition duration-300 ease-in-out"
  >
    Send Boo! 👻
  </button>
</form>


        </div>
        
      </section>
    </>
  );
}

export default Contact
