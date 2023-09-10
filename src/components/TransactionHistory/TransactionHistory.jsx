import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
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

            {items.map(({id, type, amount, currency})=> (
                 <TransactionItem 
                  id={id}
                  type={type}
                  amount={amount}
                  currency={currency}
                 />
            ))}

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