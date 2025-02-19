import { GithubAPIError } from "@/errors/GithubAPIError";

export const getRepositories = async () => {
  try {
    const res = await fetch("https://api.github.com/users/dacmarcell/repos", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      const errorData = await res.json();

      const doesRateLimitExceeded = Boolean(
        res.status === 403 &&
          errorData.message?.includes("API rate limit exceeded")
      );
      if (doesRateLimitExceeded) {
        throw new GithubAPIError(
          "Limite de requisições excedido. Tente novamente mais tarde.",
          res.status,
          doesRateLimitExceeded
        );
      }

      throw new GithubAPIError(
        "Oops! Algo deu errado ao buscar repositórios. Tente novamente mais tarde.",
        res.status
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof GithubAPIError) {
      throw error;
    }

    throw new GithubAPIError(
      "Oops! Algo inesperado ocorreu ao buscar repositórios. Tente novamente mais tarde.",
      500
    );
  }
};
