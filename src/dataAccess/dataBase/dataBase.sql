CREATE DATABASE max_ahorro;

-- Primary tables
CREATE TABLE IF NOT EXISTS public.u_user
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    username character varying(30) COLLATE pg_catalog."default" NOT NULL,
    password character varying(8) COLLATE pg_catalog."default" NOT NULL,
    tid character varying COLLATE pg_catalog."default",
    p_deleted_datetime timestamp without time zone,
    p_created_datetime timestamp without time zone,
    deleted boolean,
    CONSTRAINT "User_pkey" PRIMARY KEY (id)
)