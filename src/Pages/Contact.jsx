import React, { useState } from "react";
import axios from "axios"; // Import axios for making requests
import Navbar from "../Components/Navbar";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!fullName || !contact || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Sending form data to the backend using POST
      const response = await axios.post("http://localhost:8080/api/details", {
        fullName,
        contact,
        email,
        message,
      });

      if (response.status === 200) {
        alert("A MESSAGE HAS BEEN SENT PLEASE CHECK YOUR MAIL AND CONTACT ME!");
        // Reset the form state
        setFullName("");
        setContact("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />

      <h1 className="text-center text-3xl font-extrabold my-4 py-5">
        K<span className="text-greenish">EE</span>P{" "}
        <span className="text-greenish">IN</span> T
        <span className="text-greenish">OU</span>CH
      </h1>

      <div className="flex justify-center items-center py-5">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="FULLNAME"
            >
              FULLNAME
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="FULLNAME"
              type="text"
              placeholder="FULLNAME"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              name="fullname"
            />
          </div>

          {/* Contact */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="NUMBER"
            >
              YOUR CONTACT
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="NUMBER"
              type="number"
              placeholder="E.g: 08110...."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              name="contact"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              YOUR EMAIL ADDRESS
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
              placeholder="e.g@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Message"
            >
              MESSAGE
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
