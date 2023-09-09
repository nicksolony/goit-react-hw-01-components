import styled from "@emotion/styled";
import isOnline from "utils/isOnline";



export const Item = styled.li `
    display: flex;
    width:100%;
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const Status = styled.span `
background-color: ${({ status }) => {
    return isOnline(status);
  }};
    border-radius: 50%; 
    width: 20px;
    height: 20px;
`;