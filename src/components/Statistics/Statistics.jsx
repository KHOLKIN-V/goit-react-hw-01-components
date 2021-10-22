import PropTypes from "prop-types";
import cs from "./Statistics.module.css";
import randomColor from "./helper";

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
              <span className={cs.label}>{label}</span>
              <span className={cs.percentage}>{percentage}%</span>
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
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

// function get_rand_color() {
//   let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
//   while (color.length < 6) {
//     color = "0" + color;
//   }
//   return "#" + color;
// }

export default Statistics;
