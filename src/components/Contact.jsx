
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="my-3 text-gray-300">
              <h3 className="mb-5 text-4xl font-semibold">
                About <span>Me</span>
              </h3>
              <p className="w-11/12 mx-auto leading-7 text-justify">
                A dedicated software development student at Navgurukul with
                strong skills in front-end technologies like JavaScript,
                React.js, HTML, and CSS. I am eager to apply my knowledge to
                real-world projects, leveraging my problem-solving abilities and
                teamwork experience to contribute effectively.
              </p>
            </div>

            <div className="flex items-center mt-10 gap-7">
              <div className="p-4 rounded-lg bg-gray-800/40">
                <h3 className="text-2xl font-semibold text-white md:text-4xl">
                  04
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="p-5 rounded-lg bg-gray-800/40">
                <h3 className="text-2xl font-semibold text-white md:text-4xl">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>yrs of experience</span>
                </p>
              </div>

              <div className="p-5 rounded-lg bg-gray-800/40">
                <h3 className="text-2xl font-semibold text-white md:text-4xl">
                  30
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>happy clients</span>
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="mb-2 text-xl font-bold text-gray-100">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md"
            />
            <button
              type="submit"
              className="w-full py-3 text-xl font-semibold text-gray-100 rounded-md bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}

export default Contact