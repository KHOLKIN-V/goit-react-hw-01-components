import PropTypes from "prop-types";
import cs from "./StatisticItem.module.css";

const StatisticItem = ({ label, percentage }) => {
  return (
    <>
      <span className={cs.label}>{label}</span>
      <span className={cs.percentage}>{percentage}%</span>
    </>
  );
};

export default StatisticItem;

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
