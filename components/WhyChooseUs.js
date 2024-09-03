import React, { useState } from "react";

const WhyChooseUs = () => {
  const [selectedOption, setSelectedOption] = useState("Industry experts");

  const options = [
    "Industry experts",
    "Dedicated Team",
    "Outcome focused",
    "High Quality Service",
    "Cyber Security Expert",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="bg-gray-100 py-16"
      style={{ fontFamily: "Sans Serif, Arial" }}
    >
      <div
        className="container mx-auto flex flex-col md:flex-row items-center w-full underline text-custom"
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "70px",
        }}
      >
        {/* Left Section */}
        <div className="flex-1">
          <h3
            className="text-md text-red-500 font-semibold mb-2 w-full text-center"
            style={{
              fontSize: "20px",
              fontWeight: 100,
            }}
          >
            WHY CHOOSE US
          </h3>
          <h2
            className="text-center text-3xl font-bold text-gray-800 mb-4 w-full"
            style={{
              fontSize: "40px",
              fontWeight: 900,
            }}
          >
            We Are Different From Others
          </h2>
          <p
            className="text-center text-gray-500 mb-8"
            style={{
              width: "50%",
              display: "block",
              margin: "0 auto",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsa
            cupiditate accusantium recusandae soluta explicabo hic! Facere unde
            nam accusantium natus?
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "40px",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "600px",
              display: "flex",
              position: "relative",
              maxWidth: "100%", // Make container responsive
            }}
          >
            <div
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                backgroundColor: "rgba(203, 65, 99, 0.8)",
                display: "grid",
                placeItems: "center",
                position: "absolute",
                left: "0px",
                zIndex: 1,
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div>
                <h1
                  style={{
                    margin: 0,
                    width: "90%",
                    textAlign: "start",
                    fontSize: "24px",
                  }}
                >
                  Industry Experts
                </h1>
                <p
                  style={{
                    margin: 0,
                    width: "90%",
                    textAlign: "start",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <img
              src="https://img.freepik.com/free-photo/happy-financial-consultant-greeting-his-clients-while-meeting-them-their-home-me-are-shaking-hands_637285-3763.jpg?t=st=1725352201~exp=1725355801~hmac=9fb9580945d48e715bc9441a7fead8bef76b8f9b779791eceaf4eb2a5f08fd75&w=996"
              alt="Placeholder 2"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                position: "relative",
                left: "250px",
                maxWidth: "100%",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingTop: "15px",
            }}
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor:
                    selectedOption === option ? "#CB4163" : "#E1E8F0",
                  color: selectedOption === option ? "#fff" : "#000",
                  padding: "0px 15px",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  cursor: "pointer",
                  width: "300px",
                  height: "45px",
                  maxWidth: "100%", // Make option divs responsive
                }}
              >
                <p>＜</p>
                <p>{option}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
