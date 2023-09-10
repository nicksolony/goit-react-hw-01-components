import PropTypes from 'prop-types';
import { TransactionHistoryTable } from './TransactionHistory.styled';

export const TransactionHistory =({items}) => {

    return (
        <TransactionHistoryTable>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Invoice</td>
              <td>125</td>
              <td>USD</td>
            </tr>
            <tr>
              <td>Withdrawal</td>
              <td>85</td>
              <td>USD</td>
            </tr>
          </tbody>
        </TransactionHistoryTable>
    )

};


TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};