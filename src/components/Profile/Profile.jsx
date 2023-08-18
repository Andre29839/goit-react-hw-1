import propsTypes from "prop-types"
import css from "./Profile.module.css"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
              <img
              src={avatar}
              alt={username}
              className={css.avatar}
              />
              <p className={css.name}>{ username }</p>
              <p className={css.user_text}>{ tag }</p>
              <p className={css.user_text}>{ location }</p>
            </div>

            <ul className={css.stats}>
              <li className={css.stats_item}>
                <span className={css.stats_text}>Followers</span>
                <span className={css.stats_number}>{ stats.followers }</span>
              </li>
              <li className={css.stats_item}>
                <span className={css.stats_text}>Views</span>
                <span className={css.stats_number}>{ stats.views }</span>
              </li>
              <li className={css.stats_item}>
                <span className={css.stats_text}>Likes</span>
                <span className={css.stats_number}>{ stats.likes }</span>
              </li>
            </ul>
        </div>)
}

Profile.propsTypes = {
    username: propsTypes.string.isRequired,
    tag: propsTypes.string.isRequired,
    location: propsTypes.string.isRequired,
    avatar: propsTypes.string.isRequired,
    stats: propsTypes.shape({
        followers: propsTypes.number.isRequired,
        views: propsTypes.number.isRequired,
        likes: propsTypes.number.isRequired,
    })
}