//  Coffee Collection
type Coffee = {
  label: string;
  url: string;
  text: string;
};

export const COFFEE_COL: Coffee[] = [
  {
    label: "Gran Espresso",
    text: "Light and flavorful blend with cocoa and black pepper for an intense experience.",
    url: "/gran-espresso.png",
  },
  {
    label: "Planalto",
    text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    url: "/planalto.png",
  },
  {
    label: "Piccolo",
    text: "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
    url: "/piccollo.png",
  },
  {
    label: "Danche",
    text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
    url: "/danche.png",
  },
];

export const BENEFIT: Coffee[] = [
  {
    label: "Best quality",
    text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    url: "/icon-coffee-bean.svg",
  },
  {
    label: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    url: "/icon-gift.svg",
  },
  {
    label: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    url: "/icon-truck.svg",
  },
];

type Plan = {
  label: string;
  title: string;
  text: string;
};

export const PICK_PLAN: Plan[] = [
  {
    label: "01",
    title: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    label: "02",
    title: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    label: "03",
    title: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

type HeadQuarter = {
  url: string;
  country: string;
  street: string;
  city: string;
  state_zip: string;
  phone: number;
};

export const HEAD_QUARTERS: HeadQuarter[] = [
  {
    url: "/illustration-uk.svg",
    country: "United Kingdom",
    street: "68 Asfordby Rd",
    city: "Alcaston",
    state_zip: "SY61YA",
    phone: +441241918425,
  },
  {
    url: "/illustration-canada.svg",
    country: "Canada",
    street: "1528 Eglinton Avenue",
    city: "Toronto",
    state_zip: "Ontario M4P1A6",
    phone: +14164852997,
  },
  {
    url: "/illustration-australia.svg",
    country: "Australia",
    street: "36 Swanston Street",
    city: "Kewell",
    state_zip: "Victoria",
    phone: +61499283629,
  },
];
