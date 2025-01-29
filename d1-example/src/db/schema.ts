import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const Comments = sqliteTable('comments', {
    id: integer({mode: 'number'}).primaryKey({ autoIncrement: true }),
    author: text(),
    body: text(),
    post_slug: text(),
});