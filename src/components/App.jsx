import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import user from '../data/user.json';
import stats from '../data/statistics.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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

    </div>
  );
};
