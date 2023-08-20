import propsTypes from "prop-types"
import css from "./Statistics.module.css"

const getRandomColor = () => {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    const whiteColor = 'FFFFFF';
    if (newColor.toUpperCase !== whiteColor) {
        return "#" + newColor;
    } 
    
} 

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
           {title && <h2 className={css.title}>{ title }</h2>} 
                <ul className={css.stat_list} >
                {stats.map(data => (
                    <li key={data.id} className={css.item} style={{backgroundColor: getRandomColor()}}>
                        <span>{ data.label } </span>
                        <span>{ data.percentage }%</span>
                    </li>
                    ))}
                </ul>
        </section>
    )
}

Statistics.propsTypes = {
    title: propsTypes.string,
    stats: propsTypes.arrayOf(
        propsTypes.shape({
        id: propsTypes.string.isRequired,
        label: propsTypes.string.isRequired,
        parcentage: propsTypes.number.isRequired,
    })
    )
}
