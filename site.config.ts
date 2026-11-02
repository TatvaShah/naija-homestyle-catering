import type { SiteConfig } from "@/lib/types";

const ig = "https://www.instagram.com/naijahomestylecatering/";

export const site: SiteConfig = {
  name: "Naija HomeStyle Catering by Margaret",
  tagline: "Authentic Nigerian home style catering and bulk soups in Scarborough, Toronto.",
  category: "Nigerian catering",
  schemaType: "FoodEstablishment",
  area: "Scarborough, ON",
  siteUrl: "https://naija-homestyle-catering.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#6f6c54" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Nigerian home style catering in Scarborough",
    headline: "Proper Naija food for your table and your party",
    subhead: "Smoky Jollof, rich Egusi, soft Amala and bulk soups in 2 Litre and 4 Litre bowls. Weddings, Owambe and corporate events, or just a night off from cooking. Send us a message to order.",
    images: [
      { src: "/images/jollof.jpg", alt: "Smoky Jollof rice with chicken" },
      { src: "/images/amala.jpg", alt: "Amala with Ewedu and Gbegiri" },
      { src: "/images/ofada.jpg", alt: "Ofada rice with sauce" },
    ],
    secondaryCta: { label: "Order on WhatsApp", href: "https://wa.link/2s1tho" },
  },

  highlights: ["Certified Food Handler", "Bulk soups any day of the week", "Weddings, Owambe and corporate events", "Order by WhatsApp or Instagram"],

  about: {
    title: "The flavours of home, made for you",
    body: [
      "Naija HomeStyle Catering by Margaret brings the rich, comforting flavours of authentic Nigerian home cooking to your table. We are proud to cater weddings, Owambe parties and corporate events, and we are a certified food handler.",
      "You asked, and we listened: we now do bulk Nigerian food and soup any day of the week, not just for events. Some nights you just don't want to cook, and that's what we're here for.",
    ],
    image: { src: "/images/chef-margaret.jpg", alt: "Margaret serving food at an event" },
  },

  menu: {
    title: "What we cook",
    intro: "A taste of our favourites. Tell us what you would like and we will confirm your order.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date, dishes and guest count.",
    groups: [
      {
        title: "Rice and swallows",
        items: [
          { name: "Jollof Rice", description: "Smoky party Jollof." },
          { name: "Ofada Rice" },
          { name: "Amala with Ewedu and Gbegiri" },
          { name: "Peppered chicken" },
        ],
      },
      {
        title: "Bulk soups and stews",
        note: "In 2 Litre and 4 Litre bowls. Just warm it up and enjoy.",
        items: [
          { name: "Egusi" },
          { name: "Efo Riro" },
          { name: "Okro Soup" },
          { name: "Ogbono" },
          { name: "Fresh Fish Soup" },
          { name: "Beef Stew" },
        ],
      },
      {
        title: "Event catering",
        items: [
          { name: "Weddings and Owambe parties", description: "Hot party Jollof, steaming soups and grills, ready to serve." },
          { name: "Corporate events", description: "Authentic Nigerian food for your team and guests." },
        ],
      },
    ],
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/jollof.jpg", width: 1080, height: 1350, alt: "Smoky Jollof rice", caption: "Smoky Jollof", href: "https://www.instagram.com/p/DfH_6t7iJKc/" },
      { src: "/images/amala.jpg", width: 1080, height: 1350, alt: "Amala with Ewedu and Gbegiri", caption: "Amala", href: "https://www.instagram.com/p/DfH_6t7iJKc/" },
      { src: "/images/ofada.jpg", width: 1080, height: 1350, alt: "Ofada rice", caption: "Ofada Rice", href: "https://www.instagram.com/p/DfH_6t7iJKc/" },
      { src: "/images/soup-bowls.jpg", width: 640, height: 1136, alt: "Bowls of Nigerian soups and rice", caption: "Leave the soup to us", href: "https://www.instagram.com/p/Dej6ZjeIUpi/" },
      { src: "/images/bulk-trays.jpg", width: 480, height: 854, alt: "Bulk trays of Jollof and fried rice", caption: "Bulk food any day of the week", href: "https://www.instagram.com/p/DfAizpdo8Pl/" },
      { src: "/images/party-rice.jpg", width: 640, height: 1136, alt: "Tray of party fried rice", caption: "A night off from cooking", href: "https://www.instagram.com/p/Deul4Wgojw6/" },
      { src: "/images/chef-margaret.jpg", width: 1080, height: 1350, alt: "Margaret serving at an event", caption: "Serving with love", href: "https://www.instagram.com/p/De2K_oIoq1S/" },
      { src: "/images/thanksgiving.jpg", width: 480, height: 854, alt: "Pot of Jollof rice for Thanksgiving", caption: "From our table to yours", href: "https://www.instagram.com/p/DeZLhH5oBmA/" },
    ],
  },

  instagram: {
    handle: "naijahomestylecatering",
    embeds: ["https://www.instagram.com/p/DfAizpdo8Pl/"],
    embedsTitle: "Fresh from our kitchen",
  },

  order: {
    title: "Ordering is easy",
    intro: "Send us a message on Instagram or WhatsApp between 10am and 5pm, tell us what you want, and we confirm your order. Tap the button to copy a starter message.",
    dmMessage: "Hi Margaret! I would like to order from Naija HomeStyle Catering.\nDate needed:\nNumber of guests:\nDishes or soups (and bowl size, 2L or 4L):\nPickup or delivery:",
    links: [{ label: "Order on WhatsApp", href: "https://wa.link/2s1tho" }],
    note: "Messages answered between 10am and 5pm.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Message us on Instagram or WhatsApp between 10am and 5pm. Tell us what you want and we confirm your order." },
    { q: "Do you only cater events?", a: "Not anymore. We now do bulk Nigerian food and soup any day of the week, as well as weddings, Owambe and corporate events." },
    { q: "What sizes do the soups come in?", a: "Our soups come in 2 Litre and 4 Litre bowls. Just warm it up and enjoy." },
  ],

  contact: {
    area: "Scarborough, Toronto, Ontario",
    socials: [{ label: "WhatsApp", href: "https://wa.link/2s1tho" }, { label: "Instagram @naijahomestylecatering", href: ig }],
  },

  seo: {
    title: "Naija HomeStyle Catering by Margaret | Nigerian catering in Scarborough",
    description: "Authentic Nigerian catering and bulk soups in Scarborough, Toronto. Jollof, Egusi, Amala and more for events or any day. Order by Instagram or WhatsApp.",
    keywords: ["Nigerian catering Scarborough", "Nigerian food Toronto", "bulk Nigerian soup Toronto", "Owambe catering Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
