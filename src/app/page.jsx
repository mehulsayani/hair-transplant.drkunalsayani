"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserMd,
  FaMicroscope,
  FaCheckCircle,
  FaHeartbeat,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQSection from "./FAQSection";
import Testimonials from "./Testimonials";
import { IoIosHappy } from "react-icons/io";

export default function Page() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const images = ["image1", "image2", "image3", "image4"];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000); // show after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      value: "1000+",
      label: "Surgical Procedures",
      icon: <Image src={"/hero/banner3.png"} alt="" width={80} height={80} />,
    },
    {
      value: "8",
      label: "Years Of Exprience",
      icon: <Image src={"/hero/banner2.png"} alt="" width={80} height={80} />,
    },
    {
      value: "98%",
      label: "Happy Patients",
      icon: <Image src={"/hero/banner1.png"} alt="" width={80} height={80} />,
    },
    // {
    //   value: "",
    //   label: "Satisfaction rate",
    //   icon: <Image src={""} alt="" width={80} height={80} />,
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-1 bg-white shadow-md">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/hero/logo.png"
            alt="Dr. Kunal Sayani Logo"
            width={90}
            height={40}
            priority
            className="max-lg:w-[4rem]"
          />
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="https://drkunalsayani.com/book-appointment"
            className="bg-[#1aaebc] hover:bg-[#148d98] text-white text-lg font-semibold px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-md transition-colors duration-200"
          >
            Book Appointment
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="w-full flex justify-center max-lg:pt-5 items-center bg-blue-50 px-4 text-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between max-w-[1100px] gap-8">
          <div className="text-left max-w-xl max-lg:text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Hair Transplant for Ultimate Restoration!
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-6">
              Get permanent hair restoration with advanced transplant techniques
              that ensure natural results, minimal downtime, and long-lasting
              confidence.
            </p>
            <a href="https://drkunalsayani.com/book-appointment">
              <button className="bg-[#1AAEBC] px-10 py-3 text-white rounded-lg font-semibold hover:bg-[#148d98] transition">
                Book Now
              </button>
            </a>
          </div>
          <div className="w-full max-w-sm">
            <Image
              src="/hero/hair-transplant.png"
              alt="Hair Transplant"
              width={400}
              height={300}
              className="object-cover rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#1AAEBC] py-10 px-4 flex justify-center items-center">
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {features.map(({ label, icon, value }, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition text-center"
            >
              {icon}
              <p className="font-thin text-4xl mt-2">{value}</p>
              <p className="font-semibold text-lg mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="container mx-auto flex max-lg:flex-col max-lg:text-center justify-center items-center gap-10 px-4 py-16">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-xl font-bold mb-4 text-[#10217D]">
            Get in Touch
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us To Get Better Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Reach out to us! We're here to provide you with comprehensive
            details and answer your questions. Contact us today for personalized
            assistance and enhanced understanding.
          </p>
        </div>
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            Book Your Appointment Today
          </h3>
          <form className="space-y-4">
            {[FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt].map((Icon, idx) => (
              <div key={idx} className="relative">
                <Icon className="absolute left-3 top-3 text-[#1AAEBC]" />
                <input
                  type={["text", "email", "tel", "text"][idx]}
                  placeholder={
                    ["Full Name", "Email Address", "Phone No", "Your Location"][
                      idx
                    ]
                  }
                  className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            ))}
            <select className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="">Looking For</option>
              <option value="consultation">Consultation</option>
              <option value="treatment">Treatment</option>
              <option value="followup">Follow-up</option>
            </select>
            <button
              type="submit"
              className="w-full bg-[#1AAEBC] text-white hover:bg-[#148d98] py-2 rounded-lg transition font-bold"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </section>

      {/* About Doctor */}
      <section className="bg-white px-4 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/3 text-center">
            <Image
              src="/aboutdoctor/kunal_sayani1.png"
              alt="Dr. Kunal Sayani"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#10217D]">
              Dr. Kunal Sayani
              <span className="block text-lg font-normal text-black">
                Plastic Surgeon
              </span>
            </h2>
            <ul className="space-y-4 text-left">
              {[
                "Dr. Kunal Sayani is a Board-Certified Plastic & Aesthetic Surgeon based in Andheri, Mumbai.",
                "Over 8 years of experience in aesthetic and reconstructive surgery.",
                "Completed MCh and MS from Grant Medical College & Sir J.J. Hospital, Mumbai.",
                "Specializes in Liposuction, Tummy Tuck, Rhinoplasty, and Facial Aesthetic Surgeries.",
                "Known for delivering natural results with a patient-focused and safety-first approach.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaUserMd className="text-[#1AAEBC] mt-1" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>

            <div className="w-full">
              <Slider {...settings}>
                {images.map((img, i) => (
                  <div key={i} className="px-2">
                    <div className="bg-white p-2 rounded-lg shadow-md w-26 h-26 max-md:w-24 max-md:h-24 mx-auto hover:scale-105 transition-transform">
                      <Image
                        src={`/aboutdoctor/${img}.png`}
                        alt={`Membership ${i + 1}`}
                        width={80}
                        height={60}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#10217D] mb-4">
                Expertise in Hair Transplant
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Hair Transplant", icon: "🩻" },
                  { label: "Scalp Micropigmentation", icon: "👩‍⚕️" },
                  { label: "PRP Therapy", icon: "💉" },
                  { label: "FUE Technique", icon: "🔬" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 font-medium hover:bg-[#148d9821] transition"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ⏱ Popup Modal CTA */}
      {show && (
        <div className="fixed inset-0 z-50 bg-[#1aaebc81] bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShow(false)}
              className="absolute top-0 right-3 text-4xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-[#10217D] text-center mb-6">
              Book Your Appointment Today
            </h2>
            <form className="space-y-4">
              {[FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt].map(
                (Icon, idx) => (
                  <div key={idx} className="relative">
                    <Icon className="absolute left-3 top-3 text-[#1AAEBC]" />
                    <input
                      type={["text", "email", "tel", "text"][idx]}
                      placeholder={
                        [
                          "Full Name",
                          "Email Address",
                          "Phone No",
                          "Your Location",
                        ][idx]
                      }
                      className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1AAEBC]"
                    />
                  </div>
                )
              )}
              <select className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1AAEBC]">
                <option value="">Looking For</option>
                <option value="consultation">Consultation</option>
                <option value="treatment">Treatment</option>
                <option value="followup">Follow-up</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#1AAEBC] text-white py-2 rounded-lg hover:bg-[#148d98] transition font-bold"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
      <Testimonials />
      <FAQSection />
    </div>
  );
}
