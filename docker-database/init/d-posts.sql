\connect "docker-database";

CREATE TABLE public.posts (
  id serial primary key,
  author varchar NOT NULL,
  title varchar NOT NULL,
  content varchar NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL
);

INSERT INTO public.posts
(id, author, title, "content", created_at, updated_at)
VALUES(1, 'abcde@gmail.com', 'express server', 'express server ...', '2021-12-21 12:46:31.150', NULL);
