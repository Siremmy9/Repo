const schoolContent = {
  leadership: {
    proprietress: {
      name: "Mrs Olufadeji Foluso",
      title: "Proprietress",
      photo: "assets/images/facilities/propiertress.jpg",
      welcome: [
        "Welcome to Texcel Schools. We believe every child deserves a caring, safe and inspiring environment in which to learn, grow in confidence and discover their potential.",
        "Our dedicated team works in partnership with families to nurture strong character, curiosity and academic progress. Thank you for considering Texcel Schools for your child's journey. We look forward to welcoming your family.",
      ],
    },
    principal: {
      name: "Mr Odeniyi",
      title: "Principal, Secondary School",
      photo: "assets/images/facilities/logo.jpg",
      welcome: [
        "Welcome to the Secondary School at Texcel Schools. We are committed to helping every student grow in knowledge, character and confidence as they prepare for the opportunities ahead.",
        "We value the partnership between school and family and look forward to supporting your child's next stage of learning.",
      ],
    },
    primaryHead: {
      name: "Mrs Adeleke",
      title: "Headmistress, Primary School",
      photo: "assets/images/facilities/mistress.jpeg",
      welcome: [
        "Welcome to the Primary School at Texcel Schools. Our aim is to give every child a strong foundation for learning while helping them grow in confidence, creativity and character.",
        "We look forward to working with your family and making your child's primary years happy, purposeful and full of discovery.",
      ],
    },
  },
  staff: [
    {
      name: "Mrs Olufadeji Foluso ",
      position: "Educational Director",
      department: "Administration",
      photo: "assets/images/facilities/propiertress.jpg",
      bio: "Founder. Seasoned Educationist, devoted, disciplined, agile and caring mother",
    },
    {
      name: "Mr Odeniyi",
      position: "Principal",
      department: "Administration",
      photo: "assets/images/logo.jpg",
      bio: "Principal with a primary purpose of raising excellent and morally upright people, leaders and world changers in the country",
    },
    {
      name: "Mrs Adeleke",
      position: "Vice Principal",
      department: "Primary",
      photo: "assets/images/client3.jpg",
      bio: "Head Teacher with a primary purpose of raising excellent and morally upright people, leaders and world changers in the country",
    },
    {
      name: "Mr Ibrahim Lawal",
      position: "Head Teacher",
      department: "Nursery",
      photo: "assets/images/logo.jpg",
      bio: "Expedita officia magni enim autem ad sed aperiam porro. Sunt mollitia ducimus cumque unde.",
    },
    {
      name: "Miss Chioma",
      position: "Asst Head Teacher",
      department: "Secondary",
      photo: "assets/images/logo.jpg",
      bio: "Expedita officia magni enim autem ad sed aperiam porro. Sunt mollitia cumque unde.",
    },
    {
      name: "Mrs. A. Okafor",
      position: "Administrator",
      department: "School Office",
      photo: "assets/images/logo.jpg",
      bio: "ad sed aperiam porro. Sunt mollitia quidem voluptatum ducimus cumque unde.",
    },
  ],

  /* ------ GALLERY  what we stand for ------ */
  // category must be one of: Classrooms, Students, Events, Sports, Graduation,
  // Cultural Activities, Facilities  (list is galleryCategories in config.js)
  gallery: [
    {
      image: "assets/images/facilities/admission.jpg",
      caption: "Admission",
      category: "Classrooms",
    },
    {
      image: "assets/images/facilities/prybuilding.jpg",
      caption: "Primary School building",
      category: "Classrooms",
    },
    {
      image: "assets/images/facilities/exc.jpg",
      caption: "Outdoor Learning ",
      category: "Students",
    },
    {
      image: "assets/images/facilities/excursion.jpg",
      caption: "Outdoor Learning ",
      category: "Students",
    },
    {
      image: "assets/images/gallery/computerlab.jpg",
      caption: "ICT Lab",
      category: "ICT Laboratory",
    },
    {
      image: "assets/images/gallery/graduation.jpg",
      caption: "Graduation day",
      category: "Graduation",
    },
    {
      image: "assets/images/facilities/drama.jpg",
      caption: "Cultural parade",
      category: "Outdoor Activities",
    },
    {
      image: "assets/images/facilities/hero.jpg",
      caption: "Students",
      category: "Outdoor Activities",
    },
    {
      image: "assets/images/facilities/musicstudent.jpg",
      caption: "Music Presentation",
      category: "Outdoor Activities",
    },
    {
      image: "assets/images/gallery/lab.jpg",
      caption: "Science corner",
      category: "Facilities",
    },
    {
      image: "assets/images/facilities/assembly.jpg",
      caption: "Assembly",
      category: "Students",
    },
    {
      image: "assets/images/facilities/pryAssembly.jpg",
      caption: "Assembly",
      category: "Students",
    },
    {
      image: "assets/images/facilities/sport.jpg",
      caption: "Inter-house relay",
      category: "Sports",
    },
    {
      image: "assets/images/gallery/playground.jpg",
      caption: "Inter-house relay",
      category: "Sports",
    },
    {
      image: "assets/images/facilities/sax.jpg",
      caption: "Outdoor Learning ",
      category: "Students",
    },
    {
      image: "assets/images/gallery/arts.jpg",
      caption: "Art lesson",
      category: "Classrooms",
    },
    {
      image: "assets/images/gallery/openday.jpg",
      caption: "Open day",
      category: "Events",
    },
    {
      image: "assets/images/facilities/wazobia.jpg",
      caption: "Wazobia Visit",
      category: "Events",
    },
    {
      image: "assets/images/facilities/firstaid.jpg",
      caption: "Medical Team",
      category: "Facilities",
    },
    {
      image: "assets/images/gallery/bus.jpg",
      caption: "School Bus",
      category: "School Bus",
    },
  ],

  /* --- NEWS & EVENTS --- */
  // date: "YYYY-MM-DD".  published: false hides an article without deleting it.
  // content: full text; use a blank line between paragraphs.
  news: [
    {
      title: "School Admission",
      category: "Announcement",
      date: "2026-09-14",
      image: "assets/images/facilities/admission.jpg",
      published: true,
      excerpt:
        "Resumption dates, school hours and first-week arrangements are shared here once confirmed.",
      content: "",
      // Replace this sample text with the real announcement from the school.\n\nContact the school office or message us on WhatsApp if you have questions.
    },
    {
      title: "After-School Services",
      category: "Announcement",
      date: "2026-09-07",
      image: "assets/images/facilities/aftschool.jpg",
      published: true,
      excerpt:
        "Highlights, house points and photos from the school's sports competition.",
      content: "TBA.",
    },
    {
      title: "Inter-House Sports",
      category: "Sports",
      date: "2026-09-07",
      image: "assets/images/facilities/sport.jpg",
      published: true,
      excerpt:
        "Highlights, house points and photos from the school's sports competition.",
      content: "TBA.",
    },
    {
      title: "Graduation Ceremony",
      category: "Events",
      date: "2026-08-30",
      image: "assets/images/facilities/graduation.jpg",
      published: true,
      excerpt:
        "Details of the ceremony for graduating pupils, with a guide for families.",
      content: "TBA.",
    },
    {
      title: "Parents Meeting",
      category: "Parents",
      date: "2026-08-23",
      image: "assets/images/facilities/kidsteachers.jpg",
      published: true,
      excerpt: "Date, time and agenda for the next parents' meeting.",
      content: "TBA.",
    },
    {
      title: "Cultural Day",
      category: "Events",
      date: "2026-08-15",
      image: "assets/images/facilities/drama.jpg",
      published: true,
      excerpt:
        "A day to celebrate Nigerian cultures through food, dress, music and dance.",
      content: "TBA.",
    },
    {
      title: "Excursion",
      category: "Events",
      date: "2026-08-07",
      image: "assets/images/facilities/excursion.jpg",
      published: true,
      excerpt:
        "Where our pupils are going, what to bring and how to give consent.",
      content: "TBA.",
    },
    {
      title: "Music Festival ",
      category: "Announcements",
      date: "2026-07-21",
      image: "assets/images/facilities/sax.jpg",
      published: true,
      excerpt:
        "Admission is open. Read how to begin the process for your child.",
      content:
        "Admission is open for Crèche, Nursery, Primary and Secondary.\n\nUse the Apply Now button or message us on WhatsApp.",
    },
    {
      title: "Examination Timetable",
      category: "Academics",
      date: "2026-07-29",
      image: "",
      published: false,
      excerpt: "The examination timetable and guidance for parents and pupils.",
      content: "TBA.",
    },
    {
      title: "Christmas Celebration ",
      category: "Announcements",
      date: "2026-07-21",
      image: "assets/images/facilities/christmas.jpg",
      published: true,
      excerpt:
        "Admission is open. Read how to begin the process for your child.",
      content:
        "Admission is open for Crèche, Nursery, Primary and Secondary.\n\nUse the Apply Now button or message us on WhatsApp.",
    },
  ],

  /*  FACILITIES ---- */
  facilities: [
    {
      title: "Modern Classrooms",
      description:
        "Bright, well-ventilated classrooms arranged for active learning.",
      image: "assets/images/gallery/reading.jpg",
    },
    {
      title: "ICT Laboratory",
      description:
        "Computers for hands-on digital skills from the early years.",
      image: "assets/images/gallery/computerlab.jpg",
    },
    {
      title: "Science Laboratory",
      description: "Safe space for experiments that bring science to life.",
      image: "assets/images/gallery/lab.jpg",
    },
    {
      title: "Library",
      description: "A quiet reading space with age-appropriate books.",
      image: "assets/images/gallery/library.jpg",
    },
    {
      title: "Playground",
      description: "Safe outdoor play areas for the youngest learners.",
      image: "assets/images/facilities/surrounding.jpg",
    },
    {
      title: "Musical Equipments",
      description:
        "Space for football, athletics and inter-house competitions.",
      image: "assets/images/facilities/musickids.jpg",
    },
    {
      title: "School Bus",
      description: "Safe, supervised transport on set routes.",
      image: "assets/images/gallery/bus.jpg",
    },
    // {
    //   title: "Security",
    //   description: "Controlled access and attentive staff on duty.",
    //   image: "",
    // },
    {
      title: "Cafeteria",
      description: "Clean, supervised space for meals and snacks.",
      image: "assets/images/gallery/cafteria.jpg",
    },
    {
      title: "Medical and First Aid",
      description: "First-aid support for minor injuries and emergencies.",
      image: "assets/images/facilities/firstaid.jpg",
    },
    {
      title: "Creative Arts Area",
      description: "A dedicated area for art, music and drama.",
      image: "assets/images/gallery/arts.jpg",
    },
  ],

  /* ----- ACADEMICS ----- */
  academicsApproach: [
    {
      title: "Curriculum",
      description:
        "A structured, age-appropriate curriculum that builds strong foundations in literacy, numeracy, science and the arts.",
    },
    {
      title: "ICT education",
      description:
        "Computer skills, safe internet use and early coding ideas taught at each stage.",
    },
    {
      title: "Co-curricular activities",
      description:
        "Clubs and societies that let pupils explore interests beyond the classroom.",
    },
    {
      title: "Sports",
      description:
        "Regular physical education, team games and inter-house competitions.",
    },
    {
      title: "Creative arts",
      description:
        "Art, music, drama and dance to build expression and confidence.",
    },
    {
      title: "Leadership development",
      description:
        "Prefect roles, public speaking and service projects for every age group.",
    },
    {
      title: "Moral and character education",
      description:
        "Lessons and daily routines that build honesty, respect and responsibility.",
    },
  ],
  academicsSubjects: [
    "Mathematics",
    "English Language",
    "Basic Science",
    "Computer Studies",
    "Social Studies",
    "Civic Education",
    "Literature",
    "Creative Arts",
    "Physical Education",
    "Religious and Moral Education",
  ],

  /* ---- TESTIMONIALS --- */
  testimonials: [
    {
      name: "Mrs Esther",
      childClass: "Parent, Primary 4",
      photo: "assets/images/client1.jpg",
      quote:
        "We are grateful for the quality of education and care our child receives.",
    },
    {
      name: "Mrs Tim Andrew",
      childClass: "Parent, Nursery 2",
      photo: "assets/images/client2.jpg",
      quote:
        "The teachers know every child by name, and our son looks forward to school every morning.",
    },
    {
      name: "Mrs Akindele ",
      childClass: "Parent, JSS 2",
      photo: "assets/images/client3.jpg",
      quote:
        "Discipline and academics go together here. We have seen real growth in confidence.",
    },
    {
      name: "Miss Janet ",
      childClass: "Parent, Crèche",
      photo: "assets/images/client1.jpg",
      quote:
        "Communication with the school is quick and clear, and the staff are always welcoming.",
    },
  ],

  /* ------- FEES -------- */
  // Type an amount like "₦XX,XXX" or "Contact School". Keys match the "id" of
  // each school in config.js (creche, nursery, primary, secondary).
  fees: {
    levels: {
      creche: {
        tuition: "20,000",
        registration: "10,000",
        levy: "10,000",
        books: "5,000",
        uniform: "5,000",
        other: "10,000",
      },
      nursery: {
        tuition: "25,000",
        registration: "15,000",
        levy: "15,000",
        books: "20,000",
        uniform: "10,000",
        other: "10,000",
      },
      primary: {
        tuition: "30,000",
        registration: "20,000",
        levy: "15,000",
        books: "20,000",
        uniform: "10,000",
        other: "15,000",
      },
      secondary: {
        tuition: "35,000",
        registration: "25,000",
        levy: "15,000",
        books: "20,000",
        uniform: "15,000",
        other: "20,000",
      },
    },
    payment: {
      note: "Fees and payment information can be updated by the school administrator.",
      bankName: "Bank Name",
      accountName: " Texcel Schools",
      accountNumber: "XXXXXXXXXX",
      instructions:
        "Please use your child's full name and class as the payment reference, and send proof of payment to the school office or via WhatsApp.",
      methods: [
        {
          name: "Bank Transfer",
          desc: "Transfer to the school account shown below and keep your receipt.",
        },
        { name: "POS", desc: "Pay by card at the school payment office." },
        {
          name: "School Payment Office",
          desc: "Pay in person at the bursary during opening hours.",
        },
        {
          name: "Online Payment",
          desc: "Online payment link to be provided by the school.",
        },
      ],
    },
  },
};
