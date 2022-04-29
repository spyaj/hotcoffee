import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout"
import HomePage from "./components/home/HomePage";
import PageNotFound from "./components/pages/PageNotFound";
import ArticlePage from "./components/article/ArticlePage";
const  App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/article" element={<ArticlePage/>}/>
        
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>

  );
}
export default App;