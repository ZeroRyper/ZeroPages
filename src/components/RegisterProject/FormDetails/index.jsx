import Tools from "../FormToolsCategory/Tools";
import Category from "../FormToolsCategory/Category";
function FormDetails({handleChangeDetails}) {

  return (
    <div >
      <Tools  handleChangeDetails={handleChangeDetails} />
      <Category handleChangeDetails={handleChangeDetails} />
    </div>
  );
}

export default FormDetails;
