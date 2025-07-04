"use client";
import { FaEnvelope, FaPhone, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#1D3769] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <img src="/logo.png" alt="Logo" className="w-16 mb-4" />
          <p className="text-sm leading-relaxed">
            Dr. Umang Kothari is a Plastic Surgeon based in Mumbai and is the Director and Founder of The Hair and Shape Clinic in Malad, Mumbai. This is a dedicated day care centre for Aesthetic procedures.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Get Costing</a></li>
            <li><a href="#" className="hover:text-yellow-400">Results</a></li>
            <li><a href="#" className="hover:text-yellow-400">Our Expert</a></li>
            <li><a href="#" className="hover:text-yellow-400">FAQ's</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-bold mb-4">ADDRESS</h3>
          <p className="flex items-start gap-2 text-sm">
            <IoMdPin className="mt-1 text-yellow-400" />
            Lotus Link Square Building, Mitchchowky, Malad West, Mumbai, Maharashtra 400064
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <div className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:hairnshape@gmail.com">hairnshape@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-sm mb-4">
            <FaPhone className="text-yellow-400" />
            <a href="tel:+917039979232">+91 7039979232</a>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaYoutube className="hover:text-yellow-400" /></a>
            <a href="#"><FaFacebookF className="hover:text-yellow-400" /></a>
            <a href="#"><FaInstagram className="hover:text-yellow-400" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
