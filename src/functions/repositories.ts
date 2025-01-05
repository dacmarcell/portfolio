export const getRepositories = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/github/repos"
  );
  const data = await res.json();

  return data;
};
