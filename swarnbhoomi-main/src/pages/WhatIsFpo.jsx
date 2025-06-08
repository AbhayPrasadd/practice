import React, { useState } from "react";

const WhatIsFPO = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 max-w-10xl mx-auto shadow-lg rounded-lg text-base sm:text-lg">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
        📖 What is an FPO (Farmer Producer Organization)?
      </h2>

      {/* Definition with Image */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
        <img src="/images/fpo-illustration.png" alt="FPO Illustration" className="w-full sm:w-1/2 rounded-md" />
        <p className="text-gray-700 leading-relaxed">
          In India, small and marginal farmers face many challenges such as low crop prices, 
          lack of quality inputs, and limited access to markets. Farmer Producer Organizations (FPOs) 
          were introduced to help farmers overcome these difficulties by forming collective groups.
          <br />
          <strong>This system is especially built to benefit small and marginal farmers.</strong>
        </p>
      </div>

      {/* Why Needed */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">🚨 Why is This Needed?</h3>
      <p className="text-gray-700 leading-relaxed">
        Many farmers are unaware of FPOs, causing them to miss out on government benefits, 
        better market prices, and agricultural support. The key problems they face include:
      </p>
      <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
        <li>📌 Lack of Awareness – Many farmers don't know what FPOs are or how to join.</li>
        <li>📌 Difficulty in Finding FPOs – No easy way to locate nearby FPOs.</li>
        <li>📌 Limited Digital Access – Farmers need simple and accessible information.</li>
      </ul>

      {/* How This Helps (Visual Grid) */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">🎯 How This Feature Helps</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded-md bg-gray-50">
          <h4 className="font-semibold mb-1">📘 Education</h4>
          <p className="text-sm sm:text-base">Learn what FPOs are and their benefits.</p>
        </div>
        <div className="p-4 border rounded-md bg-gray-50">
          <h4 className="font-semibold mb-1">📍 Nearby FPOs</h4>
          <p className="text-sm sm:text-base">Find the closest FPOs using location-based services.</p>
        </div>
        <div className="p-4 border rounded-md bg-gray-50">
          <h4 className="font-semibold mb-1">🔍 Search Feature</h4>
          <p className="text-sm sm:text-base">Manually search for FPOs by state and district.</p>
        </div>
      </div>

      {/* Benefits */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">🌱 Benefits of Joining an FPO</h3>
      <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
        <li>📈 Better Crop Prices – Collective selling increases profits.</li>
        <li>💰 Government Subsidies – Access financial aid and schemes.</li>
        <li>🌾 Quality Inputs – Get high-quality seeds, fertilizers, and equipment.</li>
        <li>📚 Training & Support – Learn modern farming techniques.</li>
        <li>🔗 Market Linkage – Sell directly to bigger markets and buyers.</li>
      </ul>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">🚀 Empower Yourself – Join an FPO Today!</h3>
        <p className="text-gray-700 mb-4">
          FPOs are made for farmers, by farmers. They provide a strong support system that 
          helps farmers increase their earnings, reduce risks, and access better opportunities.
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          📋 Show Me How to Join
        </button>
      </div>

      {/* Guide (No Modal UI dependency) */}
      {open && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-green-800">How to Join an FPO</h4>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Find an FPO near your village using Nearby or Search tabs.</li>
            <li>Visit the FPO office with identity and land documents.</li>
            <li>Fill the membership form and pay a nominal fee (if applicable).</li>
            <li>Get your member ID and start availing benefits.</li>
          </ol>
          <p className="mt-4 text-sm text-gray-500">* You can also contact your local agricultural officer for more help.</p>
        </div>
      )}
    </div>
  );
};

export default WhatIsFPO;
