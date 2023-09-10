import PropTypes from 'prop-types';
import { StatisticsDataList } from 'components/StatisticsDataList/StatisticsDataList';
import { StatisticsSection, Title } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <StatisticsSection>
          {title && <Title>{title}</Title>}
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