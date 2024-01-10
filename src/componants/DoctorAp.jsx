import React from 'react';

const DoctorAppointmentSection = () => {
  const doctors = [
    {
      name: 'Dr. Doe',
      specialization: 'Cardiologist',
      availableSlots: ['10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM', '5:00 PM - 6:00 PM'],
    },
    {
      name: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
      availableSlots: ['9:00 AM - 10:00 AM', '1:00 PM - 2:00 PM', '4:00 PM - 5:00 PM'],
    },
    {
        name: 'Dr. Xyz',
        specialization: 'Cardiologist',
        availableSlots: ['10:00 AM - 11:00 AM', '2:00 PM - 3:00 PM', '5:00 PM - 6:00 PM'],
      },
 
  ];

  const handleBookAppointment = (doctorName, slot) => {
    console.log(`Appointment booked with ${doctorName} at ${slot}`);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-700 mb-2">{doctor.specialization}</p>
              <div className="mb-4">
                <strong>Available Slots:</strong>
                <ul className="list-disc ml-4">
                  {doctor.availableSlots.map((slot, slotIndex) => (
                    <li key={slotIndex}>{slot}</li>
                  ))}
                </ul>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                onClick={() => handleBookAppointment(doctor.name, doctor.availableSlots[0])}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentSection;
