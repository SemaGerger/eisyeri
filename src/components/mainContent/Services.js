import React from "react";
import PropTypes from "prop-types";

const Services = ({ name, image, extraInfo, onClick }) => {
  return (
    <div
      className="flex flex-col bg-white shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{extraInfo}</p>
      </div>
    </div>
  );
};

TestPartnersCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  extraInfo: PropTypes.string,
  onClick: PropTypes.func,
};

TestPartnersCard.defaultProps = {
  image: "",
  extraInfo: "",
  onClick: () => {},
};

export default Services;
