import {Icon} from "@iconify/react";
import PropTypes from "prop-types";

export const IButton = ({label, onClick, classNames, loading}) => {
  return (
    <button onClick={onClick} className={`${classNames} bg-primary px-6 py-3.5 text-white rounded w-full font-bold flex items-center justify-center`}>
      {loading ? <Icon icon="gg:spinner" className="animate-spin h-6 w-6"/> : label}
    </button>
  )
}


IButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  classNames: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool
}
