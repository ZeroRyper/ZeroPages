import Tools from "./Tools";
import Category from "./Category";
import PropTypes from 'prop-types';

function FormDetails({handleChangeDetails}) {
  FormDetails.propTypes = {
    handleChangeDetails: PropTypes.func,
  };
  return (
    <div >
      <Tools  handleChangeDetails={handleChangeDetails} />
      <Category handleChangeDetails={handleChangeDetails} />
    </div>
  );
}

export default FormDetails;
