const schoolConfig = {
  /* ---- Identity ---- */
  name: "Texcel Schools",
  tagline: "Raising The Joy of Nations",
  heroTitle: "Raising The Joy of Nations",
  heroSubtitle: "since 2011",
  heroText:
    "Building confident, knowledgeable and responsible young minds through quality education, discipline and character.",

  location:
    "13/15, Olabisi Seriki Street, Majek Bus Stop (By Celestial Church), Opposite Fara park Estate Abijo-Ajah, Lagos",
  addressLines: [
    "13/15, Olabisi Seriki Street",
    "Majek Bus Stop (By Celestial Church)",
    "Opposite Fara park Estate Abijo-Ajah, Lagos",
  ],

  phone: "+234 703 711 6024",
  email: "info@texcelschool.com",
  whatsapp: "2348060428000",
  whatsappMessage:
    "Hello texcel Schools, I would like to make an enquiry about admission.",
  openingHours:
    "Monday to Friday, 8:00am to 4:00pm (update in Admin > Settings)",

  logo: "assets/images/facilities/logo.jpg",

  heroVideo: "assets/videos/school-hero.mp4",

  heroPoster: "assets/images/facilities/logo.jpg",

  images: {
    about: "assets/images/facilities/building.jpg",
    creche: "assets/images/facilities/kids.jpg",
    nursery: "assets/images/facilities/class.jpg",
    primary: "assets/images/facilities/pryAssembly.jpg",
    college: "assets/images/facilities/assembly.jpg",
  },

  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.354431716398!2d3.6541889749924574!3d6.471305993520402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf951eaf38345%3A0x13eb1c618447402b!2sTeresh%20Eternal%20Excellence%20School%20(Texcels)!5e1!3m2!1sen!2sng!4v1793456988610!5m2!1sen!2sng",
  schoolLocations: {
    primary: {
      address: "See the map below for this school's location.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16766.09517959793!2d3.6464641512850067!3d6.471305883366621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTeresh%20Eternal%20Excellence%20School%20(Texcels)!5e1!3m2!1sen!2sng!4v1793705355860!5m2!1sen!2sng",
      whatsapp: "2347037116024",
    },
    college: {
      address: " Chima Unachukwu Drive Abijo-Ajah.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16766.09517959793!2d3.6464641512850067!3d6.471305883366621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTeresh%20Eternal%20Excellence%20School%20(Texcels)!5e1!3m2!1sen!2sng!4v1793705355860!5m2!1sen!2sng",

      whatsapp: "2348039165177",
    },
  },
  colors: { primary: "#121F3E", secondary: "#F4C430" },
  social: {
    facebook: "https://web.facebook.com/TEXCELS/?_rdc=1&_rdr#",
    instagram: "https://www.instagram.com/texcel_schools/",
    youtube: "https://youtube.com/@TEXCELSchools?si=2tks3uSxIaijQB-X ",
    tiktok: "https://www.tiktok.com/search?q=texcel%20schools&t=1793475923849",
  },

  designer: " | Sowftech",

  stats: { years: 10, students: 1200, staff: 40, programs: 12 },

  /* ---- Sections of the school ---- */
  levels: [
    {
      id: "creche",
      name: "Crèche",
      age: "Ages 0 to 2 ",
      desc: "Specially designed curriculum prepared for them helps to promote social, intellectual, physical, and emotional development",
      focus: [
        "Caring, closely supervised daily routines",
        "Sensory play and early movement",
        "First words, songs and stories",
      ],
      classes: ["Crèche"],
    },
    {
      id: "nursery",
      name: "Pre School",
      age: "Ages 3 to 5 ",
      desc: "Building strong foundations through play, discovery and early learning.",
      focus: [
        "Early literacy and numeracy through play",
        "Creative arts, rhymes and music",
        "Social skills, sharing and good manners",
      ],
      classes: ["Nursery 1", "Nursery 2", "Nursery 3"],
    },
    {
      id: "primary",
      name: "Primary School",
      detailPage: "/primary-school",
      leader: "primaryHead",
      age: "Primary 1 to Primary 6",
      desc: "Developing academic knowledge, confidence, creativity and character.",
      focus: [
        "Strong core subjects: English, Mathematics and Science",
        "ICT, sports and creative arts every week",
        "Moral education and leadership roles",
      ],
      classes: [
        "Primary 1",
        "Primary 2",
        "Primary 3",
        "Primary 4",
        "Primary 5",
        "Primary 6",
      ],
    },
    {
      id: "college",
      name: "college ",
      detailPage: "/college",
      leader: "principal",
      age: "JSS 1 to SS 3",
      desc: "Preparing students for higher education, leadership and future opportunities.",
      focus: [
        "Rigorous subject teaching and examination preparation",
        "Mentoring, clubs and student leadership",
        "Guidance towards university and career paths",
      ],
      classes: ["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"],
    },
  ],

  about: {
    intro:
      "Curiosity begins here with us at Texcel schools . Texcels  allows our little ones to safely explore their environment with their five (5) senses.",
    mission:
      "We are dedicated to inspire, nurture and educate children in a conducive, safe and prepared environment through highly skilled professionals, making learning easier for children and developing them to become seasoned future leaders and Joy of Many Nations.",
    vision:
      "dddTo raise children that are excellent morally and academically, ultimately becoming solid and responsible future leaders.",
  },

  values: [
    {
      title: "Discipline",
      icon: "shield",
      text: "Clear routines and high standards that help children grow in self-control.",
    },
    {
      title: "Excellence",
      icon: "target",
      text: "We aim for the best in every lesson, every activity and every result.",
    },
    {
      title: "Integrity",
      icon: "scale",
      text: "Honesty and fairness guide how our pupils and staff behave.",
    },
    {
      title: "Leadership",
      icon: "crown",
      text: "Every child gets chances to lead, speak up and serve others.",
    },
    {
      title: "Character",
      icon: "heart",
      text: "Respect, kindness and responsibility are taught as carefully as mathematics.",
    },
    {
      title: "Innovation",
      icon: "bulb",
      text: "Curious minds are encouraged to ask questions and try new ideas.",
    },
  ],

  admissionSteps: [
    {
      title: "Submit enquiry",
      text: "Fill in the enquiry form below or message us on WhatsApp.",
    },
    {
      title: "Schedule a visit",
      text: "Tour the school and meet our team at a time that suits you.",
    },
    {
      title: "Complete admission form",
      text: "Provide your child's details and the required documents.",
    },
    {
      title: "Assessment or interview",
      text: "A friendly, age-appropriate assessment for your child.",
    },
    {
      title: "Admission confirmation",
      text: "We confirm the outcome and share the next steps.",
    },
    {
      title: "Enrollment",
      text: "Complete payment and welcome your child to the school.",
    },
  ],

  galleryCategories: [
    "Classrooms",
    "Students",
    "Events",
    "Sports",
    "Graduation",
    "Cultural Activities",
    "Facilities",
  ],
  newsCategories: [
    "Announcement",
    "Admissions",
    "Events",
    "Sports",
    "Academics",
    "Parents",
  ],

  siteUrl: "", // e.g about. "https://www.texcel.com" (used for SEO; update canonical tags in the HTML too)
};
