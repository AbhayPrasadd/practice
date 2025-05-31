import React from "react";

const WhatIsFPO = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        📖 What is an FPO (Farmer Producer Organization)?
      </h2>

      {/* Introduction */}
      <p className="text-gray-700 leading-relaxed">
        In India, small and marginal farmers face many challenges such as low crop prices, 
        lack of quality inputs, and limited access to markets. Farmer Producer Organizations (FPOs) 
        were introduced to help farmers overcome these difficulties by forming collective groups.
      </p>

      {/* Problem Statement */}
      <h3 className="mt-6 text-xl font-semibold text-gray-900">🚨 Why is This Needed?</h3>
      <p className="text-gray-700 text-xl leading-relaxed">
        Many farmers are unaware of FPOs, causing them to miss out on government benefits, 
        better market prices, and agricultural support. The key problems they face include:
      </p>

      <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
        <li>📌 Lack of Awareness – Many farmers don't know what FPOs are or how to join.</li>
        <li>📌 Difficulty in Finding FPOs – No easy way to locate nearby FPOs.</li>
        <li>📌 Limited Digital Access – Farmers need simple and accessible information.</li>
      </ul>

      {/* Solution */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">🎯 How This Feature Helps</h3>
      <p className="text-gray-700 leading-relaxed">
        To solve these issues, we have created a three-tab system that provides:
      </p>

      <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
        <li>✅ Education – Learn what FPOs are and their benefits.</li>
        <li>✅ Nearby FPOs – Find the closest FPOs using location-based services.</li>
        <li>✅ Search Feature – Manually search for FPOs by state and district.</li>
      </ul>

      {/* Benefits of FPOs */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">🌱 Benefits of Joining an FPO</h3>
      <p className="text-gray-700 leading-relaxed">
        Farmers who join an FPO can improve their income and productivity through:
      </p>

      <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
        <li>📈 Better Crop Prices – Collective selling increases profits.</li>
        <li>💰 Government Subsidies – Access financial aid and schemes.</li>
        <li>🌾 Quality Inputs – Get high-quality seeds, fertilizers, and equipment.</li>
        <li>📚 Training & Support – Learn modern farming techniques.</li>
        <li>🔗 Market Linkage – Sell directly to bigger markets and buyers.</li>
      </ul>

      {/* Final Encouragement */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">🚀 Empower Yourself – Join an FPO Today!</h3>
      <p className="text-gray-700 leading-relaxed">
        FPOs are made for farmers, by farmers. They provide a strong support system that 
        helps farmers increase their earnings, reduce risks, and access better opportunities.  
        Start by finding an FPO near you!
      </p>
    </div>
  );
};

export default WhatIsFPO;
