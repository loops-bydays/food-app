
import BottomNav from './components/BottomNav';
import FindByCategory from './components/FindByCategory';
import FoodNearYou from './components/FoodNearYou';
import Nav from './components/Nav';
import GlobalStyle from './components/styles/GlobalStyle';
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <FindByCategory/>
      <FoodNearYou/>
      <BottomNav/>
    </div>
  );
}

export default App;
