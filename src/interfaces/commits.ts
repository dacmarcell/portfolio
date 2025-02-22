export interface Commit {
  sha: string;
  commit: {
    author: {
      date: Date;
    };
  };
}
