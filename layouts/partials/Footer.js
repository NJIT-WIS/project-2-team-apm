import { useState } from "react";
import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;
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
    const emailAddress = event.target.email.value;
    // addSubscriber function not needed anymore
    // email form will be submitted to Mailchimp directly
    event.target.email.submit();
    alert('Thank you for subscribing to our newsletter!');
    event.target.reset();
  }

  return (
    <footer className="section bg-theme-dark">
      <div className="container flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
        {/* footer menu */}
        <ul className="md:w-2/3 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-light hover:text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* email submission */}
        <form onSubmit={handleFormSubmit} method="post" className="mb-8 md:w-1/4">
          <label htmlFor="email" className="block mb-2 text-light font-bold">Subscribe to our newsletter:</label>
          <div className="flex items-center">
            <input type="email" id="email" name="EMAIL" placeholder="Your email address" className="rounded-l-lg px-4 py-2 flex-1 bg-white" value={email} onChange={handleInputChange} required />
            <button type="submit" className="rounded-r-lg px-4 py-2 bg-theme text-light hover:bg-theme-light transition-colors duration-300">Subscribe</button>
          </div>
        </form>
      </div>
      {/* copyright */}
      <div className="text-center mt-8 md:mt-0">
        {/* social icons */}
        <Social source={social} className="social-icons mb-8 md:mb-0" />
        {markdownify(copyright, "p", "text-light")}
      </div>
    </footer>
  );
};

export default Footer;
