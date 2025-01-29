CREATE TABLE `comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author` text,
	`body` text,
	`post_slug` text
);
