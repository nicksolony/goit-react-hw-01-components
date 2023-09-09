import { Item, Label, Percentage} from './StatisticsDataItem.styled';

export const StatisticsDataItem = ({id, label, percentage}) => {
    return (
        <Item key="{id}">
            <Label>{label}</Label>
            <Percentage >{percentage}%</Percentage>
        </Item>
    )
};