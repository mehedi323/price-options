import PropTypes from 'prop-types';

const Linke = ({route}) => {
  return (
    <li className="mr-14 hover:bg-lime-800 rounded-xl p-2"><a href={route.path}>{route.name}</a></li>
  );
};
Linke.propTypes ={
  route: PropTypes.object
}

export default Linke;