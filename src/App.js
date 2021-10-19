import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friendlist/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';

import user from "./components/user.json";
import statisticalData from "./components/statistical-data.json";
import friends from "./components/friends.json";
import transactions from "./components/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile         
      name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <Statistics title="Upload stats" stats={statisticalData}/>
      <FriendList friend={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;