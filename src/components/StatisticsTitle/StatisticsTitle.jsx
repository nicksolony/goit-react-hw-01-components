import { Title } from "./StatisticsTitle.styled";


export const StatisticsTitle = ({title}) => {

    if (title) {
        return (
            <Title>{title}</Title>
        )
    };

};
