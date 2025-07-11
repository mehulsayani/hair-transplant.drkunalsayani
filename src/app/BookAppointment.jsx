"use client";
import React, { useState, useEffect } from "react";

export default function BookAppointment() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative">
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-[90%] max-w-3xl h-[80%] rounded-lg overflow-hidden relative shadow-lg animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-4xl text-gray-600 hover:text-gray-900 transition duration-200"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Iframe for Booking */}
            <iframe
              src="https://kivihealth.com/iam/kunal.sayani.68p1u4blxsrm/bookslot"
              title="Book Appointment"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1aaebc] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#148d98] transition-colors duration-200"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
