
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
 
const PriceOption = ({option}) => {  
  const {name, price, features } = option;
  return (
    <div className='bg-indigo-400 flex flex-col text-white p-4 rounded-lg '>
      <h2 className='text-center'>
        <span className='text-7xl font-semibold '>{price}</span>
        <span className='text-2xl '>/month</span>
      </h2>
      <h3 className='text-4xl text-center'>{name}</h3>
      <div className='p-6 flex-grow'>
      {
        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
      }
      </div>
      <button className='text-2xl w-full bg-green-500 p-2 rounded-2xl font-bold hover:bg-lime-900 mt-4'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes ={
  option: PropTypes.object
}
export default PriceOption;