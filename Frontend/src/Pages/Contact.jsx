import { set } from 'mongoose';
import { useState, useEffect } from 'react';

function Contact() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    message
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Form submitted successfully:", result);
            alert("Form submitted successfully");
            setUsername('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error! Form not submitted");
        }
    }

  return (
    <>
        <div className='flex justify-center' >
            <form onSubmit={handleSubmit} className='shadow-sm border border-gray-300 rounded-lg bg-gray-100 w-140 h-115 p-4' >
                <div>
                    <h1 className='font-bold text-lg text-center ' >Contact Me</h1>
                </div>
                <div>
                    <input type="text" 
                            value={username}
                            placeholder='Enter your name' 
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-full py-2 my-2 border shadow-sm border-gray-300 rounded-md' />
                    <input type="email" 
                            value={email}
                            placeholder='Enter your email' 
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full py-2 my-2 border shadow-sm border-gray-300 rounded-md' />
                    <textarea value={message}
                            rows={8} 
                            placeholder='Hi! Enter your message'
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-full py-2 my-2 border shadow-sm border-gray-300 rounded-md' />
                </div>
                <div>
                    <button type='submit' className='p-2 w-full border rounded-md border-gray-300 shadow-sm cursor-pointer hover:bg-gray-400' >Submit</button>
                </div>
            </form>
        </div>
    </>
  );
}

export default Contact;