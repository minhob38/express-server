\connect "docker-database";

CREATE TABLE public.posts (
  id serial primary key,
  author varchar NOT NULL,
  title varchar NOT NULL,
  content varchar NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NULL
);
