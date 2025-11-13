// Data: representative sample extracted from the provided PDF.
// You can expand this array as needed; the app will pick it up automatically.
const MOLECULES = [
  // --- Diabetes / Endocrine ---
  {
    molecule: "Glimepiride 1mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"M- Glipim 500/1", price:101.25},
      {name:"Betahash M1", price:101.25},
      {name:"Satismet G1", price:112.50},
      {name:"Glipanay - M1", price:98.44},
      {name:"Glifor M1", price:56.25},
      {name:"Truismet G1", price:121.88},
      {name:"Rglusens M1", price:90.00},
      {name:"Avipride M1", price:101.25},
      {name:"Luxmet G1", price:92.81},
      {name:"Glusiglim M1", price:102.90}
    ]
  },
  {
    molecule: "Glimepiride 2mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"M- Glipim 500/2", price:118.13},
      {name:"Satismet G2", price:97.50},
      {name:"Glipanay - M2", price:126.56},
      {name:"Glifor Duo", price:75.00},
      {name:"Glifor M2", price:112.50},
      {name:"Avipride M2", price:131.25},
      {name:"Truismet G2", price:133.59},
      {name:"Rglusens M2", price:100.31},
      {name:"Luxmet G2", price:101.25},
      {name:"Betahash M2", price:121.88},
      {name:"Glusiglim M2", price:130.31}
    ]
  },
  {
    molecule: "Glimepiride 1mg + Metformin 1000mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Glipim M1 Forte", price:105.94},
      {name:"Glipanay M1 forte", price:112.50}
    ]
  },
  {
    molecule: "Glimepiride 2mg + Metformin 1000mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Glipanay M2 forte", price:140.63}
    ]
  },
  {
    molecule: "Glimepiride 1mg + Metformin 750mg",
    category: "Diabetes / Endocrine",
    brands: [{name:"GlucoM - SR 1/750", price:173.44}]
  },
  {
    molecule: "Glimepiride 2mg + Metformin 750mg",
    category: "Diabetes / Endocrine",
    brands: [{name:"GlucoM - SR 2/750", price:215.63}]
  },
  {
    molecule: "Glimepiride 0.5mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Mitoglim 0.5/500", price:56.25},
      {name:"Diatoglim - M 0.5", price:70.31},
      {name:"Glipanay M 0.5", price:70.31}
    ]
  },
  {
    molecule: "Voglibose 0.2mg + Metformin 500mg SR",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Voglimit - M 0.2", price:154.69}
    ]
  },
  {
    molecule: "Glimepiride 1mg + Metformin 500mg + Voglibose 0.2mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Vmetglim1", price:147.66},
      {name:"Satismet GV1", price:103.13},
      {name:"Betahash - MV1", price:140.63},
      {name:"Mitoglim MV1/0.2", price:125.63},
      {name:"Glipanay MV1", price:180.00}
    ]
  },
  {
    molecule: "Glimepiride 2mg + Metformin 500mg + Voglibose 0.2mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Vmetglim 2", price:182.81},
      {name:"Satismet GV2", price:182.81},
      {name:"Voglimit - Trio 2.2", price:182.81},
      {name:"Glusens - Trio 2.2", price:65.63},
      {name:"Mitoglim MV2/0.2", price:147.66},
      {name:"Oraglim MV2", price:87.19},
      {name:"Betahash - MV2", price:168.75},
      {name:"Ralaglim - MV 2.2", price:149.06},
      {name:"Glipanay MV2", price:210.00}
    ]
  },
  {
    molecule: "Dapagliflozin 10mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Idapazin 10", price:126.56},
      {name:"RWdapa 10", price:102.19},
      {name:"Bgdapa 10", price:131.25},
      {name:"Dapaheal 10", price:131.25},
      {name:"Urodapa 10", price:103.13},
      {name:"Zeedapa - 10", price:168.75}
    ]
  },
  {
    molecule: "Dapagliflozin 10mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Zeedapa - M", price:196.88},
      {name:"Vivadapa - M", price:158.44}
    ]
  },
  {
    molecule: "Dapagliflozin 10mg + Metformin 1000mg",
    category: "Diabetes / Endocrine",
    brands: [{name:"Diatodapa - M 10/1000", price:210.94}]
  },
  {
    molecule: "Empagliflozin 25mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"UroEmpa - 25", price:140.63},
      {name:"Zeempa - 25", price:131.25}
    ]
  },
  {
    molecule: "Empagliflozin 25mg + Linagliptin 5mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"VivaEmpa - L", price:159.38},
      {name:"Zeempa - L", price:159.38}
    ]
  },
  {
    molecule: "Empagliflozin 25mg + Sitagliptin 100mg",
    category: "Diabetes / Endocrine",
    brands: [{name:"Uroempa - S", price:187.50}]
  },
  {
    molecule: "Teneligliptin 20mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Tenaheal 20", price:98.44},
      {name:"Tenlicontrol20", price:107.81},
      {name:"Rtenamit-20/10", price:110.63}
    ]
  },
  {
    molecule: "Sitagliptin 50mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Sismet 50/500", price:168.75},
      {name:"Glitasenz - M 50", price:140.63}
    ]
  },
  {
    molecule: "Sitagliptin 100mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [{name:"Glitasenz - M 100", price:135.47}]
  },
  {
    molecule: "Sitagliptin 100mg + Pioglitazone 15mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Sismet - PM", price:131.25},
      {name:"Glitasenz - PM", price:158.44}
    ]
  },
  {
    molecule: "Sitagliptin 100mg + Dapagliflozin 10mg + Metformin 500mg",
    category: "Diabetes / Endocrine",
    brands: [
      {name:"Sismet - Trio", price:178.13},
      {name:"Urodapa- Trio", price:196.88},
      {name:"Vivadapa - Trio", price:225.00}
    ]
  },
  // --- Cardiac ---
  {
    molecule: "Telmisartan 40mg",
    category: "Cardiac",
    brands: [
      {name:"Truarb 40", price:53.25},
      {name:"Tellaim 40", price:63.28},
      {name:"Rsartel 40", price:65.63}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Amlodipine 5mg",
    category: "Cardiac",
    brands: [
      {name:"Tel Tel AML", price:101.25},
      {name:"Tel Tel AMD", price:123.75},
      {name:"Truarb AM 40/5", price:93.28},
      {name:"Vivasar AM", price:112.50},
      {name:"Amlomit T", price:92.81},
      {name:"Rsartel AM", price:112.50},
      {name:"Sachtel AM", price:112.50}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Chlorthalidone 6.25mg",
    category: "Cardiac",
    brands: [
      {name:"TelTel - CH 40/6.25", price:98.44},
      {name:"Rsartel - CT 6.25", price:130.31}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Chlorthalidone 12.5mg",
    category: "Cardiac",
    brands: [
      {name:"Truarb CT 40/12.5", price:131.25},
      {name:"Tel Tel Gold CT", price:84.38},
      {name:"Tel Tel CT 40/12.5", price:161.72},
      {name:"Uptel CT", price:112.50},
      {name:"TelTel - CH 40/12.5", price:123.75}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Hydrochlorothiazide 12.5mg",
    category: "Cardiac",
    brands: [
      {name:"Uptel H 40/12.5", price:126.56},
      {name:"Rsartel - H", price:140.63}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Cilnidipine 10mg",
    category: "Cardiac",
    brands: [
      {name:"Cilnimit TM 10/40", price:147.66},
      {name:"Diatotel - LN", price:168.75}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Amlodipine 5mg + Hydrochlorothiazide 12.5mg",
    category: "Cardiac",
    brands: [{name:"Uptel - Trio 40", price:186.56}]
  },
  {
    molecule: "Telmisartan 40mg + Metoprolol 25mg",
    category: "Cardiac",
    brands: [
      {name:"Rsartel MT 25", price:140.63},
      {name:"Tel Tel Beta 40/25", price:168.75}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Metoprolol 50mg",
    category: "Cardiac",
    brands: [
      {name:"Rsartel MT 50", price:168.75},
      {name:"Tel Tel Beta 40/50", price:210.94}
    ]
  },
  {
    molecule: "Telmisartan 40mg + Bisoprolol 2.5mg",
    category: "Cardiac",
    brands: [{name:"Diatotel - BS 2.5", price:93.75}]
  },
  {
    molecule: "Atorvastatin 10mg + Clopidogrel 75mg",
    category: "Cardiac",
    brands: [{name:"Trugrel AV 10/75", price:150.00}]
  },
  {
    molecule: "Rosuvastatin 10mg",
    category: "Cardiac",
    brands: [
      {name:"Zeerosva 10", price:210.94},
      {name:"Mitostatin - 10", price:107.81},
      {name:"Rosiwar - 10", price:309.38}
    ]
  },
  {
    molecule: "Rosuvastatin 20mg",
    category: "Cardiac",
    brands: [
      {name:"Zeerosva 20", price:309.38},
      {name:"Rosiwar 20", price:450.00}
    ]
  },
  {
    molecule: "Rosuvastatin 10mg + Fenofibrate 145mg",
    category: "Cardiac",
    brands: [{name:"Mitostatin - F10", price:185.63}]
  },
  {
    molecule: "Rosuvastatin 10mg + Aspirin 75mg + Clopidogrel 75mg",
    category: "Cardiac",
    brands: [
      {name:"Statrise - Gold", price:154.69},
      {name:"TriRosipar 10", price:135.94},
      {name:"TriRosimit Gold", price:113.44}
    ]
  },
  {
    molecule: "Rosuvastatin 20mg + Aspirin 75mg + Clopidogrel 75mg",
    category: "Cardiac",
    brands: [{name:"TriRosipar- 20", price:182.81}]
  },
  {
    molecule: "Rosuvastatin 10mg + Clopidogrel 75mg",
    category: "Cardiac",
    brands: [
      {name:"Sorustatin CV 75/10", price:134.06},
      {name:"Statrise - CV 75/10", price:147.66}
    ]
  },
  {
    molecule: "Rosuvastatin 20mg + Clopidogrel 75mg",
    category: "Cardiac",
    brands: [
      {name:"Sorustatin CV 75/20", price:159.38},
      {name:"Statrise - CV 75/20", price:182.81}
    ]
  },
  {
    molecule: "Rosuvastatin 10mg + Aspirin 75mg",
    category: "Cardiac",
    brands: [
      {name:"Rosimit Duo 10/75", price:75.80},
      {name:"Rosimit ASP 10/75", price:79.22},
      {name:"Rosipar ASP 10/75", price:72.19},
      {name:"Statrise - ASP", price:84.38}
    ]
  },
  {
    molecule: "Nitroglycerin 2.6mg",
    category: "Cardiac",
    brands: [{name:"Angifair 2.6", price:220.00}]
  },
  {
    molecule: "Metoprolol Succinate ER 25mg",
    category: "Cardiac",
    brands: [{name:"Mitolol - ER 25", price:63.63}]
  },
  {
    molecule: "Metoprolol Succinate ER 50mg",
    category: "Cardiac",
    brands: [{name:"Mitolol - XL 50", price:75.00}]
  },
  {
    molecule: "Metoprolol 25mg + Amlodipine 5mg",
    category: "Cardiac",
    brands: [{name:"Mitolol A", price:126.56}]
  },
  {
    molecule: "Metoprolol 50mg + Amlodipine 5mg",
    category: "Cardiac",
    brands: [{name:"Amlomit Beta 5/50", price:121.88}]
  },
  {
    molecule: "Olmesartan 20mg + Amlodipine 5mg",
    category: "Cardiac",
    brands: [{name:"Olmitoch 20/AM", price:72.19}]
  },
  {
    molecule: "Olmesartan 40mg + Amlodipine 5mg",
    category: "Cardiac",
    brands: [{name:"Olmitoch 40/AM", price:112.50}]
  },

  // --- Neuro / Psych ---
  {
    molecule: "Pregabalin 75mg + Nortriptyline 10mg",
    category: "Neuro / Psych",
    brands: [{name:"Neuro Control NT", price:112.50}]
  },
  {
    molecule: "Pregabalin 75mg + Mecobalamin 1500mcg + Nortriptyline 10mg",
    category: "Neuro / Psych",
    brands: [
      {name:"NeuroControl-NTM", price:167.81},
      {name:"Gabamit - NTM", price:178.13}
    ]
  },
  {
    molecule: "Gabapentin 400mg + Nortriptyline 10mg",
    category: "Neuro / Psych",
    brands: [{name:"Gabamit - NT 400", price:440.63}]
  },
  { molecule:"Pregabalin 25mg", category:"Neuro / Psych", brands:[{name:"Presemi 25", price:69.38}] },
  { molecule:"Pregabalin 50mg", category:"Neuro / Psych", brands:[{name:"Presemi 50", price:120.00}] },
  { molecule:"Pregabalin 75mg", category:"Neuro / Psych", brands:[{name:"Presemi 75", price:201.56}] },
  { molecule:"Duloxetine 30mg", category:"Neuro / Psych", brands:[{name:"Dulonerve - 30", price:103.13}] },
  {
    molecule:"Duloxetine 20mg + Methylcobalamin 500mcg",
    category:"Neuro / Psych",
    brands:[{name:"Dulonerve - NP 20", price:93.50}]
  },
  {
    molecule:"Betahistine 16mg (MD)",
    category:"Neuro / Psych",
    brands:[{name:"Mitostine 16", price:159.38},{name:"Vertioch 16 MD", price:111.56}]
  },
  {
    molecule:"Betahistine 24mg (MD)",
    category:"Neuro / Psych",
    brands:[{name:"Vertioch 24 MD", price:137.81}]
  },
  { molecule:"Flupentixol 0.5mg + Melitracen 10mg", category:"Neuro / Psych", brands:[{name:"Melidida", price:70.31}] },
  { molecule:"Escitalopram 10mg + Clonazepam 0.5mg", category:"Neuro / Psych", brands:[{name:"Clonamit - Plus", price:101.25}] },
  { molecule:"Escitalopram 5mg + Clonazepam 0.5mg", category:"Neuro / Psych", brands:[{name:"Mindhealth 5.5", price:103.13}] },
  { molecule:"Dothiepin 25mg", category:"Neuro / Psych", brands:[{name:"Dosuvak - 25", price:64.37}] },
  { molecule:"Dothiepin 50mg", category:"Neuro / Psych", brands:[{name:"Dosuvak - 50", price:87.19}] },

  // --- Gastro ---
  {
    molecule: "Pantoprazole 40mg",
    category: "Gastro",
    brands: [
      {name:"M pantoch 40", price:84.83},
      {name:"Panpump 40", price:84.38},
      {name:"Pantoch 40", price:56.25},
      {name:"Panproflux", price:75.00},
      {name:"Pantonay 40", price:93.75}
    ]
  },
  {
    molecule: "Pantoprazole 40mg + Domperidone 30mg",
    category: "Gastro",
    brands: [
      {name:"Pantoch D30", price:82.50},
      {name:"CtrlP DSR", price:98.44},
      {name:"Ctrl PD", price:84.38},
      {name:"Panpump-D", price:105.94},
      {name:"Pantonay D", price:140.63},
      {name:"Diatopan D", price:168.75}
    ]
  },
  {
    molecule: "Rabeprazole 20mg + Domperidone 30mg",
    category: "Gastro",
    brands: [
      {name:"Rabitoch - Rdom", price:116.25},
      {name:"Rabeprove D", price:168.75}
    ]
  },
  { molecule:"Omeprazole 10mg + Domperidone 15mg", category:"Gastro", brands:[{name:"Mitopraz- D", price:75.00}] },
  { molecule:"Esomeprazole 40mg + Domperidone 30mg", category:"Gastro", brands:[{name:"R-Toch DSR", price:239.06}] },
  { molecule:"Lactitol 10gm + Ispaghula 3.5gm", category:"Gastro", brands:[{name:"Trubulk", price:289.00}] },

  // --- Anti-infective ---
  { molecule:"Azithromycin 250mg", category:"Anti‑infective", brands:[{name:"Azitoch 250", price:71.98}] },
  { molecule:"Amoxycillin 500mg + Clavulanic Acid 125mg", category:"Anti‑infective", brands:[{name:"Azitoch CV 625", price:186.56}] },
  { molecule:"Cefixime 200mg + Clavulanic Acid 125mg", category:"Anti‑infective", brands:[{name:"Vakxime - CV 200", price:309.38}] },

  // --- Urology ---
  { molecule:"Silodosin 8mg + Dutasteride 0.5mg", category:"Urology", brands:[{name:"VinProst D8", price:220.00}] },

  // --- Ortho / Pain ---
  { molecule:"Aceclofenac 100mg + Paracetamol 325mg", category:"Ortho / Pain", brands:[{name:"Vakdol P", price:56.25},{name:"Vinudol P", price:56.25}] },
  { molecule:"Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg", category:"Ortho / Pain", brands:[{name:"Vinudol SP", price:100.31}] },
  { molecule:"Aceclofenac 100mg + Thiocolchicoside 4mg", category:"Ortho / Pain", brands:[{name:"Vinudol TH", price:168.75}] },
  { molecule:"Tramadol + Acetaminophen", category:"Ortho / Pain", brands:[{name:"Vakdol T", price:92.81}] },
  { molecule:"Tolperisone 150mg + Diclofenac 50mg", category:"Ortho / Pain", brands:[{name:"Toltoch-D", price:196.88}] },

  // --- Derm ---
  { molecule:"Luliconazole Cream 1% w/w", category:"Dermatology", brands:[{name:"Ctrl Luli XL", price:299.06}] },
  { molecule:"Clotrimazole 1% Dusting Powder", category:"Dermatology", brands:[{name:"Ctrl - Itch", price:111.56}] },
  { molecule:"Itraconazole 50mg (Supra Bioavailable)", category:"Dermatology", brands:[{name:"Itroch 50 SB", price:120.94}] },
  { molecule:"Itraconazole 130mg (Supra Bioavailable)", category:"Dermatology", brands:[{name:"Itroch - SB 130", price:234.38}] },
  { molecule:"Doxycycline 100mg + Lactic Acid Bacillus 5B Spores", category:"Dermatology", brands:[{name:"Vakdox - LB", price:118.13}] },

  // --- Vitamins / Minerals ---
  { molecule:"Cholecalciferol Softgel 60000 IU", category:"Vitamins & Minerals", brands:[{name:"Mitocal D3 60K", price:206.25},{name:"Dee3 60K", price:176.25},{name:"TrumornD3 - 60K", price:225.00},{name:"Vakvita D3 - 60K", price:225.00},{name:"Sunnyray - 60K", price:112.50},{name:"HeliRay - 60K", price:112.50}] },
  { molecule:"Vitamin E 200mg + Levocarnitine 150mg", category:"Vitamins & Minerals", brands:[{name:"Vakvita - LC", price:58.13}] },
  { molecule:"Ferrous Ascorbate + Folic Acid + Zinc + Cyanocobalamin", category:"Vitamins & Minerals", brands:[{name:"Lipomylin - XT", price:112.50}] },
  { molecule:"Ferrous Bis-glycinate + Zinc Bis-glycinate + Methylcobalamin + Folic Acid", category:"Vitamins & Minerals", brands:[{name:"Vakvita - XT", price:140.63}] },
  { molecule:"Methylcobalamin 1500mcg + Alpha lipoic acid 100mg + Pyridoxine 3mg + Folic acid 1.5mg + Vit D3 1000IU", category:"Vitamins & Minerals", brands:[{name:"Lipomylin D", price:147.19},{name:"Ctrl - Alpha D", price:210.94},{name:"Lifemylin - D", price:252.19}] },
  { molecule:"Multivitamin & Multimineral with Grape Seed Extract and Astaxanthin", category:"Vitamins & Minerals", brands:[{name:"Mitovit G+", price:124.57},{name:"Vakvita G+", price:115.67}] },
  { molecule:"B-complex + Minerals (CZS)", category:"Vitamins & Minerals", brands:[{name:"VakVita CZS", price:101.25},{name:"Trusach - Plus", price:89.06},{name:"Vitanay - CZS", price:112.50}] },

  // --- Hepatology ---
  { molecule:"Ursodeoxycholic Acid 300mg", category:"Hepatology", brands:[{name:"Udecho 300", price:400.00}] },

  // --- Allergy / ENT ---
  { molecule:"Levocetirizine 5mg + Montelukast 10mg", category:"Allergy / ENT", brands:[{name:"Mitook LC", price:103.13},{name:"Monte4U-LC", price:101.06},{name:"Mitoair-L", price:92.81}] }
];
