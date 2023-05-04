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
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!checkboxChecked) {
      alert("Please check the box to confirm your subscription.");
      return;
    }

    const form = event.target;
    form.action = `https://njit.us21.list-manage.com/subscribe/post?u=7d11727fe19a05ff0c992a7d8&amp;id=ee9ffaca2f&amp;f_id=0037ade1f0&EMAIL=${email}`;
    form.submit();
    setEmail("");
    setCheckboxChecked(false);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <footer className="section bg-theme-dark">
      <div className="container flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
        {/* footer menu */}
        <ul className="mb-8 md:w-3/5 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-light hover:text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* email submission */}
        <form onSubmit={handleFormSubmit} method="post" className="mb-8 md:w-4/5">
          <label htmlFor="email" className="block mb-2 text-light font-bold">
            Subscribe to our newsletter:
          </label>
          <div className="flex items-center">
            <input
              type="email"
              id="email"
              name="EMAIL"
              placeholder="Your email address"
              className="rounded-l-lg px-4 py-2 flex-1 bg-white"
              value={email}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="rounded-r-lg px-4 py-2 bg-theme text-light hover:bg-theme-light transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="confirm-subscription"
              name="confirm_subscription"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="confirm-subscription" className="text-light">
              I agree to receive marketing communications from your company and that I have read the Privacy Policy
            </label>
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
