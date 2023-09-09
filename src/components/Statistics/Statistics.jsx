import PropTypes from 'prop-types';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    console.log(stats, title);
    return (
        <section class="statistics">
          {<StatisticsTitle title={title}/>}

          <ul class="stat-list">
            <li class="item">
              <span class="label">.docx</span>
              <span class="percentage">4%</span>
            </li>
            <li class="item">
              <span class="label">.mp3</span>
              <span class="percentage">14%</span>
            </li>
            <li class="item">
              <span class="label">.pdf</span>
              <span class="percentage">41%</span>
            </li>
            <li class="item">
              <span class="label">.mp4</span>
              <span class="percentage">12%</span>
            </li>
          </ul>
        </section>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};