import axios from 'axios';

const appId = JSON.parse(localStorage.getItem('appId'));

const createComment = async (itemId, name, comment) => {
  const newComment = {
    item_id: itemId,
    username: name,
    comment,
  };

  await axios.post(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, newComment);

  const commentInfo = await axios.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`);
  const comments = commentInfo.data.map((comment) => ({
    creation_date: comment.creation_date,
    username: comment.username,
    comment: comment.comment,
  }));

  return { comments };
};

const getComments = async (mealId, appId) => {
  let comments = [];
  try {
    const commentInfo = await axios.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${mealId}`);
    comments = commentInfo.data.map((comment) => ({
      creation_date: comment.creation_date,
      username: comment.username,
      comment: comment.comment,
    }));
  } catch (error) {
    return [];
  }
  return comments;
};

export { createComment, getComments };