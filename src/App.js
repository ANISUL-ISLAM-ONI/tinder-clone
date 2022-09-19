import Header from "./Header";
import SwipeButtons from "./SwipeButtons"
import TinderCards from "./TinderCards";
import ChatScreen from "./ChatScreen";
import Chats from './Chats';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* chats screen */}
      {/* individual chat screen */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <TinderCards />
              <SwipeButtons />
            </div>
          } />
          <Route path="chat/:person" element={
            <div>
              <Header backButton="chat" />
              <ChatScreen />
            </div>
          } />
          <Route path="chat" element={
            <div>
              <Header backButton="/" />
              <Chats />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
