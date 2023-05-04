import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { addSubscriber } from "/lib/sendEmailToMailChimp"


const Footer = () => {
  const { copyright } = config.params;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const emailAddress = event.target.email.value;
    await addSubscriber(emailAddress);
    alert('Thank you for subscribing to our newsletter!');
    event.target.reset();
  }

  return (
    <footer className="section bg-theme-dark">
      <div className="container flex flex-wrap items-center justify-between text-center md:text-left">
        {/* footer menu */}
        <ul className="flex-grow-0 mb-8 md:w-2/3 md:mb-0 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-light hover:text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* email submission */}
        <form onSubmit={handleFormSubmit} className="mb-8 md:w-1/3 md:mb-0">
          <label htmlFor="email" className="block mb-2 text-light font-bold">Subscribe to our newsletter:</label>
          <div className="flex items-center">
            <input type="email" id="email" name="email" placeholder="Your email address" className="rounded-l-lg px-4 py-2 flex-1 bg-white" />
            <button type="submit" className="rounded-r-lg px-4 py-2 bg-theme text-light hover:bg-theme-light transition-colors duration-300">Subscribe</button>
          </div>
        </form>
      </div>
      {/* social icons */}
      <div className="container flex flex-wrap items-center justify-center mb-2">
        <Social source={social} className="social-icons mr-4" />
      </div>
      {/* copyright */}
      <div className="container text-center">
        {markdownify(copyright, "p", "text-light")}
      </div>
    </footer>
  );
};
{}
export default Footer;
