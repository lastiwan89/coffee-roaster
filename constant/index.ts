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

type Icons = {
  id: number;
  label: string;
  url: string;
};

export const SOCIAL_ICON: Icons[] = [
  {
    id: 1,
    label: "facebook icon",
    url: "/icon-facebook.svg",
  },
  {
    id: 2,
    label: "twitter icon",
    url: "/icon-twitter.svg",
  },
  {
    id: 3,
    label: "instagram icon",
    url: "/icon-instagram.svg",
  },
];

type CoffeeType = {
  id: number;
  title: string;
  text: string;
};

export const COFFEE_FILTER: CoffeeType[] = [
  {
    id: 1,
    title: "Capsule",
    text: "Compatible with Nespresso systems and similar brewers",
  },
  {
    id: 2,
    title: "Filter",
    text: "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    id: 3,
    title: "Expresso",
    text: "Dense and finely ground beans for an intense, flavorful experience",
  },
];

export const COFFEE_TYPE: CoffeeType[] = [
  {
    id: 1,
    title: "Single Origin",
    text: "Distinct, high quality coffee from a specific family-owned farm",
  },
  {
    id: 2,
    title: "Decaf",
    text: "Just like regular coffee, except the caffeine has been removed",
  },
  {
    id: 3,
    title: "Blended",
    text: "Combination of two or three dark roasted beans of organic coffees",
  },
];

export const COFFEE_WEIGHT: CoffeeType[] = [
  {
    id: 1,
    title: "250g",
    text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
  {
    id: 2,
    title: "500g",
    text: "Perfect option for a couple. Yields about 40 delectable cups.",
  },
  {
    id: 3,
    title: "1000g",
    text: "Perfect for offices and events. Yields about 90 delightful cups.",
  },
];

export const COFFEE_GRIND: CoffeeType[] = [
  {
    id: 1,
    title: "Wholebean",
    text: "Best choice if you cherish the full sensory experience",
  },
  {
    id: 2,
    title: "Filter",
    text: "For drip or pour-over coffee methods such as V60 or Aeropress",
  },
  {
    id: 3,
    title: "Cafetiére",
    text: "Course ground beans specially suited for french press coffee",
  },
];

type CoffeePrice = {
  value: number;
  title: string;
  text: string;
};
export const COFFEE_DELIVER: CoffeePrice[] = [
  {
    value: 7.2,
    title: "Every week",
    text: "$7.20 per shipment. Includes free first-class shipping.",
  },
  {
    value: 9.6,
    title: "Every 2 weeks",
    text: "$9.60 per shipment. Includes free priority shipping.",
  },
  {
    value: 12.0,
    title: "Every month",
    text: "$12.00 per shipment. Includes free priority shipping.",
  },
];
