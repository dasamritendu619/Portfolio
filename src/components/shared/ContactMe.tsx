'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ContactMe() {
  const { register, handleSubmit, reset } = useForm();

  const submit = async (data:any) => {
    const { name, email, message } = data;
    try {
      await axios.post("/api/sent-mail", {
        name: name,
        email: email,
        message: message,
      });
      reset();
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-12 pt-20 relative">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl text-center font-sans font-bold mb-8 dark:text-white text-gray-800">
          Contact Me
        </h1>
        <p className="dark:text-neutral-500 text-neutral-600 max-w-lg mx-auto mb-8 text-sm text-center">
          If you have any questions or want to work together, feel free to send me a message.
        </p>
        <form onSubmit={handleSubmit(submit)} className="space-y-4 mt-4">
          <input
            type="text"
            {...register('name',{required:true})}
            placeholder="Your name"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full px-4 py-2 bg-gray-700"
            required
          />
          <input
            type="email"
            {...register('email',{required:true})}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full px-4 py-2 bg-gray-700"
            required
          />
          <textarea
            {...register('message',{required:true})}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-gray-700"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 block mx-auto text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;