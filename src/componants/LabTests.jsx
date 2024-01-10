import React from 'react';


const testsData = [
  { id: 1, name: 'Test 1', mrp: 50, offerPrice: 30 },
  { id: 2, name: 'Test 2', mrp: 60, offerPrice: 40 },
  { id: 3, name: 'Test 3', mrp: 45, offerPrice: 25 },
  { id: 4, name: 'Test 4', mrp: 55, offerPrice: 35 },
  { id: 5, name: 'Test 5', mrp: 70, offerPrice: 50 },
  { id: 6, name: 'Test 6', mrp: 65, offerPrice: 45 },

];

function App() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Popular Tests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testsData.map((test) => (
          <div key={test.id} className=" shadow-2xl text-center mb-10 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">{test.name}</h2>
            <p className="text-gray-600 mb-2">
              MRP: ${test.mrp} | Offer Price: ${test.offerPrice}
            </p>
            <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white  my-3rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
<span class="relative invisible">Add To Cart</span>
</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
