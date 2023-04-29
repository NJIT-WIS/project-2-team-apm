import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.action = `https://njit.us21.list-manage.com/subscribe/post?u=7d11727fe19a05ff0c992a7d8&amp;id=ee9ffaca2f&amp;f_id=0037ade1f0&EMAIL=${email}`;
    form.submit();
    setEmail("");
  }

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <footer className="section bg-theme-dark">
      <div className="container flex flex-wrap items-center justify-between text-center md:text-left">
        {/* email submission */}
        <form onSubmit={handleFormSubmit} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="mb-8 md:w-1/3 md:mb-0">
          <label htmlFor="email" className="block mb-2 text-light font-bold">Subscribe to our newsletter:</label>
          <div className="flex items-center">
            <input type="email" id="email" name="EMAIL" placeholder="Your email address" className="rounded-l-lg px-4 py-2 flex-1 bg-white" value={email} onChange={handleInputChange} required />
            <button type="submit" className="rounded-r-lg px-4 py-2 bg-theme text-light hover:bg-theme-light transition-colors duration-300">Subscribe</button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
