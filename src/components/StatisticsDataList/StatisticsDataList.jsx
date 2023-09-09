import { StatisticsDataItem } from 'components/StatisticsDataItem/StatisticsDataItem';
import { StatList } from './StatisticsDataList.styled';

export const StatisticsDataList = ({stats}) => {
    return (
        <StatList>
            {stats.map(({id, label, percentage})=> (
                 <StatisticsDataItem 
                 id={id}
                 label={label}
                 percentage={percentage}
                 />
            ))}
          </StatList>
    )
};