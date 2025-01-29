import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono';
import { Comments } from './db/schema';
import { commentSchema } from './validators/commentsValidators';

export type Env = {
	DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', async (c) => {
	const db = drizzle(c.env.DB);
	const result = await db.select().from(Comments);
	return c.json({ comments: result });
});

app.post('/', async (c) => {
	const db = drizzle(c.env.DB);
	const data = await c.req.json();
	const validatedData = commentSchema.safeParse(data);

	if (validatedData.success) {
		if (!data.author || !data.body) {
			return c.json({ error: 'Author and body are required.' }, 400);
		}
		const [comment] = await db.insert(Comments).values(data).returning();
		return c.json({ comment });
	} else {
		return c.json({ error: validatedData.error }, 400);
	}
});

export default app;

