import PropTypes from "prop-types";
import cs from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={cs.Transaction}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((e) => (
            <tr key={e.id}>
              <td>{e.type}</td>
              <td>{e.amount}</td>
              <td>{e.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
