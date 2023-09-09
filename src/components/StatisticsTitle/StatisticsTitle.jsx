import css from './StatisticsTitle.module.css';


export const StatisticsTitle = ({title}) => {

    if (title) {
        return (
            <h2 className={css.title}>{title}</h2>
        )
    };

};
