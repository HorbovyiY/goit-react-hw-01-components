import {StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage } from "./Statistics.styled";

export const Statistics = ({ title, stats}) => { 
    return(
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <StatisticsList>
                {stats.map(({id, label, percentage})=>
                    <StatisticsItem key={id}>
                        <StatisticsLabel>{label} </StatisticsLabel>
                        <StatisticsPercentage>{percentage}% </StatisticsPercentage>
                    </StatisticsItem>
                )}
            </StatisticsList>
        </section>
    )
}