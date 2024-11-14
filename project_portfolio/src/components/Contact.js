import React from 'react';

const Contact = () => {
    return (
        <section>
            <h1>Drop me a line</h1>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Write your massage here..." required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;