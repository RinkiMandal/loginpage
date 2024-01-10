import React from 'react';

const Offer = () => {
  const offers = [
    {
      title: 'Exclusive Health Checkup',
      description: 'Comprehensive health check at a special discounted price. Limited time offer!',
      ctaText: 'Learn More',
      ctaLink: '/exclusive-offer',
    },
    {
      title: 'Wellness Package for Families',
      description: 'Special discount on our family wellness package. Keep your family healthy together!',
      ctaText: 'Get Offer',
      ctaLink: '/family-offer',
    },
    {
      title: 'Fitness Enthusiast Deal',
      description: 'Customized fitness assessments and workout plans. Achieve your fitness goals!',
      ctaText: 'Explore Fitness Plans',
      ctaLink: '/fitness-offer',
    },
    {
      title: 'Mental Health Awareness',
      description: 'Discounted sessions with our mental health experts. Prioritize your mental well-being!',
      ctaText: 'Book a Session',
      ctaLink: '/mental-health-offer',
    },
    {
      title: 'Senior Citizens Wellness',
      description: 'Tailored health packages for seniors. Take advantage of our senior-friendly plans!',
      ctaText: 'View Senior Plans',
      ctaLink: '/senior-citizens-offer',
    },
    {
      title: 'Kids Health Bonanza',
      description: 'Ensure your child',
      ctaText: 'Check Offers for Kids',
      ctaLink: '/kids-health-offer',
    },
    {
        title: 'Kids Health Bonanza',
        description: 'Ensure your child',
        ctaText: 'Check Offers for Kids',
        ctaLink: '/kids-health-offer',
      },
      {
        title: 'Senior Citizens Wellness',
        description: 'Tailored health packages for seniors. Take advantage of our senior-friendly plans!',
        ctaText: 'View Senior Plans',
        ctaLink: '/senior-citizens-offer',
      },
      {
        title: 'Wellness Package for Families',
        description: 'Special discount on our family wellness package. Keep your family healthy together!',
        ctaText: 'Get Offer',
        ctaLink: '/family-offer',
      },
      
  
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-700 mb-4">{offer.description}</p>
              <a
                href={offer.ctaLink}
                className="text-blue-500 hover:underline transition-colors duration-300"
              >
                {offer.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;







