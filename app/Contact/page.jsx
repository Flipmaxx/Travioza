'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, CalendarClock } from 'lucide-react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_oes7t2c',       
        'template_n7e9vhc', 
        form.current,
        'FCY3v_M35AUEsWwnp' 
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error('EmailJS Error:', error);
        alert('Failed to send message.');
      });
  };

  return (
    <section className="min-h-screen w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#FFCB05] mb-4">Get in Touch with Us</h2>
          <p className="text-lg text-gray-600">
            Have questions about our adventures or need help planning your next trip? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg lg:col-span-2" data-aos="fade-up">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input name="first_name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input name="last_name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" required className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#FFCB05] text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {sent && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
            </form>
          </div>

          <div className="space-y-6" data-aos="fade-up">
            <div className="bg-[#FFCB05] text-white rounded-2xl p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src="/Images/LOGO.png" alt="Support" fill className="rounded-full object-cover border-4 border-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold">Travioza Support</h4>
              <p className="text-sm text-white/90">Our adventure experts are here to help</p>
            </div>

            <InfoCard
              icon={<Mail className="w-5 h-5 text-[#FFCB05]" />}
              title="Email"
              text="traviozaholidays@gmail.com"
              link="mailto:traviozaholidays@gmail.com"
            />
            <InfoCard
              icon={<Phone className="w-5 h-5 text-[#FFCB05]" />}
              title="Call Us"
              text="+91 8590208940"
              link="tel:+918590208940"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-[#FFCB05]" />}
              title="Visit Us"
              text="Mangalassery Tower, Eloor Rd, opposite Ganapathy Temple, North Kalamassery, Kochi"
              link="https://www.google.com/maps/place/Flipmaxx+Global+LLP/"
            />
            <InfoCard
              icon={<CalendarClock className="w-5 h-5 text-[#FFCB05]" />}
              title="Working Hours"
              text="Mon–Sat: 9:30AM – 6PM (IST)"
            />
          </div>
        </div>

        <div className="mt-16 h-96 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.090193038684!2d76.3183932!3d10.0633198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f2a5bbc9f17%3A0x44d653f1be99a20!2sFlipmaxx%20Global%20LLP!5e0!3m2!1sen!2sin!4v1719474734000!5m2!1sen!2sin"
  width="100%"
  height="100%"
  allowfullscreen=""
  loading="lazy"
  class="w-full h-full"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

        </div>
      </div>
    </section>
  );
}


function InfoCard({ icon, title, text, link }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="bg-black/10 p-2.5 rounded-full">{icon}</div>
      <div>
        <p className="font-medium text-gray-700">{title}</p>
        <p className="text-gray-500 text-sm mt-0.5">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border hover:border-yellow-400 transition">
      {link ? <a href={link}>{content}</a> : content}
    </div>
  );
}
