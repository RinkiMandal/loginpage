import React, { useState, useEffect } from 'react';

const Home = () => { 
  const [activeIndex, setActiveIndex] = useState(null);
  const [offers, setOffers] = useState(0);
  const [products, setProducts] = useState(0);
  const [instructorsCount, setInstructorsCount] = useState(0);

  
const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, XYZ Company',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ligula non risus cursus, vel fermentum lacus condimentum.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Designer, ABC Agency',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eu augue ut nisi sodales venenatis.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    position: 'CTO, LMN Tech',
    comment: 'Vestibulum fringilla dapibus eleifend. Integer eu arcu vel turpis aliquet fringilla. Ut vel dolor at purus tincidunt lobortis.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    position: 'CTO, LMN Tech',
    comment: 'Vestibulum fringilla dapibus eleifend. Integer eu arcu vel turpis aliquet fringilla. Ut vel dolor at purus tincidunt lobortis.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    position: 'CTO, LMN Tech',
    comment: 'Vestibulum fringilla dapibus eleifend. Integer eu arcu vel turpis aliquet fringilla. Ut vel dolor at purus tincidunt lobortis.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Marketing Manager, QRS Inc.',
    comment: 'Sed eu turpis eget elit posuere bibendum. Suspendisse potenti. Fusce tincidunt, felis vitae fermentum pulvinar, ligula nulla dictum eros.',
  },

];

function Testimonial({ name, position, comment }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-8">
      <p className="text-gray-800 text-lg mb-4">{comment}</p>
      <p className="font-semibold text-blue-600">{name}</p>
      <p className="text-gray-600">{position}</p>
    </div>
  );
}

  const accordionData = [
    {
      title: 'Quality',
      content: 'Our commitment to quality ensures that every product and service meets the highest standards. We take pride in delivering excellence to our customers. Our quality assurance processes guarantee customer satisfaction.'
    },
    {
      title: 'Experience',
      content: 'With over a decade of experience in the industry, our dedicated team has successfully served numerous clients. Our extensive experience allows us to understand the unique needs of each client and tailor our solutions accordingly.'
    },
    {
      title: 'Innovation',
      content: 'Innovation is at the heart of what we do. We embrace the latest technologies and creative solutions to stay ahead in the market. Our innovative approach allows us to provide cutting-edge products and services to our clients.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
     
      if (offers < 1000) {
        setOffers((prevCount) => prevCount + 1);
      }
      if (products < 10000) {
        setProducts((prevCount) => prevCount + 1);
      }
      if (instructorsCount < 2000) {
        setInstructorsCount((prevCount) => prevCount + 1);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [offers, products, instructorsCount]);

  
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-evenly lg:mx-56 mt-10 items-center">
        <div className="left text-center sm:text-left">
          <span className="">OVER 3000 Items AVAILABLE</span>
          <h1 className="text-3xl sm:text-5xl my-2 font-semibold sm:w-[70%] lg:w-[650px]">
            Upgrade your Shopping & Upgrade your life
          </h1>
          <p className="text-sm sm:text-base opacity-70 my-3 sm:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis quam ipsa
            blanditiis, facilis velit eaque illo?
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <button className="mb-2 sm:mb-0 sm:me-2 inline-flex items-center justify-center p-1.5 sm:p-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Shopping
              </span>
            </button>
            <button className="inline-flex items-center justify-center p-1.5 sm:p-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="right mt-5 sm:mt-0">
          <img className="w-full sm:w-96" src="https://shiny-puffpuff-667380.netlify.app/assets/images/banner/banner_img.png" alt="Banner" />
        </div>
      </div>


    <div className="container sm:mx-6   mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Customer Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            name={testimonial.name}
            position={testimonial.position}
            comment={testimonial.comment}
          />
        ))}
      </div>
    </div>

    <section className=" font-Poppins  py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 shadow-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
       
          <div className=" p-6 rounded-lg shadow-2xl ">
            <p className="text-4xl font-bold text-white">{offers + "k"}</p>
            <h3 className="text-2xl font-serif mb-4">Offers</h3>
          </div>

      
          <div className=" p-6 rounded-lg shadow-2xl">
            <p className="text-4xl font-bold text-white">{products + "k"}</p>
            <h3 className="text-2xl font-serif mb-4">Products</h3>
          </div>

          <div className=" p-6 rounded-lg shadow-2xl">
            <p className="text-4xl font-bold text-white">{instructorsCount + "k"}</p>
            <h3 className="text-2xl font-serif mb-4">Instructors</h3>
          </div>
          
        </div>
      </div>
    </section>

    <div className="w-4/5 mx-auto mt-8">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4 border-b">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-gray-200"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="font-semibold">{item.title}</div>
            <div>{activeIndex === index ? '▲' : '▼'}</div>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>

    </div>
  );
};


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Testimonials  />
    </div>
  );
}

export default Home;














