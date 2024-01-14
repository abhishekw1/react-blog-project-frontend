import axios from "axios";
import { useState } from "react";
import { useUser } from "../hooks/useUser";

export const AddCommentForm = ({ articleName, onArticleUpdate }) => {
  const [error, setError] = useState(false);
  const { user } = useUser();

  const onCommentAdd = async (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const comment = form.comment.value;

    if (comment) {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.post(
        `/api/articles/${articleName}/comments`,
        {
          text: form.comment.value,
        },
        {
          headers,
        }
      );
      const updatedComments = response.data;
      onArticleUpdate(updatedComments);
      form.reset();
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={onCommentAdd}>
        <h3>Add a Comment</h3>
        {/* <label>Name</label>
        <input type="text" name="name" /> */}
        <label>Comment</label>
        <textarea rows="4" cols="50" name="comment" className="form-control" />
        <button className="button-4"  type="submit">Add Comment</button>
        <p>{error && "Enter the Name and Comment"}</p>
      </form>
    </>
  );
};
