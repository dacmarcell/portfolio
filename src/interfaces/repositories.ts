export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  commits_url: string;
  created_at: Date;
  updated_at: Date;
  language: string;
  topics: Array<string>;
}
