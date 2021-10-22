import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friendlist/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import Container from './components/Container/Container';

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "rgb(216, 224, 234)"}}>
      <Container><Profile         
      name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/></Container>
      <Container><Statistics title="Upload stats" stats={statisticalData}/></Container>
      <Container><FriendList friend={friends}/></Container>
      <Container><TransactionHistory items={transactions}/></Container>
    </div>
  );
}

export default App;