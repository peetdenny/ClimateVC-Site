// Climate VC Site Content
// This file contains all the content for the one-page site

export interface IntroContent {
  headline: string;
  subhead: string;
  body: string;
}

export interface PortfolioItem {
  name: string;
  category: string;
  description: string;
  url: string;
  logoPath: string;
  notes?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedinUrl: string;
  imagePath: string;
}

export interface AdvisoryMember {
  name: string;
  bio: string;
  imagePath: string;
}

export interface PressItem {
  outlet: string;
  url: string;
  logoPath: string;
}

export interface FooterContent {
  disclaimers: string;
  companyDetails: string;
  diversityPolicyUrl: string;
}

export const intro: IntroContent = {
  headline: "INVESTING FOR A GIGATONNE-SCALE IMPACT",
  subhead: "Who are we",
  body: "Climate VC is an S/EIS fund investing into pre-seed and seed climate startups. Our EIS fund is now fully deployed. The climate crisis is the greatest threat we have ever faced but also the greatest opportunity to shape our civilisation. We fund elite founding teams that are building solutions to decarbonise the economy & our lives. We need to look at how to decarbonise every aspect of our day-to-day life and the economy... We want to help ignite that early spark."
};

export const portfolio: PortfolioItem[] = [
  {
    name: "CUR8",
    category: "Climate Data & Analytics",
    description: "Building the infrastructure for transparent climate impact measurement and verification.",
    url: "https://cur8.earth",
    logoPath: "logos/cur8.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "ClimateAligned",
    category: "Financial Technology",
    description: "Aligning financial services with climate positive outcomes and transparency.",
    url: "https://climatealigned.co",
    logoPath: "logos/climatealigned.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "UNDO",
    category: "Carbon Removal",
    description: "Enhanced rock weathering for permanent carbon dioxide removal at scale.",
    url: "https://un-do.com",
    logoPath: "logos/undo.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Kita",
    category: "Climate Solutions",
    description: "Accelerating climate action through innovative technology and engagement.",
    url: "https://kita.earth",
    logoPath: "logos/kita.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Global OTEC",
    category: "Renewable Energy",
    description: "Ocean Thermal Energy Conversion for clean, baseload renewable power.",
    url: "https://globalotec.co",
    logoPath: "logos/globalotec.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Anaphite",
    category: "Battery Technology",
    description: "Next-generation battery materials for energy storage solutions.",
    url: "https://anaphite.com",
    logoPath: "logos/anaphite.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "DeepMeta",
    category: "Industrial Decarbonisation",
    description: "AI-powered solutions for reducing emissions in heavy industry.",
    url: "https://deepmeta.io",
    logoPath: "logos/deepmeta.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Lenz Labs",
    category: "Climate Technology",
    description: "Developing innovative solutions for climate monitoring and optimization.",
    url: "https://lenzlabs.com",
    logoPath: "logos/lenzlabs.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Treeconomy",
    category: "Nature-Based Solutions",
    description: "Financing and technology platform for forest conservation and restoration.",
    url: "https://treeconomy.co",
    logoPath: "logos/treeconomy.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Tierra Foods",
    category: "Sustainable Food",
    description: "Plant-based food innovation reducing agricultural emissions.",
    url: "https://tierra-foods.com",
    logoPath: "logos/tierra-foods.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Offgrid Finance",
    category: "Climate Finance",
    description: "Unlocking capital for distributed renewable energy projects.",
    url: "https://offgrid.finance",
    logoPath: "logos/offgrid.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Preoptima",
    category: "Energy Efficiency",
    description: "AI-driven building energy optimization and management.",
    url: "https://preoptima.com",
    logoPath: "logos/preoptima.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "PES Technologies",
    category: "Clean Technology",
    description: "Advanced materials and processes for sustainable manufacturing.",
    url: "https://pestechnologies.com",
    logoPath: "logos/pes.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Beta Bugs",
    category: "Alternative Protein",
    description: "Insect-based protein for sustainable food systems.",
    url: "https://betabugs.uk",
    logoPath: "logos/betabugs.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Sterling BioMachines",
    category: "Industrial Biotechnology",
    description: "Bio-based solutions for industrial decarbonisation.",
    url: "https://sterlingbiomachines.com",
    logoPath: "logos/sterling.png",
    notes: "TODO: Replace with actual company logo"
  },
  {
    name: "Verna Land Management",
    category: "Land Management",
    description: "Regenerative agriculture and carbon sequestration services.",
    url: "",
    logoPath: "logos/verna.png",
    notes: "TODO: Add URL when available. Replace with actual company logo"
  }
];

export const team: TeamMember[] = [
  {
    name: "Peet Denny",
    role: "Founding Partner",
    bio: "Operator / Investor CTO of leading Fintech. AI specialist and space enthusiast.",
    linkedinUrl: "https://linkedin.com/in/peetdenny",
    imagePath: "people/peet-denny.png"
  },
  {
    name: "James Knight",
    role: "Investor",
    bio: "Specialist in Natural Capital, Carbon Removals & Climate Finance.",
    linkedinUrl: "https://linkedin.com/in/jamesknightclimate",
    imagePath: "people/james-knight.png"
  },
  {
    name: "Doug Scott",
    role: "Co-founder, Advisor",
    bio: "Serial founder and angel investor, 400+ investments.",
    linkedinUrl: "https://linkedin.com/in/dougscott",
    imagePath: "people/doug-scott.png"
  }
];

export const advisory: AdvisoryMember[] = [
  {
    name: "Marta Krupinska",
    bio: "Co-founder of Azimo and Head of UK Google for Startups.",
    imagePath: "people/marta-krupinska.png"
  },
  {
    name: "Ed Gillespie",
    bio: "Central to The Eden Project, Sahara Forest Project and Architects Declare a Climate & Biodiversity Emergency.",
    imagePath: "people/ed-gillespie.png"
  },
  {
    name: "Mark Stevenson",
    bio: "Futurist, author, and innovation advisor.",
    imagePath: "people/mark-stevenson.jpg"
  },
  {
    name: "Jim Mann",
    bio: "Experienced technology entrepreneur and investor.",
    imagePath: "people/jim-mann.png"
  },
  {
    name: "Michael Pawlyn",
    bio: "Founder of Exploration Architecture and a pioneer in biomimetic design.",
    imagePath: "people/michael-pawlyn.png"
  }
];

export const press: PressItem[] = [
  {
    outlet: "EU-Startups",
    url: "https://eu-startups.com",
    logoPath: "logos/press/logo2.png"
  },
  {
    outlet: "London Daily News",
    url: "https://londondaily.news",
    logoPath: "logos/press/logo3.png"
  },
  {
    outlet: "Pitchbook",
    url: "https://pitchbook.com",
    logoPath: "logos/press/logo4.png"
  },
  {
    outlet: "Startups Magazine",
    url: "https://startupsmagazine.co.uk",
    logoPath: "logos/press/logo5.png"
  },
  {
    outlet: "Tech EU",
    url: "https://tech.eu",
    logoPath: "logos/press/logo6.png"
  },
  {
    outlet: "UKTN",
    url: "https://uktn.co.uk",
    logoPath: "logos/press/logo7.png"
  },
  {
    outlet: "Angel News",
    url: "https://angelnews.co.uk",
    logoPath: "logos/press/logo8.png"
  }
];

export const footer: FooterContent = {
  disclaimers: "Investment in early-stage companies involves risks such as illiquidity, lack of dividends, loss of investment and dilution. Investment in SEIS/EIS eligible companies should be considered as part of a diversified portfolio. The availability of tax relief depends on individual circumstances and may change in the future. The availability of tax relief depends on the company invested in maintaining its SEIS/EIS qualifying status. There is no assurance that the investment objectives of any investment opportunity will be achieved or that the strategies and methods described herein will be successful. The investment products cited herein may place capital at risk and therefore investors may not get back the full amount invested. Past performance is not necessarily a guide to future performance and the value of an investment may go down as well as up. Investors may not get back the full amount invested. Companies' pitches for investment are not offers to the public and investments can only be made by members of PCV. PCV takes no responsibility for this information or for any recommendations or opinions made by the companies. Neither PCV nor any of its employees provide any financial or tax advice in relation to the investments and investors are recommended to seek independent financial and tax advice before committing. This website is not directed at or intended for publication or distribution to any person (natural or legal) in any jurisdiction where doing so would result in contravention of any applicable laws or regulations. No warranties or representations of any kind are expressed or implied herein. This material is confidential and is the property of PCV.",
  companyDetails: "Potential Climate Ventures F1 Limited is a company registered in England and Wales with number 13242632. Registered address: Office 3, St Ann's House, 111 Guildford Road, Lightwater, Surrey, GU18 5RA.",
  diversityPolicyUrl: "/diversity-policy"
};

