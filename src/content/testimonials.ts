import type { Testimonial } from "./types";

/**
 * Real customer reviews, copied verbatim from Google, Yelp and BBB on 20 Oct 2026
 * (see prestigious-home-improvements-research.md). Names shortened to first name
 * + initial. Only obvious typos fixed; long reviews trimmed with "…".
 */
export const testimonials: Testimonial[] = [
  {
    name: "Ronald S.",
    city: "Manatee County",
    source: "Google",
    rating: 5,
    text: "We found Prestigious Improvements at the Sarasota home show last year among a number of contractor exhibits. The bid and project was to replace an original exterior aluminum wall and storm door on the back of our lanai constructed circa 1985. … The windows and door are storm rated; the interior was finished to match the room walls, paint color and textures. While the project duration went longer than expected due to building permit issues and inspection scheduling, the finished product is well-done with quality materials and workmanship.",
    service: "Lanai wall rebuild & storm door",
    date: "October 2026",
  },
  {
    name: "Jwb M.",
    city: "Sarasota",
    source: "Yelp",
    rating: 5,
    text: "We are so glad that we chose Prestigious Home Improvement (out of 4 companies we received quotes from). It truly is a family business and Tim and Vlad are extremely knowledgeable in the skills needed for executing replacement and installation of doors and windows according to county building codes. … Tim was very good in keeping us advised as to the timeline for the supplies and he worked around our calendar needs as well. We highly recommend this small, family owned and operated business!",
    service: "Exterior doors, sliders & window",
    date: "August 2025",
  },
  {
    name: "Brad N.",
    source: "Google",
    rating: 5,
    text: "If you're searching for a company that is reliable and very experienced at installing sliding glass doors then choose Prestigious Home Improvements. From start to finish the installation of our sliders by Tim Fomin and his skilled team was professional, smooth and stress-free. Thanks again Tim.",
    service: "Sliding glass doors",
    date: "May 2026",
  },
  {
    name: "Dennis B.",
    source: "BBB",
    rating: 5,
    text: "Prestigious Home Improvements Inc installed 8 windows, 2 large sliding glass doors and 2 entry doors. All were impact windows and doors. Very professional and the quality of the work was outstanding. I highly recommend them for anyone that wants a top-notch job done on installation.",
    service: "Impact windows, sliders & entry doors",
    date: "May 2026",
  },
  {
    name: "Nick & Ashley O.",
    source: "Google",
    rating: 5,
    text: "From the windows to the doors to the amazing siding and shutters, Tim and his guys' work is absolutely prestigious!! Me and my wife couldn't be happier with everything that has been done to make our house a new home!",
    service: "Windows, doors, siding & shutters",
    date: "April 2026",
  },
  {
    name: "Fred B.",
    city: "Sarasota",
    source: "Yelp",
    rating: 5,
    text: "Prestigious Home Improvements are the best! I have used them to replace windows, reframe windows, and work on fixing a leak near a slider. They are simply excellent. They approach each job analytically and think through options and then select the one that gets the job done. Their pricing is fair and they are pleasant to work with.",
    service: "Window replacement & leak repair",
    date: "September 2025",
  },
  {
    name: "Genka K.",
    source: "Google",
    rating: 5,
    text: "Prestigious Home Improvements is a hardworking team that delivers honest, high quality workmanship. They take pride in what they do, and it shows in the finished product. Highly recommend!",
    date: "June 2026",
  },
  {
    name: "Timothy B.",
    city: "Englewood",
    source: "Yelp",
    rating: 5,
    text: "This company does an amazing job. They are very professional and their attention to detail proves that they care about the customers and the finished product that they can be proud of.",
    date: "November 2025",
  },
  {
    name: "Google reviewer",
    source: "Google",
    rating: 5,
    text: "Tim and his crew have gone above and beyond for me. I couldn't be happier!",
    date: "May 2026",
  },
];
