import { FaSkype } from "react-icons/fa";
import hero from "../assets/images/contact-title-img.jpg";

const ContactUs = () => {
  return (
    <section className="pb-32 bg-[#F6F7EB] text-[#272932]">
      <div
        className="h-[450px] relative p-8 flex justify-center items-center"
        style={{
          background: `url(${hero}) center top no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#1c1919] opacity-50 0 z-10"></div>
        <div className="pt-20 pb-10 relative z-20 text-center">
          <h1 className="text-4xl font-semibold text-white">Contact us</h1>
          <div className="w-16 mt-10 border border-primary_pink mx-auto"></div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <p className="mb-16">
          It’s easy to rent Aquentro online, over the phone or via contact form.
          If you need help, reach out and a member of our team will help you get
          started.
        </p>
        <div className="">
          <div className="p-8 bg-white rounded-md shadow-lg mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-4">
                <FaSkype className="h-8 w-8 text-primary_pink" />
                <h6 className="text-xs">Unites States</h6>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="h-8 w-8 text-primary_pink "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h6 className="text-xs">
                  8240 Exchange Drive - Suite G4 Orlando - FL 32809
                </h6>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="h-8 w-8 text-primary_pink"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h6 className="text-xs md:whitespace-nowrap">(407) 409-4516</h6>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  data-name="1-Email"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  stroke-width="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-primary_pink"
                >
                  <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                </svg>
                <h6 className="text-xs">info@ezclickstay.com</h6>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-2xl font-medium">Got a Question?</h1>
              <div className="w-16 mt-8 border border-primary_pink mb-12"></div>
              <article className="text-md font-normal space-y-4 max-w-sm text-[#79745C]">
                <p>
                  We’d love to hear from you – send us any question related to
                  booking our rental properties. You can book a property online
                  on this website or call us to reserve a property for you.
                </p>
                <p>
                  If you got a question, reach out via the contact form or phone
                  and a member of our team will help you get started easily.
                </p>
                <p>
                  <span className="font-bold block">Office Hours:</span>
                  We are open from 10:00 am to 8:00 pm except Saturdays and
                  Sundays.
                </p>
              </article>
            </div>
            <div>
              <h1 className="text-2xl font-medium">Contact us</h1>
              <div className="w-16 mt-8 border border-primary_pink mb-12"></div>
              <form className="max-w-sm space-y-8">
                <div className="flex flex-col">
                  <label className="" for="">
                    Subject
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-[#272932] px-4 h-10 m-0"
                    id=""
                    placeholder="Type the subject"
                  />
                </div>
                <div className="flex flex-col">
                  <label for="" className="">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-transparent border border-[#272932] p-4"
                    id=""
                    rows="3"
                    placeholder="Type your message"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label className="" for="">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-[#272932] px-4 h-10 m-0"
                    id=""
                    placeholder="Name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="" for="">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-[#272932] px-4 h-10 m-0"
                    id=""
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex justify-center items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-[#fe598d] rounded-lg hover:bg-[#fff] hover:border hover:border-[#fe598d] hover:text-[#fe598d]  w-[150px] "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
