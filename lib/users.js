export const loadUsers = async (limit = 10) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${limit}&seed=20240521`
  );
  const { results } = await response.json();
  return results;
};

export const loadUserByUsername = async (username) => {
  const response = await loadUsers();
  const index = response.findIndex((user) => user.login.username === username);
  return index === -1 ? null : response[index];
};
