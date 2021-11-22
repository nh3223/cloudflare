export const fetchPosts = async (userId) => {
  const url = "https://general-worker.nhudders.workers.dev";
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    return e.message
  }
};