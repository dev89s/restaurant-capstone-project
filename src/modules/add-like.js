import getAppId from "./get-app-id.js"

const addLike = async (mealId) => {
  const appId = await getAppId();
  const data = {
    "item_id": mealId
  };
  const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
  const response = await fetch(likeUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data)
  });

}

export default addLike;