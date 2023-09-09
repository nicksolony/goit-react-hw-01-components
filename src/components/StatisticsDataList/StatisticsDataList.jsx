import { StatisticsDataItem } from 'components/StatisticsDataItem/StatisticsDataItem';
import css from './StatisticsDataList.module.css';

export const StatisticsDataList = ({stats}) => {
    return (
        <ul class="stat-list">
            {stats.map(({id, label, percentage})=> (
                 <StatisticsDataItem 
                 id={id}
                 label={label}
                 percentage={percentage}
                 />
            ))}
          </ul>
    )
};