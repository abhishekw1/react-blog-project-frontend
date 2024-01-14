import { useParams } from "react-router-dom";
import articles from "./articles";
import { NotFoundPage } from "./NotFoundPage";
import { CommentsList } from "../comonents/CommentsList";
import { AddCommentForm } from "../comonents/AddCommentForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../hooks/useUser";

export const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    if (isLoading) {
      loadArticleInfo();
    }
  }, [articleId, isLoading, user]);

  const article = articles.find((article) => article.name === articleId);
  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `/api/articles/${articleId}/upvoate`,
      null,
      { headers }
    );
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };
  if (!article) {
    return <NotFoundPage></NotFoundPage>;
  }

  return (
    <>
      <h1>{article.title}</h1>
      {user ? (
        <button className="button-4" onClick={addUpvote}>Upvote</button>
      ) : (
        <button>Log In to Upvote</button>
      )}
      <p>This article has {articleInfo.upvotes} upvote's</p>
      {article.content.map((paragrah, i) => (
        <p key={i}>{paragrah}</p>
      ))}
      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdate={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button>Log In to Add Comment</button>
      )}

      <CommentsList comments={articleInfo.comments} />
    </>
  );
};
