import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from '../data/user.json';
import stats from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile user={user}/>
      <Statistics stats={stats}/>
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends = {friends}/>
      <TransactionHistory items = {transactions}/>
    </div>
  );
};
