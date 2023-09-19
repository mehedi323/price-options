 import PropTypes from 'prop-types';
 import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
  return (
    <div className=''>
      <h2  className='flex items-center text-xl'><AiFillCheckCircle className='mr-2' ></AiFillCheckCircle>{feature}</h2>
    </div>
  );
};

Feature.propTypes ={
  feature: PropTypes.string
}
export default Feature;