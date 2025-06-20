"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-lamaPurple">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600 text-lg mb-8">
          Thank you for reaching out! We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lamaPurple"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lamaPurple"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lamaPurple"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-lamaPurple text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
