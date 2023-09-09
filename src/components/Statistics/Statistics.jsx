import PropTypes from 'prop-types';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { StatisticsDataList } from 'components/StatisticsDataList/StatisticsDataList';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
          {<StatisticsTitle title={title}/>}
          {<StatisticsDataList stats={stats}/>}
        </section>
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