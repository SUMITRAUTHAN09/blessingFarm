export const RESORT = {
  name:        "Blessing Farm & Resort",
  tagline:     "श्रेष्ठ संस्कारो का पावन आंगन",
  taglineEn:   "The Sacred Courtyard of Noble Values",
  phone1:      "72485 21135",
  phone1Raw:   "7248521135",
  phone2:      "97983 67261",
  phone2Raw:   "9798367261",
  owner:       "Mr. Chandra Shekhar Singh",
  address:     "Near Ramnagra Rice Mill, Sonbarsa Road, Sitamarhi, Bihar",
  addressShort:"Sonbarsa Road, Sitamarhi",
} as const;

export const FEATURES = [
  { id:'01', label: "Parking" },
  { id:'01', label: "Catering" },
  { id:'01', label: "Decoration" },
  { id:'01', label: "AC Hall" },
  { id:'01', label: "Wedding Venue" },
] as const;

export const STATS = [
  { num: "50+",  label: "Events Hosted" },
  { num: "500+", label: "Happy Guests" },
  { num: "1+",   label: "Years of Excellence" },
  { num: "100%",  label: "Client Satisfaction" },
] as const;

export const SERVICES = [
  {
    category:  "Weddings",
    title:     "Grand Wedding Ceremony",
    desc:      "Transform your dream wedding into reality in our beautifully adorned halls. We handle every detail — from floral arrangements to seating, lighting, and guest comfort.",
    features:  ["Bridal Room", "Mandap Setup", "Floral Decor", "Stage Design"],
    highlight: true,
  },
  {
    category:  "Weddings",
    title:     "Engagement & Roka",
    desc:      "Celebrate the beginning of a beautiful journey with our intimate yet elegant engagement ceremony setups tailored to your family traditions.",
    features:  ["Ring Ceremony Setup", "Intimate Decor", "Photography Spots", "Welcome Drinks"],
    highlight: false,
  },
  {
    category:  "Events",
    title:     "Birthday Celebrations",
    desc:      "From kids' birthday parties to milestone adult celebrations, we create magical birthday experiences full of joy and cherished memories.",
    features:  ["Themed Decor", "Cake Ceremony", "Entertainment Zone", "Custom Menu"],
    highlight: false,
  },
  {
    category:  "Events",
    title:     "Corporate Events",
    desc:      "Professional conference rooms and banquet halls for seminars, meetings, product launches, and corporate gatherings.",
    features:  ["AV Equipment", "Projector Setup", "Business Catering", "Breakout Spaces"],
    highlight: false,
  },
  {
    category:  "Facilities",
    title:     "AC Hall",
    desc:      "Our fully air-conditioned main hall accommodates large gatherings in complete comfort, with modern acoustics and elegant interiors.",
    features:  ["500+ Capacity", "Modern AV", "Stage & Podium", "Restrooms"],
    highlight: true,
  },
  {
    category:  "Facilities",
    title:     "Catering Services",
    desc:      "A diverse menu featuring authentic Bihari cuisine, North Indian delicacies, and continental options prepared by expert chefs.",
    features:  ["Live Cooking", "Veg & Non-veg", "Sweets & Desserts", "Beverages"],
    highlight: false,
  },
  {
    category:  "Facilities",
    title:     "Decoration & Design",
    desc:      "Our creative decoration team crafts stunning visual experiences tailored to your event theme and personal preferences.",
    features:  ["Floral Design", "Lighting Setup", "Balloon Decor", "Theme Curation"],
    highlight: false,
  },
  {
    category:  "Facilities",
    title:     "Parking & Logistics",
    desc:      "Spacious and secure parking facilities to accommodate all your guests, with dedicated staff for seamless entry and exit.",
    features:  ["200+ Vehicles", "Valet Option", "Security", "Easy Access"],
    highlight: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "The most beautiful wedding venue in Sitamarhi! The decoration, catering and overall hospitality was beyond our expectations. Our guests are still talking about it.",
    name:  "Priya & Rahul Sharma",
    event: "Wedding Reception",
  },
  {
    quote: "We organized our family function here and it was a grand success. The AC hall is spacious, staff is cooperative, and the food was absolutely delicious.",
    name:  "Suresh Kumar",
    event: "Family Function",
  },
  {
    quote: "Blessing Farm truly lives up to its name — a blessed venue for blessed occasions. The ambiance, service and attention to detail is unmatched in this region.",
    name:  "Meena Devi",
    event: "Engagement Ceremony",
  },
] as const;

export const VALUES = [
  { id: '01', value: "Tradition",  desc: "Honouring the rich cultural heritage of our region in every celebration" },
  { id: '02', value: "Excellence", desc: "Delivering world-class quality in every service and interaction" },
  { id: '03', value: "Warmth",     desc: "Treating every guest like family — with care, love, and respect" },
  { id: '04', value: "Trust",      desc: "Building lasting relationships through transparency and reliability" },
] as const;

export const PROCESS_STEPS = [
  { step: "01", title: "Contact Us",      desc: "Call Mr. Chandra Shekhar Singh or visit us on Sonbarsa Road, Sitamarhi." },
  { step: "02", title: "Discuss & Plan",  desc: "Share your vision, date, and requirements. We tailor the perfect package." },
  { step: "03", title: "Book & Confirm",  desc: "Finalize the booking with a simple advance payment. Date secured!" },
  { step: "04", title: "Celebrate!",      desc: "Arrive and let us handle everything while you enjoy your special day." },
] as const;

export const VENUE_STATS = [
  { num: "500+",  label: "Guest Capacity" },
  { num: "5000",  label: "Sq. Ft. Area"   },
  { num: "24/7",  label: "Staff Support"  },
  { num: "100%",  label: "AC Coverage"    },
] as const;

export const CONTACT_INFO = [
  { label: "Address",           text: RESORT.address,                          href: undefined },
  { label: "Primary Contact",   text: `${RESORT.phone1} (${RESORT.owner})`,    href: `tel:${RESORT.phone1Raw}` },
  { label: "Alternate Contact", text: RESORT.phone2,                           href: `tel:${RESORT.phone2Raw}` },
  { label: "Availability",      text: "Available 7 days a week for inquiries", href: undefined },
] as const;

export const GALLERY = [
  { src: "/gallery/gallery-1.jpg", alt: "Wedding Hall",    caption: "Grand wedding hall",      tag: "Wedding"  },
  { src: "/gallery/gallery-2.jpg", alt: "Garden",          caption: "Beautiful garden area",   tag: "Outdoor"  },
  { src: "/gallery/gallery-3.jpg", alt: "Catering",        caption: "Premium catering setup",  tag: "Catering" },
  { src: "/gallery/gallery-4.jpg", alt: "Stage Decor",     caption: "Stunning stage decor",    tag: "Decor"    },
  { src: "/gallery/gallery-5.jpg", alt: "AC Hall",         caption: "500+ guest capacity",     tag: "Hall"     },
] as const;