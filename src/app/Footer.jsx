"use client";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#3E3E43] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <Image src="/hero/logo.png" alt="Logo" className="w-26 mb-4" width={1000} height={1000} />
          <p className="text-base leading-relaxed">
            Transform How You Feel Not Just How You Look{" "}
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">LINKS</h3>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:text-[#1AAEBC]">
                Get Costing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1AAEBC]">
                Results
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1AAEBC]">
                Our Expert
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1AAEBC]">
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-bold mb-4">ADDRESS</h3>
          <p className="flex items-start gap-2 text-base">
            <IoMdPin className="mt-1 text-[#1AAEBC] w-10" />
            TVAMEVA AESTHETICS - 501/502 Sapphire Plaza, Dadabhai Road, Swami
            Vivekananda Rd, Vile Parle West, Mumbai, Maharashtra
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
          <div className="flex items-center gap-2 text-base mb-2">
            <FaEnvelope className="text-[#1AAEBC] w-10" />
            <a href="mailto:hairnshape@gmail.com">
              drkunalsayani.professional@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-base mb-4">
            <FaPhone className="text-[#1AAEBC]" />
            <a href="tel:+917039979232">+91-9967267567, 02246056767</a>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#">
              <FaYoutube className="hover:text-[#1AAEBC]" />
            </a>
            <a href="#">
              <FaFacebookF className="hover:text-[#1AAEBC]" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-[#1AAEBC]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
