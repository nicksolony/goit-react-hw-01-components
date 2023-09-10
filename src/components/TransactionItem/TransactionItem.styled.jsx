import styled from "@emotion/styled";
import { TransactionHistoryTable } from "components/TransactionHistory/TransactionHistory.styled";

export const TransactionItemRow = styled.tr `
    :nth-of-type(even) {
        background-color:#ecf1f4;
    }

    :nth-of-type(odd) {
        background-color:#fffffff;
    }
`;

export const TypeColumn = styled.td `

    text-transform: capitalize;
    padding-left: 80px;
    text-align:left;

`;