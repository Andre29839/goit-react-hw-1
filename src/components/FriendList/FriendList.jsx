import propsTypes from "prop-types"
import css from "./FriendList.module.css"
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}> {friends.map(friends => (
            <FriendListItem  key={friends.id} friends={friends}/>
            ))}
        </ul>
    )
}

FriendList.protoTypes = {
    friends: propsTypes.arrayOf(propsTypes.shape({
        id: propsTypes.number.isRequired,
    })).isRequired

}
