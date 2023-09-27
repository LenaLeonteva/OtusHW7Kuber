CREATE TABLE IF NOT EXISTS PUBLIC.USERS
(
    id integer NOT NULL,
    username text NOT NULL,
    firstName text NOT NULL,
    lastName text NOT NULL,
    email text,
    phone text
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cache
owner to user_admin;

REVOKE ALL ON TABLE public.cache FROM user_admin_select;
GRANT ALL ON TABLE public.cache TO user_admin;