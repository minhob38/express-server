\connect "docker-database";

CREATE TABLE public.users (
  email varchar NOT NULL,
	"password" varchar NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamptz NULL
);
