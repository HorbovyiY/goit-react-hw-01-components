import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage, StatisticsSection, Title } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}

            <StatisticsList>
                {stats.map(({ id, label, percentage }) =>
                    <StatisticsItem key={id}>
                        <StatisticsLabel>{label} </StatisticsLabel>
                        <StatisticsPercentage>{percentage}% </StatisticsPercentage>
                    </StatisticsItem>
                )}
            </StatisticsList>
        </StatisticsSection>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object)
}