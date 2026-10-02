// Campus Data for Nagpur Engineering Colleges
const CAMPUS_DATA = {
  vnit: {
    id: "vnit",
    name: "VNIT Nagpur",
    fullName: "Visvesvaraya National Institute of Technology",
    tagline: "Institute of National Importance • Central India's Premier Tech Campus",
    established: "1960",
    campusArea: "215 Acres",
    location: "South Ambazari Road, Abhyankar Nagar, Nagpur",
    nearestMetro: "Subhash Nagar / Rahate Colony (Orange Line)",
    accentColor: "#7c93c1", // Muted Steel Blue
    accentGlow: "rgba(124, 147, 193, 0.15)",
    badge: "NIT / Tier-1",
    stats: {
      highestPackage: "₹64.0 LPA",
      avgPackage: "₹15.2 LPA",
      placementRate: "93%",
      attendanceVibe: "Relatively Flexible (75% relaxed, Grade Curve)"
    },
    heroQuote: "Ambazari lake breezes, legendary SAC nights, and the pride of VNIT. Welcome to Central India's technical powerhouse.",
    overview: "Spread across 215 acres of lush greenery in the heart of Nagpur, VNIT combines academic excellence, active technical clubs, and a vibrant cultural heritage highlighted by Aarohi, Central India's largest cultural fest.",
    
    cafes: [
      {
        name: "Lush House",
        distance: "1.2 km from VNIT Back Gate",
        vibe: "Aesthetic • Artisan Coffee • Study Sessions",
        specialty: "Iced Spanish Latte & Nutella Croffle",
        costForTwo: "₹450",
        rating: 4.7,
        timing: "10:00 AM - 11:30 PM",
        tags: ["Artisan", "Wifi", "AC", "Date Spot"],
        tip: "Best place for quiet final-year project discussions or laptop work with steady Wi-Fi."
      },
      {
        name: "Corridor Seven Coffee Roasters",
        distance: "2.1 km (Dharampeth / Ramdaspeth)",
        vibe: "Specialty Pour-Overs • Creative Haven",
        specialty: "Cold Brew Tonic & Smoked Paneer Bagel",
        costForTwo: "₹500",
        rating: 4.9,
        timing: "8:00 AM - 10:30 PM",
        tags: ["Specialty Coffee", "Laptop Friendly", "Gourmet"],
        tip: "Founded by an internationally certified Q-Grader. The coffee lover senior's pilgrimage spot."
      },
      {
        name: "Pratap Nagar Chaat & Shawarma Point",
        distance: "800m from VNIT Main Gate",
        vibe: "Street Food • Evening Rush • Pocket Friendly",
        specialty: "Chicken/Paneer Shawarma & Dahi Puri",
        costForTwo: "₹180",
        rating: 4.5,
        timing: "4:30 PM - 10:30 PM",
        tags: ["Pocket Friendly", "Street Food", "Quick Bite"],
        tip: "The quintessential 6 PM post-lab hunger cure for hostellers and day-scholars alike."
      },
      {
        name: "Checkers & Three Beans",
        distance: "1.5 km (Bajaj Nagar)",
        vibe: "Cozy • Casual Hangout • Burgers",
        specialty: "Peri Peri Fries & Classic Belgian Waffle",
        costForTwo: "₹350",
        rating: 4.4,
        timing: "11:00 AM - 11:00 PM",
        tags: ["Chill Vibe", "Fast Casual", "Group Seating"],
        tip: "Has long tables ideal for 8-10 people club debriefs and birthday treat outings."
      }
    ],

    facultyGuide: {
      attendancePolicy: "75% official, but professors enforce relative grading. Missing quizzes hurts more than missing lectures.",
      labSurvivalTip: "Submit your lab journals before the Wednesday deadline; late submissions attract a direct letter-grade penalty.",
      insights: [
        {
          department: "Computer Science & Engineering",
          professor: "Senior Systems & Algorithms Faculty",
          nature: "High Standards • Research Heavy",
          approachability: "8.5 / 10",
          tip: "Never bluff in Viva. If you don't know the exact algorithm complexity, admit it and reason from first principles. Loves clean Git commits."
        },
        {
          department: "Electronics & Communication (ECE)",
          professor: "Embedded & VLSI Lab Coordinator",
          nature: "Strict on Lab Discipline • Generous with Reference Letters",
          approachability: "7.8 / 10",
          tip: "Ensure your breadboard connections or Verilog testbenches are modular. Shows genuine willingness to recommend students for IISc/IIT internships."
        },
        {
          department: "Mechanical & Civil Engineering",
          professor: "Thermodynamics / Structural Heads",
          nature: "Old-school Rigor • Values Punctuality",
          approachability: "7.2 / 10",
          tip: "Be inside the lecture hall 2 minutes before the bell. Carry printed design charts and scientific calculators without fail."
        }
      ]
    },

    patentAndProjects: {
      patentProtocol: [
        "1. Identify an inventive step solving an industry or rural problem (e.g., Agri-Tech IoT, clean energy, biomedical devices).",
        "2. Submit the Invention Disclosure Form (IDF) to VNIT IPR Cell (Dean R&C Office).",
        "3. Clear the internal prior-art search review with institute patent attorneys.",
        "4. VNIT funds the official Indian Patent filing fees for student-faculty joint innovations."
      ],
      paperPublicationTips: "Target IEEE Xplore, ACM Digital Library, or Springer conferences. Steer clear of unindexed open-access journals. Seek pre-clearance from project guides before drafting camera-ready papers.",
      mentors: [
        {
          name: "Advait Kulkarni",
          year: "Final Year, B.Tech CSE",
          specialization: "Distributed Systems & Cloud Native",
          achievements: "GSOC '24 Contributor, 2 IEEE Scopus Publications",
          connect: "linkedin.com/in/advait-vnit-example",
          discord: "advait_vnit#4012"
        },
        {
          name: "Rhea Deshmukh",
          year: "Dual Degree ECE '25",
          specialization: "TinyML & Biomedical Sensors",
          achievements: "1 Patent Filed on Non-invasive Glucose Monitor",
          connect: "linkedin.com/in/rhea-deshmukh-vnit",
          discord: "rhea_tech#9921"
        },
        {
          name: "Saurabh Pandey",
          year: "4th Year Mechanical",
          specialization: "Robotics & Autonomous Drones",
          achievements: "Led Team Veloce (Formula Student) & 1 Design Patent",
          connect: "github.com/saurabh-vnit-drone",
          discord: "veloce_saurabh#3120"
        }
      ]
    },

    campusLife: {
      fests: [
        {
          name: "Aarohi",
          category: "Cultural Fest",
          duration: "3 Days (February)",
          highlights: "Central India's biggest fest; celebrity pronites, Alaap music battle, Cynosure fashion show, street dances.",
          insiderTip: "SAC passes run out within 48 hours for non-VNITians. Hostellers get free access with valid institute ID."
        },
        {
          name: "Axis",
          category: "National Technical Fest",
          duration: "3 Days (September/October)",
          highlights: "Robowars, Hackathons, Drone Racing, Guest lectures by Nobel laureates & ISRO scientists.",
          insiderTip: "Participate in the flagship hackathon; company sponsors frequently hand out fast-track interview passes."
        },
        {
          name: "Consortium",
          category: "Entrepreneurship Summit",
          duration: "2 Days (March)",
          highlights: "Startup Expo, Pitching arena, angel investors and venture capitalists judging student prototypes.",
          insiderTip: "Best event to pitch your final-year startup idea to seed-stage investors."
        }
      ],
      hangoutsAndTrips: [
        {
          spot: "Ambazari Lake & Biodiversity Park",
          distance: "Adjacent to campus",
          desc: "Magnificent sunset spot, walking tracks, and boating. Perfect for de-stressing after mid-semester exams."
        },
        {
          spot: "Futala Lake Fountain & Chowpatty",
          distance: "4.5 km",
          desc: "Nagpur's iconic evening destination. Enjoy roadside cutting chai, roasted bhutta, and musical fountain shows."
        },
        {
          spot: "Zilpi Lake & Hingna Woods",
          distance: "22 km",
          desc: "Popular weekend bike-trip destination for hostel gangs. Scenic hills, peaceful backwaters, and stargazing."
        }
      ],
      hostelHacks: [
        "Mega Mess (Hostel 1 to 7) serves traditional Maharashtrian, South Indian, and North Indian menus.",
        "Night Canteen behind SAC remains open until 2:30 AM during exam weeks; bread omelettes and Bournvita are lifesavers.",
        "Buy an induction cooktop and electric kettle in your 2nd year for midnight instant noodles.",
        "Keep institute ID card on you 24/7; security check at South Ambazari gate is strict after 10:30 PM."
      ],
      commuteTips: "Subhash Nagar Metro Station is just 600m from VNIT back gate. Nagpur Metro cards offer a 30% student discount. Rent Yulu/e-cycles inside campus to commute between hostels and academic departments."
    },

    placements: {
      stats: {
        highest: "₹64 LPA",
        median: "₹12.5 LPA",
        topRecruiters: ["Google", "Microsoft", "Texas Instruments", "Qualcomm", "Persistent Systems", "Oracle", "Goldman Sachs", "L&T Heavy"]
      },
      nagpurEcosystem: "VNIT students get direct campus pipelines to high-value R&D centers in Pune, Bengaluru, and Hyderabad, plus local tech hubs like Persistent Systems (Parsodi IT Park, right across the road).",
      prepTips: [
        "Core ECE/Mech: Revise signals, Verilog, thermodynamics, and MATLAB basics before August.",
        "Software: LeetCode Medium (Graphs, DP, Trees) + High-level System Design for tier-1 companies.",
        "Mock interviews: Form a 4-person peer cohort in July to conduct bi-weekly mock rounds."
      ]
    }
  },

  rbu: {
    id: "rbu",
    name: "RBU (Ramdeobaba)",
    fullName: "Ramdeobaba University (Formerly RCOEM)",
    tagline: "Excellence in Engineering & Management • Katol Road Prestige",
    established: "1984",
    campusArea: "20 Acres",
    location: "Katol Road, Gittikhadan, Nagpur",
    nearestMetro: "Kasturchand Park / Chhatrapati Square via Katol Naka Feeder",
    accentColor: "#c4a35a", // Muted Warm Gold
    accentGlow: "rgba(196, 163, 90, 0.15)",
    badge: "State University / Autonomous Legacy",
    stats: {
      highestPackage: "₹50.0 LPA",
      avgPackage: "₹9.8 LPA",
      placementRate: "91%",
      attendanceVibe: "Strict 75% System (ERP Monitored)"
    },
    heroQuote: "From Temple steps to cutting-edge tech labs, RBU blends disciplined excellence with Nagpur's most electric campus culture.",
    overview: "Located on scenic Katol Road, Ramdeobaba University (formerly RCOEM) is renowned for top-tier placement records, intense hackathon culture, vibrant student societies, and Pratishruti, the hallmark cultural fest.",

    cafes: [
      {
        name: "Fuel Station Cafe & Bistro",
        distance: "400m from RBU Gate 2",
        vibe: "Casual • High Energy • Shakes & Fries",
        specialty: "KitKat Thick Shake & Cheese Overload Pizza",
        costForTwo: "₹300",
        rating: 4.6,
        timing: "10:30 AM - 11:00 PM",
        tags: ["Fast Food", "After-Class", "Pocket Friendly"],
        tip: "Packed between 1:00 PM and 2:30 PM during lunch breaks. Go early to grab corner booth seating."
      },
      {
        name: "The Mocha Cafe & Bar / Gittikhadan",
        distance: "1.0 km (Katol Road Bypass)",
        vibe: "Bohemian • Chill Music • Continental",
        specialty: "Penne Alfredo & Hazelnut Frappe",
        costForTwo: "₹600",
        rating: 4.5,
        timing: "11:00 AM - 11:30 PM",
        tags: ["Ambience", "Group Treats", "Outdoor"],
        tip: "Great for birthday treats and post-fest volunteer committee celebrations."
      },
      {
        name: "Katol Naka Saoji & Street Hub",
        distance: "900m near Katol Naka Square",
        vibe: "Spicy • Authentic Nagpur Saoji • Dhaba",
        specialty: "Saoji Paneer / Chicken with Hot Roti",
        costForTwo: "₹250",
        rating: 4.7,
        timing: "12:00 PM - 11:00 PM",
        tags: ["Authentic Nagpur", "Saoji", "Spicy Lovers"],
        tip: "Real authentic Vidarbha spicy punch. Ask for 'medium tarri' unless you have a stomach of steel!"
      },
      {
        name: "Tea Post & Tapri Hub (Opposite Campus)",
        distance: "150m from Main Gate",
        vibe: "Tapri • Fast Gossip • Masala Chai",
        specialty: "Ginger Elaichi Chai & Bun Maska",
        costForTwo: "₹80",
        rating: 4.4,
        timing: "7:30 AM - 10:00 PM",
        tags: ["Budget", "Chai Adda", "Quick Break"],
        tip: "The default spot to wait out proxy roll-calls or celebrate end of internal exams."
      }
    ],

    facultyGuide: {
      attendancePolicy: "75% ERP attendance is strictly enforced. Below 65% lands you in detention or remedial assignments.",
      labSurvivalTip: "Neat documentation and proper file covers are heavily inspected. Always get your experiment checked on the same day.",
      insights: [
        {
          department: "Computer Science & IT",
          professor: "Full Stack & Cloud Computing Leads",
          nature: "Industry Oriented • Encourages Hackathons",
          approachability: "8.8 / 10",
          tip: "Show them your live hosted project on Vercel or GitHub instead of just running it on localhost; you will instantly earn full internal marks."
        },
        {
          department: "Electronics & Telecomm (ETC)",
          professor: "Signals & Microcontrollers Faculty",
          nature: "Meticulous • Precise on Math",
          approachability: "7.5 / 10",
          tip: "Derive formulas step-by-step in exam booklets. Skipping interim steps in DSP or signals leads to point deductions."
        },
        {
          department: "First Year Engineering (FY)",
          professor: "Engineering Mechanics & Graphics Coordinators",
          nature: "Disciplined • High Homework Load",
          approachability: "7.0 / 10",
          tip: "Use mini-drafters and sharp 2H pencils. Neat projections get full credit."
        }
      ]
    },

    patentAndProjects: {
      patentProtocol: [
        "1. Conceptualize a product solving MSME, biomedical, or smart-city challenges.",
        "2. Present your idea to the TBI (Technology Business Incubator) & RBU IPR Cell.",
        "3. Attend the periodic IP workshop conducted by patent attorneys.",
        "4. File provisional patent; RBU provides financial support and mentor guidance."
      ],
      paperPublicationTips: "Collaborate with professors active in Scopus Q2/Q3 indexed journals. Ensure code and datasets are published openly on Zenodo or GitHub to increase citation count.",
      mentors: [
        {
          name: "Tanmay Bhole",
          year: "4th Year Computer Science",
          specialization: "AI Agents & Computer Vision",
          achievements: "Winner of Smart India Hackathon (SIH), 1 Published Patent",
          connect: "linkedin.com/in/tanmay-bhole-rbu",
          discord: "tanmay_rbu#1080"
        },
        {
          name: "Isha Agrawal",
          year: "4th Year Electronics",
          specialization: "IoT & Smart Grid Architectures",
          achievements: "Published in IEEE ICECS & Texas Instruments Design Finalist",
          connect: "linkedin.com/in/isha-agrawal-rbu",
          discord: "isha_embedded#7712"
        },
        {
          name: "Karan Joharapurkar",
          year: "Alumni '24 (SDE @ Persistent)",
          specialization: "Full Stack & Microservices",
          achievements: "Built RBU Campus Notes Portal, 2 Paper Publications",
          connect: "github.com/karan-rbu-alumni",
          discord: "karan_dev#5544"
        }
      ]
    },

    campusLife: {
      fests: [
        {
          name: "Pratishruti",
          category: "Central Cultural Extravaganza",
          duration: "3 Days (February/March)",
          highlights: "One of the most energetic fests in Nagpur; high-octane rock bands, fashion choreography, celebrity musical nights.",
          insiderTip: "Join the core organizing committee early in 3rd year for unmatched leadership exposure and backstage passes."
        },
        {
          name: "Polaris",
          category: "Tech & Management Symposium",
          duration: "2 Days (October)",
          highlights: "Coding marathons, LAN gaming (Valorant/BGMI), Robo-race, paper presentations.",
          insiderTip: "Cash prizes are lucrative; prepare your project prototypes in advance."
        },
        {
          name: "Aakrosh / Drama Fest",
          category: "Theatre & Street Play",
          duration: "Annual",
          highlights: "Street plays (Nukkad Natak) tackling hard-hitting social themes performed at the central amphitheatre.",
          insiderTip: "The crowd and energy here rival professional theatre troupes."
        }
      ],
      hangoutsAndTrips: [
        {
          spot: "Seminary Hills & Japanese Garden",
          distance: "3.5 km",
          desc: "Nagpur's greenest hill retreat. Walkers Street, cool breezes, and quiet study or morning run spots."
        },
        {
          spot: "Sadar Residency Road (Kathi Crossing & Food Hub)",
          distance: "4.8 km",
          desc: "Nagpur's heritage food district. Roll corners, Haldiram's sweets, Mount Road Bakeries, and ice-creams."
        },
        {
          spot: "Gorewada Zoo & Nature Safari",
          distance: "5.5 km",
          desc: "India's largest safari park right next to Gorewada lake. Perfect for a breezy weekend day trip."
        }
      ],
      hostelHacks: [
        "Boys & Girls hostels on campus have biometric entry times; do not miss the 9:00 PM roll call.",
        "Local PGs around Gittikhadan and Katol Road offer affordable single/twin sharing rooms with mess included.",
        "Central canteen's Dosa and Chinese Bhel are crowd favorites during 11 AM short breaks.",
        "Join departmental WhatsApp/Telegram study groups early for past 5 years' mid-term question banks."
      ],
      commuteTips: "Shared autos ply regularly between Sitabuldi and Katol Naka (₹20-₹25 fare). StarBus Route 10 stops directly at the college entrance. Kasturchand Park Metro is the closest transit node."
    },

    placements: {
      stats: {
        highest: "₹50 LPA",
        median: "₹8.2 LPA",
        topRecruiters: ["Persistent Systems", "Amazon", "VMware", "Cognizant", "Accenture", "TCS Digital", "LTI Mindtree", "InfoCepts"]
      },
      nagpurEcosystem: "RBU has unmatched placement dominance in Central India's private sector. Persistent Systems and InfoCepts recruit heavily here with mass day-1 offers plus super-dream packages.",
      prepTips: [
        "Focus on TCS NQT and Persistent HackwithInfy preparation by 6th semester.",
        "Sharpen OOPs concepts (Java/C++) and SQL queries; RBU interviewers heavily probe database indexing.",
        "Take the internal RBU Training & Placement (T&P) mock tests seriously—they determine slotting for Day-1 companies."
      ]
    }
  },

  ycce: {
    id: "ycce",
    name: "YCCE",
    fullName: "Yeshwantrao Chavan College of Engineering",
    tagline: "Autonomous Pioneer of Hingna Road • Meghe Group Flagship",
    established: "1984",
    campusArea: "14 Acres",
    location: "Hingna Road, Wanadongri, Nagpur",
    nearestMetro: "Lokmanya Nagar Metro Station (Aqua Line - 1.2 km)",
    accentColor: "#9b8ec4", // Muted Lavender
    accentGlow: "rgba(155, 142, 196, 0.15)",
    badge: "Autonomous NAAC A++ / Historic Legacy",
    stats: {
      highestPackage: "₹38.0 LPA",
      avgPackage: "₹6.8 LPA",
      placementRate: "88%",
      attendanceVibe: "Strict 75% Biometric & Attendance Slips"
    },
    heroQuote: "Wanadongri hills, legendary chai at Hingna T-Point, and an engineering alumni network spanning every continent.",
    overview: "One of Maharashtra's first private autonomous engineering colleges, YCCE in Wanadongri boasts a sprawling engineering campus, disciplined academic rigor, high student turnout in technical competitions, and the iconic Yash cultural fest.",

    cafes: [
      {
        name: "Hingna T-Point Tapri & Tarri Poha",
        distance: "300m from YCCE Main Gate",
        vibe: "Legendary • Raw Nagpur Flavour • Bustling",
        specialty: "Nagpur Tarri Poha & Adrak Chai",
        costForTwo: "₹70",
        rating: 4.8,
        timing: "6:30 AM - 9:00 PM",
        tags: ["Iconic", "Tarri Poha", "Ultra Cheap"],
        tip: "An unwritten ritual: every YCCE student has bunked at least one morning tutorial to eat hot tarri poha here."
      },
      {
        name: "Cafe Bistro 24 / Wanadongri",
        distance: "700m on Hingna Road",
        vibe: "Casual • AC • Fast Food",
        specialty: "Crispy Paneer Wrap & Choco Lava Cake",
        costForTwo: "₹260",
        rating: 4.3,
        timing: "11:00 AM - 10:30 PM",
        tags: ["AC", "Burgers", "Student Friendly"],
        tip: "Great haven during hot summer afternoons to complete drawing sheets or project documentation in AC comfort."
      },
      {
        name: "Cafe Coffee Day & Tea Villa (Near Bansi Nagar)",
        distance: "2.5 km (Near Bansi Nagar Metro)",
        vibe: "Formal • Spacious • Relaxed",
        specialty: "Cappuccino & Cheese Garlic Bread",
        costForTwo: "₹400",
        rating: 4.5,
        timing: "10:00 AM - 11:00 PM",
        tags: ["Good Wi-Fi", "Coffee", "Quiet"],
        tip: "A quiet hotspot for preparing off-campus placement tests or coding contests without distractions."
      },
      {
        name: "Kailash South Indian & Dosa Corner",
        distance: "500m near Wanadongri Bus Stop",
        vibe: "Family Style • Fast Service • Authentic",
        specialty: "Mysore Masala Dosa & Filter Kaapi",
        costForTwo: "₹180",
        rating: 4.5,
        timing: "8:00 AM - 10:00 PM",
        tags: ["South Indian", "Quick", "Affordable"],
        tip: "Crispy dosas with rich coconut chutney; quick turnaround during tight 45-minute lunch breaks."
      }
    ],

    facultyGuide: {
      attendancePolicy: "75% minimum is mandatory. Attendance slips are tabulated monthly; shortfalls lead to parent calls and extra assignments.",
      labSurvivalTip: "Get your lab manual signed during the session itself. Hoarding 5 unsigned practicals at semester end is a nightmare.",
      insights: [
        {
          department: "Computer Technology & IT",
          professor: "Database & Software Engineering Leads",
          nature: "Approachable • Emphasizes Project Demonstrations",
          approachability: "8.2 / 10",
          tip: "Show an interactive frontend or working API demo. Professors reward students who push beyond the textbook syllabus."
        },
        {
          department: "Mechanical & Civil Engineering",
          professor: "Design & Mechanics Veterans",
          nature: "Strict on Formula Derivations • Punctual",
          approachability: "7.1 / 10",
          tip: "Submit drawing sheets with crisp borders and clean lettering. Sloppy handwriting will cost you at least 5 internal marks."
        },
        {
          department: "Electronics & Telecommunication",
          professor: "Microprocessor & VLSI Mentors",
          nature: "Academic Purists • Helpful for GATE Aspirants",
          approachability: "7.9 / 10",
          tip: "Approach them during designated remedial hours. If you are preparing for GATE, they readily share hand-written notes."
        }
      ]
    },

    patentAndProjects: {
      patentProtocol: [
        "1. Consult the Meghe Group Incubation & Innovation Centre (MGIIC).",
        "2. Prepare a 3-page problem-solution brief with functional block diagrams.",
        "3. Review prior patents on IP India and Google Patents with the departmental IPR coordinator.",
        "4. Obtain financial sanction from the college for provisional filing under student category."
      ],
      paperPublicationTips: "Target IEEE, Springer, or Elsevier Scopus conferences. YCCE provides partial reimbursement for registration fees if paper is published under college affiliation.",
      mentors: [
        {
          name: "Pratik Shende",
          year: "4th Year Computer Tech",
          specialization: "Cloud Architecture & DevOps",
          achievements: "AWS Certified Solution Architect, 1 IEEE Conference Paper",
          connect: "linkedin.com/in/pratik-shende-ycce",
          discord: "pratik_ops#3021"
        },
        {
          name: "Mrunal Vaidya",
          year: "4th Year Electrical",
          specialization: "EV Powertrains & Battery BMS",
          achievements: "Filed 1 Utility Patent for Solar-Assist Hybrid Bike",
          connect: "linkedin.com/in/mrunal-vaidya-ycce",
          discord: "mrunal_ev#8181"
        },
        {
          name: "Nikhil Raut",
          year: "Alumni '23 (Software Engineer @ Capgemini)",
          specialization: "Java Spring Boot & Microservices",
          achievements: "Guided 6 junior capstone projects",
          connect: "github.com/nikhil-ycce-alumni",
          discord: "nikhil_code#9900"
        }
      ]
    },

    campusLife: {
      fests: [
        {
          name: "Yash",
          category: "Annual Mega Cultural Fest",
          duration: "3-4 Days (February)",
          highlights: "Vibrant dance battles, rock band performances, fashion shows, and grand celebrity musical night.",
          insiderTip: "Wanadongri campus lights up brilliantly. Be early to get front-row seats for the celebrity pro-nite."
        },
        {
          name: "Compufest / Technolon",
          category: "Departmental Technical Fests",
          duration: "2 Days (September/March)",
          highlights: "Blind coding, circuit debugging, web dev showdowns, and paper presentation tracks.",
          insiderTip: "Great opportunity to win cash rewards and certificates for your 4th-year resume."
        },
        {
          name: "Ashwamedh",
          category: "Inter-College Sports Tournament",
          duration: "1 Week (January)",
          highlights: "Cricket, football, badminton, and basketball clashes between major Vidarbha colleges.",
          insiderTip: "The YCCE sports ground produces top university cricketers."
        }
      ],
      hangoutsAndTrips: [
        {
          spot: "Khindsi Water Sports & Lake",
          distance: "55 km (Ramtek Road)",
          desc: "Full-day trip for class groups. Speed boating, banana rides, lakeside picnics, and temple visit."
        },
        {
          spot: "Waki Woods & Dargah Backwaters",
          distance: "30 km",
          desc: "Peaceful forest trails, bird watching, and fresh riverside breezes for bike rides."
        },
        {
          spot: "Lokmanya Nagar & Hingna Cafes",
          distance: "1.5 km",
          desc: "The local hangout precinct for quick team meetups right by the metro station."
        }
      ],
      hostelHacks: [
        "Boys hostels are adjacent to the campus; girls hostel has secure bus shuttle service.",
        "Mess serves traditional Varadi and Maharashtrian dishes; Friday special is universally liked.",
        "Invest in a table fan and cooler for Hingna's peak summer months (April-May).",
        "Keep photocopies of your hall ticket and ID card handy; campus xerox center has long lines on exam mornings."
      ],
      commuteTips: "Lokmanya Nagar Metro Station is just 1.2 km away on Aqua Line. E-rickshaws run continuously between the metro station and YCCE gate for ₹10-₹15. Direct StarBus routes run from Sitabuldi to Hingna."
    },

    placements: {
      stats: {
        highest: "₹38 LPA",
        median: "₹5.8 LPA",
        topRecruiters: ["TCS (Ninja/Digital)", "Capgemini", "Accenture", "L&T Infotech", "Cognizant", "Persistent Systems", "Mahindra & Mahindra"]
      },
      nagpurEcosystem: "YCCE is a major center for mass-hiring drives in Vidarbha. Capgemini and TCS conduct massive recruitment drives on campus every autumn.",
      prepTips: [
        "Master quantitative aptitude and speed math early (IndiaBIX and RS Aggarwal are standard).",
        "Prepare strong answers for basic data structures (Linked Lists, Stacks, Trees) and OOPs concepts.",
        "Highlight your final-year capstone project live demo; recruiters at YCCE prioritize practical candidates."
      ]
    }
  },

  raisoni: {
    id: "raisoni",
    name: "G H Raisoni",
    fullName: "G H Raisoni College of Engineering (GHRCEM)",
    tagline: "Autonomous Innovation Hub • Digdoh Hills Campus",
    established: "1996",
    campusArea: "15 Acres",
    location: "CRPF Gate No. 3, Digdoh Hills, Hingna Road, Nagpur",
    nearestMetro: "Vasudev Nagar / Lokmanya Nagar Metro (Aqua Line)",
    accentColor: "#72b08c", // Muted Sage Green
    accentGlow: "rgba(114, 176, 140, 0.15)",
    badge: "Autonomous NAAC A+ / High Patent Tally",
    stats: {
      highestPackage: "₹45.0 LPA",
      avgPackage: "₹6.2 LPA",
      placementRate: "86%",
      attendanceVibe: "Strict Biometric & Credit-based Evaluation"
    },
    heroQuote: "Scenic Digdoh Hills views, unmatched student patent filing records, and the electric vibe of Antaragni fest.",
    overview: "Perched on the scenic Digdoh Hills near Hingna, G H Raisoni College of Engineering is renowned for filing the highest number of student patents in Central India, active IEEE student branch, modern incubation labs, and vibrant campus life.",

    cafes: [
      {
        name: "Digdoh Hills Sunset Point & Tea Cafe",
        distance: "300m above campus",
        vibe: "Hill Breeze • Scenic • Relaxed",
        specialty: "Kulhad Chai & Paneer Pakodas",
        costForTwo: "₹120",
        rating: 4.6,
        timing: "6:00 AM - 8:30 PM",
        tags: ["Sunset View", "Chai", "Scenic"],
        tip: "Golden hour view overlooking Hingna valley is breathtaking. Best spot to clear your head after viva."
      },
      {
        name: "CRPF Camp Street Canteen & Mess",
        distance: "500m near CRPF Gate",
        vibe: "Military Canteen Style • Hygienic • Budget",
        specialty: "Samosa Chole & Egg Thali",
        costForTwo: "₹140",
        rating: 4.4,
        timing: "8:00 AM - 9:30 PM",
        tags: ["Pocket Friendly", "Hearty Meal", "Hygiene"],
        tip: "Extremely affordable and hygienic food catered to student budgets."
      },
      {
        name: "Raisoni Food Court (Inside Campus)",
        distance: "Central Campus Courtyard",
        vibe: "Bustling • Multi-Cuisine • Social Hub",
        specialty: "Veg Manchurian Fried Rice & Cold Coffee",
        costForTwo: "₹190",
        rating: 4.3,
        timing: "8:30 AM - 7:00 PM",
        tags: ["On Campus", "Fast Service", "Hangout"],
        tip: "The primary meeting hub between lectures. Always busy during 12:30 PM lunch break."
      },
      {
        name: "Cafe Hangout / Hingna Road",
        distance: "1.2 km on Hingna Highway",
        vibe: "Youth Vibe • Music • Burgers",
        specialty: "Double Cheese Chicken Burger & Mojito",
        costForTwo: "₹280",
        rating: 4.4,
        timing: "11:00 AM - 10:30 PM",
        tags: ["Fast Food", "Air Conditioned", "Group Hangout"],
        tip: "Popular place for team celebrations after winning hackathons or completing mini-projects."
      }
    ],

    facultyGuide: {
      attendancePolicy: "Biometric and RFID attendance logged directly into Raisoni portal. 75% required to be eligible for end-sem exams.",
      labSurvivalTip: "Maintain neat code repositories on GitHub and clean project hardware layouts. Departmental audits are frequent.",
      insights: [
        {
          department: "Computer Science & Artificial Intelligence",
          professor: "AI/ML & Data Science Program Heads",
          nature: "Research Driven • High Focus on Patents",
          approachability: "8.4 / 10",
          tip: "Propose an idea with a novel twist or algorithm refinement; they will immediately help you draft a patent application."
        },
        {
          department: "Electronics & Communication",
          professor: "IoT & Embedded Systems Mentors",
          nature: "Hands-on • Hardware Enthusiasts",
          approachability: "8.0 / 10",
          tip: "Bring actual sensors, microcontrollers (ESP32/STM32), and breadboard setups instead of just simulation software screenshots."
        },
        {
          department: "Civil & Environmental Engineering",
          professor: "Surveying & Structural Engineers",
          nature: "Practical Field Oriented • Field Work Regulars",
          approachability: "7.6 / 10",
          tip: "Never be late for total station and theodolite field surveys on the hill campus."
        }
      ]
    },

    patentAndProjects: {
      patentProtocol: [
        "1. Raisoni has an internal IP Cell that assists students with 100% filing documentation and attorney consultations.",
        "2. Submit your functional block diagram and claim drafting template to the Dean R&D.",
        "3. Complete the patent search report comparing your invention against existing WIPO/Google Patents.",
        "4. Raisoni holds national records for student patent filings—they actively sponsor the application fees!"
      ],
      paperPublicationTips: "Every student is encouraged to publish at least one IEEE or Scopus paper before final year viva. Take advantage of Raisoni's annual IEEE International Conference on Smart Technologies.",
      mentors: [
        {
          name: "Harshita Tiwari",
          year: "4th Year AI & Data Science",
          specialization: "Natural Language Processing & MedTech",
          achievements: "2 Patents Published, 1 IEEE Conference Paper",
          connect: "linkedin.com/in/harshita-tiwari-raisoni",
          discord: "harshita_ai#4412"
        },
        {
          name: "Akash Wankhede",
          year: "4th Year Robotics & Automation",
          specialization: "ROS2 & Autonomous Ground Vehicles",
          achievements: "FMCG Automation Patent Holder, Finalist in E-Yantra (IIT Bombay)",
          connect: "linkedin.com/in/akash-wankhede-ghrce",
          discord: "akash_bot#6219"
        },
        {
          name: "Siddhesh Meshram",
          year: "Alumni '24 (Associate SDE @ Infosys)",
          specialization: "Cloud Architecture & React Native",
          achievements: "Built Raisoni Attendance Tracker App",
          connect: "github.com/siddhesh-raisoni-alumni",
          discord: "siddhesh_tech#1109"
        }
      ]
    },

    campusLife: {
      fests: [
        {
          name: "Antaragni",
          category: "Annual Flagship Cultural Fest",
          duration: "3 Days (February)",
          highlights: "Electrifying cultural competitions, street plays, DJ nights, fashion spectacles, and star-studded concerts.",
          insiderTip: "Digdoh Hills open-air stage offers one of the best concert acoustics in Nagpur."
        },
        {
          name: "Technorion",
          category: "National Level Technical Symposium",
          duration: "2 Days (March)",
          highlights: "Robo-wars, CAD modeling, national coding challenges, drone showcase, and technical paper tracks.",
          insiderTip: "Winning here carries heavy weight on your academic evaluation scorecard."
        },
        {
          name: "Parakram",
          category: "Annual Sports Meet",
          duration: "4 Days (January)",
          highlights: "Inter-departmental box cricket, football, kabaddi, and athletic tournaments.",
          insiderTip: "The civil vs mechanical cricket derby is intensely competitive and drawing huge crowds."
        }
      ],
      hangoutsAndTrips: [
        {
          spot: "Zilpi Lake & Backwaters",
          distance: "16 km from Digdoh Hills",
          desc: "Close weekend getaway spot for post-exam bike trips, chai sessions, and photography."
        },
        {
          spot: "Ambazari Garden & Biodiversity Trail",
          distance: "7.5 km",
          desc: "Great weekend running track and picnic lawn surrounded by forest greenery."
        },
        {
          spot: "Hingna MIDC & Local Street Food",
          distance: "2.0 km",
          desc: "Wide variety of quick snack stalls, roll joints, and tea points."
        }
      ],
      hostelHacks: [
        "Hostel rooms on Digdoh hill enjoy cooler breezes in evenings compared to city center.",
        "Wi-Fi connectivity inside campus is robust; register your laptop MAC address at the IT cell in first week.",
        "Keep raincoats handy during monsoon—Digdoh hill receives heavy showers and winds.",
        "College bus passes cover all corners of Nagpur (Mahal, Sadar, Wardhaman Nagar, Dharampeth)."
      ],
      commuteTips: "Vasudev Nagar and Lokmanya Nagar Metro stations are on the Aqua Line nearby. GhRCEM operates an extensive fleet of college buses across Nagpur. Shared e-rickshaws run from Hingna main road to the campus hill gate."
    },

    placements: {
      stats: {
        highest: "₹45 LPA",
        median: "₹5.5 LPA",
        topRecruiters: ["Capgemini", "TCS", "Infosys", "Wipro", "Tech Mahindra", "Amazon (AWS Support)", "Persistent Systems", "Bosch"]
      },
      nagpurEcosystem: "Raisoni's close proximity to Hingna MIDC and MIHAN IT corridor offers steady corporate interaction, industrial visits, and on-campus drive opportunities.",
      prepTips: [
        "Make sure your resume showcases at least one patent or research publication—Raisoni recruiters appreciate documented IP.",
        "Complete certifications in AWS, Microsoft Azure, or Salesforce; college provides subsidized voucher access.",
        "Practice aptitude tests weekly on the internal Raisoni placement portal."
      ]
    }
  },

  iiitn: {
    id: "iiitn",
    name: "IIIT Nagpur",
    fullName: "Indian Institute of Information Technology, Nagpur",
    tagline: "Institute of National Importance • The AI & Code Capital",
    established: "2016",
    campusArea: "100 Acres",
    location: "Waranga, Near Butibori, Wardha Road, Nagpur",
    nearestMetro: "Khapri Metro Station (Orange Line - Feeder Bus / Shuttle to Waranga)",
    accentColor: "#c48b9f", // Muted Dusty Rose
    accentGlow: "rgba(196, 139, 159, 0.15)",
    badge: "Institute of National Importance / Pure Tech",
    stats: {
      highestPackage: "₹86.0 LPA",
      avgPackage: "₹14.0 LPA",
      placementRate: "89%",
      attendanceVibe: "85% Mandatory (Strict Senate Policy)"
    },
    heroQuote: "Pure coding pedigree, cutting-edge AI labs, and high-package tech culture on the wide-open Waranga campus.",
    overview: "Established by the Ministry of Education as an Institute of National Importance on a sprawling 100-acre campus in Waranga, IIIT Nagpur specializes exclusively in Computer Science, AI, and Electronics. It is rapidly becoming a powerhouse for competitive programming and elite placements.",

    cafes: [
      {
        name: "IIITN Student Canteen & Night Adda",
        distance: "Central Campus Plaza",
        vibe: "Late Night • Coding Discussions • Energetic",
        specialty: "Cold Coffee, Maggi & Egg Fried Rice",
        costForTwo: "₹150",
        rating: 4.5,
        timing: "7:00 AM - 3:00 AM",
        tags: ["Night Owl", "Affordable", "Campus Adda"],
        tip: "The epicenter of late-night hackathon brainstorming. Stays alive till 3 AM during contest seasons."
      },
      {
        name: "Waranga Highway Dhabas & Chai Hubs",
        distance: "1.0 km on Wardha Highway (NH 44)",
        vibe: "Rustic • Dhaba Style • Midnight Meals",
        specialty: "Dal Tadka, Butter Naan & Sev Bhaji",
        costForTwo: "₹250",
        rating: 4.6,
        timing: "Open 24 Hours",
        tags: ["24x7", "Highway Dhaba", "North Indian"],
        tip: "Famous for midnight meals after cracking Codeforces rounds or finishing AI model training."
      },
      {
        name: "Butibori Square Food Hub & Bakeries",
        distance: "4.5 km towards Butibori",
        vibe: "Market Town • Fast Bites • Bakeries",
        specialty: "Fresh Pastries, Rolls & Fresh Juices",
        costForTwo: "₹180",
        rating: 4.3,
        timing: "9:00 AM - 10:00 PM",
        tags: ["Snacks", "Budget", "Daily Needs"],
        tip: "Great place to stock up on hostel snacks, dry fruits, and grooming essentials on weekends."
      },
      {
        name: "Haldiram's Planet Food (MIHAN Square)",
        distance: "12 km on Wardha Road",
        vibe: "Premium • Huge Assortment • Air Conditioned",
        specialty: "Raj Kachori, Chhole Bhature & Kaju Katli",
        costForTwo: "₹450",
        rating: 4.8,
        timing: "8:00 AM - 11:00 PM",
        tags: ["Iconic Haldiram", "Clean", "Weekend Treat"],
        tip: "A standard stopover when returning from Nagpur city back to the Waranga campus."
      }
    ],

    facultyGuide: {
      attendancePolicy: "85% attendance rule is strictly enforced by the academic senate. Medical leaves must be approved within 3 working days.",
      labSurvivalTip: "Plagiarism in lab assignments is detected using MOSS (Measure of Software Similarity). Never copy code from classmates.",
      insights: [
        {
          department: "Computer Science & Engineering",
          professor: "Competitive Programming & Deep Learning Mentors",
          nature: "Cutting-edge • Rigorous Coding Standards",
          approachability: "8.7 / 10",
          tip: "They love candidates with high Codeforces / LeetCode ratings. Cite recent research papers in your project problem statements."
        },
        {
          department: "Electronics & Communication (IoT / VLSI)",
          professor: "FPGA & Embedded Systems Specialists",
          nature: "Strict on Lab Verifications • Research Heavy",
          approachability: "7.9 / 10",
          tip: "Simulate and demonstrate your circuits on Verilog or Vivado before asking for physical FPGA board access."
        },
        {
          department: "Humanities & Management Sciences",
          professor: "Technical Communication & Ethics Instructors",
          nature: "Supportive • Focuses on Presentation Skills",
          approachability: "9.0 / 10",
          tip: "Polish your slide deck design and public speaking; scoring well here elevates your cumulative CGPA significantly."
        }
      ]
    },

    patentAndProjects: {
      patentProtocol: [
        "1. IIITN has a dedicated IPR & Incubation Centre supporting DeepTech, Cyber-Security, and Edge AI innovations.",
        "2. Prepare your formal design diagram and patent specification with the institute patent attorney.",
        "3. Financial grant is available under the National Innovation and Startup Policy (NISP).",
        "4. Students retain co-inventor IP rights on commercialized software and hardware designs."
      ],
      paperPublicationTips: "Focus on Core A/A* conferences (CVPR, NeurIPS, ICCV, ACL, ICSE) or reputed IEEE/ACM transactions. Mentors actively guide promising 3rd-year students toward fully-funded international conference travel grants.",
      mentors: [
        {
          name: "Rohan Nair",
          year: "4th Year CSE",
          specialization: "Large Language Models & Distributed ML",
          achievements: "Candidate Master on Codeforces (1950+), 2 Published IEEE Papers",
          connect: "linkedin.com/in/rohan-nair-iiitn",
          discord: "rohan_algo#1337"
        },
        {
          name: "Ananya Saxena",
          year: "4th Year ECE (IoT Specialization)",
          specialization: "Edge Computing & RISC-V Architecture",
          achievements: "Filed 1 Patent on Edge-AI Defect Detector, Intel Student Ambassador",
          connect: "linkedin.com/in/ananya-saxena-iiitn",
          discord: "ananya_chip#8080"
        },
        {
          name: "Devendra Verma",
          year: "Alumni '24 (SDE @ Atlassian)",
          specialization: "Backend Systems & High Concurrency",
          achievements: "Cracked 86 LPA International/Remote Offer",
          connect: "github.com/devendra-iiitn-alumni",
          discord: "dev_system#4040"
        }
      ]
    },

    campusLife: {
      fests: [
        {
          name: "Tantrafiesta",
          category: "Flagship National Technical Fest",
          duration: "3 Days (October/November)",
          highlights: "One of Central India's premier tech symposiums; 36-hour non-stop hackathons, CTF cybersecurity wars, robotics, guest talks.",
          insiderTip: "Tech talent from across India travels to Waranga. Win the flagship hackathon to get direct interview shortlists."
        },
        {
          name: "Abhivyakti",
          category: "Annual Cultural Fest",
          duration: "2-3 Days (March)",
          highlights: "Battle of the bands, EDM night, street play, stand-up comedy, and informal gaming events.",
          insiderTip: "Open-sky amphitheater at night has an incredible festival atmosphere."
        },
        {
          name: "E-Summit IIITN",
          category: "Entrepreneurship & Startup Conclave",
          duration: "2 Days (February)",
          highlights: "Angel investor pitching, startup fairs, and keynote addresses by young unicorn founders.",
          insiderTip: "Great venue to find co-founders for tech ventures."
        }
      ],
      hangoutsAndTrips: [
        {
          spot: "MIHAN Tech Corridor & Khapri Metro",
          distance: "12 km on Wardha Road",
          desc: "Wide expressways, modern IT towers (InfoCepts, HCL, Tech Mahindra), and quick transit into Nagpur city."
        },
        {
          spot: "Waki Woods / Pench National Park",
          distance: "90 km (Pench Safari)",
          desc: "World-class tiger reserve safari for semester-end batch road trips."
        },
        {
          spot: "Deekshabhoomi & Nagpur Heritage Core",
          distance: "20 km into the city",
          desc: "Nagpur's iconic architectural wonder and historic landmarks."
        }
      ],
      hostelHacks: [
        "Hostel rooms on the new Waranga campus have high-speed LAN ports (1 Gbps symmetric) in every room.",
        "Night canteen delivers to hostel common rooms until 2:30 AM during exam and coding contest nights.",
        "Wardha road gets chilly during winter (December-January); bring proper thermal wear.",
        "Register for the official IIITN college shuttle bus for planned weekend trips into Nagpur city."
      ],
      commuteTips: "Khapri Metro Station (Orange Line) is the closest metro terminus. IIITN operates scheduled AC shuttle buses connecting the Waranga campus with Khapri Metro station and Sitabuldi. Shared cabs and autos operate along the Wardha Road NH-44 highway."
    },

    placements: {
      stats: {
        highest: "₹86 LPA",
        median: "₹12.0 LPA",
        topRecruiters: ["Amazon", "Atlassian", "Goldman Sachs", "AlphaGrep", "Cisco", "Nvidia", "JPMorgan Chase", "Persistent Systems"]
      },
      nagpurEcosystem: "IIITN graduates are prized for strong algorithmic skills, microservices architecture, and deep learning expertise, attracting dream and super-dream hiring packages nationwide.",
      prepTips: [
        "Target Codeforces rating 1600+ (Specialist/Expert) and 350+ LeetCode problems by early 3rd year.",
        "Build 2 comprehensive end-to-end full stack or ML projects with live production URLs and Dockerized deployments.",
        "Prepare System Design (LLD & HLD) thoroughly—companies like Atlassian and Amazon test this in final rounds."
      ]
    }
  }
};

// Interactive Polls Data (with LocalStorage state)
const INITIAL_POLLS = [
  {
    id: "poll_1",
    question: "Which college has the undisputed best fest experience in Nagpur?",
    collegeId: "all",
    totalVotes: 842,
    options: [
      { id: "opt_aarohi", text: "Aarohi (VNIT) - Central India's Legend", votes: 340 },
      { id: "opt_pratishruti", text: "Pratishruti (RBU) - Pure Unmatched Energy", votes: 295 },
      { id: "opt_yash", text: "Yash (YCCE) - Wanadongri Vibes", votes: 112 },
      { id: "opt_antaragni", text: "Antaragni (Raisoni) - Digdoh Hill Electric", votes: 55 },
      { id: "opt_tantra", text: "Tantrafiesta (IIITN) - Elite Hackers & Night EDM", votes: 40 }
    ]
  },
  {
    id: "poll_2",
    question: "Ultimate Nagpur Hangout & Food Spot after College hours?",
    collegeId: "all",
    totalVotes: 615,
    options: [
      { id: "opt_futala", text: "Futala Lake Chowpatty & Fountain", votes: 250 },
      { id: "opt_tarri", text: "Hingna T-Point / Sadar Tarri Poha & Chai", votes: 185 },
      { id: "opt_lush", text: "Lush House / Corridor Seven Specialty Coffee", votes: 110 },
      { id: "opt_seminary", text: "Seminary Hills / Japanese Garden", votes: 70 }
    ]
  },
  {
    id: "poll_3",
    question: "Biggest academic challenge for freshers in 1st/2nd Year?",
    collegeId: "all",
    totalVotes: 489,
    options: [
      { id: "opt_attendance", text: "Maintaining 75-85% strict attendance rule", votes: 210 },
      { id: "opt_viva", text: "Surviving unexpected external lab vivas", votes: 145 },
      { id: "opt_dsa", text: "Starting DSA & LeetCode while managing exams", votes: 89 },
      { id: "opt_commute", text: "Long daily transit / Nagpur summer heat", votes: 45 }
    ]
  }
];

// Nagpur Metro & Commute Guide Data
const NAGPUR_TRANSIT_GUIDE = [
  {
    line: "Orange Line (North-South)",
    route: "Automotive Square ↔ Khapri / Metro City",
    keyStops: ["Automotive Sq", "Kasturchand Park", "Sitabuldi Interchange", "Congress Nagar", "Rahate Colony", "Subhash Nagar (VNIT)", "Khapri (IIITN Feeder)"],
    frequency: "Every 10-15 minutes",
    fares: "₹10 to ₹35 (30% Student Maha Metro Card Discount)"
  },
  {
    line: "Aqua Line (East-West)",
    route: "Prajapati Nagar ↔ Lokmanya Nagar (Hingna)",
    keyStops: ["Prajapati Nagar", "Railway Station", "Sitabuldi Interchange", "Jhansi Rani Square", "Dharampeth College", "Vasudev Nagar (Raisoni)", "Lokmanya Nagar (YCCE)"],
    frequency: "Every 10-15 minutes",
    fares: "₹10 to ₹35 (30% Student Maha Metro Card Discount)"
  }
];

// Quick Placement Roadmap Checklist
const PLACEMENT_ROADMAP = [
  {
    phase: "Semester 5 (Spring/Summer)",
    title: "Core Foundation & DSA Mastery",
    desc: "Master Arrays, Hashing, Linked Lists, Trees, and DP. Solve 150+ LeetCode problems in Java or C++. Complete 1 production-ready full-stack or ML project."
  },
  {
    phase: "Semester 6 (Pre-Placement)",
    title: "Aptitude, Mock Tests & Core Subjects",
    desc: "Daily 45-min practice of quantitative aptitude & logical reasoning. Revise DBMS (SQL normalization, indexing), OS (Process scheduling, deadlock), and Computer Networks."
  },
  {
    phase: "Semester 7 (Day-1 & Dream Drives)",
    title: "Interview Execution & System Design",
    desc: "Conduct bi-weekly peer mock interviews. Prepare STAR method stories for HR behavioral rounds. Deploy projects with live demos and clean README files."
  },
  {
    phase: "Semester 8 (PPO & Off-Campus)",
    title: "Specialization & Transition",
    desc: "Internship conversion, specialized certifications (AWS/Cloud/DevOps), contributing to open-source or converting major projects into patents/papers."
  }
];

// ==========================================================================
// ENRICHED DATA: PYQs, Detailed Placements, Faculty Ratings, Study Resources
// Merged into each college at runtime
// ==========================================================================

const ENRICHED_DATA = {
  vnit: {
    pyqResources: [
      { subject: "Data Structures & Algorithms", semester: "3rd Sem", department: "CSE", examType: "End Sem 2024", sourceHint: "VNIT CSE Dept Library + Student GitHub Repos", topics: ["Arrays & Hashing", "Trees & BST Traversals", "Graph BFS/DFS", "Dynamic Programming", "Greedy Algorithms"], difficulty: "Moderate-Hard", tip: "Recent papers emphasize coding-heavy questions (3 out of 6). Practice implementation, not just theory." },
      { subject: "Database Management Systems", semester: "4th Sem", department: "CSE / IT", examType: "End Sem 2024", sourceHint: "Dept Notes + Navathe Textbook Problems", topics: ["ER Modeling", "SQL Joins & Subqueries", "Normalization (1NF-BCNF)", "Transaction & Concurrency", "Indexing & B+ Trees"], difficulty: "Moderate", tip: "SQL query writing is mandatory. Practice 3-4 complex join queries from past papers." },
      { subject: "Digital Signal Processing", semester: "5th Sem", department: "ECE", examType: "End Sem 2023", sourceHint: "ECE Dept Study Circle + Oppenheim Solved Problems", topics: ["Z-Transform", "DFT & FFT", "FIR/IIR Filter Design", "Sampling Theorem", "Convolution"], difficulty: "Hard", tip: "Derivations carry 40% weightage. Memorize key transforms and practice inverse Z-transforms." },
      { subject: "Engineering Mechanics", semester: "1st Sem", department: "First Year (All Branches)", examType: "Mid Sem + End Sem 2024", sourceHint: "FY Engineering Dept + Senior Notes Drive", topics: ["Force Systems", "Friction & Equilibrium", "Centroid & Moment of Inertia", "Virtual Work", "Kinematics"], difficulty: "Moderate", tip: "Diagrams and free body diagrams are essential. Neat FBDs with proper labeling score full marks." }
    ],
    detailedPlacements: {
      yearWise: [
        { year: "2023-24", offers: 340, highestCTC: "₹64 LPA", avgCTC: "₹15.2 LPA", medianCTC: "₹12.5 LPA", companiesVisited: 92 },
        { year: "2022-23", offers: 310, highestCTC: "₹58 LPA", avgCTC: "₹13.8 LPA", medianCTC: "₹11.0 LPA", companiesVisited: 84 },
        { year: "2021-22", offers: 285, highestCTC: "₹52 LPA", avgCTC: "₹12.1 LPA", medianCTC: "₹10.2 LPA", companiesVisited: 76 }
      ],
      companyBreakdown: [
        { company: "Google", role: "SDE-1", ctc: "₹42 LPA", studentsPlaced: 2, year: "2024" },
        { company: "Microsoft", role: "SDE", ctc: "₹38 LPA", studentsPlaced: 5, year: "2024" },
        { company: "Goldman Sachs", role: "Analyst", ctc: "₹34 LPA", studentsPlaced: 4, year: "2024" },
        { company: "Texas Instruments", role: "Design Engineer", ctc: "₹28 LPA", studentsPlaced: 6, year: "2024" },
        { company: "Qualcomm", role: "SoC Design", ctc: "₹26 LPA", studentsPlaced: 3, year: "2024" },
        { company: "Persistent Systems", role: "SDE / Cloud", ctc: "₹12 LPA", studentsPlaced: 45, year: "2024" },
        { company: "Oracle", role: "Application Dev", ctc: "₹18 LPA", studentsPlaced: 8, year: "2024" },
        { company: "L&T Technology", role: "GET (Core)", ctc: "₹8.5 LPA", studentsPlaced: 22, year: "2024" }
      ],
      branchWise: [
        { branch: "CSE", avgCTC: "₹18.5 LPA", placed: "97%" },
        { branch: "ECE", avgCTC: "₹13.2 LPA", placed: "91%" },
        { branch: "Electrical", avgCTC: "₹10.5 LPA", placed: "85%" },
        { branch: "Mechanical", avgCTC: "₹9.2 LPA", placed: "82%" },
        { branch: "Civil", avgCTC: "₹7.8 LPA", placed: "75%" },
        { branch: "Mining / Metallurgy", avgCTC: "₹8.0 LPA", placed: "72%" }
      ]
    },
    studyResources: [
      { category: "DSA & Coding Practice", resources: [
        { name: "LeetCode", url: "https://leetcode.com", desc: "Primary DSA practice platform for placement prep" },
        { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", desc: "Theory + practice combined, excellent for GATE & placements" },
        { name: "Codeforces", url: "https://codeforces.com", desc: "Competitive programming contests and rating system" }
      ]},
      { category: "Core Subject Revision", resources: [
        { name: "Gate Smashers (YouTube)", url: "https://youtube.com/@GateSmashers", desc: "Quick concept videos for OS, DBMS, CN, and TOC" },
        { name: "Neso Academy", url: "https://youtube.com/@nesoacademy", desc: "Detailed lectures on Digital Electronics, Signals & Systems" },
        { name: "NPTEL Courses", url: "https://nptel.ac.in", desc: "Official IIT/NIT recorded lectures with certificates" }
      ]},
      { category: "Aptitude & Reasoning", resources: [
        { name: "IndiaBIX", url: "https://indiabix.com", desc: "Quantitative aptitude, verbal reasoning, and logical puzzles" },
        { name: "PrepInsta", url: "https://prepinsta.com", desc: "Company-wise previous placement papers and mock tests" }
      ]},
      { category: "Projects & Portfolio", resources: [
        { name: "GitHub", url: "https://github.com", desc: "Host code repositories and showcase open-source contributions" },
        { name: "Vercel / Netlify", url: "https://vercel.com", desc: "Free deployment for React, Next.js, and static web projects" }
      ]}
    ]
  },

  rbu: {
    pyqResources: [
      { subject: "Object Oriented Programming (Java)", semester: "3rd Sem", department: "CSE / IT", examType: "End Sem 2024", sourceHint: "RBU Dept Portal + Student WhatsApp Study Groups", topics: ["Classes & Inheritance", "Polymorphism & Abstraction", "Exception Handling", "Collections Framework", "Multithreading Basics"], difficulty: "Moderate", tip: "Write complete code with main() method. Partial pseudocode loses marks heavily at RBU." },
      { subject: "Computer Networks", semester: "5th Sem", department: "CSE / IT", examType: "End Sem 2023", sourceHint: "Kurose-Ross Textbook + T&P Module Notes", topics: ["OSI vs TCP/IP Model", "Subnetting & CIDR", "TCP Handshake & Flow Control", "Routing Protocols", "HTTP/DNS/DHCP"], difficulty: "Moderate", tip: "Subnetting numericals appear every year. Practice CIDR calculations thoroughly." },
      { subject: "Analog & Digital Electronics", semester: "3rd Sem", department: "ETC / Electronics", examType: "End Sem 2024", sourceHint: "ETC Lab Manual + Sedra-Smith Reference", topics: ["Op-Amp Circuits", "Boolean Algebra & K-Maps", "Flip-Flops & Counters", "ADC/DAC Converters", "555 Timer Circuits"], difficulty: "Hard", tip: "Circuit diagram neatness matters. Draw proper pin diagrams for ICs. Carry ruler for lab sheets." },
      { subject: "Engineering Graphics & CAD", semester: "1st Sem", department: "First Year", examType: "End Sem 2024", sourceHint: "Drawing Hall Archives + Senior Mini-Drafter Notes", topics: ["Orthographic Projections", "Isometric Views", "Section of Solids", "Development of Surfaces", "AutoCAD Basics"], difficulty: "Moderate", tip: "Use 2H pencils for construction lines and HB for final lines. Projection accuracy > speed." }
    ],
    detailedPlacements: {
      yearWise: [
        { year: "2023-24", offers: 420, highestCTC: "₹50 LPA", avgCTC: "₹9.8 LPA", medianCTC: "₹8.2 LPA", companiesVisited: 110 },
        { year: "2022-23", offers: 385, highestCTC: "₹44 LPA", avgCTC: "₹8.9 LPA", medianCTC: "₹7.5 LPA", companiesVisited: 98 },
        { year: "2021-22", offers: 360, highestCTC: "₹38 LPA", avgCTC: "₹7.8 LPA", medianCTC: "₹6.8 LPA", companiesVisited: 88 }
      ],
      companyBreakdown: [
        { company: "Amazon", role: "SDE-1", ctc: "₹38 LPA", studentsPlaced: 3, year: "2024" },
        { company: "Persistent Systems", role: "SDE / SDET", ctc: "₹12.5 LPA", studentsPlaced: 65, year: "2024" },
        { company: "VMware (Broadcom)", role: "MTS", ctc: "₹22 LPA", studentsPlaced: 4, year: "2024" },
        { company: "TCS Digital", role: "Digital SDE", ctc: "₹9.5 LPA", studentsPlaced: 40, year: "2024" },
        { company: "Cognizant GenC", role: "Programmer Analyst", ctc: "₹6.5 LPA", studentsPlaced: 55, year: "2024" },
        { company: "Accenture", role: "ASE / Advanced ASE", ctc: "₹6.5 LPA", studentsPlaced: 50, year: "2024" },
        { company: "LTI Mindtree", role: "Platform Engineer", ctc: "₹8.0 LPA", studentsPlaced: 18, year: "2024" },
        { company: "InfoCepts", role: "Data Engineer", ctc: "₹10.0 LPA", studentsPlaced: 12, year: "2024" }
      ],
      branchWise: [
        { branch: "CSE", avgCTC: "₹12.8 LPA", placed: "95%" },
        { branch: "IT", avgCTC: "₹10.5 LPA", placed: "92%" },
        { branch: "ETC", avgCTC: "₹7.5 LPA", placed: "82%" },
        { branch: "Mechanical", avgCTC: "₹6.2 LPA", placed: "74%" },
        { branch: "Electrical", avgCTC: "₹6.8 LPA", placed: "78%" },
        { branch: "Civil", avgCTC: "₹5.5 LPA", placed: "68%" }
      ]
    },
    studyResources: [
      { category: "Coding & DSA", resources: [
        { name: "LeetCode", url: "https://leetcode.com", desc: "Grind 75 list is most popular among RBU seniors" },
        { name: "HackerRank", url: "https://hackerrank.com", desc: "Domains for SQL, Java, Python practice with certificates" },
        { name: "Coding Ninjas / CodeStudio", url: "https://codingninjas.com", desc: "Guided DSA paths popular in RBU coding clubs" }
      ]},
      { category: "University Notes & PYQs", resources: [
        { name: "RBU Internal Portal", url: "#", desc: "Login with university credentials for lecture slides and notices" },
        { name: "Telegram Study Groups", url: "#", desc: "Join branch-wise Telegram channels for shared notes and PYQs" }
      ]},
      { category: "Aptitude & Company Prep", resources: [
        { name: "PrepInsta", url: "https://prepinsta.com", desc: "TCS NQT, Persistent, Capgemini previous papers" },
        { name: "IndiaBIX", url: "https://indiabix.com", desc: "Standard aptitude and verbal reasoning drills" }
      ]}
    ]
  },

  ycce: {
    pyqResources: [
      { subject: "Data Structures", semester: "3rd Sem", department: "Computer Technology", examType: "End Sem 2024", sourceHint: "CT Department Library + Study Circle WhatsApp", topics: ["Linked Lists", "Stacks & Queues", "Binary Trees", "Sorting Algorithms", "Hashing"], difficulty: "Moderate", tip: "Algorithm tracing questions are common. Show step-by-step dry runs for full credit." },
      { subject: "Microprocessor & Microcontroller", semester: "4th Sem", department: "Electronics & Telecom", examType: "End Sem 2023", sourceHint: "ETC Lab + Gaonkar/Mazidi Textbook", topics: ["8085 Architecture", "8086 Instruction Set", "8051 Interfacing", "Memory Mapping", "Interrupt Handling"], difficulty: "Hard", tip: "Assembly language programs must include comments. Uncommented code loses 30% marks." },
      { subject: "Strength of Materials", semester: "3rd Sem", department: "Mechanical / Civil", examType: "End Sem 2024", sourceHint: "Mech Dept Notes + RK Rajput Solved Examples", topics: ["Stress & Strain", "Bending Moment Diagrams", "Torsion", "Column Buckling", "Shear Force"], difficulty: "Hard", tip: "BMD and SFD diagrams carry major marks. Use scale rulers and label all critical points." },
      { subject: "Applied Mathematics-III", semester: "3rd Sem", department: "All Branches", examType: "End Sem 2024", sourceHint: "Math Department Tutorials + Previous 5 Years Papers", topics: ["Laplace Transform", "Fourier Series", "Complex Analysis", "Probability & Statistics", "Z-Transform"], difficulty: "Hard", tip: "Start with Laplace transform questions; they're straightforward marks. Save complex analysis for last." }
    ],
    detailedPlacements: {
      yearWise: [
        { year: "2023-24", offers: 280, highestCTC: "₹38 LPA", avgCTC: "₹6.8 LPA", medianCTC: "₹5.8 LPA", companiesVisited: 75 },
        { year: "2022-23", offers: 250, highestCTC: "₹32 LPA", avgCTC: "₹6.2 LPA", medianCTC: "₹5.2 LPA", companiesVisited: 68 },
        { year: "2021-22", offers: 225, highestCTC: "₹28 LPA", avgCTC: "₹5.5 LPA", medianCTC: "₹4.8 LPA", companiesVisited: 60 }
      ],
      companyBreakdown: [
        { company: "TCS (Ninja)", role: "System Engineer", ctc: "₹3.6 LPA", studentsPlaced: 80, year: "2024" },
        { company: "TCS (Digital)", role: "Digital SDE", ctc: "₹7.0 LPA", studentsPlaced: 15, year: "2024" },
        { company: "Capgemini", role: "Analyst / ASE", ctc: "₹6.0 LPA", studentsPlaced: 45, year: "2024" },
        { company: "Accenture", role: "ASE", ctc: "₹4.5 LPA", studentsPlaced: 35, year: "2024" },
        { company: "L&T Infotech", role: "Platform Engineer", ctc: "₹7.5 LPA", studentsPlaced: 10, year: "2024" },
        { company: "Persistent Systems", role: "SDE", ctc: "₹10 LPA", studentsPlaced: 12, year: "2024" },
        { company: "Cognizant", role: "GenC Pro", ctc: "₹5.4 LPA", studentsPlaced: 30, year: "2024" },
        { company: "Mahindra & Mahindra", role: "GET (Core)", ctc: "₹7.0 LPA", studentsPlaced: 8, year: "2024" }
      ],
      branchWise: [
        { branch: "Comp Tech", avgCTC: "₹8.5 LPA", placed: "92%" },
        { branch: "IT", avgCTC: "₹7.8 LPA", placed: "88%" },
        { branch: "ETC", avgCTC: "₹5.8 LPA", placed: "78%" },
        { branch: "Mechanical", avgCTC: "₹5.2 LPA", placed: "72%" },
        { branch: "Electrical", avgCTC: "₹5.5 LPA", placed: "75%" },
        { branch: "Civil", avgCTC: "₹4.8 LPA", placed: "65%" }
      ]
    },
    studyResources: [
      { category: "DSA & Coding", resources: [
        { name: "LeetCode", url: "https://leetcode.com", desc: "Start with Easy problems, target 200+ by 6th sem" },
        { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", desc: "Best for theory + practice combined approach" }
      ]},
      { category: "University PYQs", resources: [
        { name: "YCCE Notes Drive", url: "#", desc: "Student-maintained Google Drive with PYQs and notes" },
        { name: "Departmental WhatsApp Groups", url: "#", desc: "Join via class representatives for exam question banks" }
      ]},
      { category: "Aptitude Prep", resources: [
        { name: "RS Aggarwal (Quantitative)", url: "#", desc: "Standard textbook used in YCCE T&P training modules" },
        { name: "PrepInsta", url: "https://prepinsta.com", desc: "Company-specific paper patterns for TCS, Capgemini, Accenture" }
      ]}
    ]
  },

  raisoni: {
    pyqResources: [
      { subject: "Artificial Intelligence & Machine Learning", semester: "5th Sem", department: "CSE-AIML", examType: "End Sem 2024", sourceHint: "AIML Dept + IEEE Student Chapter Notes", topics: ["Search Algorithms (A*, BFS)", "Decision Trees & Random Forests", "Neural Network Basics", "Regression Models", "NLP Fundamentals"], difficulty: "Moderate", tip: "Focus on algorithm comparisons and practical use-cases. Viva questions often ask 'when to use which model'." },
      { subject: "Internet of Things", semester: "6th Sem", department: "CSE / ECE", examType: "End Sem 2023", sourceHint: "IoT Lab Manual + Arduino/ESP32 Project Docs", topics: ["IoT Architecture & Protocols", "MQTT & CoAP", "Sensor Interfacing", "Cloud Integration (AWS IoT)", "Edge Computing Basics"], difficulty: "Moderate", tip: "Draw clean block diagrams for IoT architectures. Hardware setup photos in lab files get extra credit." },
      { subject: "Structural Analysis", semester: "5th Sem", department: "Civil Engineering", examType: "End Sem 2024", sourceHint: "Civil Dept Tutorial Sheets + Ramamrutham", topics: ["Deflection of Beams", "Influence Line Diagrams", "Portal Frames", "Moment Distribution", "Truss Analysis"], difficulty: "Hard", tip: "Moment distribution method is asked every year. Practice at least 5 different configurations." },
      { subject: "Engineering Mathematics-II", semester: "2nd Sem", department: "All Branches", examType: "End Sem 2024", sourceHint: "Math Faculty Handouts + Previous Year Solutions", topics: ["Differential Equations", "Vector Calculus", "Line & Surface Integrals", "Matrix Methods", "Numerical Methods"], difficulty: "Moderate-Hard", tip: "Solve tutorial sheet problems first; 60% of exam questions are directly from tutorials." }
    ],
    detailedPlacements: {
      yearWise: [
        { year: "2023-24", offers: 310, highestCTC: "₹45 LPA", avgCTC: "₹6.2 LPA", medianCTC: "₹5.5 LPA", companiesVisited: 82 },
        { year: "2022-23", offers: 275, highestCTC: "₹38 LPA", avgCTC: "₹5.8 LPA", medianCTC: "₹5.0 LPA", companiesVisited: 74 },
        { year: "2021-22", offers: 240, highestCTC: "₹32 LPA", avgCTC: "₹5.2 LPA", medianCTC: "₹4.5 LPA", companiesVisited: 65 }
      ],
      companyBreakdown: [
        { company: "Capgemini", role: "Analyst", ctc: "₹6.0 LPA", studentsPlaced: 55, year: "2024" },
        { company: "TCS", role: "System Engineer", ctc: "₹3.6 LPA", studentsPlaced: 70, year: "2024" },
        { company: "Infosys", role: "Systems Engineer", ctc: "₹5.5 LPA", studentsPlaced: 40, year: "2024" },
        { company: "Wipro", role: "Project Engineer", ctc: "₹5.0 LPA", studentsPlaced: 30, year: "2024" },
        { company: "Tech Mahindra", role: "Associate SDE", ctc: "₹4.5 LPA", studentsPlaced: 25, year: "2024" },
        { company: "Amazon (AWS Support)", role: "Cloud Support Assoc.", ctc: "₹8.0 LPA", studentsPlaced: 6, year: "2024" },
        { company: "Persistent Systems", role: "SDE", ctc: "₹10.0 LPA", studentsPlaced: 8, year: "2024" },
        { company: "Bosch", role: "Embedded SW Engineer", ctc: "₹9.5 LPA", studentsPlaced: 4, year: "2024" }
      ],
      branchWise: [
        { branch: "CSE / AI-ML", avgCTC: "₹8.2 LPA", placed: "90%" },
        { branch: "IT", avgCTC: "₹7.0 LPA", placed: "85%" },
        { branch: "ECE", avgCTC: "₹5.5 LPA", placed: "76%" },
        { branch: "Mechanical", avgCTC: "₹5.0 LPA", placed: "70%" },
        { branch: "Civil", avgCTC: "₹4.5 LPA", placed: "62%" }
      ]
    },
    studyResources: [
      { category: "Coding & Development", resources: [
        { name: "LeetCode", url: "https://leetcode.com", desc: "Focus on Easy & Medium for mass recruiter rounds" },
        { name: "FreeCodeCamp", url: "https://freecodecamp.org", desc: "Free full-stack web development certification" }
      ]},
      { category: "Cloud & Certifications", resources: [
        { name: "AWS Academy", url: "https://aws.amazon.com/education", desc: "Raisoni provides subsidized AWS certification vouchers" },
        { name: "Microsoft Learn", url: "https://learn.microsoft.com", desc: "Free Azure fundamentals certification path" }
      ]},
      { category: "PYQs & Exam Prep", resources: [
        { name: "Raisoni Student Portal", url: "#", desc: "Login for internal notes, attendance, and past papers" },
        { name: "Branch Study Circles", url: "#", desc: "Ask your CR for invite links to subject-wise Telegram channels" }
      ]}
    ]
  },

  iiitn: {
    pyqResources: [
      { subject: "Design & Analysis of Algorithms", semester: "4th Sem", department: "CSE", examType: "End Sem 2024", sourceHint: "IIITN CSE Faculty Notes + CLRS Textbook Problems", topics: ["Divide & Conquer", "Greedy Algorithms", "Graph Algorithms", "NP-Completeness", "Amortized Analysis"], difficulty: "Hard", tip: "Proofs of correctness are tested heavily. Practice writing induction-based proofs for greedy choices." },
      { subject: "Machine Learning", semester: "5th Sem", department: "CSE / AI", examType: "End Sem 2024", sourceHint: "ML Lab Jupyter Notebooks + Andrew Ng Course Notes", topics: ["Linear/Logistic Regression", "SVM & Kernel Tricks", "Decision Trees & Ensembles", "Clustering (K-Means, DBSCAN)", "Neural Nets & Backpropagation"], difficulty: "Hard", tip: "Mathematical derivations of loss functions and gradient descent are frequently asked. Know chain rule well." },
      { subject: "Computer Architecture & Organization", semester: "3rd Sem", department: "CSE / ECE", examType: "End Sem 2023", sourceHint: "CAO Lab + Patterson & Hennessy Reference", topics: ["RISC-V ISA Basics", "Pipelining & Hazards", "Cache Memory Design", "Virtual Memory", "Instruction-Level Parallelism"], difficulty: "Moderate-Hard", tip: "Cache hit/miss calculations and pipeline diagrams are exam staples. Practice CPI computation problems." },
      { subject: "Discrete Mathematics", semester: "2nd Sem", department: "CSE (All)", examType: "End Sem 2024", sourceHint: "Math Faculty Problem Sets + Rosen Textbook", topics: ["Propositional Logic", "Graph Theory & Trees", "Combinatorics", "Recurrence Relations", "Group Theory Basics"], difficulty: "Moderate", tip: "Graph theory questions are always present. Practice Euler/Hamiltonian path problems and chromatic numbers." }
    ],
    detailedPlacements: {
      yearWise: [
        { year: "2023-24", offers: 165, highestCTC: "₹86 LPA", avgCTC: "₹14.0 LPA", medianCTC: "₹12.0 LPA", companiesVisited: 55 },
        { year: "2022-23", offers: 140, highestCTC: "₹72 LPA", avgCTC: "₹12.5 LPA", medianCTC: "₹10.5 LPA", companiesVisited: 48 },
        { year: "2021-22", offers: 115, highestCTC: "₹55 LPA", avgCTC: "₹10.8 LPA", medianCTC: "₹9.0 LPA", companiesVisited: 40 }
      ],
      companyBreakdown: [
        { company: "Atlassian", role: "SDE-1", ctc: "₹52 LPA", studentsPlaced: 2, year: "2024" },
        { company: "Amazon", role: "SDE-1", ctc: "₹38 LPA", studentsPlaced: 4, year: "2024" },
        { company: "Goldman Sachs", role: "Analyst", ctc: "₹35 LPA", studentsPlaced: 3, year: "2024" },
        { company: "AlphaGrep", role: "Quant Dev", ctc: "₹42 LPA", studentsPlaced: 1, year: "2024" },
        { company: "Cisco", role: "Network SDE", ctc: "₹22 LPA", studentsPlaced: 5, year: "2024" },
        { company: "Nvidia", role: "Deep Learning Engineer", ctc: "₹28 LPA", studentsPlaced: 2, year: "2024" },
        { company: "JPMorgan Chase", role: "Tech Analyst", ctc: "₹18 LPA", studentsPlaced: 6, year: "2024" },
        { company: "Persistent Systems", role: "SDE", ctc: "₹12 LPA", studentsPlaced: 15, year: "2024" }
      ],
      branchWise: [
        { branch: "CSE", avgCTC: "₹16.5 LPA", placed: "95%" },
        { branch: "ECE", avgCTC: "₹11.0 LPA", placed: "85%" },
        { branch: "CSE (AI)", avgCTC: "₹15.2 LPA", placed: "92%" }
      ]
    },
    studyResources: [
      { category: "Competitive Programming", resources: [
        { name: "Codeforces", url: "https://codeforces.com", desc: "Target Specialist (1400+) rating by 3rd year" },
        { name: "LeetCode", url: "https://leetcode.com", desc: "350+ problems minimum for FAANG-level interviews" },
        { name: "AtCoder", url: "https://atcoder.jp", desc: "Clean math-heavy problems, popular in IIITN coding clubs" }
      ]},
      { category: "System Design & Architecture", resources: [
        { name: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer", desc: "Free comprehensive system design study guide" },
        { name: "Designing Data-Intensive Apps", url: "#", desc: "Martin Kleppmann's book - essential for HLD interviews" }
      ]},
      { category: "Research & ML", resources: [
        { name: "Papers With Code", url: "https://paperswithcode.com", desc: "Latest ML papers with reproducible code implementations" },
        { name: "Kaggle", url: "https://kaggle.com", desc: "Datasets, competitions, and notebooks for hands-on ML" },
        { name: "ArXiv", url: "https://arxiv.org", desc: "Preprint server for CS, AI, and engineering research papers" }
      ]}
    ]
  }
};

// Enhance faculty data with additional fields for all colleges
const FACULTY_ENHANCEMENTS = {
  vnit: [
    { rating: 4.3, teachingStyle: "Whiteboard + Live Coding", bestFor: "Competitive Programming & Research", examPattern: "40% Coding + 30% Theory + 30% Viva" },
    { rating: 3.9, teachingStyle: "Lab-first with Simulation Tools", bestFor: "VLSI / Embedded Careers & IISc Prep", examPattern: "50% Practical + 30% Numerical + 20% Theory" },
    { rating: 3.5, teachingStyle: "Chalk & Board + Design Charts", bestFor: "GATE / Core PSU Aspirants", examPattern: "60% Numericals + 40% Derivations" }
  ],
  rbu: [
    { rating: 4.4, teachingStyle: "PPT + Live Project Demos", bestFor: "Hackathons & Full Stack Roles", examPattern: "30% Theory + 40% Coding + 30% Project Demo" },
    { rating: 3.7, teachingStyle: "Blackboard + Formula Derivations", bestFor: "GATE & PSU Preparation", examPattern: "60% Numericals + 40% Theory & Proofs" },
    { rating: 3.3, teachingStyle: "Lecture + Drawing Practice", bestFor: "First-Year Foundation Building", examPattern: "50% Drawings + 30% Theory + 20% MCQ" }
  ],
  ycce: [
    { rating: 4.1, teachingStyle: "PPT + API Demo Sessions", bestFor: "Placement Prep & Web Development", examPattern: "35% Coding + 35% Theory + 30% Mini-Project" },
    { rating: 3.4, teachingStyle: "Chalk & Board Rigorous", bestFor: "Core Mech/Civil Competitive Exams", examPattern: "70% Derivations + 30% Numericals" },
    { rating: 3.8, teachingStyle: "Whiteboard + GATE PYQ Solving", bestFor: "GATE Aspirants & Higher Studies", examPattern: "50% Theory + 30% Numericals + 20% MCQ" }
  ],
  raisoni: [
    { rating: 4.2, teachingStyle: "Jupyter Notebooks + Research Papers", bestFor: "AI/ML Research & Patent Filing", examPattern: "40% Application + 30% Theory + 30% Lab" },
    { rating: 3.8, teachingStyle: "Hardware Lab + Breadboard Sessions", bestFor: "IoT Startups & Embedded Roles", examPattern: "50% Practical + 30% Circuit Design + 20% Theory" },
    { rating: 3.3, teachingStyle: "Field Survey + Practical Sessions", bestFor: "Core Civil Government Jobs", examPattern: "60% Numericals + 40% Field Report" }
  ],
  iiitn: [
    { rating: 4.5, teachingStyle: "Problem-Solving + Contest Review", bestFor: "FAANG Interviews & CP Ratings", examPattern: "60% Coding + 20% Proofs + 20% Theory" },
    { rating: 3.9, teachingStyle: "Vivado/FPGA Lab + Simulation", bestFor: "Chip Design & Hardware Careers", examPattern: "50% Lab Viva + 30% Design + 20% Theory" },
    { rating: 4.0, teachingStyle: "Presentation Skills + Group Work", bestFor: "Technical Communication & CGPA Boost", examPattern: "40% Presentation + 30% Report + 30% Peer Eval" }
  ]
};

// Runtime merge: Inject enriched data into CAMPUS_DATA
Object.keys(ENRICHED_DATA).forEach(collegeId => {
  if (CAMPUS_DATA[collegeId]) {
    Object.assign(CAMPUS_DATA[collegeId], ENRICHED_DATA[collegeId]);
  }
});

// Runtime merge: Inject faculty enhancements
Object.keys(FACULTY_ENHANCEMENTS).forEach(collegeId => {
  if (CAMPUS_DATA[collegeId] && CAMPUS_DATA[collegeId].facultyGuide && CAMPUS_DATA[collegeId].facultyGuide.insights) {
    const enhancements = FACULTY_ENHANCEMENTS[collegeId];
    CAMPUS_DATA[collegeId].facultyGuide.insights.forEach((insight, idx) => {
      if (enhancements[idx]) {
        Object.assign(insight, enhancements[idx]);
      }
    });
  }
});
