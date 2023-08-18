import { Profile } from "./Profile/Profile";
import user from "../user.json"
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json"
import { FriendList } from "./FriendList/FriendList";
import friend from "../friends.json"
import { Transaction } from "./TransactionHistory/TransactionHistory";
import item from "../transactions.json"
import { Container } from "./Container/Container"

export const App = () => {
  return (
    <Container>
      <Profile {...user} />
      <Statistics title={"Upload stats"} stats={data} />
      <FriendList friends={friend} />
      <Transaction items={item} />
      </Container>
  );
};
