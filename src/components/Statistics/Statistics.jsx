import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section class="statistics">
        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">
          {stats.map((e) => (
            <li class="item" key={e.id}>
              <span class="label">{e.label}</span>
              <br />
              <span class="percentage">{e.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
