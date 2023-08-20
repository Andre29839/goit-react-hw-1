import propsTypes from "prop-types"
import css from "./FriendListItem.module.css"

export const FriendListItem = ({ friends }) => {
    return (
         <li className={css.item}>
                <span className={`${css.status} ${friends.isOnline ? css.online : css.offline}`}></span>
                <img className={css.avatar} src={friends.avatar} alt={friends.name} width="48" />
                <p className={css.name}>{friends.name}</p>
            </li>
    )
}

FriendListItem.propsTypes = {
    friends: propsTypes.arrayOf(propsTypes.shape({
        avatar: propsTypes.string.isRequired,
        name: propsTypes.string.isRequired,
        isOnline: propsTypes.bool.isRequired,
        id: propsTypes.number.isRequired,
    })).isRequired
}

