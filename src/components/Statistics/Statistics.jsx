import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) =>
{
    console.log(stats, title);
    return (
        <section class="statistics">
          <h2 class="title">Upload stats</h2>

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
}