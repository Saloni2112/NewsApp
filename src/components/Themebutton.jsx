import { useContext } from "react";
import {FaCloudSun , FaCloudMoon} from "react-icons/fa6";
import ThemeContext from "../providers/theme/ThemeContext";

const Themebutton = () => {

const {dispatch , dark} = useContext(ThemeContext);

const handleThemeChange = () => {
    dispatch({type : "CHANGE_THEME"});
};

  return (
    <button className=
    {dark ? "btn btn-sm btn-warning text-light" : "btn btn-sm btn-info text-light"}
     id='themeBtn' onClick={handleThemeChange}>
    
     { dark ? <FaCloudSun /> : <FaCloudMoon />  }
    </button>
  )
}

export default Themebutton;
