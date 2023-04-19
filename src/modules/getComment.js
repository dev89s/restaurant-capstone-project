import axios from 'axios';

const appId = JSON.parse(localStorage.getItem('appId'));

const createComment = async (itemId) => {
  const newComment = {
    item_id: itemId,
    username: 'Jane',
    comment: 'hello',
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

export default createComment;