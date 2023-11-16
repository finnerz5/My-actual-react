import { Routes, Route } from "react-router-dom";
import Newspage from "./Pages/NewsPage";
import Homepage from "./Pages/HomePage";
import Notfound from "./Pages/NotFoundPage";
import {
  INDEX_PATH,
  NEWS_PATH,
  NOT_FOUND_PATH,
  ABOUT_PATH,
  FEEDBACK_PATH,
  HELP_PATH,
} from "./Constants/paths";
import Feedbackpage from "./Pages/FeedbackPage";
import Aboutpage from "./Pages/AboutPage";
import Helppage from "./Pages/HelpPage";
import Navbar from "./Pages/NavBar";
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path={INDEX_PATH} element={<Homepage />} />
          <Route path={NEWS_PATH} element={<Newspage />} />
          <Route path={FEEDBACK_PATH} element={<Feedbackpage />} />
          <Route path={ABOUT_PATH} element={<Aboutpage />} />
          <Route path={HELP_PATH} element={<Helppage />} />
          <Route path={NOT_FOUND_PATH} element={<Notfound />} />
        </Route>
      </Routes>
     
    </>
  );
}

export default App;
