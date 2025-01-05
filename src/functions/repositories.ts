export const getRepositories = async () => {
  const res = await fetch("https://api.github.com/users/dacmarcell/repos");
  const data = await res.json();

  return data;
};
