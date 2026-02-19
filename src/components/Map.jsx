

import React from "react";

const Map = () => {
  return (
    <div className="w-full   flex justify-center">
      <div id="map">
        <iframe
          className="md:w-[80vw] w-[65vw] max-[450px]:w-[83vw] m-8 max-[450px]:h-[35vh] h-[45vh] rounded-xl z-10000 lg:z-[69899] bg-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.46685076269!2d77.49942917441436!3d28.675678282122025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1689180454104!5m2!1sen!2sin"
          title="Google Map showing AKGEC Ghaziabad"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

