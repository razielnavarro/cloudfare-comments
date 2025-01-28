import { Hono } from "hono";

export type Env = {
  DB: D1Database;
};

const app = new Hono();

app.get("/", async (c) => {
	return c.text("Hello, Hono!");
});

app.post("/api/posts/:slug/comments", async (c) => {
  // Do something and return an HTTP response
  // Optionally, do something with `c.req.param("slug")`
});

export default app;