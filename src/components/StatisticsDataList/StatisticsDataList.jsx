import css from './StatisticsDataList.module.css';

export const StatisticsDataList = ({stats}) => {
    return (
        <ul class="stat-list">
            {stats.map(({key, label, percentage})=> (
                 <li class="item">
                 <span class="label">{label}</span>
                 <span class="percentage">{percentage}%</span>
               </li>
            ))}
          </ul>
    )
};