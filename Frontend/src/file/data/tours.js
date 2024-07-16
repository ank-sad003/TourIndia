import tourImg01 from "../image/kashmir.avif";
import tourImg02 from "../image/kerala.avif";
import tourImg03 from "../image/agra.avif";
import tourImg04 from "../image/meghalay.avif";
import tourImg05 from "../image/manali.avif";
import tourImg06 from "../image/mumbai.avif";
import tourImg07 from "../image/wb.avif";
import tourImg08 from "../image/rajasthan.avif";


const tours = [
  {
    id: "01",
    title: "North India",
    city: "Kashmir",
    distance: 300,
    address: 'Jammu-kashmir',
    price: 19200,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "Karle Bone",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "South India",
    city: "Kerala",
    distance: 400,
    address: 'Kerala',
    price: 16800,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Uttar pradesh",
    city: "Agra",
    distance: 500,
    address: 'Delhi,Agra',
    price: 10800,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "East India",
    city: "Meghalaya",
    distance: 500,
    address: 'Meghalaya',
    price: 18000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Himachal Pradesh",
    city: "Manali",
    distance: 500,
    address: 'Kulu,Manali',
    price: 20000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Mumbai",
    city: "Mumbai",
    distance: 500,
    address: 'Mumbai',
    price: 30400,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "West Bengal",
    city: "Kolkata",
    distance: 500,
    address: 'Digha,Kolkata',
    price: 23200,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "West India",
    city: "Rajasthan",
    distance: 500,
    address: 'RAjasthan,Gujrat',
    price: 19200,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
