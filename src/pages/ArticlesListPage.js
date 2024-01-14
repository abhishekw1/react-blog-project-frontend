import { ArticlesList } from "../comonents/ArticleList";
import articles from "./articles";

export const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles}></ArticlesList>
    </>
  );
};
