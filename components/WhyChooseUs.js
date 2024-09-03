import React, { useState } from 'react';

const WhyChooseUs = () => {
  const [selectedOption, setSelectedOption] = useState('Industry experts');

  const options = [
    'Industry experts',
    'Dedicated Team',
    'Outcome focused',
    'High Quality Service',
    'Cyber Security Expert',
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-1">
          <h3 className="text-center text-sm text-red-500 font-semibold mb-2">
            WHY CHOOSE US
          </h3>
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
            We Are Different From Others
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsa
            cupiditate accusantium recusandae soluta explicabo hic! Facere unde
            nam accusantium natus?
          </p>
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Industry experts"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-red-600 opacity-75 rounded-lg p-6 flex flex-col justify-center items-start text-white">
              <h3 className="text-lg font-semibold mb-2">{selectedOption}</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                recusandae nesciunt. Mollitia quidem.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <div className="flex flex-col space-y-4">
            {options.map((option) => (
              <button
                key={option}
                className={`py-3 px-5 rounded-lg text-left ${
                  selectedOption === option
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
