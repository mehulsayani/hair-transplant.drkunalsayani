"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaHeartbeat,
} from "react-icons/fa";
import {
  FaUserMd,
  FaMicroscope,
  FaRegCheckCircle,
  FaStopwatch,
} from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQSection from "./FAQSection";
import Testimonials from "./Testimonials";
import { IoIosHappy } from "react-icons/io";
import Footer from "./Footer";
import Knowledge from "./Knowledge";
import BookAppointment from "./BookAppointment";

export default function Page() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    const interval = setInterval(() => {
      setShow(true);
    }, 120000); // 20 seconds
  }, []);

  const features = [
    {
      icon: <FaUserMd size={32} className="" />,
      title: "Certified Surgeon",
    },
    {
      icon: <FaMicroscope size={32} className="" />,
      title: "Advanced Technology",
    },
    {
      icon: <FaRegCheckCircle size={32} className="" />,
      title: "Top Class Results",
    },
    {
      icon: <FaRegThumbsUp size={32} className="" />,
      title: "Low Transection Rate",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col  ">
    <div className="flex justify-center items-center fixed w-full bg-white">
        <nav className="w-full max-w-[1200px] flex items-center justify-between px-4 sm:px-8 py-1 ">
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
       <BookAppointment/>
      </nav>
    </div>
      {/* Hero Section */}
      <section className="w-full flex justify-center max-lg:pt-5 items-center bg-blue-50 px-4 py-20 text-center">
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
            <BookAppointment/>
          </div>
          <div className="">
            <Image
              src="/hero/hair-transplant.png"
              alt="Hair Transplant"
              width={1000}
              height={1000}
              className="object-cover rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="bg-[#1aaebc] py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center p-5"
            >
              <p className="text-[#1aaebc]">{feature.icon}</p>
              <p className=" font-semibold mt-2">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Doctor */}
      <section id="about" className="bg-white px-4 py-16">
        <div className="flex relative flex-col lg:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          <div className="w-full  lg:w-1/3 text-center">
            <div className="">
              <Image
                src="/hero/about-doctor-logo.png"
                alt="Logo"
                className="w-[30rem] mb-4 absolute -left-0 opacity-20"
                width={1000}
                height={1000}
              />
              <Image
                src="/aboutdoctor/kunal_sayani1.png"
                alt="Dr. Kunal Sayani"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-auto relative"
              />
            </div>
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
                "Specializes in Hair Transplant, Tummy Tuck, Rhinoplasty, and Facial Aesthetic Surgeries.",
                "Known for delivering natural results with a patient-focused and safety-first approach.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaUserMd className="text-[#1AAEBC] mt-1" />
                  <p>{text}</p>
                </li>
              ))}
              <div className="flex items-center gap-3 sm:gap-5">
                <a
                  href="https://www.drkunalsayani.com/about-dr-kunal-sayani"
                  className="bg-[#1aaebc] hover:bg-[#148d98] text-white text-lg font-semibold px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-md transition-colors duration-200"
                >
                  Read More
                </a>
              </div>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#10217D] mb-4">
                Expertise in Hair Transplant
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Hair Transplant", icon: "/hero/hair.png" },
                  {
                    label: "Scalp Micropigmentation",
                    icon: "/hero/prp.png",
                  },
                  { label: "PRP Therapy", icon: "/hero/hair2.png" },
                  { label: "FUE Technique", icon: "/hero/syringe.png" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="flex items-center  gap-2 border pr-2 border-gray-300 rounded-lg font-medium hover:bg-[#148d9821] transition"
                  >
                    <span className="text-xl">
                      <Image
                        src={item.icon}
                        alt=""
                        width={50}
                        height={50}
                        className="bg-blue-50 p-1 rounded-lg"
                      />
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="costing"
        className="container mx-auto flex max-lg:flex-col max-lg:text-center justify-center items-center gap-10 px-4 py-16"
      >
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
        <div className="w-full max-w-md p-6 max-lg:px-10 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            Book Your Appointment Today
          </h3>
          <form className="space-y-4 ">
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
              <option value="Hair Transplant">Hair Transplant</option>
              <option value="Hair Restoration PRP GFC Exosomes">
                Hair Restoration PRP GFC Exosomes
              </option>
              <option value="Nano fat injection (SVF) for Hair Growth">
                Nano fat injection (SVF) for Hair Growth
              </option>
              <option value="Other">Other</option>
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
                <option value="Hair Transplant">Hair Transplant</option>
                <option value="Hair Restoration PRP GFC Exosomes">
                  Hair Restoration PRP GFC Exosomes
                </option>
                <option value="Nano fat injection (SVF) for Hair Growth">
                  Nano fat injection (SVF) for Hair Growth
                </option>
                <option value="Other">Other</option>
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
      <div className="flex items-center justify-center flex-col">
        <div className="w-full max-w-[1200px] max-lg:w-[90%]">
        <Knowledge/>
      </div>
      </div>
      <Testimonials />
      <FAQSection />
      <div className="w-full h-[300px] md:h-[400px] mt-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30152.58286277929!2d72.7589144!3d19.1059122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70ae5b76aef%3A0xbc36ee7fd47dd276!2sTVAMEVA%20AESTHETICS%20-%20501%2F502%20Sapphire%20Plaza!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TVAMEVA AESTHETICS Location"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
