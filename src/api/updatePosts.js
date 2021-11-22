export const updatePosts = async (updatedPosts) => {
  const url = "https://general-worker.nhudders.workers.dev";
  const options = {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updatedPosts)
  }
  return await fetch(url, options);
  // return await response.json();
};