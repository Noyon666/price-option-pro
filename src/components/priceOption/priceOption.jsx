import PropTypes from "prop-types";

const priceOption = ({ option }) => {
    const {name,price,features}
  return (
    <div className="bg-blue-300 rounded-md p-4 text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
    </div>
  );
};
priceOption.PropTypes = {
  option: PropTypes.object,
};
export default priceOption;
