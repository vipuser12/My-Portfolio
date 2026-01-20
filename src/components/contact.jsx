import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [state, handleSubmit] = useForm("mykkjbpj");

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            I'm seeking opportunities to apply my skills to mission-driven projects.
            <span className="block text-indigo-400 font-semibold">Let's build something great together.</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="flex items-center gap-4 bg-black/30 p-4 rounded-xl border border-gray-800">
              <FaEnvelope className="text-indigo-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email Me At</p>
                <p className="font-medium">moninja1212@hotmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-black/30 rounded-xl border border-gray-800 hover:border-indigo-500 text-indigo-500 hover:text-white transition-all text-2xl"><FaLinkedin /></a>
              <a href="#" className="p-4 bg-black/30 rounded-xl border border-gray-800 hover:border-indigo-500 text-indigo-500 hover:text-white transition-all text-2xl"><FaGithub /></a>
            </div>
          </div>

          <div className="bg-black/40 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-sm">
            {state.succeeded ? (
              <div className="text-center py-10">
                <div className="text-indigo-500 text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you, I'll get back to you very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    id="email" type="email" name="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="name@example.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                  <textarea
                    id="message" name="message" rows="4"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="How can I help you?"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"} <FaPaperPlane className="text-sm" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
