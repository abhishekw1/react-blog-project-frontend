import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesListPage } from "./pages/ArticlesListPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./NavBar";
import { LoginPage } from "./pages/LoginPage";
import { CreateAccountPage } from "./pages/CreateAccountPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <article className="App-article">
          <hr></hr>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/create-account" element={<CreateAccountPage></CreateAccountPage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/articles" element={<ArticlesListPage></ArticlesListPage>}></Route>
            <Route path="/articles/:articleId" element={<ArticlePage></ArticlePage>}></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </article>
      </div>
    </BrowserRouter>
  );
}

export default App;
