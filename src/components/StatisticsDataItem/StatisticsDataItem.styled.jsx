import styled from '@emotion/styled';
import randomBgColor from '../../utils/bgColor'

export const Item = styled.li `
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: ${randomBgColor};
    width: 100%;
    padding-top: 10px;
    padding-bottom: 15px;
`;

export const Label = styled.span `
    font-size: 14px;
    color: var(--color-white);
`;

export const Percentage =styled.span `
    font-size: 18px;
    padding-top: 15px;
    color: var(--color-white);
`;
