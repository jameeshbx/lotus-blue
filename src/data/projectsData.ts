export interface Project {
  id: string;
  title: string;
  description: string;
  images: {
    main: string;
    overlay: string;
  };
  layout: 'left' | 'right'; // Determines if text is on left or right side
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Expay",
    description: "From Students To Startups, See How Expay Simplifies Cross-Border Payments And Makes Global Money Movement Seamless.",
    images: {
      main: "/expay-main.png",
      overlay: "/expay-sub.png"
    },
    layout: "right"
  },
  {
    id: "2",
    title: "Elneera",
    description: "Smart Tools for Smarter Agencies — Manage Itineraries, Bookings, and DMC Communications with Ease.",
    images: {
      main: "/elneera-main.png",
      overlay: "/elneera-sub.png"
    },
    layout: "left"
  },
  {
    id: "3",
    title: "BuyEx - Fintech",
    description: "We Handle The Forex Heavy Lifting, While You Deliver Exceptional Study Abroad Solutions.",
    images: {
      main: "/buyex-main.png",
      overlay: "/buyex-sub.png"
    },
    layout: "right"
  },
  {
    id: "4",
    title: "nSpire",
    description: "From Students To Startups, See How Expay Simplifies Cross-Border Payments And Makes Global Money Movement Seamless.",
    images: {
      main: "/nspire-main.png",
      overlay: "/nspire-main.png"
    },
    layout: "left"
  }
];
