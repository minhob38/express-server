\connect "docker-database";

CREATE TABLE public.posts (
  id bigint not null generated always as identity,
  author varchar NOT NULL,
  title varchar NOT NULL,
  content varchar NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL
);

INSERT INTO public.posts
(author, title, "content", created_at, updated_at)
VALUES
('abcde@gmail.com', 'express server', 'express server ...', '2021-12-21 12:46:31.150', NULL),
('abcde@gmail.com', 'django server', 'django server ...', '2021-12-22 12:46:31.150', NULL),
('abcde@gmail.com', 'koa server', 'koa server ...', '2021-12-23 12:46:31.150', NULL),
('qwert@gmail.com', 'flask server', 'flask server ...', '2021-12-24 12:46:31.150', NULL),
('qwert@gmail.com', 'spring server', 'spring server ...', '2021-12-25 12:46:31.150', NULL),
('zxcvb@gmail.com', 'php server', 'php server ...', '2021-12-26 12:46:31.150', NULL),
('zxcvb@gmail.com', 'go server', 'go server ...', '2021-12-27 12:46:31.150', NULL);
