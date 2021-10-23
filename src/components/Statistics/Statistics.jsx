import PropTypes from "prop-types";
import cs from "./Statistics.module.css";
import randomColor from "../../helpers/helper";
import StatisticItem from "../StatisticItem/StatisticItem";

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={cs.Statistics}>
        {title && <h2 className={cs.title}>{title}</h2>}

        <ul className={cs.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={cs.item}
              style={{ backgroundColor: `${randomColor()}` }}
              key={id}
            >
              <StatisticItem label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
