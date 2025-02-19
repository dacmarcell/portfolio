export class GithubAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public rateLimitExceeded?: boolean
  ) {
    super(message);
    this.name = "GithubAPIError";
  }
}
