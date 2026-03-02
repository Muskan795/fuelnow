import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is FuelNow?",
      answer:
        "FuelNow is a smart emergency fuel and mechanic assistance platform that delivers fuel and provides on-road support during breakdown situations.",
    },
    {
      question: "Is doorstep fuel delivery safe?",
      answer:
        "Yes, FuelNow follows safety protocols and works with verified petrol pumps and service providers.",
    },
    {
      question: "Which areas are currently served?",
      answer:
        "FuelNow serves selected urban areas. Service availability depends on location.",
    },
    {
      question: "What are FuelNow's operating hours?",
      answer:
        "FuelNow operates 24/7 for emergency assistance.",
    },
    {
      question: "Can I book mechanic services?",
      answer:
        "Yes, you can book battery jump start, puncture repair, oil top-up and other portable mechanic services.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-orange-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* ================= LEFT SIDE FAQ ================= */}
        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-orange-500">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE FORM ================= */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-orange-600 mb-6">
            Request Assistance
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border px-4 py-2 rounded-md"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded-md"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border px-4 py-2 rounded-md"
            />

            <textarea
              placeholder="Describe your issue..."
              className="w-full border px-4 py-2 rounded-md"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default FaqSection;
