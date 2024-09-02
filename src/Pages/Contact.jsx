import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900">Get in Touch</h2>
                <p className="text-center text-gray-600 mb-8">
                   
                    <br />
                    For any complaints, you can also contact our warden:
                    <br />
                    <strong>Rakesh Goyal</strong>
                    <br />
                    Phone: 9465884826
                    <br />
                    Email: drrakeshgoyal15@gmail.com
                </p>
                <form 
                    action="https://formspree.io/f/meojnbbe"
                    method="POST"
                >
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="johndoe@example.com"
                            required
                        />
                    </div>
                                        <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 h-32 resize-none"
                            placeholder="Your message here..."
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
