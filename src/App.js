import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./components/home/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import ArticlePage from "./components/article/ArticlePage";
import ArticleDetails from "./components/article/ArticleDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:articleId" element={<ArticleDetails />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default App;
