const getLastIndex = (data) => {
  const lastIndex = data.users.slice(-1);
  return lastIndex;
};

module.exports = getLastIndex;
