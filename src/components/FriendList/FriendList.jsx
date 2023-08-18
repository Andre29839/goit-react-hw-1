import propsTypes from "prop-types"
import css from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}> {friends.map(friends => (
            <li key={friends.id} className={css.item}>
                <span className={`${css.status} ${friends.isOnline ? css.online : css.offline}`}></span>
                <img className={css.avatar} src={friends.avatar} alt={friends.name} width="48" />
                <p className={css.name}>{friends.name}</p>
            </li>))}
        </ul>
    )
}

FriendList.protoTypes = {
    avatar: propsTypes.string.isRequired,
    name: propsTypes.string.isRequired,
    isOnline: propsTypes.bool.isRequired,
    id: propsTypes.number.isRequired,

}
