const env = {
  site_url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  node_env: process.env.NODE_ENV ?? "development",
  open_graph_api_key: process.env.NEXT_PUBLIC_OPEN_GRAPH_API_KEY ?? "",
};

export default env;
