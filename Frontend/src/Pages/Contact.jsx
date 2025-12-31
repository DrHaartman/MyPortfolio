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
            setUsername('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit} >
            <div>
                <h1>About Page</h1>
            </div>
            <div>
                <input type="text" 
                        value={username}
                        placeholder='Enter your name' 
                        onChange={(e) => setUsername(e.target.value)} />
                <input type="text" 
                        value={email}
                        placeholder='Enter your email' 
                        onChange={(e) => setEmail(e.target.value)} />
                <textarea value={message} 
                        placeholder='Hi! Enter your message'
                        onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
  );
}

export default Contact;