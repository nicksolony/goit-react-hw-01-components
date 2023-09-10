import { TransactionItemRow, TypeColumn } from "./TransactionItem.styled";


export const TransactionItem = ({id, type, amount, currency}) => {
    return (
        <TransactionItemRow key={id}>
              <TypeColumn>{type}</TypeColumn>
              <td>{amount}</td>
              <td>{currency}</td>
        </TransactionItemRow>
    )
}