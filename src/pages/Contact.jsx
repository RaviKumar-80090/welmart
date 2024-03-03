import React from 'react';

const Contact = () => {
    // const onsubmitHnadler=(e)=>{
    //     // e.preventDefault()
    //     // console.log(e.target.user.value);
    //     // take value from the input field
    //     // const data= {
    //     //     user:e.target.user.value,
    //     //     email:e.target.email.value,
    //     //     message: e.target.message.value
    //     // }
    //     // console.log(data);
    //     // e.target.reset();
        
    // }
    return (
        <>
        <h2 className='text-3xl capitalize text-center  py-10 font-semibold text-slate-700'>feel the Conatct</h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7262575877376!2d75.79357837467087!3d26.88043696147825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53964d69137%3A0xfc8861b343551f60!2sIGS%20BOYS%20PG!5e0!3m2!1sen!2sin!4v1709109879202!5m2!1sen!2sin"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='w-[100%]'/>
    <form  action="https://formspree.io/f/xzbngalv" method="POST"
       className="max-w-[1000px] mx-auto my-10 p-3">
      <div className="mb-4 ">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="user"
          required
          placeholder="Enter your name"
        //   value={name}
        //   onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        //   value={email}
        //   onChange={handleEmailChange}
        required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          rows="5"
          name="message"
          placeholder="Enter your message"
          required
        //   value={message}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
        </>
    );
}

export default Contact;
