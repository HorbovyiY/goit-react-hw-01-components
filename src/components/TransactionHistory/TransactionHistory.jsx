import PropTypes from 'prop-types';

import { History } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <History>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            <tbody>
                {items.map(({id, type, amount, currency}) =>    
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                )}
  </tbody>
</History>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}