const filterData = [
  {
    "State":"Andhra Pradesh",
    "District":"Anantapur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Mango"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Tomato"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Potato"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Banana"
  },
  {
    "State":"Andhra Pradesh",
    "District":"East Godavari",
    "Commodity":"Mango"
  },
  {
    "State":"Andhra Pradesh",
    "District":"East Godavari",
    "Commodity":"Banana"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Guntur",
    "Commodity":"Dry Chillies"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Guntur",
    "Commodity":"Lemon"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Krishna",
    "Commodity":"Maize"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Krishna",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Groundnut"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Dry Chillies"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Foxtail Millet(Navane)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Visakhapatnam",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Visakhapatnam",
    "Commodity":"Turmeric"
  },
  {
    "State":"Bihar",
    "District":"Bhojpur",
    "Commodity":"Potato"
  },
  {
    "State":"Bihar",
    "District":"Samastipur",
    "Commodity":"Onion"
  },
  {
    "State":"Chattisgarh",
    "District":"Gariyaband",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Chattisgarh",
    "District":"Kanker",
    "Commodity":"Maize"
  },
  {
    "State":"Chattisgarh",
    "District":"Kanker",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Chattisgarh",
    "District":"Raigarh",
    "Commodity":"Potato"
  },
  {
    "State":"Chattisgarh",
    "District":"Raipur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Beetroot"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Colacasia"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Drumstick"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Onion Green"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Tinda"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Foxtail Millet(Navane)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Millets"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Ground Nut Seed"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Chhota Udaipur",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Kachchh",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Banana"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Suva (Dill Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Soanf"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Soanf"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Banana"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Garlic"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Ground Nut Seed"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Orange"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Mango"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Chili Red"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Mango"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Soanf"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Mango"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Onion Green"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Grapes"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Papaya"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Spinach"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Maize"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Garlic"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Peach"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Spinach"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Mustard"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Peas cod"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Paddy(Dhan)(Basmati)"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Karnal",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Guava"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Peach"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Spinach"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Litchi"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Cotton"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Garlic"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Colacasia"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Peas cod"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Plum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Spinach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Carrot"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Grapes"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Beetroot"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Tinda"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Garlic"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Peach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Apple"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Carrot"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Plum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Carrot"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Apple"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Litchi"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Garlic"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Apple"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Guava"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Anantnag",
    "Commodity":"Water Melon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Brinjal"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Field Pea"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Mango"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Water Melon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Cherry"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Tomato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Onion"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Papaya"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Raddish"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Papaya"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Raddish"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Suvarna Gadde"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Cabbage"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Drumstick"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Thondekai"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Coconut"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Karnataka",
    "District":"Dharwad",
    "Commodity":"Maize"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Papaya"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Beans"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Carrot"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Onion"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Beetroot"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Potato"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Thondekai"
  },
  {
    "State":"Karnataka",
    "District":"Mysore",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Garlic"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Coconut"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Black pepper"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Colacasia"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Copra"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Colacasia"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Coconut"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Mango"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Amranthas Red"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Apple"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Chili Red"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Cowpea (Lobia\/Karamani)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Lime"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Coconut Seed"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Coconut Oil"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Rubber"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Coconut Seed"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Colacasia"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Apple"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Grapes"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Coffee"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Rubber"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Black pepper"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Balaghat",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Betul",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhind",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhind",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhopal",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhopal",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhopal",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Burhanpur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Damoh",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Datia",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Guna",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Guna",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Guna",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Guna",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Gwalior",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Gwalior",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Hoshangabad",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Hoshangabad",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Hoshangabad",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Hoshangabad",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Hoshangabad",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jabalpur",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jabalpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jabalpur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jhabua",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Chili Red"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandla",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandla",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Other green and fresh vegetables"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Narsinghpur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"Asgand"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"nigella seeds"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Panna",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Raisen",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Raisen",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Raisen",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Raisen",
    "Commodity":"buttery"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Spinach"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Linseed"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"buttery"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Lak(Teora)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Mango"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Raddish"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Satna",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sehore",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sehore",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sehore",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sehore",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sehore",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Seoni",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Pineapple"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Groundnut"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sidhi",
    "Commodity":"Kodo Millet(Varagu)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Lak(Teora)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Mustard"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Apple"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Buldhana",
    "Commodity":"Soyabean"
  },
  {
    "State":"Maharashtra",
    "District":"Chandrapur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Groundnut"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Dharashiv(Usmanabad)",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Dharashiv(Usmanabad)",
    "Commodity":"Safflower"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Latur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Maharashtra",
    "District":"Latur",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Latur",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Chili Red"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Green Peas"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Ground Nut Seed"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Soanf"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Apple"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Chili Red"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Nashik",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Parbhani",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Parbhani",
    "Commodity":"Soyabean"
  },
  {
    "State":"Maharashtra",
    "District":"Parbhani",
    "Commodity":"Groundnut"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Beetroot"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Carrot"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Chrysanthemum(Loose)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Maize"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Onion Green"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Papaya"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Spinach"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Potato"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Litchi"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Raddish"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Meghalaya",
    "District":"South Garo Hills",
    "Commodity":"Papaya"
  },
  {
    "State":"Nagaland",
    "District":"Dimapur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Nagaland",
    "District":"Kohima",
    "Commodity":"Cabbage"
  },
  {
    "State":"Nagaland",
    "District":"Mokokchung",
    "Commodity":"Banana"
  },
  {
    "State":"Nagaland",
    "District":"Mokokchung",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Nagaland",
    "District":"Phek",
    "Commodity":"Pumpkin"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Banana - Green"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Carrot"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Cauliflower"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Mango"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Pomegranate"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Cock"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Fish"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Onion"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Beans"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Odisha",
    "District":"Ganjam",
    "Commodity":"Water Melon"
  },
  {
    "State":"Odisha",
    "District":"Jagatsinghpur",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Rice"
  },
  {
    "State":"Odisha",
    "District":"Khurda",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Rice"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Odisha",
    "District":"Nayagarh",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Cashewnuts"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Water Melon"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Onion"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Carrot"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Onion"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Guava"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Litchi"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Peas cod"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Fatehgarh",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Fatehgarh",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Field Pea"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Carrot"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Field Pea"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Grapes"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Litchi"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Guava"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Rajasthan",
    "District":" Jhunjhunu",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Banana"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Soyabean"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Maize"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Rajasthan",
    "District":"Barmer",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Rajasthan",
    "District":"Beawar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Beawar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Rajasthan",
    "District":"Beawar",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Guar"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Soanf"
  },
  {
    "State":"Rajasthan",
    "District":"Deeg",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Papaya"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Tinda"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Gangapur City",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Rajasthan",
    "District":"Hanumangarh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Mango"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Tinda"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Jaisalmer",
    "Commodity":"Spinach"
  },
  {
    "State":"Rajasthan",
    "District":"Jaisalmer",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Lemon"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Garlic"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur Rural",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur Rural",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur Rural",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Linseed"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Soyabean"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Pali",
    "Commodity":"Mahedi"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Maize"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Soyabean"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Soanf"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Turnip"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Turnip"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Chili Red"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Kakada"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Turnip"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Tube Flower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Ragi (Finger Millet)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Fig(Anjura\/Anjeer)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Turnip"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Papaya"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Cabbage"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Cherry"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Grapes"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Guava"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Mango"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Papaya"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Carnation"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Lilly"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Raddish"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Beetroot"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Field Pea"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Carrot"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Onion"
  },
  {
    "State":"Telangana",
    "District":"Khammam",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Beetroot"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Apple"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Beetroot"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Brinjal"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Mango"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Plum"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Fish"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Tomato"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Cock"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Rice"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tripura",
    "District":"North Tripura",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tripura",
    "District":"North Tripura",
    "Commodity":"Potato"
  },
  {
    "State":"Tripura",
    "District":"North Tripura",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Rice"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Onion"
  },
  {
    "State":"Tripura",
    "District":"South District",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tripura",
    "District":"South District",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Onion"
  },
  {
    "State":"Tripura",
    "District":"West District",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"West District",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tripura",
    "District":"West District",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Paddy(Dhan)(Basmati)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Baghpat",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Baghpat",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bareilly",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Paddy(Dhan)(Basmati)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Deoria",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Sugar"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Spinach"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Carrot"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Green Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lalitpur",
    "Commodity":"Peas(Dry)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Grapes"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Firewood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Firewood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttrakhand",
    "District":"Champawat",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Field Pea"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Apple"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Onion"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Banana"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Mango"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Carrot"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Onion"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"West Bengal",
    "District":"Alipurduar",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Alipurduar",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Alipurduar",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Coochbehar",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Coochbehar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Coochbehar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Malda",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Carrot"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Jute"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Mustard"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Peas(Dry)"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Masur Dal"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Wheat"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Masur Dal"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Uttar Dinajpur",
    "Commodity":"Jute"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Krishna",
    "Commodity":"Rice"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Nellore",
    "Commodity":"Groundnut"
  },
  {
    "State":"Andhra Pradesh",
    "District":"West Godavari",
    "Commodity":"Lemon"
  },
  {
    "State":"Andhra Pradesh",
    "District":"West Godavari",
    "Commodity":"Lime"
  },
  {
    "State":"Bihar",
    "District":"Banka",
    "Commodity":"Onion"
  },
  {
    "State":"Bihar",
    "District":"Kishanganj",
    "Commodity":"Potato"
  },
  {
    "State":"Chattisgarh",
    "District":"Balodabazar",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Chattisgarh",
    "District":"Durg",
    "Commodity":"Potato"
  },
  {
    "State":"Chattisgarh",
    "District":"Koria",
    "Commodity":"Wheat"
  },
  {
    "State":"Goa",
    "District":"North Goa",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Banana"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Tobacco"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Rajgir"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Papaya"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Tinda"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Kulthi(Horse Gram)"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Drumstick"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Garlic"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Beans"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Kachchh",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Apple"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Apple"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Groundnut pods (raw)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Apple"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Drumstick"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Spinach"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Gujarat",
    "District":"Valsad",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Colacasia"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Pineapple"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Tinda"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Green Peas"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Carrot"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Round gourd"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Garlic"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Plum"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Tinda"
  },
  {
    "State":"Haryana",
    "District":"Karnal",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Grapes"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Mewat",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Spinach"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Guar"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Tinda"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Litchi"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Pineapple"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Apple"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Raddish"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Guava"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Grapes"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Plum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Raddish"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Grapes"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Tinda"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Apricot(Jardalu\/Khumani)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Onion"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Capsicum"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Litchi"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Tomato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Papaya"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Water Melon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Pulwama",
    "Commodity":"Cherry"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Banana"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Mango"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Turnip"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Beans"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Beetroot"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Carrot"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Seemebadnekai"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Tomato"
  },
  {
    "State":"Karnataka",
    "District":"Belgaum",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Beans"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Tomato"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Karnataka",
    "District":"Mysore",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Beans"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Raddish"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Tomato"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Wheat"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Colacasia"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Field Pea"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Mango"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Water Melon"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Coconut Seed"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Coconut Oil"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Coconut Oil"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Thondekai"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Grapes"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Grapes"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Mango"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Coconut"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Orange"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Coconut"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Alirajpur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Alirajpur",
    "Commodity":"Groundnut"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"buttery"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Lak(Teora)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Potato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhopal",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhindwara",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Damoh",
    "Commodity":"buttery"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Potato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Guna",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Hoshangabad",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jabalpur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jhabua",
    "Commodity":"Cotton"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jhabua",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Katni",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Groundnut"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandla",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Potato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Narsinghpur",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Narsinghpur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Narsinghpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Raisen",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Other green and fresh vegetables"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Ber(Zizyphus\/Borehannu)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Other green and fresh vegetables"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Potato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Satna",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Seoni",
    "Commodity":"buttery"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Papaya"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sidhi",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Soyabean"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Maize"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Cotton"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Maharashtra",
    "District":"Buldhana",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Chandrapur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Chandrapur",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Papaya"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Spinach"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Maharashtra",
    "District":"Dharashiv(Usmanabad)",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Dharashiv(Usmanabad)",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Dharashiv(Usmanabad)",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Hingoli",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Kolhapur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Latur",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Latur",
    "Commodity":"Safflower"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Black pepper"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Drumstick"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Maize"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Spinach"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Pineapple"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Maharashtra",
    "District":"Parbhani",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Drumstick"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Apple"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Astera"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Banana"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Beans"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Green Peas"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Rajgir"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Water Melon"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Spinach"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Rice"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Papaya"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Drumstick"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Brinjal"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Rice"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Brinjal"
  },
  {
    "State":"Meghalaya",
    "District":"West Khasi Hills",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Nagaland",
    "District":"Dimapur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Nagaland",
    "District":"Mokokchung",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Nagaland",
    "District":"Mokokchung",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Nagaland",
    "District":"Mokokchung",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Nagaland",
    "District":"Tuensang",
    "Commodity":"Brinjal"
  },
  {
    "State":"Nagaland",
    "District":"Tuensang",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Beetroot"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Lemon"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Papaya"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Pineapple"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Plum"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Capsicum"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Garlic"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Mango"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Onion"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Jharsuguda",
    "Commodity":"Onion"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Khurda",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Cabbage"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Carrot"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Beans"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Fish"
  },
  {
    "State":"Odisha",
    "District":"Nayagarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Carrot"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Cabbage"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Pondicherry",
    "District":"Pondicherry",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Plum"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Raddish"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Barnala",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Round gourd"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Fatehgarh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Plum"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Colacasia"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Carrot"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Litchi"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Grapes"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Tinda"
  },
  {
    "State":"Rajasthan",
    "District":" Jhunjhunu",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":" Jhunjhunu",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Apple"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Cabbage"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Rajasthan",
    "District":"Bundi",
    "Commodity":"Soyabean"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Rajasthan",
    "District":"Hanumangarh",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Hanumangarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Hanumangarh",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Garlic"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Soyabean"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Maize"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Garlic"
  },
  {
    "State":"Rajasthan",
    "District":"Rajsamand",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Sirohi",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Sirohi",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Wheat"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Ragi (Finger Millet)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Turnip"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Tube Flower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Chili Red"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Tube Flower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Tube Flower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Tube Flower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Maize"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Plum"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Water Melon"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Capsicum"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Gladiolus Cut Flower"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Kankambra"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Cabbage"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Dry Chillies"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Potato"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Telangana",
    "District":"Karimnagar",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Telangana",
    "District":"Karimnagar",
    "Commodity":"Cotton"
  },
  {
    "State":"Telangana",
    "District":"Khammam",
    "Commodity":"Wood"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Beetroot"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Telangana",
    "District":"Nizamabad",
    "Commodity":"Turmeric"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Brinjal"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Tomato"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Dry Chillies"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Rice"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Tomato"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Potato"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Onion"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tripura",
    "District":"North Tripura",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tripura",
    "District":"North Tripura",
    "Commodity":"Onion"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Banana"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tripura",
    "District":"South District",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tripura",
    "District":"West District",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tripura",
    "District":"West District",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Baghpat",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bareilly",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bareilly",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bareilly",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Deoria",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Spinach"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Sugar"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hathras",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Peas(Dry)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jhansi",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur Dehat",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Sugar"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Tinda"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Paddy(Dhan)(Basmati)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Mango"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Onion"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Potato"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Mango"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Apple"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Banana"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"West Bengal",
    "District":"Alipurduar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Masur Dal"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Wheat"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Mustard"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Birbhum",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Birbhum",
    "Commodity":"Wheat"
  },
  {
    "State":"West Bengal",
    "District":"Coochbehar",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"West Bengal",
    "District":"Coochbehar",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Masur Dal"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Malda",
    "Commodity":"Jute"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Marigold(loose)"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Mustard"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Onion"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Brinjal"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Cuddapah",
    "Commodity":"Groundnut"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Cuddapah",
    "Commodity":"Turmeric"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Guntur",
    "Commodity":"Turmeric"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Krishna",
    "Commodity":"Dry Chillies"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Maize"
  },
  {
    "State":"Bihar",
    "District":"Kishanganj",
    "Commodity":"Onion"
  },
  {
    "State":"Bihar",
    "District":"Rohtas",
    "Commodity":"Potato"
  },
  {
    "State":"Chattisgarh",
    "District":"Rajnandgaon",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Suva (Dill Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Mango"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Soanf"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Carrot"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Kachchh",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Kachchh",
    "Commodity":"Mango"
  },
  {
    "State":"Gujarat",
    "District":"Kachchh",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Rajgir"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Beans"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Mango"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Garlic"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Beetroot"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Guar"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Spinach"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Carrot"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Sunflower"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Grapes"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Sunflower"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Litchi"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Tinda"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Colacasia"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Mustard"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Orange"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Apricot(Jardalu\/Khumani)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Carrot"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Orange"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Garlic"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Spinach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Spinach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Water Melon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Anantnag",
    "Commodity":"Banana"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Anantnag",
    "Commodity":"Capsicum"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Anantnag",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Anantnag",
    "Commodity":"Potato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Lotus Sticks"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Papaya"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Plum"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Banana"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Mango"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Pineapple"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Carrot"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Cherry"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Apple"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Apple"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Carrot"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Karnataka",
    "District":"Chitradurga",
    "Commodity":"Ground Nut Seed"
  },
  {
    "State":"Karnataka",
    "District":"Karwar(Uttar Kannad)",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Chapparad Avare"
  },
  {
    "State":"Karnataka",
    "District":"Koppal",
    "Commodity":"Rice"
  },
  {
    "State":"Karnataka",
    "District":"Mangalore(Dakshin Kannad)",
    "Commodity":"Black pepper"
  },
  {
    "State":"Karnataka",
    "District":"Mysore",
    "Commodity":"Coconut"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Drumstick"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Kulthi(Horse Gram)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Onion"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Rice"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Alsandikai"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Colacasia"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Garlic"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Carrot"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Black pepper"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Mango"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Amranthas Red"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Coconut Seed"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Onion"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Beans"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Guava"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Mango"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Water Melon"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Colacasia"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Garlic"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Coconut Seed"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Garlic"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Alirajpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhind",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhopal",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Burhanpur",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Damoh",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Chili Red"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Tinda"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dindori",
    "Commodity":"Niger Seed (Ramtil)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dindori",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Gwalior",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Gwalior",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Spinach"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jabalpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jabalpur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Katni",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Mandsaur",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Narsinghpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Narsinghpur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rewa",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Linseed"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Spinach"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Banana"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Mahua"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Satna",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sehore",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Seoni",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sidhi",
    "Commodity":"Mustard"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Drumstick"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Maharashtra",
    "District":"Buldhana",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Chandrapur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Maharashtra",
    "District":"Dharashiv(Usmanabad)",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"Maharashtra",
    "District":"Kolhapur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Latur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cardamoms"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Carrot"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Raddish"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Rice"
  },
  {
    "State":"Maharashtra",
    "District":"Nashik",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Maharashtra",
    "District":"Nashik",
    "Commodity":"Maize"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Garlic"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Orange"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Litchi"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Beans"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Brinjal"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Guava"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Cow"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Garlic"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Ground Nut Seed"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Mataki"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Onion"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Papaya"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Tomato"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Meghalaya",
    "District":"West Garo Hills",
    "Commodity":"Litchi"
  },
  {
    "State":"Nagaland",
    "District":"Dimapur",
    "Commodity":"Beans"
  },
  {
    "State":"Nagaland",
    "District":"Kohima",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Nagaland",
    "District":"Kohima",
    "Commodity":"Potato"
  },
  {
    "State":"Nagaland",
    "District":"Tuensang",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Cabbage"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Garlic"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Green Chilli"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Guar"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Guava"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Litchi"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Hen"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Onion"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Drumstick"
  },
  {
    "State":"Odisha",
    "District":"Ganjam",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Jagatsinghpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Jharsuguda",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Odisha",
    "District":"Khurda",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Khurda",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"White Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Cotton"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Potato"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Colacasia"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Carrot"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Pineapple"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Raddish"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Round gourd"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Beetroot"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Guava"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Guar"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Colacasia"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Lime"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Apricot(Jardalu\/Khumani)"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Beetroot"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Guava"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Carrot"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Round gourd"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Brinjal"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Lime"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Pineapple"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Tinda"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Barmer",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Rajasthan",
    "District":"Bharatpur",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Bharatpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Bundi",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Bundi",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Chittorgarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Churu",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Rajasthan",
    "District":"Dausa",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Deedwana Kuchaman",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Apple"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Green Peas"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Rajasthan",
    "District":"Hanumangarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Apple"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Banana"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Spinach"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Cabbage"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Capsicum"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Mango"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Tinda"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur",
    "Commodity":"Soanf"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Garlic"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Ground Nut Seed"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Ajwan"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Sanchore",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Custard Apple (Sharifa)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Kakada"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Chili Red"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Fig(Anjura\/Anjeer)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Fig(Anjura\/Anjeer)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Turnip"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Custard Apple (Sharifa)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Tomato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Kakada"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Lemon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Ragi (Finger Millet)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Kakada"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Lime"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Apple"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Jarbara"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Rose(Loose))"
  },
  {
    "State":"Telangana",
    "District":"Karimnagar",
    "Commodity":"Maize"
  },
  {
    "State":"Telangana",
    "District":"Mahbubnagar",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Telangana",
    "District":"Mahbubnagar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Safflower"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Wheat"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Colacasia"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Drumstick"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Potato"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Groundnut"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Turmeric"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Carrot"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Potato"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Rice"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Banana"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Kartali (Kantola)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Fish"
  },
  {
    "State":"Tripura",
    "District":"North Tripura",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Potato"
  },
  {
    "State":"Tripura",
    "District":"South District",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Fish"
  },
  {
    "State":"Tripura",
    "District":"West District",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bareilly",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bareilly",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Tinda"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Carrot"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Peas(Dry)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Lime"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Carrot"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Fish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Spinach"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Paddy(Dhan)(Basmati)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Potato"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Apple"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Banana"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Potato"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Onion"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Rice"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Tinda"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"West Bengal",
    "District":"Alipurduar",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Alipurduar",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"West Bengal",
    "District":"Birbhum",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Raddish"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Banana"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Garlic"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Capsicum"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"West Bengal",
    "District":"Malda",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Masur Dal"
  },
  {
    "State":"West Bengal",
    "District":"Nadia",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Guntur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Cotton"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Bihar",
    "District":"Madhubani",
    "Commodity":"Onion"
  },
  {
    "State":"Bihar",
    "District":"Muzaffarpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Chattisgarh",
    "District":"Bilaspur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Chattisgarh",
    "District":"Durg",
    "Commodity":"Tomato"
  },
  {
    "State":"Chattisgarh",
    "District":"Jashpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Chattisgarh",
    "District":"Raigarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Goa",
    "District":"North Goa",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Capsicum"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Carrot"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Raya"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Capsicum"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Water Melon"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Chhota Udaipur",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Tinda"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Alasande Gram"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Cowpea (Lobia\/Karamani)"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Groundnut (Split)"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Kulthi(Horse Gram)"
  },
  {
    "State":"Gujarat",
    "District":"Kachchh",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Peas cod"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Soanf"
  },
  {
    "State":"Gujarat",
    "District":"Mehsana",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Capsicum"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Panchmahals",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Wheat"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Carrot"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Dry Chillies"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Capsicum"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Drumstick"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Peas cod"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Pegeon Pea (Arhar Fali)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Carrot"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Drumstick"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Peach"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Faridabad",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Spinach"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Carrot"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Karnal",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Karnal",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Karnal",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Pineapple"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Carrot"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Garlic"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Colacasia"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Tinda"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Mahendragarh-Narnaul",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Haryana",
    "District":"Mewat",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Spinach"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Tinda"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Sirsa",
    "Commodity":"Grapes"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Bilaspur",
    "Commodity":"Garlic"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Tinda"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Pineapple"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Peach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Apricot(Jardalu\/Khumani)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Cherry"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Litchi"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Plum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Peach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Onion"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Banana"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Peas cod"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Potato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Anantnag",
    "Commodity":"Onion"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Apple"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Banana"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Cherry"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Raddish"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Round gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Tinda"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Brinjal"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Cabbage"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Capsicum"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Carrot"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Lemon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Potato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Raddish"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Round gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Grapes"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Pineapple"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Spinach"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Banana"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Garlic"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Onion"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"White Pumpkin"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Beetroot"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Raddish"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Turmeric"
  },
  {
    "State":"Karnataka",
    "District":"Dharwad",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Karnataka",
    "District":"Dharwad",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Raddish"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Thondekai"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Coconut"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Papaya"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Black pepper"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Beetroot"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Copra"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Colacasia"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Garlic"
  },
  {
    "State":"Kerala",
    "District":"Kottayam",
    "Commodity":"Lemon"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Apple"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Potato"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Orange"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Raddish"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Raddish"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Green Peas"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Coconut"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Tapioca"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Pineapple"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Duster Beans"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Coconut"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ashoknagar",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Cabbage"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Cotton"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Betul",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhatarpur",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Chhindwara",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Damoh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Damoh",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Datia",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"karanja seeds"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dhar",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Guna",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Hoshangabad",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jabalpur",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Katni",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khandwa",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Khargone",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"Ajwan"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Raisen",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Apple"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sehore",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Seoni",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Seoni",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shajapur",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shehdol",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shivpuri",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Spinach"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Pineapple"
  },
  {
    "State":"Maharashtra",
    "District":"Buldhana",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Chandrapur",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Carrot"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Pineapple"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Dharashiv(Usmanabad)",
    "Commodity":"Soyabean"
  },
  {
    "State":"Maharashtra",
    "District":"Gadchiroli",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Maharashtra",
    "District":"Hingoli",
    "Commodity":"Groundnut"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Maharashtra",
    "District":"Kolhapur",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Kolhapur",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Almond(Badam)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Beans"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Beetroot"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cowpea (Lobia\/Karamani)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cummin Seed(Jeera)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Sugar"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Spinach"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Parbhani",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Guava"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Jamun(Narale Hannu)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Kakada"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Pear(Marasebu)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Pineapple"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Plum"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Mango"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Garlic"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Chilly Capsicum"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Potato"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Green Peas"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Potato"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Raddish"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Turnip"
  },
  {
    "State":"Meghalaya",
    "District":"West Khasi Hills",
    "Commodity":"Tomato"
  },
  {
    "State":"Nagaland",
    "District":"Dimapur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Nagaland",
    "District":"Dimapur",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"Nagaland",
    "District":"Kohima",
    "Commodity":"Beans"
  },
  {
    "State":"Nagaland",
    "District":"Kohima",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Nagaland",
    "District":"Phek",
    "Commodity":"Season Leaves"
  },
  {
    "State":"Nagaland",
    "District":"Tuensang",
    "Commodity":"Pumpkin"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Banana"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Peach"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Brinjal"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Water Melon"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Jagatsinghpur",
    "Commodity":"Fish"
  },
  {
    "State":"Odisha",
    "District":"Jagatsinghpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Mango"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Odisha",
    "District":"Kalahandi",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Khurda",
    "Commodity":"Garlic"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Odisha",
    "District":"Puri",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Onion"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Beetroot"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Odisha",
    "District":"Sonepur",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Bhatinda",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Fatehgarh",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Fatehgarh",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Litchi"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Litchi"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Carrot"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Spinach"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Colacasia"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Raddish"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Pineapple"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Round gourd"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Grapes"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Plum"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Pineapple"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Round gourd"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Pineapple"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Carrot"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Garlic"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Mango"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Water Melon"
  },
  {
    "State":"Rajasthan",
    "District":"Anupgarh",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Garlic"
  },
  {
    "State":"Rajasthan",
    "District":"Barmer",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Bharatpur",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Bikaner",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Bundi",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Deedwana Kuchaman",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Rajasthan",
    "District":"Deedwana Kuchaman",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Pineapple"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Gangapur City",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Gangapur City",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Lemon"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Litchi"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Sugar"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Rajasthan",
    "District":"Jalore",
    "Commodity":"Guar"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Rajasthan",
    "District":"Jodhpur Rural",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Kota",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Rajasthan",
    "District":"Rajsamand",
    "Commodity":"Potato"
  },
  {
    "State":"Rajasthan",
    "District":"Sanchore",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Rajasthan",
    "District":"Tonk",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Chengalpattu",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Beetroot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Namakkal",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Kakada"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Fig(Anjura\/Anjeer)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Papaya"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Garlic"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Onion Green"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Virudhunagar",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Cotton"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Brinjal"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Jasmine"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Kakada"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Onion Green"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Drumstick"
  },
  {
    "State":"Telangana",
    "District":"Mahbubnagar",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Telangana",
    "District":"Mahbubnagar",
    "Commodity":"Groundnut"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Brinjal"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Cabbage"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Potato"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Tomato"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Cabbage"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Field Pea"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Onion"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Cabbage"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Capsicum"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Field Pea"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Guava"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Tomato"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Onion"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Potato"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Tomato"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"Khowai",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tripura",
    "District":"North Tripura",
    "Commodity":"Rice"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Tripura",
    "District":"South District",
    "Commodity":"Kartali (Kantola)"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Tinda"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Ghee"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Spinach"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Deoria",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etawah",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hathras",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hathras",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jhansi",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Peas(Dry)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur Dehat",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kushinagar",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Groundnut"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Colacasia"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Peas(Dry)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Sugar"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Unnao",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Beans"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Carrot"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Litchi"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"West Bengal",
    "District":"Birbhum",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Carrot"
  },
  {
    "State":"West Bengal",
    "District":"Dakshin Dinajpur",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Rice"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"West Bengal",
    "District":"Jalpaiguri",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Jute"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Mustard"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Turmeric"
  },
  {
    "State":"West Bengal",
    "District":"North 24 Parganas",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"West Bengal",
    "District":"Paschim Bardhaman",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Moath Dal"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Guava"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Uttar Dinajpur",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Uttar Dinajpur",
    "Commodity":"Rice"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Cabbage"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Chittor",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Andhra Pradesh",
    "District":"Kurnool",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Chattisgarh",
    "District":"Durg",
    "Commodity":"Onion"
  },
  {
    "State":"Chattisgarh",
    "District":"Korba",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Chattisgarh",
    "District":"Surajpur",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Groundnut pods (raw)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Gujarat",
    "District":"Ahmedabad",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Groundnut (Split)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Gujarat",
    "District":"Amreli",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Spinach"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Anand",
    "Commodity":"Tinda"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Banaskanth",
    "Commodity":"Soanf"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Gujarat",
    "District":"Bharuch",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Bhavnagar",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Botad",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Rice"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Lemon"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Gujarat",
    "District":"Dahod",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Devbhumi Dwarka",
    "Commodity":"Soyabean"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Mustard"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Gujarat",
    "District":"Gandhinagar",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Gujarat",
    "District":"Gir Somnath",
    "Commodity":"Millets"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Gujarat",
    "District":"Jamnagar",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Ground Nut Seed"
  },
  {
    "State":"Gujarat",
    "District":"Junagarh",
    "Commodity":"Maize"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Beetroot"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Pegeon Pea (Arhar Fali)"
  },
  {
    "State":"Gujarat",
    "District":"Kheda",
    "Commodity":"Tinda"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Castor Seed"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Gujarat",
    "District":"Morbi",
    "Commodity":"Tomato"
  },
  {
    "State":"Gujarat",
    "District":"Narmada",
    "Commodity":"Banana"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Banana"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Brinjal"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Navsari",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Panchmahals",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Gujarat",
    "District":"Patan",
    "Commodity":"Suva (Dill Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Ajwan"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Kulthi(Horse Gram)"
  },
  {
    "State":"Gujarat",
    "District":"Porbandar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Gujarat",
    "District":"Rajkot",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Kabuli Chana(Chickpeas-White)"
  },
  {
    "State":"Gujarat",
    "District":"Sabarkantha",
    "Commodity":"Soanf"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Carrot"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Onion"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Potato"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Rat Tail Radish (Mogari)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Surat Beans (Papadi)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Turmeric (raw)"
  },
  {
    "State":"Gujarat",
    "District":"Surat",
    "Commodity":"Groundnut"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Cotton"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Banana"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Gujarat",
    "District":"Surendranagar",
    "Commodity":"Tinda"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Leafy Vegetable"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Gujarat",
    "District":"Vadodara(Baroda)",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Raddish"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Haryana",
    "District":"Ambala",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Haryana",
    "District":"Fatehabad",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Gurgaon",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Tinda"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Haryana",
    "District":"Hissar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Haryana",
    "District":"Jhajar",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Jind",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Haryana",
    "District":"Kaithal",
    "Commodity":"Lemon"
  },
  {
    "State":"Haryana",
    "District":"Karnal",
    "Commodity":"Potato"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Capsicum"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Colacasia"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Plum"
  },
  {
    "State":"Haryana",
    "District":"Kurukshetra",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Haryana",
    "District":"Mewat",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Tomato"
  },
  {
    "State":"Haryana",
    "District":"Palwal",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Haryana",
    "District":"Panchkula",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Haryana",
    "District":"Panipat",
    "Commodity":"Mango"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Banana"
  },
  {
    "State":"Haryana",
    "District":"Rewari",
    "Commodity":"Onion"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Haryana",
    "District":"Rohtak",
    "Commodity":"Apple"
  },
  {
    "State":"Haryana",
    "District":"Sonipat",
    "Commodity":"Water Melon"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Haryana",
    "District":"Yamuna Nagar",
    "Commodity":"Mango"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Chamba",
    "Commodity":"Tomato"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Hamirpur",
    "Commodity":"Spinach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kangra",
    "Commodity":"Cherry"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Kullu",
    "Commodity":"Spinach"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Colacasia"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Papaya"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Peas cod"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Beetroot"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Mandi",
    "Commodity":"Raddish"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Apricot(Jardalu\/Khumani)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Cherry"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Shimla",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Capsicum"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Sirmore",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Cabbage"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Garlic"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Lemon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Solan",
    "Commodity":"Water Melon"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Carrot"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Himachal Pradesh",
    "District":"Una",
    "Commodity":"Grapes"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Cabbage"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Garlic"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Lemon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Onion"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Pineapple"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Jammu",
    "Commodity":"Potato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Apple"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Garlic"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Onion"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Kathua",
    "Commodity":"Spinach"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Lemon"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Srinagar",
    "Commodity":"Potato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Potato"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Raddish"
  },
  {
    "State":"Jammu and Kashmir",
    "District":"Udhampur",
    "Commodity":"Tomato"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Alsandikai"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Bunch Beans"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Capsicum"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Chapparad Avare"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Karnataka",
    "District":"Bangalore",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Karnataka",
    "District":"Belgaum",
    "Commodity":"Maize"
  },
  {
    "State":"Karnataka",
    "District":"Chamrajnagar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Karnataka",
    "District":"Kolar",
    "Commodity":"Brinjal"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Beetroot"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Brinjal"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Cabbage"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Carrot"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Corriander seed"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Mustard"
  },
  {
    "State":"Karnataka",
    "District":"Shimoga",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Kerala",
    "District":"Alappuzha",
    "Commodity":"Mango"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Garlic"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Coconut Seed"
  },
  {
    "State":"Kerala",
    "District":"Ernakulam",
    "Commodity":"Orange"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Apple"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Drumstick"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Kerala",
    "District":"Idukki",
    "Commodity":"Capsicum"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Kannur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Cabbage"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Coconut Seed"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Kerala",
    "District":"Kasargod",
    "Commodity":"Coconut"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Amphophalus"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Kerala",
    "District":"Kollam",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Orange"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Kerala",
    "District":"Kozhikode(Calicut)",
    "Commodity":"Raddish"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Garlic"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Tomato"
  },
  {
    "State":"Kerala",
    "District":"Malappuram",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Kerala",
    "District":"Palakad",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Brinjal"
  },
  {
    "State":"Kerala",
    "District":"Pathanamthitta",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Duster Beans"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Kerala",
    "District":"Thirssur",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Kerala",
    "District":"Thiruvananthapuram",
    "Commodity":"Lime"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Banana"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Pepper ungarbled"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Kerala",
    "District":"Wayanad",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Alirajpur",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Alirajpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Neem Seed"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Badwani",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhopal",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Bhopal",
    "Commodity":"Onion"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Burhanpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Burhanpur",
    "Commodity":"Maize"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Datia",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dewas",
    "Commodity":"Potato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Dindori",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Gwalior",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Gwalior",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Harda",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"Groundnut"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Indore",
    "Commodity":"mango powder"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Jhabua",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Morena",
    "Commodity":"Tomato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Neemuch",
    "Commodity":"Soyabean"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Panna",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Raisen",
    "Commodity":"Lak(Teora)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Garlic"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rajgarh",
    "Commodity":"Brinjal"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ratlam",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Rewa",
    "Commodity":"dried mango"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Water Melon"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Seoni",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Shehdol",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Sheopur",
    "Commodity":"Banana"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Tikamgarh",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Green Peas"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Ujjain",
    "Commodity":"Potato"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Umariya",
    "Commodity":"Wheat"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Madhya Pradesh",
    "District":"Vidisha",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Maharashtra",
    "District":"Ahmednagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Groundnut"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Maize"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Sesamum(Sesame,Gingelly,Til)"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Soyabean"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Amarawati",
    "Commodity":"Papaya"
  },
  {
    "State":"Maharashtra",
    "District":"Buldhana",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Buldhana",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Maharashtra",
    "District":"Buldhana",
    "Commodity":"Maize"
  },
  {
    "State":"Maharashtra",
    "District":"Chandrapur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Chandrapur",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Drumstick"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Methi(Leaves)"
  },
  {
    "State":"Maharashtra",
    "District":"Chattrapati Sambhajinagar",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Hingoli",
    "Commodity":"Turmeric"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Beetroot"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Lime"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Spinach"
  },
  {
    "State":"Maharashtra",
    "District":"Jalgaon",
    "Commodity":"Maize"
  },
  {
    "State":"Maharashtra",
    "District":"Kolhapur",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Maharashtra",
    "District":"Kolhapur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Kolhapur",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Latur",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Arecanut(Betelnut\/Supari)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Carrot"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cashewnuts"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Cinamon(Dalchini)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Onion Green"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Raddish"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Guava"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Litchi"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Papaya"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Peach"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Plum"
  },
  {
    "State":"Maharashtra",
    "District":"Mumbai",
    "Commodity":"Water Melon"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Guar"
  },
  {
    "State":"Maharashtra",
    "District":"Nagpur",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Maharashtra",
    "District":"Nanded",
    "Commodity":"Jowar(Sorghum)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Bajra(Pearl Millet\/Cumbu)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Jasmine"
  },
  {
    "State":"Maharashtra",
    "District":"Pune",
    "Commodity":"Ragi (Finger Millet)"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Beans"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Maharashtra",
    "District":"Raigad",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Maharashtra",
    "District":"Ratnagiri",
    "Commodity":"Tomato"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Cabbage"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Maharashtra",
    "District":"Sangli",
    "Commodity":"Apple"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Onion"
  },
  {
    "State":"Maharashtra",
    "District":"Satara",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Beans"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Carrot"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Drumstick"
  },
  {
    "State":"Maharashtra",
    "District":"Sholapur",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Wheat"
  },
  {
    "State":"Maharashtra",
    "District":"Thane",
    "Commodity":"Rice"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Banana"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"French Beans (Frasbean)"
  },
  {
    "State":"Meghalaya",
    "District":"East Jaintia Hills",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"Meghalaya",
    "District":"East Khasi Hills",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Nagaland",
    "District":"Dimapur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Nagaland",
    "District":"Mokokchung",
    "Commodity":"Brinjal"
  },
  {
    "State":"Nagaland",
    "District":"Phek",
    "Commodity":"Banana"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Apple"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Grapes"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"NCT of Delhi",
    "District":"Delhi",
    "Commodity":"Water Melon"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Odisha",
    "District":"Balasore",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Odisha",
    "District":"Bargarh",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Odisha",
    "District":"Boudh",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Odisha",
    "District":"Dhenkanal",
    "Commodity":"Tomato"
  },
  {
    "State":"Odisha",
    "District":"Gajapati",
    "Commodity":"Cashewnuts"
  },
  {
    "State":"Odisha",
    "District":"Ganjam",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Odisha",
    "District":"Jagatsinghpur",
    "Commodity":"Rice"
  },
  {
    "State":"Odisha",
    "District":"Khurda",
    "Commodity":"Mango"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Odisha",
    "District":"Koraput",
    "Commodity":"Raddish"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Odisha",
    "District":"Mayurbhanja",
    "Commodity":"Colacasia"
  },
  {
    "State":"Odisha",
    "District":"Nayagarh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Odisha",
    "District":"Nayagarh",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Odisha",
    "District":"Nayagarh",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Odisha",
    "District":"Puri",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Odisha",
    "District":"Puri",
    "Commodity":"Brinjal"
  },
  {
    "State":"Odisha",
    "District":"Rayagada",
    "Commodity":"Cabbage"
  },
  {
    "State":"Odisha",
    "District":"Sundergarh",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Carrot"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Amritsar",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Litchi"
  },
  {
    "State":"Punjab",
    "District":"Faridkot",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Fatehgarh",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Fatehgarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Beetroot"
  },
  {
    "State":"Punjab",
    "District":"Fazilka",
    "Commodity":"Cabbage"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Mango"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Ferozpur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Tomato"
  },
  {
    "State":"Punjab",
    "District":"Gurdaspur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Hoshiarpur",
    "Commodity":"Raddish"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Jalandhar",
    "Commodity":"Peas Wet"
  },
  {
    "State":"Punjab",
    "District":"kapurthala",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Litchi"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Ludhiana",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Garlic"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Potato"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Tinda"
  },
  {
    "State":"Punjab",
    "District":"Mansa",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Squash(Chappal Kadoo)"
  },
  {
    "State":"Punjab",
    "District":"Moga",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Punjab",
    "District":"Mohali",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Capsicum"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Punjab",
    "District":"Nawanshahr",
    "Commodity":"Water Melon"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Apple"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Onion"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Papaya"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Raddish"
  },
  {
    "State":"Punjab",
    "District":"Pathankot",
    "Commodity":"Spinach"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Peas cod"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Peach"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Punjab",
    "District":"Patiala",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Lemon"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Beetroot"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Long Melon(Kakri)"
  },
  {
    "State":"Punjab",
    "District":"Sangrur",
    "Commodity":"Plum"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Banana"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Punjab",
    "District":"Tarntaran",
    "Commodity":"Water Melon"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Carrot"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Ajmer",
    "Commodity":"Orange"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Methi Seeds"
  },
  {
    "State":"Rajasthan",
    "District":"Baran",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Barmer",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Rajasthan",
    "District":"Barmer",
    "Commodity":"Taramira"
  },
  {
    "State":"Rajasthan",
    "District":"Beawar",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Beawar",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Rajasthan",
    "District":"Bundi",
    "Commodity":"Wheat"
  },
  {
    "State":"Rajasthan",
    "District":"Deedwana Kuchaman",
    "Commodity":"Isabgul (Psyllium)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Banana"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Garlic"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Lime"
  },
  {
    "State":"Rajasthan",
    "District":"Ganganagar",
    "Commodity":"Mango"
  },
  {
    "State":"Rajasthan",
    "District":"Gangapur City",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Hanumangarh",
    "Commodity":"Mustard"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Papaya"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Pineapple"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Rajasthan",
    "District":"Jaipur Rural",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Jhalawar",
    "Commodity":"Linseed"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Linseed"
  },
  {
    "State":"Rajasthan",
    "District":"Pratapgarh",
    "Commodity":"Mataki"
  },
  {
    "State":"Rajasthan",
    "District":"Rajsamand",
    "Commodity":"Onion"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Guar Seed(Cluster Beans Seed)"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Rajasthan",
    "District":"Sikar",
    "Commodity":"Tomato"
  },
  {
    "State":"Rajasthan",
    "District":"Sirohi",
    "Commodity":"Onion"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ariyalur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Coimbatore",
    "Commodity":"Pear(Marasebu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Green Avare (W)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Cuddalore",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dharmapuri",
    "Commodity":"Green Peas"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Dindigul",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Erode",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Coriander(Leaves)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Knool Khol"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kallakuruchi",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Kancheepuram",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Karur",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Krishnagiri",
    "Commodity":"Chikoos(Sapota)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Madurai",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagapattinam",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Ashgourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Carrot"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Kakada"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Mango"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Mint(Pudina)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Nagercoil (Kannyiakumari)",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Amaranthus"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Beans"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Elephant Yam (Suran)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tamil Nadu",
    "District":"Perambalur",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Pudukkottai",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Colacasia"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Lime"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Raddish"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ramanathapuram",
    "Commodity":"Yam (Ratalu)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Banana"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Thondekai"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Ranipet",
    "Commodity":"Jasmine"
  },
  {
    "State":"Tamil Nadu",
    "District":"Salem",
    "Commodity":"Tube Flower"
  },
  {
    "State":"Tamil Nadu",
    "District":"Sivaganga",
    "Commodity":"Capsicum"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Cabbage"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Drumstick"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tenkasi",
    "Commodity":"Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thanjavur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Apple"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Guava"
  },
  {
    "State":"Tamil Nadu",
    "District":"The Nilgiris",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Theni",
    "Commodity":"Orange"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Amla(Nelli Kai)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruchirappalli",
    "Commodity":"Marigold(Calcutta)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Pineapple"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirunelveli",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Betal Leaves"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupathur",
    "Commodity":"Maize"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thirupur",
    "Commodity":"Tamarind Fruit"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvannamalai",
    "Commodity":"Tube Rose(Loose)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvarur",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Chili Red"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Chow Chow"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Water Melon"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Thiruvellore",
    "Commodity":"Tender Coconut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Indian Beans (Seam)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Grapes"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Tamil Nadu",
    "District":"Tuticorin",
    "Commodity":"Tapioca"
  },
  {
    "State":"Tamil Nadu",
    "District":"Vellore",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Groundnut"
  },
  {
    "State":"Tamil Nadu",
    "District":"Villupuram",
    "Commodity":"Mashrooms"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Telangana",
    "District":"Adilabad",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Orange"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Pineapple"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Astera"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Sweet Potato"
  },
  {
    "State":"Telangana",
    "District":"Hyderabad",
    "Commodity":"Tomato"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Maize"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Telangana",
    "District":"Medak",
    "Commodity":"Soyabean"
  },
  {
    "State":"Telangana",
    "District":"Nalgonda",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Carrot"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Telangana",
    "District":"Ranga Reddy",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Cluster beans"
  },
  {
    "State":"Telangana",
    "District":"Warangal",
    "Commodity":"Potato"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Snakeguard"
  },
  {
    "State":"Tripura",
    "District":"Dhalai",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Tripura",
    "District":"Gomati",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Tripura",
    "District":"Sepahijala",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Tripura",
    "District":"South District",
    "Commodity":"Brinjal"
  },
  {
    "State":"Tripura",
    "District":"Unokoti",
    "Commodity":"Carrot"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Agra",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Aligarh",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ambedkarnagar",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amethi",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Capsicum"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Guava"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Amroha",
    "Commodity":"Spinach"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Auraiya",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Azamgarh",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Badaun",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bahraich",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ballia",
    "Commodity":"Green Gram (Moong)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Balrampur",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Banda",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Ridgeguard(Tori)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Cabbage"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Paddy(Dhan)(Common)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Barabanki",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bijnor",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Bulandshahar",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Chandauli",
    "Commodity":"Spinach"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Etah",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Farukhabad",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Fatehpur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Firozabad",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gautam Budh Nagar",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghaziabad",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Ghazipur",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Green Gram Dal (Moong Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Mustard Oil"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gonda",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Gorakhpur",
    "Commodity":"Mango"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hamirpur",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hardoi",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hathras",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hathras",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Hathras",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jalaun (Orai)",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Cowpea(Veg)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Spinach"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jaunpur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Jhansi",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kannuj",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Arhar (Tur\/Red Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kanpur Dehat",
    "Commodity":"Wood"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kasganj",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Kaushambi",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Khiri (Lakhimpur)",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lakhimpur",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lalitpur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lalitpur",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Black Gram Dal (Urd Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Lucknow",
    "Commodity":"White Peas"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Maharajganj",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Onion"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mahoba",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Raddish"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mainpuri",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Mango (Raw-Ripe)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mathura",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Masur Dal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mau(Maunathbhanjan)",
    "Commodity":"Cucumbar(Kheera)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Little gourd (Kundru)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Lemon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Mirzapur",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pillibhit",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Potato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Pumpkin"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Pratapgarh",
    "Commodity":"Tomato"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Prayagraj",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Bengal Gram Dal (Chana Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Banana"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Raebarelli",
    "Commodity":"Water Melon"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Rampur",
    "Commodity":"Banana - Green"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Papaya (Raw)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Apple"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Saharanpur",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Maize"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sambhal",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sant Kabir Nagar",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Bhindi(Ladies Finger)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Brinjal"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Green Chilli"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shahjahanpur",
    "Commodity":"Sponge gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Barley (Jau)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Mousambi(Sweet Lime)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Pomegranate"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Sugar"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shamli",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Black Gram (Urd Beans)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Bottle gourd"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Shravasti",
    "Commodity":"Garlic"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Siddharth Nagar",
    "Commodity":"Ginger(Green)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Bengal Gram(Gram)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Lentil (Masur)(Whole)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Mustard"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sitapur",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Rice"
  },
  {
    "State":"Uttar Pradesh",
    "District":"Sonbhadra",
    "Commodity":"Wheat"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Carrot"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Karbuja(Musk Melon)"
  },
  {
    "State":"Uttrakhand",
    "District":"Dehradoon",
    "Commodity":"Lime"
  },
  {
    "State":"Uttrakhand",
    "District":"Haridwar",
    "Commodity":"Papaya"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Banana"
  },
  {
    "State":"Uttrakhand",
    "District":"Nanital",
    "Commodity":"Litchi"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Cauliflower"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Jack Fruit"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Wood"
  },
  {
    "State":"Uttrakhand",
    "District":"UdhamSinghNagar",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Alipurduar",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"West Bengal",
    "District":"Bankura",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Birbhum",
    "Commodity":"Mustard"
  },
  {
    "State":"West Bengal",
    "District":"Birbhum",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Carrot"
  },
  {
    "State":"West Bengal",
    "District":"Darjeeling",
    "Commodity":"Arhar Dal(Tur Dal)"
  },
  {
    "State":"West Bengal",
    "District":"Hooghly",
    "Commodity":"Jute"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Howrah",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Cabbage"
  },
  {
    "State":"West Bengal",
    "District":"Kolkata",
    "Commodity":"Carrot"
  },
  {
    "State":"West Bengal",
    "District":"Malda",
    "Commodity":"Potato"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(E)",
    "Commodity":"Rose(Local)"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Pointed gourd (Parval)"
  },
  {
    "State":"West Bengal",
    "District":"Medinipur(W)",
    "Commodity":"Sweet Pumpkin"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Mustard"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Onion"
  },
  {
    "State":"West Bengal",
    "District":"Murshidabad",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Green Chilli"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Jute"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Purba Bardhaman",
    "Commodity":"Ginger(Dry)"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Brinjal"
  },
  {
    "State":"West Bengal",
    "District":"Puruliya",
    "Commodity":"Gur(Jaggery)"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Bitter gourd"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Fish"
  },
  {
    "State":"West Bengal",
    "District":"Sounth 24 Parganas",
    "Commodity":"Tomato"
  },
  {
    "State":"West Bengal",
    "District":"Uttar Dinajpur",
    "Commodity":"Wheat"
  }
];

export default filterData;
