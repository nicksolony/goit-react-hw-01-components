import styled from "@emotion/styled";
import isOnline from "utils/isOnline";



export const Item = styled.li `
    display: flex;
    align-items:center;
    width:100%;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 1px solid #818589;
    box-shadow: 3px 3px 3px 0px #888888;
    gap:10px;
`;

export const Status = styled.span `
background-color: ${({ status }) => {
    return isOnline(status);
  }};
    border-radius: 50%; 
    width: 20px;
    height: 20px;
    margin-left:10px;
`;

export const Name = styled.p `
    font-size: 24px;
`;


export const Avatar = styled.img `
  width: 48px;
  height: 48px;
  border-radius: 3px;
`;