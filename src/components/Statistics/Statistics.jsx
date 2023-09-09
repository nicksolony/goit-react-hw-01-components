import PropTypes from 'prop-types';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { StatisticsDataList } from 'components/StatisticsDataList/StatisticsDataList';
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <StatisticsSection>
          {<StatisticsTitle title={title}/>}
          {<StatisticsDataList stats={stats}/>}
        </StatisticsSection>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};