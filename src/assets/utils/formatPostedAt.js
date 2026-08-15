export const formatPostedAt = (date) => {
  const today = new Date();
  const postDate = new Date(date);
  const days = Math.floor((today - postDate) / (1000 * 60 * 60 * 24));

  if (days === 0) {
    return "posted Today";
  }

  if (days === 1) {
    return "posted Yesterday";
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  return date;
};
