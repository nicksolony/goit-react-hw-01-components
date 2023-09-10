import { Title } from "./StatisticsTitle.styled";


export const StatisticsTitle = ({title}) => {

    return (
        <div>
            {title && <Title>{title}</Title>}
        </div>
    )
};