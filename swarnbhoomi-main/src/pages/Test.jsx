// src/utils/UploadSchemes.jsx
import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const allSchemes = [
  // 🌾 Agriculture
  {
    category: "agriculture",
    title: "PM–Kisan Samman Nidhi (PM–KISAN)",
    benefit: "₹6,000/year income support in 3 installments",
    description: "Financial assistance to all landholding farmers to support crop and family needs.",
    sources: ["thetractoradda.com", "jaankaarbharat.com", "schemes.vikaspedia.in"],
  },
  {
    category: "agriculture",
    title: "Kisan Credit Card (KCC)",
    benefit: "Low-interest credit line for farmers",
    description: "Credit support for crop production and allied activities like dairy, poultry, fisheries.",
    sources: ["jaankaarbharat.com", "thetractoradda.com", "mahindrafarmmachinery.com"],
  },
  {
     category: "agriculture",
     title: "Rashtriya Krishi Vikas Yojana (RKVY)",
    benefit: "Grants for modernizing agriculture",
    description: "Helps states invest in farm infrastructure, innovation, and post-harvest tech.",
    sources: ["timesofindia.indiatimes.com", "mahindrafarmmachinery.com"],
  },
  {
     category: "agriculture",
     title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    benefit: "Subsidies for organic farming",
    description: "Promotes chemical-free farming with certification and cluster-based models.",
    sources: ["mahindrafarmmachinery.com", "thetractoradda.com"],
  },
  {
     category: "agriculture",
     title: "National Mission for Sustainable Agriculture (NMSA)",
    benefit: "Climate-resilient agriculture practices",
    description: "Supports sustainable farming, water conservation, and agroforestry.",
    sources: ["odihort.nic.in", "agricoaching.co.in", "agri-horti.assam.gov.in"],
  },
  {
     category: "agriculture",
     title: "PM Kisan Maan Dhan Yojana (PM–KMY)",
    benefit: "₹3,000/month pension after age 60",
    description: "Voluntary pension scheme for small and marginal farmers.",
    sources: ["doh.gujarat.gov.in", "pib.gov.in", "officerspulse.com"],
  },

  {
    category: "animal",
    title: "National Livestock Mission (NLM)",
    benefit: "Support for poultry, goat, and dairy farming",
    description: "Subsidies for breeding, feed, shelter, and livestock-based entrepreneurship.",
    sources: ["vikaspedia.in", "agricoop.gov.in"],
  },
  {
    category: "animal",
    title: "Dairy Entrepreneurship Development Scheme (DEDS)",
    benefit: "25–33% subsidy for dairy units",
    description:
      "Helps set up dairy farms, milk chilling units, cold storage, and transport.",
    sources: ["nabard.org", "pib.gov.in"],
  },
  {
    category: "animal",
    title: "Fisheries Infrastructure Development Fund (FIDF)",
    benefit: "Loan assistance for fishery infrastructure",
    description:
      "Cold chains, fish markets, fishing boats, hatcheries, and processing units.",
    sources: ["nfdb.gov.in", "agricoop.gov.in"],
  },
  {
    category: "animal",
    title: "Livestock Insurance Scheme",
    benefit: "Covers cattle, buffalo, goats, sheep",
    description:
      "Up to 50% premium subsidy for insuring livestock against disease or accident.",
    sources: ["vikaspedia.in", "dahd.nic.in"],
  },
  {
    category: "animal",
    title: "Kamadhenu Yojana (State-specific)",
    benefit: "Financial aid for quality cattle",
    description:
      "Popular in states like Odisha & Karnataka to distribute improved breeds.",
    sources: ["odisha.gov.in", "karnataka.gov.in"],
  },
  {
    category: "animal",
    title: "PM Matsya Sampada Yojana (PMMSY)",
    benefit: "Fisheries & aquaculture development",
    description:
      "Integrated scheme for infrastructure, value chain, and employment in fisheries.",
    sources: ["nfdb.gov.in", "pib.gov.in"],
  },

  {
    category: "irrigation",
    title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    benefit: "Water for every farm – ‘Har Khet Ko Pani’",
    description: "Provides infrastructure, drip/sprinkler systems, and repair of canals and tanks.",
    sources: ["agricoop.gov.in", "pmksy.gov.in"],
  },
  {
     category: "irrigation",
     title: "Micro Irrigation Fund (MIF)",
    benefit: "Low interest loans for drip & sprinkler irrigation",
    description: "Encourages water-saving techniques and reduces dependency on rainfall.",
    sources: ["nabard.org", "agricoop.gov.in"],
  },
  {
    category: "irrigation",
     title: "Accelerated Irrigation Benefit Programme (AIBP)",
    benefit: "Funds major irrigation projects",
    description: "Supports large-scale and long-pending irrigation projects in drought-prone regions.",
    sources: ["pib.gov.in", "pmksy.gov.in"],
  },
  {
    category: "irrigation",
     title: "Watershed Development Programme (WDC-PMKSY)",
    benefit: "Conserves soil & water in dry areas",
    description: "Improves land productivity by preventing soil erosion and storing rainwater.",
    sources: ["nrega.nic.in", "agricoop.gov.in"],
  },
  {
     category: "irrigation",
     title: "State-Specific Canal Rejuvenation Schemes",
    benefit: "Modernizes old irrigation canals and structures",
    description: "States like Tamil Nadu, Maharashtra, and UP run local canal repair and lining programs.",
    sources: ["tn.gov.in", "mahaagri.gov.in", "upagriculture.com"],
  },
  {
     category: "irrigation",
     title: "Kudimaramathu Scheme (Tamil Nadu)",
    benefit: "Community-led water tank repairs",
    description: "Involves farmers directly in repairing local tanks to improve water availability.",
    sources: ["tn.gov.in", "vikaspedia.in"],
  },

  {
    category: "horticulture",
    title: "National Horticulture Mission (NHM)",
    benefit: "Support for fruits, vegetables, and spice farming",
    description: "Subsidies for planting material, irrigation, and post-harvest infrastructure.",
    sources: ["midh.gov.in", "vikaspedia.in"],
  },
  {
     category: "horticulture",
     title: "Mission for Integrated Development of Horticulture (MIDH)",
    benefit: "Holistic growth of horticulture sector",
    description:
      "Includes NHM and NHB, offering financial assistance for nurseries, cold storage, and processing units.",
    sources: ["midh.gov.in", "agricoop.gov.in"],
  },
  {
     category: "horticulture",
     title: "National Horticulture Board (NHB) Subsidy Scheme",
    benefit: "Credit-linked subsidy for cold chains & markets",
    description:
      "Helps in creating cold storage, ripening chambers, and packhouses with up to 35% subsidy.",
    sources: ["nhb.gov.in", "agricoop.gov.in"],
  },
  {
     category: "horticulture",
     title: "Cluster Development Programme (CDP)",
    benefit: "Horticulture-based cluster development",
    description:
      "Targets high-value crops in specific regions for focused production and marketing.",
    sources: ["agricoop.gov.in", "midh.gov.in"],
  },
  {
     category: "horticulture",
     title: "Horticulture Mechanization Scheme",
    benefit: "50–80% subsidy on horticulture tools and machines",
    description:
      "Assistance for power sprayers, drip sets, greenhouses, and tractors under MIDH.",
    sources: ["agricoop.gov.in", "vikaspedia.in"],
  },
  {
     category: "horticulture",
     title: "Post Harvest Management Scheme (MIDH)",
    benefit: "Reduces loss after harvest",
    description:
      "Support for cold storage, transport vehicles, grading, sorting, and packaging units.",
    sources: ["agricoop.gov.in", "nhb.gov.in"],
  },
  {
    category: "horticulture",
    title: "Custom Hiring Centre (CHC) Scheme",
    benefit: "Grants for farm equipment renting centers",
    description:
      "Farmers/FPOs receive funds to establish equipment hubs for small & marginal farmers.",
    sources: ["agricoop.gov.in", "pmkmy.gov.in"],
  },
  {
    category: "horticulture",
    title: "Agricultural Infrastructure Fund (AIF)",
    benefit: "Loans for agri-infrastructure",
    description:
      "Supports cold chains, farm machinery banks, grading units, and storage facilities.",
    sources: ["agriinfra.dac.gov.in", "pib.gov.in"],
  },
  {
    category: "horticulture",
    title: "National Mission on Oilseeds and Oil Palm (NMOOP)",
    benefit: "Equipment support for oilseed farming",
    description:
      "Assistance for procurement of oilseed-specific machinery like planters, weeders, etc.",
    sources: ["agricoop.gov.in"],
  },
  {
    category: "horticulture",
    title: "Rashtriya Krishi Vikas Yojana (RKVY) – Infra Component",
    benefit: "Funding for post-harvest & mechanical units",
    description:
      "Modernization and automation support for agro-based industries, especially at village level.",
    sources: ["rkvy.nic.in", "vikaspedia.in"],
  },
  {
    category: "horticulture",
    title: "State-Specific Machinery Subsidy Schemes",
    benefit: "40–60% subsidy for eligible farmers",
    description:
      "States like Haryana, MP, and Karnataka offer extra subsidies for specific equipment.",
    sources: ["upagriculture.com", "tnagriculture.in"],
  },

  {
    category: "machines",
    title: "Sub-Mission on Agricultural Mechanization (SMAM)",
    benefit: "50–80% subsidy on farm machinery",
    description: "Covers tractors, power tillers, combine harvesters, and seeders.",
    sources: ["agricoop.gov.in", "vikaspedia.in"],
  },
  {
    category: "others",
    title: "Soil Health Card Scheme",
    benefit: "Free soil testing and nutrient management plans",
    description: "Farmers receive printed soil reports and crop-specific fertilizer suggestions.",
    sources: ["soilhealth.dac.gov.in", "vikaspedia.in"],
  },
  {
    category: "others",
    title: "e-NAM (National Agriculture Market)",
    benefit: "Online trading platform for agricultural commodities",
    description: "Helps farmers get better prices through transparent bidding at nationwide mandis.",
    sources: ["enam.gov.in", "agricoop.nic.in"],
  },
  {
    category: "others",
    title: "PM Fasal Bima Yojana (PMFBY)",
    benefit: "Crop insurance for yield protection",
    description: "Covers financial losses due to natural calamities, pests, and diseases.",
    sources: ["pmfby.gov.in", "vikaspedia.in"],
  },
  {
    category: "others",
    title: "Agri-Clinics and Agri-Business Centres Scheme",
    benefit: "Training and support for agri-entrepreneurs",
    description: "Encourages youth to start agri-based ventures with financial and technical support.",
    sources: ["mabard.org", "vikaspedia.in"],
  },
  {
    category: "others",
    title: "Kisan Rath App",
    benefit: "Transport solution for agricultural produce",
    description: "Connects farmers with transporters for hassle-free logistics during harvesting.",
    sources: ["play.google.com", "vikaspedia.in"],
  },
];

const Test = () => {
  const uploadToFirestore = async () => {
    try {
      const ref = collection(db, "schemes");
      for (const scheme of allSchemes) {
        await addDoc(ref, scheme);
      }
      alert("✅ All schemes uploaded successfully!");
    } catch (error) {
      console.error("Error uploading schemes:", error);
      alert("❌ Failed to upload schemes.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">📤 Upload Schemes to Firestore</h2>
      <button
        onClick={uploadToFirestore}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Upload All Schemes
      </button>
    </div>
  );
};

export default Test;
