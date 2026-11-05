import { FoodCategory, ConcernCard, QuizQuestion, MythFactItem, WarningSign } from '../types';

export const CONCERN_CARDS: ConcernCard[] = [
  {
    id: 'nutritional-quality',
    title: 'Nutritional Quality',
    subtitle: 'Thermal degradation of micronutrients',
    tag: 'Nutrient Loss',
    icon: 'Apple',
    description: 'Excessive heat and prolonged boiling can break down heat-sensitive vitamins and denature beneficial compounds.',
    extendedDetails: {
      overview: 'Water-soluble vitamins like Vitamin C, thiamine (B1), and folate are particularly susceptible to prolonged thermal breakdown and leaching.',
      chemicalOrBiologicalProcess: 'High temperatures accelerate oxidative degradation of ascorbic acid (Vitamin C). Prolonged heating also denatures proteins beyond culinary tenderization, making them less digestible and binding minerals.',
      practicalImpact: 'Boiling vegetables for 20+ minutes can reduce Vitamin C content by over 50%. In contrast, gentle steaming preserves up to 85–90% of micronutrients.',
      actionableAdvice: 'Use quick cooking methods like gentle steaming, brief blanching, or low-heat simmering with minimal cooking water.'
    }
  },
  {
    id: 'burnt-food',
    title: 'Burnt & Charred Food',
    subtitle: 'Formation of pyrolytic by-products',
    tag: 'Chemical By-products',
    icon: 'Flame',
    description: 'Burning or charring certain foods at extreme temperatures can generate unwanted chemical compounds like acrylamide or PAHs.',
    extendedDetails: {
      overview: 'When food turns black, it has passed the delicious golden-brown Maillard stage into destructive pyrolysis (carbonization).',
      chemicalOrBiologicalProcess: 'In starchy foods (potatoes, bread), temperatures above 120°C (248°F) can form acrylamide from natural sugars and asparagine. In high-protein meats, open-flame charring creates heterocyclic amines (HCAs) and polycyclic aromatic hydrocarbons (PAHs).',
      practicalImpact: 'While occasional exposure is handled by the body’s detoxification pathways, habitual consumption of blackened, charred foods introduces avoidable dietary stress.',
      actionableAdvice: 'Aim for a golden-yellow or light-golden-brown hue. Discard heavily charred crusts and avoid burning toast.'
    }
  },
  {
    id: 'taste-and-texture',
    title: 'Taste & Texture Decay',
    subtitle: 'Moisture loss and bitter notes',
    tag: 'Culinary Quality',
    icon: 'Sparkles',
    description: 'Overheated food dries out rapidly, becomes tough, rubbery or stringy, and develops unpleasant bitter or acrid flavors.',
    extendedDetails: {
      overview: 'Cooking is the transformation of food through gentle moisture retention. Overheating forces out bound cell water.',
      chemicalOrBiologicalProcess: 'In meats, muscle fibers tighten violently at temperatures above 70°C (158°F), wringing out cell juices like a dry sponge. In dairy, heat scorches lactose and denatures whey into unpleasant sulfurous notes.',
      practicalImpact: 'Food becomes tough, dry, grainy, and difficult to chew, leading to avoidable food waste as meals are abandoned.',
      actionableAdvice: 'Cook protein gently to its safe target temperature without holding it on high heat. Cover pans to trap moisture.'
    }
  },
  {
    id: 'uneven-reheating',
    title: 'Uneven Reheating Risks',
    subtitle: 'Cold spots and bacterial survival',
    tag: 'Microbial Safety',
    icon: 'ShieldAlert',
    description: 'Heating food unevenly, especially in a microwave, can leave hidden cold pockets where bacteria may survive.',
    extendedDetails: {
      overview: 'A dish that feels boiling on the rim may still be cold or lukewarm in the center.',
      chemicalOrBiologicalProcess: 'Microwaves penetrate food unevenly depending on moisture, density, and salt distribution. The temperature danger zone (5°C to 60°C / 40°F to 140°F) allows spores and surviving microbes to multiply if not brought to 74°C (165°F) throughout.',
      practicalImpact: 'Surviving bacteria like Salmonella, Listeria, or Bacillus cereus in cooked rice can cause severe foodborne illness despite steam rising from the surface.',
      actionableAdvice: 'Always stir halfway through heating, rotate the dish, cover to trap steam, and allow 1–2 minutes standing time for heat to equalize.'
    }
  }
];

export const WARNING_SIGNS: WarningSign[] = [
  {
    id: 'smoke',
    title: 'Excessive Acrid Smoke',
    indicator: 'Blueish or grey haze rising from cookware',
    dangerLevel: 'critical',
    sensoryCue: 'Smoke',
    description: 'Cooking oil or pan residues have exceeded their thermal breakdown point, releasing irritating acrolein vapor and free radicals.',
    correction: 'Immediately remove the pan from heat, turn on ventilation, and do not breathe the smoke. Allow oil to cool safely.'
  },
  {
    id: 'charred-surface',
    title: 'Blackened or Charred Surfaces',
    indicator: 'Dark brown to coal-black crust on starch or meat',
    dangerLevel: 'warning',
    sensoryCue: 'Sight',
    description: 'Food has crossed from flavorful caramelization into pyrolysis (destructive burning), producing acrylamide, PAHs, and bitter carbon.',
    correction: 'Trim or discard charred surfaces. Lower your stovetop or toaster settings to aim for golden-brown.'
  },
  {
    id: 'dry-tough',
    title: 'Unusually Dry, Hard, or Leathery Texture',
    indicator: 'Rigid curling edges, shriveled appearance, chalky mouthfeel',
    dangerLevel: 'caution',
    sensoryCue: 'Texture',
    description: 'Internal moisture has completely boiled off, tightening protein fibrils and rendering starches leathery.',
    correction: 'Cover cookware while reheating, add a tablespoon of water or broth to re-introduce steam, and reduce heating duration.'
  },
  {
    id: 'burnt-smell',
    title: 'Sharp, Pungent Burnt Odor',
    indicator: 'Harsh, stinging smell replacing natural savory aroma',
    dangerLevel: 'warning',
    sensoryCue: 'Smell',
    description: 'Sugars, amino acids, and fats have decomposed into acrid volatile aldehydes and sulfurous compounds.',
    correction: 'Turn off the heat instantly. Inspect food before consuming; scorched sauces and burnt gravies often permeate the entire dish.'
  },
  {
    id: 'smoking-oil',
    title: 'Oil Smoking or Foaming in the Pan',
    indicator: 'Oil turns dark, produces thin white smoke, or foams',
    dangerLevel: 'critical',
    sensoryCue: 'Sight',
    description: 'The oil has passed its smoke point. Triglycerides have broken down into glycerol and free fatty acids, developing unhealthy trans fats and polar compounds.',
    correction: 'Discard overheated smoking oil once cooled. Never reuse repeatedly heated frying oil that has darkened or thickened.'
  }
];

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    id: 'rice-grains',
    name: 'Rice & Cooked Grains',
    shortName: 'Rice & Grains',
    icon: 'Wheat',
    summary: 'High risk for Bacillus cereus spores if left at room temperature or reheated lukewarmly.',
    whatToWatchFor: [
      'Dry, hardened grains or crunchy rims from microwave drying.',
      'Lukewarm core surrounded by steaming edges.',
      'Sour, stale, or fermented smell after storage.'
    ],
    whatToAvoid: [
      'Leaving cooked rice cooling at room temperature for more than 1–2 hours.',
      'Reheating cooked rice multiple times over successive days.',
      'Heating without moisture, which leaves grains hard and unevenly warm.'
    ],
    whatToDoInstead: [
      'Cool rice quickly and refrigerate within 1 hour of cooking.',
      'Add 1–2 tablespoons of water or broth per bowl before reheating.',
      'Cover with a microwave-safe lid or plate to trap steam, heating until steaming hot (74°C / 165°F) throughout.'
    ],
    idealTemp: '74°C (165°F) internal',
    scienceNote: 'Bacillus cereus spores can survive cooking and produce heat-stable toxins if rice is kept between 5°C and 60°C. Reheat once, thoroughly.'
  },
  {
    id: 'bread-potatoes',
    name: 'Bread, Toast & Potatoes',
    shortName: 'Bread & Potatoes',
    icon: 'Sandwich',
    summary: 'Starchy carbohydrates that develop acrylamide when subjected to high dry heat above 120°C.',
    whatToWatchFor: [
      'Dark brown, blackened, or carbonized patches on bread crusts.',
      'Burnt dark spots on roasted or fried potato wedges.',
      'Bitter, astringent aftertaste indicating pyrolytic sugars.'
    ],
    whatToAvoid: [
      'Toasting bread to a dark brown or black shade.',
      'Storing raw potatoes in the refrigerator (cold temperature increases free sugars, accelerating acrylamide upon cooking).',
      'Re-frying already darkened potato chips or wedges.'
    ],
    whatToDoInstead: [
      'Aim for a golden-yellow to light-golden-brown color when toasting or baking ("Go for Gold").',
      'Soak raw potato slices in water for 15–30 minutes before roasting to remove surface sugars.',
      'Store raw potatoes in a cool, dark pantry (not the fridge) around 8–10°C.'
    ],
    idealTemp: 'Golden hue (Maillard sweet spot)',
    scienceNote: 'Acrylamide forms when the free amino acid asparagine reacts with reducing sugars above 120°C (248°F). Keeping foods golden minimizes acrylamide.'
  },
  {
    id: 'vegetables',
    name: 'Vegetables & Leafy Greens',
    shortName: 'Vegetables',
    icon: 'Carrot',
    summary: 'Delicate plant cells contain heat-labile vitamins (C, B-complex) and vibrant chlorophyll.',
    whatToWatchFor: [
      'Dull olive-brown color replacing bright natural greens.',
      'Mushy, waterlogged, or disintegrating texture.',
      'Loss of crispness and fresh vegetable aroma.'
    ],
    whatToAvoid: [
      'Boiling vegetables in large volumes of water for extended periods.',
      'Re-heating cooked vegetables multiple times in heavy sauces.',
      'High-heat microwave blasting without a splash of water.'
    ],
    whatToDoInstead: [
      'Steam vegetables for 3–6 minutes until crisp-tender (al dente).',
      'Use quick stir-frying or blanching with minimal liquid.',
      'Consume fresh or lightly cooked vegetables promptly to retain Vitamin C and folate.'
    ],
    idealTemp: 'Crisp-tender (85°C–90°C)',
    scienceNote: 'Chlorophyll degrades to pheophytin at prolonged high heat, turning vibrant greens into dull drab khaki while vitamins leach into discard water.'
  },
  {
    id: 'milk-liquids',
    name: 'Milk & Dairy Liquids',
    shortName: 'Milk & Liquids',
    icon: 'Milk',
    summary: 'Protein and lactose easily scorch on pot bottoms and boil over aggressively.',
    whatToWatchFor: [
      'Brown crust or burnt sediment sticking to the base of the saucepan.',
      'Thick rubbery skin forming on top of the liquid.',
      'Cooked, eggy, or sulfurous burnt milk smell.'
    ],
    whatToAvoid: [
      'Boiling milk on high flame without stirring.',
      'Heating dairy in thin-bottomed pans that create intense hot spots.',
      'Violent boiling that breaks milk emulsion and curds proteins.'
    ],
    whatToDoInstead: [
      'Warm milk over gentle medium-low heat, stirring frequently with a silicone spatula.',
      'Rinse your pan with cold water before adding milk to create a microscopic protective water barrier.',
      'Remove from heat as soon as tiny bubbles form around the perimeter (around 80°C / 175°F).'
    ],
    idealTemp: '75°C–80°C (Scalding point)',
    scienceNote: 'Whey proteins (beta-lactoglobulin) denature above 70°C and settle to the bottom, where direct heat caramelizes lactose into a stubborn scorched layer.'
  },
  {
    id: 'oils-fats',
    name: 'Cooking Oils & Fried Foods',
    shortName: 'Oils & Frying',
    icon: 'Droplets',
    summary: 'Oils break down thermally into toxic aldehydes, trans fatty acids, and acrolein when heated past smoke points.',
    whatToWatchFor: [
      'Visible smoke rising from the oil before food is added.',
      'Oil darkening to a dark brown, viscous syrup or foaming profusely.',
      'Pungent, throat-stinging odor in the kitchen.'
    ],
    whatToAvoid: [
      'Heating unrefined extra virgin olive oil or flaxseed oil to high-heat stir-fry temperatures.',
      'Reusing cooking oil more than 1–2 times, or mixing fresh oil with rancid used oil.',
      'Leaving hot oil unattended on a high stovetop burner.'
    ],
    whatToDoInstead: [
      'Choose high smoke point oils (peanut, refined sunflower, rice bran, avocado) for high-heat cooking.',
      'Maintain frying temperature between 175°C and 190°C (350°F–375°F).',
      'Filter used frying oil through a fine mesh once cooled and store in an airtight container away from light; discard if dark.'
    ],
    idealTemp: '175°C–190°C (Below smoke point)',
    scienceNote: 'FSSAI mandates that total polar compounds (TPC) in repeatedly used cooking oil must not exceed 25%. Repeated reheating generates harmful free radicals.'
  },
  {
    id: 'leftovers',
    name: 'Cooked Leftovers & Prepared Meals',
    shortName: 'Leftovers',
    icon: 'Package',
    summary: 'Must be heated evenly to eliminate bacterial growth while avoiding multiple thermal abuse cycles.',
    whatToWatchFor: [
      'Center of food remaining chilly while edges bubble.',
      'Sauces splitting into separated oil and water puddles from excessive heat.',
      'Dishes heated multiple times becoming mushy and dry.'
    ],
    whatToAvoid: [
      'Heating the entire casserole or pot when you only plan to eat one serving.',
      'Reheating the same meal multiple times over several days.',
      'Leaving leftovers sitting on the counter to defrost slowly.'
    ],
    whatToDoInstead: [
      'Portion out only what you will eat right now.',
      'Reheat thoroughly until steaming hot throughout (at least 74°C / 165°F).',
      'Stir soups, stews, and gravies halfway through heating to equalize internal temperature.'
    ],
    idealTemp: '74°C (165°F) throughout',
    scienceNote: 'Repeated heating and cooling cycles expose food to the microbial danger zone (5°C–60°C) multiple times, exponentially multiplying bacterial risk.'
  }
];

export const SAFE_PRACTICES = [
  {
    number: '01',
    title: 'Avoid cooking longer than necessary',
    description: 'Remove food from heat as soon as it reaches a safe internal temperature and tender texture. Residual pan heat will finish delicate cooking.'
  },
  {
    number: '02',
    title: 'Match heat level to the food',
    description: 'Delicate greens, eggs, and dairy need gentle heat; sturdier root vegetables and legumes benefit from controlled steady simmering.'
  },
  {
    number: '03',
    title: 'Never allow cooking oil to smoke',
    description: 'If cooking oil smokes, it has degraded chemically. Turn down the burner immediately and use oils with appropriate smoke points.'
  },
  {
    number: '04',
    title: 'Stir and rotate during microwave reheating',
    description: 'Microwaves naturally create standing wave hot and cold spots. Pause halfway, stir thoroughly from the outside in, and rotate the dish.'
  },
  {
    number: '05',
    title: 'Allow 1–2 minutes standing time',
    description: 'Thermal conduction continues after microwave heating ends. Standing time lets heat dissipate into stubborn cold pockets safely.'
  },
  {
    number: '06',
    title: 'Reheat leftovers thoroughly to 74°C / 165°F',
    description: 'Ensure food is piping hot and steaming throughout, not just on the outer surface, to neutralize any surviving foodborne pathogens.'
  },
  {
    number: '07',
    title: 'Portion first; reheat only once',
    description: 'Scoop out single portions rather than reheating the whole batch. Repeated heating and chilling degrades food quality and invites bacterial risk.'
  },
  {
    number: '08',
    title: 'Cool quickly and refrigerate promptly',
    description: 'Do not let cooked food linger on the kitchen counter. Divide into shallow containers and refrigerate within 2 hours (1 hour in hot weather).'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What should you do if cooking oil in your pan starts producing visible smoke?',
    options: [
      'Increase the heat to burn off the vapor',
      'Ignore it and drop the cold food in immediately',
      'Reduce or turn off the heat and let it cool',
      'Pour in cold water to cool the oil rapidly'
    ],
    correctIndex: 2,
    explanation: 'Correct! Oil producing smoke has surpassed its thermal breakdown point, degrading into acrolein and free radicals. Turn off heat safely. Never pour water into hot oil as it causes violent steam explosions!',
    tip: 'Always choose oils with high smoke points (e.g. sunflower, peanut, avocado) for high-heat cooking.'
  },
  {
    id: 2,
    question: 'When toasting bread or roasting potatoes, which surface color represents the safest balance of flavor and low acrylamide?',
    options: [
      'Completely white and undercooked',
      'A golden-yellow to light golden-brown shade',
      'Dark dark brown with blackened edges',
      'Heavily charred black for maximum crunch'
    ],
    correctIndex: 1,
    explanation: 'Correct! Food safety authorities like the UK FSA and EFSA advise to "Go for Gold". Light golden browning provides delicious Maillard flavor without high concentrations of acrylamide.',
    tip: 'Avoid eating severely blackened or burnt toast crusts.'
  },
  {
    id: 3,
    question: 'Why is it important to stir food halfway through when reheating in a microwave?',
    options: [
      'It makes the microwave run quieter',
      'It prevents the plate from spinning too fast',
      'It redistributes heat to eliminate hidden cold spots where bacteria can survive',
      'It stops steam from condensing on the door'
    ],
    correctIndex: 2,
    explanation: 'Correct! Microwaves penetrate unevenly, creating hot edges and cold interiors. Stirring redistributes heat throughout the food so pathogens are destroyed evenly.',
    tip: 'Covering the bowl with a microwave-safe cover also traps steam to heat more uniformly.'
  },
  {
    id: 4,
    question: 'How many times should leftover food ideally be reheated?',
    options: [
      'As many times as you like, as long as it tastes okay',
      'Only once, after portioning what you need',
      'At least three times to make sure it is sterilized',
      'Never reheat food; always eat leftovers cold'
    ],
    correctIndex: 1,
    explanation: 'Correct! Reheating food only once protects its texture and limits the number of times food passes through the danger zone (5°C to 60°C). Reheat only the portion you will consume.',
    tip: 'Store large batches in individual meal-sized containers.'
  },
  {
    id: 5,
    question: 'Does boiling vegetables for a long time make them healthier because they are softer to digest?',
    options: [
      'Yes, long boiling multiplies vitamin concentrations',
      'No, prolonged high heat and water leaching destroys delicate vitamins like Vitamin C and B-complex',
      'It makes no difference to nutrient content',
      'Boiling turns minerals into steam'
    ],
    correctIndex: 1,
    explanation: 'Correct! Heat-sensitive, water-soluble vitamins (such as Vitamin C and folate) break down under extended heat and leach out into the cooking water. Gentle steaming or quick sautéing preserves far more nutrients.',
    tip: 'Cook vegetables until they are crisp-tender rather than soft and pale.'
  }
];

export const MYTH_FACTS: MythFactItem[] = [
  {
    id: 'myth-1',
    myth: 'All reheated food is automatically unhealthy and devoid of nutrients.',
    fact: 'Properly stored and thoroughly reheated food is completely safe and retains most of its core nutrition.',
    explanation: 'When food is chilled promptly below 4°C and reheated evenly to 74°C (165°F), protein, fiber, and minerals remain intact. Only slight vitamin degradation occurs, far outweighed by reducing food waste.',
    sourceAuthority: 'USDA Food Safety and Inspection Service'
  },
  {
    id: 'myth-2',
    myth: 'The hotter you blast food on the stove, the safer and cleaner it becomes.',
    fact: 'Food safety depends on reaching an appropriate temperature throughout, not searing the outside while burning it.',
    explanation: 'Extreme surface heat burns the exterior of food while the center may remain lukewarm or raw. Additionally, burning produces unwanted compounds like acrylamide and polycyclic aromatic hydrocarbons.',
    sourceAuthority: 'World Health Organization (WHO)'
  },
  {
    id: 'myth-3',
    myth: 'Microwave heating always makes food toxic and alters food at a molecular level.',
    fact: 'Microwaves simply excite water molecules through non-ionizing electromagnetic radiation to generate gentle heat.',
    explanation: 'Microwaves do not emit ionizing radiation or produce toxic compounds. In fact, because microwave cooking is fast and uses little water, it frequently preserves more Vitamin C than long stove boiling.',
    sourceAuthority: 'World Health Organization (WHO) & Harvard Health'
  },
  {
    id: 'myth-4',
    myth: 'Charred meat and blackened toast are just extra crispy, flavorful, and totally harmless.',
    fact: 'Heavy black char indicates destructive carbonization (pyrolysis) containing known chemical compounds.',
    explanation: 'Cooking starches until black generates high acrylamide levels, while open-flame charring of animal fat generates HCAs and PAHs. Trimming visible black char is a recognized healthy culinary habit.',
    sourceAuthority: 'European Food Safety Authority (EFSA)'
  },
  {
    id: 'myth-5',
    myth: 'If leftover food smells completely fine and looks normal, it does not need to be reheated hot.',
    fact: 'Many dangerous foodborne bacteria (like Salmonella, E. coli, and Listeria) do not affect smell, taste, or sight.',
    explanation: 'Pathogenic bacteria differ from spoilage organisms; they can multiply silently without creating a foul odor or mold. Always reheat stored leftovers to 74°C (165°F) regardless of aroma.',
    sourceAuthority: 'FSSAI (Food Safety and Standards Authority of India)'
  }
];

export const CHECKLIST_ITEMS = [
  {
    id: 'c1',
    text: 'Food is cooked to an appropriate internal heat, not just seared on the rim',
    category: 'Cook Process'
  },
  {
    id: 'c2',
    text: 'No excessive black burning or charring on starches, bread, or meats',
    category: 'Surface Quality'
  },
  {
    id: 'c3',
    text: 'Reheated dishes were stirred/rotated to eliminate hidden cold spots',
    category: 'Reheating'
  },
  {
    id: 'c4',
    text: 'Leftovers were refrigerated promptly (within 2 hours of cooking)',
    category: 'Storage'
  },
  {
    id: 'c5',
    text: 'Cooking oil was heated below its smoke point without blueish haze',
    category: 'Oil Health'
  },
  {
    id: 'c6',
    text: 'Portioned only what is being eaten right now (no repeated reheat cycles)',
    category: 'Portioning'
  }
];

export const REFERENCES_DATA = [
  {
    organization: 'World Health Organization (WHO)',
    shortCode: 'WHO',
    title: 'Five Keys to Safer Food & Heat Treatment Guidelines',
    description: 'International benchmark guidelines for cooking food thoroughly, keeping food at safe temperatures, and avoiding the microbial danger zone.',
    verifiedLink: 'https://www.who.int/news-room/fact-sheets/detail/food-safety',
    topics: ['Internal Temperatures', 'Danger Zone (5°C–60°C)', 'Safe Reheating']
  },
  {
    organization: 'Food Safety & Standards Authority of India (FSSAI)',
    shortCode: 'FSSAI',
    title: 'Guidance on Re-heating Foods and Safe Frying Oil Standards',
    description: 'National food safety protocols for domestic kitchens and food operators, limiting repeated oil reuse (Total Polar Compounds ≤ 25%) and safe leftover handling.',
    verifiedLink: 'https://www.fssai.gov.in',
    topics: ['Repurposed Frying Oil', 'Rice & Leftover Safety', 'Kitchen Hygiene']
  },
  {
    organization: 'United States Department of Agriculture (USDA)',
    shortCode: 'USDA FSIS',
    title: 'Safe Minimum Internal Temperature & Microwave Safety Charts',
    description: 'Empirical thermal guidelines for domestic cooking, microwave standing times, and 74°C (165°F) core reheat standards.',
    verifiedLink: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation',
    topics: ['165°F (74°C) Reheat Rule', 'Microwave Standing Times', 'Cross-Contamination']
  },
  {
    organization: 'European Food Safety Authority (EFSA)',
    shortCode: 'EFSA',
    title: 'Acrylamide in Food & "Go for Gold" Dietary Recommendations',
    description: 'Scientific opinions on process contaminants formed during high-temperature baking, roasting, and frying of starchy food products.',
    verifiedLink: 'https://www.efsa.europa.eu/en/topics/topic/acrylamide',
    topics: ['Acrylamide Reduction', 'Golden Toasting Standard', 'Process Contaminants']
  }
];
