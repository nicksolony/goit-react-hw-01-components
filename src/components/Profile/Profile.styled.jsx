import styled from '@emotion/styled';

export const ProfileContainer = styled.div `
    background-color: #e7ecf2;
    width: 428px;
    height: 504px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Description = styled.div `
    background-color: var(--color-white);
    width: 250px;
    height: 256px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 3px 3px 0 0; 
`;

export const Avatar = styled.img `
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const Name = styled.p `
    font-size: 18px;
    font-weight: 700;
    margin: 30px 0 0 0;
`;

export const Info = styled.p `
    font-size: 16px;
    color: var(--color-secondary-text);
    margin: 10px 0 0 0;
`;


export const Stats = styled.ul `
    width: 250px;
    height: 75px;
    border-radius: 0 0 3px 3px;
    background-color: #f3f6f9;
    list-style-type: none;
    padding-left: 0;
    display: flex;
    justify-content:space-around;
    margin:0px;
`;

export const StatsItem = styled.li `
    border: 1px solid #e4e9f0;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
`;

export const Label = styled.span `
    font-size: 12px;
    text-align: center;
    color: var(--color-secondary-text);
`;

export const Quantity = styled.span `
    font-size: 14px;
    text-align: center;
    margin-top: 8px;
`;

