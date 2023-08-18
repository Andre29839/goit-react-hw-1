import propsTypes from "prop-types"
import css from "./TransactionHistory.module.css"

export const Transaction = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.table_header}>
                <tr>
                    <th className={css.table_lable}>Type</th>
                    <th className={css.table_lable}>Amount</th>
                    <th className={css.table_lable}>Currency</th>
                </tr>
            </thead>
           {items.map(items => (
               <tbody key={items.id} className={css.table_body}>
                   <tr className={css.table_row}>
                        <td className={css.table_data}>{items.type}</td>
                        <td className={css.table_data}>{items.amount}</td>
                        <td className={css.table_data}>{items.currency}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

Transaction.propsTypes = {
    items: propsTypes.arrayOf(propsTypes.shape({
        id: propsTypes.string.isRequired,
        type: propsTypes.string.isRequired,
        amount: propsTypes.string.isRequired,
        currency: propsTypes.string.isRequired
    }))
}
