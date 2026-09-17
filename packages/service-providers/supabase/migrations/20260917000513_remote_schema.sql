create extension if not exists "hypopg" with schema "extensions";

create extension if not exists "index_advisor" with schema "extensions";

drop extension if exists "pg_net";

create type "public"."tattoo_collections" as enum ('queer & spicey - filtered', 'queery & spicey - collage', 'neo-expressionist', 'pixel tatts', 'gaymer/anime', 'just whatever');

create type "public"."tattoo_groups" as enum ('flash', 'tattoos', 'hp', 'portfolio-tattoos');

create type "public"."tattoo_styles" as enum ('traditional', 'illustrational', 'blackwork', 'micro', 'photo-realism');

create type "public"."tattoo_tags" as enum ('color', 'blackwork', 'black & gray', 'photo-based illustrational');


  create table "public"."client" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "preferred_name" text,
    "first_name" text,
    "last_name" text,
    "email" text,
    "phone" text,
    "gender" text,
    "instagram_id" text,
    "bluesky_id" text,
    "updated_at" timestamp with time zone not null default now()
      );


alter table "public"."client" enable row level security;


  create table "public"."client_tattoo" (
    "id" uuid not null default gen_random_uuid(),
    "client_id" uuid not null,
    "title" text not null,
    "type" text,
    "needles_used" jsonb,
    "inks_used" jsonb,
    "estimated_hours" numeric,
    "estimated_price" numeric,
    "deposit_amount" numeric,
    "drawing_amount" numeric,
    "deposit_amount_paid" numeric,
    "drawing_amount_paid" numeric,
    "deposit_amount_paid_at" timestamp with time zone,
    "drawing_amount_paid_at" timestamp with time zone,
    "total_tattooed_hours" numeric,
    "required_pre_paperwork_complete" boolean default false,
    "required_id_checked" boolean default false,
    "required_aftercare_given" boolean default false,
    "notes" text,
    "total_noshows" integer default 0,
    "total_nearby_reschedules" integer default 0,
    "total_farout_reschedules" integer default 0,
    "my_total_noshows" integer default 0,
    "my_total_nearby_reschedules" integer default 0,
    "my_total_farout_reschedules" integer default 0,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "completed_at" timestamp with time zone,
    "flash_id" text,
    "flash_name" text,
    "budget" numeric(10,2) not null default 0,
    "total_price" numeric(10,2) not null default 0,
    "total_price_paid" numeric(10,2) not null default 0,
    "total_tipped_paid" numeric(10,2) not null default 0,
    "total_price_paid_at" timestamp with time zone,
    "tattoo_name" text,
    "appointments" jsonb
      );


alter table "public"."client_tattoo" enable row level security;


  create table "public"."flash" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "path" text not null,
    "name" text,
    "readable_name" text not null,
    "created_at" timestamp with time zone default now(),
    "meta_data" jsonb,
    "tags" jsonb default '[]'::jsonb,
    "pinned_order" smallint,
    "remaining_availability" integer default 0,
    "total_availability" integer default 0,
    "sold_at" timestamp with time zone,
    "notes" text,
    "collection" text not null,
    "styles" jsonb not null default '[]'::jsonb,
    "isPublic" boolean,
    "description" text
      );


alter table "public"."flash" enable row level security;


  create table "public"."flash_options" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "filter_by_tags" boolean not null default false,
    "filter_by_styles" boolean not null default false,
    "show_upon_upload" boolean not null default false,
    "show_sold_out" boolean not null default false,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "default_collection" text
      );


alter table "public"."flash_options" enable row level security;


  create table "public"."profile" (
    "id" uuid not null,
    "email" text not null,
    "created_at" timestamp with time zone default now(),
    "first_name" text,
    "last_name" text,
    "artist_id" text,
    "is_verified" boolean not null default false,
    "bsky_id" text,
    "instagram_id" text,
    "phone" text,
    "profile_photo_path" text,
    "to_verify" jsonb,
    "preferred_name" text,
    "bio" text,
    "artist_name" text,
    "updated_at" timestamp with time zone,
    "available" jsonb
      );


alter table "public"."profile" enable row level security;


  create table "public"."profile_image" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "path" text not null,
    "name" text,
    "readable_name" text,
    "created_at" timestamp with time zone default now(),
    "meta_data" jsonb
      );


alter table "public"."profile_image" enable row level security;


  create table "public"."profile_tagging_options" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "collections" jsonb not null default '[]'::jsonb,
    "styles" jsonb not null default '[]'::jsonb,
    "tags" jsonb not null default '[]'::jsonb,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "needles" jsonb,
    "inks" jsonb,
    "studio_locations" jsonb,
    "placement_locations" jsonb,
    "avail_tattoo_sizes" jsonb
      );


alter table "public"."profile_tagging_options" enable row level security;


  create table "public"."tattoo_image" (
    "id" uuid not null default gen_random_uuid(),
    "client_tattoo_id" uuid,
    "path" text not null,
    "title" text,
    "created_at" timestamp with time zone default now(),
    "is_portfolio_img" boolean default false,
    "flash_id" uuid,
    "tags" jsonb not null default '[]'::jsonb,
    "styles" jsonb not null default '[]'::jsonb,
    "pinned_order" smallint,
    "name" text,
    "set_id" uuid,
    "set_order" integer,
    "meta_data" jsonb,
    "collection" text,
    "description" text,
    "profile_tattoo_id" uuid not null
      );


alter table "public"."tattoo_image" enable row level security;


  create table "public"."tattoo_request" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null,
    "flash_id" uuid,
    "client_tattoo_id" uuid,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "bluesky_id" text,
    "email" text not null,
    "first_name" text,
    "gender" text,
    "instagram_id" text,
    "last_name" text,
    "notes" text,
    "of_age" boolean,
    "phone" text not null,
    "placement" text,
    "preferred_name" text not null,
    "ref_images" jsonb,
    "seen_at" timestamp with time zone,
    "size" text,
    "type" text,
    "flash_name" text,
    "title" text,
    "budget" numeric(10,2) not null default 0,
    "deposit_amount" numeric(10,2) not null default 0,
    "deposit_amount_paid" numeric(10,2) not null default 0,
    "deposit_amount_paid_at" timestamp with time zone,
    "drawing_amount" numeric(10,2) not null default 0,
    "drawing_amount_paid" numeric(10,2) not null default 0,
    "drawing_amount_paid_at" timestamp with time zone,
    "available_dates" jsonb,
    "best_days" jsonb,
    "best_times" jsonb,
    "is_existing_client" boolean,
    "custom_details" text,
    "consultation_date" timestamp with time zone,
    "closed_at" timestamp with time zone,
    "consultation_fee" numeric(10,2)
      );


alter table "public"."tattoo_request" enable row level security;

CREATE UNIQUE INDEX client_pkey ON public.client USING btree (id);

CREATE UNIQUE INDEX client_tattoo_pkey ON public.client_tattoo USING btree (id);

CREATE UNIQUE INDEX client_user_email_unique ON public.client USING btree (user_id, email) WHERE (email IS NOT NULL);

CREATE UNIQUE INDEX client_user_phone_unique ON public.client USING btree (user_id, phone) WHERE (phone IS NOT NULL);

CREATE UNIQUE INDEX flash_collection_pinned_order_idx ON public.flash USING btree (collection, pinned_order) WHERE (pinned_order IS NOT NULL);

CREATE UNIQUE INDEX flash_options_pkey ON public.flash_options USING btree (id);

CREATE UNIQUE INDEX flash_options_user_id_key ON public.flash_options USING btree (user_id);

CREATE UNIQUE INDEX flash_pkey ON public.flash USING btree (id);

CREATE UNIQUE INDEX profile_artist_id_key ON public.profile USING btree (artist_id);

CREATE UNIQUE INDEX profile_email_key ON public.profile USING btree (email);

CREATE UNIQUE INDEX profile_images_pkey ON public.profile_image USING btree (id);

CREATE UNIQUE INDEX profile_pkey ON public.profile USING btree (id);

CREATE UNIQUE INDEX profile_tagging_options_pkey ON public.profile_tagging_options USING btree (id);

CREATE UNIQUE INDEX profile_tagging_options_user_id_key ON public.profile_tagging_options USING btree (user_id);

CREATE UNIQUE INDEX tattoo_image_pkey ON public.tattoo_image USING btree (id);

CREATE UNIQUE INDEX tattoo_request_pkey ON public.tattoo_request USING btree (id);

alter table "public"."client" add constraint "client_pkey" PRIMARY KEY using index "client_pkey";

alter table "public"."client_tattoo" add constraint "client_tattoo_pkey" PRIMARY KEY using index "client_tattoo_pkey";

alter table "public"."flash" add constraint "flash_pkey" PRIMARY KEY using index "flash_pkey";

alter table "public"."flash_options" add constraint "flash_options_pkey" PRIMARY KEY using index "flash_options_pkey";

alter table "public"."profile" add constraint "profile_pkey" PRIMARY KEY using index "profile_pkey";

alter table "public"."profile_image" add constraint "profile_images_pkey" PRIMARY KEY using index "profile_images_pkey";

alter table "public"."profile_tagging_options" add constraint "profile_tagging_options_pkey" PRIMARY KEY using index "profile_tagging_options_pkey";

alter table "public"."tattoo_image" add constraint "tattoo_image_pkey" PRIMARY KEY using index "tattoo_image_pkey";

alter table "public"."tattoo_request" add constraint "tattoo_request_pkey" PRIMARY KEY using index "tattoo_request_pkey";

alter table "public"."client" add constraint "client_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."client" validate constraint "client_user_id_fkey";

alter table "public"."client_tattoo" add constraint "client_tattoo_client_id_fkey" FOREIGN KEY (client_id) REFERENCES public.client(id) ON DELETE CASCADE not valid;

alter table "public"."client_tattoo" validate constraint "client_tattoo_client_id_fkey";

alter table "public"."flash" add constraint "flash_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."flash" validate constraint "flash_user_id_fkey";

alter table "public"."flash_options" add constraint "flash_options_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."flash_options" validate constraint "flash_options_user_id_fkey";

alter table "public"."flash_options" add constraint "flash_options_user_id_key" UNIQUE using index "flash_options_user_id_key";

alter table "public"."profile" add constraint "profile_artist_id_key" UNIQUE using index "profile_artist_id_key";

alter table "public"."profile" add constraint "profile_email_key" UNIQUE using index "profile_email_key";

alter table "public"."profile" add constraint "profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profile" validate constraint "profile_id_fkey";

alter table "public"."profile_image" add constraint "profile_images_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profile_image" validate constraint "profile_images_user_id_fkey";

alter table "public"."profile_tagging_options" add constraint "profile_tagging_options_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profile_tagging_options" validate constraint "profile_tagging_options_user_id_fkey";

alter table "public"."profile_tagging_options" add constraint "profile_tagging_options_user_id_key" UNIQUE using index "profile_tagging_options_user_id_key";

alter table "public"."tattoo_image" add constraint "tattoo_image_client_tattoo_id_fkey" FOREIGN KEY (client_tattoo_id) REFERENCES public.client_tattoo(id) ON DELETE CASCADE not valid;

alter table "public"."tattoo_image" validate constraint "tattoo_image_client_tattoo_id_fkey";

alter table "public"."tattoo_image" add constraint "tattoo_image_profile_tattoo_id_fkey" FOREIGN KEY (profile_tattoo_id) REFERENCES public.profile(id) not valid;

alter table "public"."tattoo_image" validate constraint "tattoo_image_profile_tattoo_id_fkey";

alter table "public"."tattoo_request" add constraint "tattoo_request_client_tattoo_id_fkey" FOREIGN KEY (client_tattoo_id) REFERENCES public.client_tattoo(id) ON DELETE SET NULL not valid;

alter table "public"."tattoo_request" validate constraint "tattoo_request_client_tattoo_id_fkey";

alter table "public"."tattoo_request" add constraint "tattoo_request_flash_id_fkey" FOREIGN KEY (flash_id) REFERENCES public.flash(id) ON DELETE SET NULL not valid;

alter table "public"."tattoo_request" validate constraint "tattoo_request_flash_id_fkey";

alter table "public"."tattoo_request" add constraint "tattoo_request_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."tattoo_request" validate constraint "tattoo_request_user_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.set_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
    new.updated_at = now();
    return new;
end;
$function$
;

grant delete on table "public"."client" to "anon";

grant insert on table "public"."client" to "anon";

grant references on table "public"."client" to "anon";

grant select on table "public"."client" to "anon";

grant trigger on table "public"."client" to "anon";

grant truncate on table "public"."client" to "anon";

grant update on table "public"."client" to "anon";

grant delete on table "public"."client" to "authenticated";

grant insert on table "public"."client" to "authenticated";

grant references on table "public"."client" to "authenticated";

grant select on table "public"."client" to "authenticated";

grant trigger on table "public"."client" to "authenticated";

grant truncate on table "public"."client" to "authenticated";

grant update on table "public"."client" to "authenticated";

grant delete on table "public"."client" to "service_role";

grant insert on table "public"."client" to "service_role";

grant references on table "public"."client" to "service_role";

grant select on table "public"."client" to "service_role";

grant trigger on table "public"."client" to "service_role";

grant truncate on table "public"."client" to "service_role";

grant update on table "public"."client" to "service_role";

grant delete on table "public"."client_tattoo" to "anon";

grant insert on table "public"."client_tattoo" to "anon";

grant references on table "public"."client_tattoo" to "anon";

grant select on table "public"."client_tattoo" to "anon";

grant trigger on table "public"."client_tattoo" to "anon";

grant truncate on table "public"."client_tattoo" to "anon";

grant update on table "public"."client_tattoo" to "anon";

grant delete on table "public"."client_tattoo" to "authenticated";

grant insert on table "public"."client_tattoo" to "authenticated";

grant references on table "public"."client_tattoo" to "authenticated";

grant select on table "public"."client_tattoo" to "authenticated";

grant trigger on table "public"."client_tattoo" to "authenticated";

grant truncate on table "public"."client_tattoo" to "authenticated";

grant update on table "public"."client_tattoo" to "authenticated";

grant delete on table "public"."client_tattoo" to "service_role";

grant insert on table "public"."client_tattoo" to "service_role";

grant references on table "public"."client_tattoo" to "service_role";

grant select on table "public"."client_tattoo" to "service_role";

grant trigger on table "public"."client_tattoo" to "service_role";

grant truncate on table "public"."client_tattoo" to "service_role";

grant update on table "public"."client_tattoo" to "service_role";

grant delete on table "public"."flash" to "anon";

grant insert on table "public"."flash" to "anon";

grant references on table "public"."flash" to "anon";

grant select on table "public"."flash" to "anon";

grant trigger on table "public"."flash" to "anon";

grant truncate on table "public"."flash" to "anon";

grant update on table "public"."flash" to "anon";

grant delete on table "public"."flash" to "authenticated";

grant insert on table "public"."flash" to "authenticated";

grant references on table "public"."flash" to "authenticated";

grant select on table "public"."flash" to "authenticated";

grant trigger on table "public"."flash" to "authenticated";

grant truncate on table "public"."flash" to "authenticated";

grant update on table "public"."flash" to "authenticated";

grant delete on table "public"."flash" to "service_role";

grant insert on table "public"."flash" to "service_role";

grant references on table "public"."flash" to "service_role";

grant select on table "public"."flash" to "service_role";

grant trigger on table "public"."flash" to "service_role";

grant truncate on table "public"."flash" to "service_role";

grant update on table "public"."flash" to "service_role";

grant delete on table "public"."flash_options" to "anon";

grant insert on table "public"."flash_options" to "anon";

grant references on table "public"."flash_options" to "anon";

grant select on table "public"."flash_options" to "anon";

grant trigger on table "public"."flash_options" to "anon";

grant truncate on table "public"."flash_options" to "anon";

grant update on table "public"."flash_options" to "anon";

grant delete on table "public"."flash_options" to "authenticated";

grant insert on table "public"."flash_options" to "authenticated";

grant references on table "public"."flash_options" to "authenticated";

grant select on table "public"."flash_options" to "authenticated";

grant trigger on table "public"."flash_options" to "authenticated";

grant truncate on table "public"."flash_options" to "authenticated";

grant update on table "public"."flash_options" to "authenticated";

grant delete on table "public"."flash_options" to "service_role";

grant insert on table "public"."flash_options" to "service_role";

grant references on table "public"."flash_options" to "service_role";

grant select on table "public"."flash_options" to "service_role";

grant trigger on table "public"."flash_options" to "service_role";

grant truncate on table "public"."flash_options" to "service_role";

grant update on table "public"."flash_options" to "service_role";

grant delete on table "public"."profile" to "anon";

grant insert on table "public"."profile" to "anon";

grant references on table "public"."profile" to "anon";

grant select on table "public"."profile" to "anon";

grant trigger on table "public"."profile" to "anon";

grant truncate on table "public"."profile" to "anon";

grant update on table "public"."profile" to "anon";

grant delete on table "public"."profile" to "authenticated";

grant insert on table "public"."profile" to "authenticated";

grant references on table "public"."profile" to "authenticated";

grant select on table "public"."profile" to "authenticated";

grant trigger on table "public"."profile" to "authenticated";

grant truncate on table "public"."profile" to "authenticated";

grant update on table "public"."profile" to "authenticated";

grant delete on table "public"."profile" to "service_role";

grant insert on table "public"."profile" to "service_role";

grant references on table "public"."profile" to "service_role";

grant select on table "public"."profile" to "service_role";

grant trigger on table "public"."profile" to "service_role";

grant truncate on table "public"."profile" to "service_role";

grant update on table "public"."profile" to "service_role";

grant delete on table "public"."profile_image" to "anon";

grant insert on table "public"."profile_image" to "anon";

grant references on table "public"."profile_image" to "anon";

grant select on table "public"."profile_image" to "anon";

grant trigger on table "public"."profile_image" to "anon";

grant truncate on table "public"."profile_image" to "anon";

grant update on table "public"."profile_image" to "anon";

grant delete on table "public"."profile_image" to "authenticated";

grant insert on table "public"."profile_image" to "authenticated";

grant references on table "public"."profile_image" to "authenticated";

grant select on table "public"."profile_image" to "authenticated";

grant trigger on table "public"."profile_image" to "authenticated";

grant truncate on table "public"."profile_image" to "authenticated";

grant update on table "public"."profile_image" to "authenticated";

grant delete on table "public"."profile_image" to "service_role";

grant insert on table "public"."profile_image" to "service_role";

grant references on table "public"."profile_image" to "service_role";

grant select on table "public"."profile_image" to "service_role";

grant trigger on table "public"."profile_image" to "service_role";

grant truncate on table "public"."profile_image" to "service_role";

grant update on table "public"."profile_image" to "service_role";

grant delete on table "public"."profile_tagging_options" to "anon";

grant insert on table "public"."profile_tagging_options" to "anon";

grant references on table "public"."profile_tagging_options" to "anon";

grant select on table "public"."profile_tagging_options" to "anon";

grant trigger on table "public"."profile_tagging_options" to "anon";

grant truncate on table "public"."profile_tagging_options" to "anon";

grant update on table "public"."profile_tagging_options" to "anon";

grant delete on table "public"."profile_tagging_options" to "authenticated";

grant insert on table "public"."profile_tagging_options" to "authenticated";

grant references on table "public"."profile_tagging_options" to "authenticated";

grant select on table "public"."profile_tagging_options" to "authenticated";

grant trigger on table "public"."profile_tagging_options" to "authenticated";

grant truncate on table "public"."profile_tagging_options" to "authenticated";

grant update on table "public"."profile_tagging_options" to "authenticated";

grant delete on table "public"."profile_tagging_options" to "service_role";

grant insert on table "public"."profile_tagging_options" to "service_role";

grant references on table "public"."profile_tagging_options" to "service_role";

grant select on table "public"."profile_tagging_options" to "service_role";

grant trigger on table "public"."profile_tagging_options" to "service_role";

grant truncate on table "public"."profile_tagging_options" to "service_role";

grant update on table "public"."profile_tagging_options" to "service_role";

grant delete on table "public"."tattoo_image" to "anon";

grant insert on table "public"."tattoo_image" to "anon";

grant references on table "public"."tattoo_image" to "anon";

grant select on table "public"."tattoo_image" to "anon";

grant trigger on table "public"."tattoo_image" to "anon";

grant truncate on table "public"."tattoo_image" to "anon";

grant update on table "public"."tattoo_image" to "anon";

grant delete on table "public"."tattoo_image" to "authenticated";

grant insert on table "public"."tattoo_image" to "authenticated";

grant references on table "public"."tattoo_image" to "authenticated";

grant select on table "public"."tattoo_image" to "authenticated";

grant trigger on table "public"."tattoo_image" to "authenticated";

grant truncate on table "public"."tattoo_image" to "authenticated";

grant update on table "public"."tattoo_image" to "authenticated";

grant delete on table "public"."tattoo_image" to "service_role";

grant insert on table "public"."tattoo_image" to "service_role";

grant references on table "public"."tattoo_image" to "service_role";

grant select on table "public"."tattoo_image" to "service_role";

grant trigger on table "public"."tattoo_image" to "service_role";

grant truncate on table "public"."tattoo_image" to "service_role";

grant update on table "public"."tattoo_image" to "service_role";

grant delete on table "public"."tattoo_request" to "anon";

grant insert on table "public"."tattoo_request" to "anon";

grant references on table "public"."tattoo_request" to "anon";

grant select on table "public"."tattoo_request" to "anon";

grant trigger on table "public"."tattoo_request" to "anon";

grant truncate on table "public"."tattoo_request" to "anon";

grant update on table "public"."tattoo_request" to "anon";

grant delete on table "public"."tattoo_request" to "authenticated";

grant insert on table "public"."tattoo_request" to "authenticated";

grant references on table "public"."tattoo_request" to "authenticated";

grant select on table "public"."tattoo_request" to "authenticated";

grant trigger on table "public"."tattoo_request" to "authenticated";

grant truncate on table "public"."tattoo_request" to "authenticated";

grant update on table "public"."tattoo_request" to "authenticated";

grant delete on table "public"."tattoo_request" to "service_role";

grant insert on table "public"."tattoo_request" to "service_role";

grant references on table "public"."tattoo_request" to "service_role";

grant select on table "public"."tattoo_request" to "service_role";

grant trigger on table "public"."tattoo_request" to "service_role";

grant truncate on table "public"."tattoo_request" to "service_role";

grant update on table "public"."tattoo_request" to "service_role";


  create policy "Users can delete their own clients"
  on "public"."client"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can insert their own clients"
  on "public"."client"
  as permissive
  for insert
  to authenticated
with check ((auth.uid() = user_id));



  create policy "Users can select their own clients"
  on "public"."client"
  as permissive
  for select
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can update their own clients"
  on "public"."client"
  as permissive
  for update
  to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



  create policy "Users can delete their own client tattoos"
  on "public"."client_tattoo"
  as permissive
  for delete
  to authenticated
using ((EXISTS ( SELECT 1
   FROM public.client c
  WHERE ((c.id = client_tattoo.client_id) AND (c.user_id = auth.uid())))));



  create policy "Users can insert their own client tattoos"
  on "public"."client_tattoo"
  as permissive
  for insert
  to authenticated
with check ((EXISTS ( SELECT 1
   FROM public.client c
  WHERE ((c.id = client_tattoo.client_id) AND (c.user_id = auth.uid())))));



  create policy "Users can select their own client tattoos"
  on "public"."client_tattoo"
  as permissive
  for select
  to authenticated
using ((EXISTS ( SELECT 1
   FROM public.client c
  WHERE ((c.id = client_tattoo.client_id) AND (c.user_id = auth.uid())))));



  create policy "Users can update their own client tattoos"
  on "public"."client_tattoo"
  as permissive
  for update
  to authenticated
using ((EXISTS ( SELECT 1
   FROM public.client c
  WHERE ((c.id = client_tattoo.client_id) AND (c.user_id = auth.uid())))))
with check ((EXISTS ( SELECT 1
   FROM public.client c
  WHERE ((c.id = client_tattoo.client_id) AND (c.user_id = auth.uid())))));



  create policy "Users can delete their own flash"
  on "public"."flash"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can insert their own flash"
  on "public"."flash"
  as permissive
  for insert
  to authenticated
with check ((auth.uid() = user_id));



  create policy "Users can select their own flash"
  on "public"."flash"
  as permissive
  for select
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can update their own flash"
  on "public"."flash"
  as permissive
  for update
  to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



  create policy "Users can delete their own flash options"
  on "public"."flash_options"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can insert their own flash options"
  on "public"."flash_options"
  as permissive
  for insert
  to authenticated
with check ((auth.uid() = user_id));



  create policy "Users can update their own flash options"
  on "public"."flash_options"
  as permissive
  for update
  to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



  create policy "Users can view their own flash options"
  on "public"."flash_options"
  as permissive
  for select
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can delete their own profile"
  on "public"."profile"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = id));



  create policy "Users can insert their own profile"
  on "public"."profile"
  as permissive
  for insert
  to authenticated
with check ((auth.uid() = id));



  create policy "Users can select their own profile"
  on "public"."profile"
  as permissive
  for select
  to authenticated
using ((auth.uid() = id));



  create policy "Users can update their own profile"
  on "public"."profile"
  as permissive
  for update
  to authenticated
using ((auth.uid() = id))
with check ((auth.uid() = id));



  create policy "Users can delete their own profile images"
  on "public"."profile_image"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can insert their own profile images"
  on "public"."profile_image"
  as permissive
  for insert
  to authenticated
with check ((auth.uid() = user_id));



  create policy "Users can select their own profile images"
  on "public"."profile_image"
  as permissive
  for select
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can update their own profile images"
  on "public"."profile_image"
  as permissive
  for update
  to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



  create policy "Users can delete their own tagging options"
  on "public"."profile_tagging_options"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can insert their own tagging options"
  on "public"."profile_tagging_options"
  as permissive
  for insert
  to authenticated
with check ((auth.uid() = user_id));



  create policy "Users can select their own tagging options"
  on "public"."profile_tagging_options"
  as permissive
  for select
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can update their own tagging options"
  on "public"."profile_tagging_options"
  as permissive
  for update
  to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



  create policy "Users can delete their own tattoo images"
  on "public"."tattoo_image"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = profile_tattoo_id));



  create policy "Users can insert their own tattoo images"
  on "public"."tattoo_image"
  as permissive
  for insert
  to authenticated
with check ((auth.uid() = profile_tattoo_id));



  create policy "Users can select their own tattoo images"
  on "public"."tattoo_image"
  as permissive
  for select
  to authenticated
using ((auth.uid() = client_tattoo_id));



  create policy "Users can update their own tattoo images"
  on "public"."tattoo_image"
  as permissive
  for update
  to authenticated
using ((auth.uid() = profile_tattoo_id))
with check ((auth.uid() = profile_tattoo_id));



  create policy "Anyone can create tattoo requests"
  on "public"."tattoo_request"
  as permissive
  for insert
  to anon, authenticated
with check (true);



  create policy "Users can delete their tattoo requests"
  on "public"."tattoo_request"
  as permissive
  for delete
  to authenticated
using ((auth.uid() = user_id));



  create policy "Users can update their tattoo requests"
  on "public"."tattoo_request"
  as permissive
  for update
  to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



  create policy "Users can view their tattoo requests"
  on "public"."tattoo_request"
  as permissive
  for select
  to authenticated
using ((auth.uid() = user_id));


CREATE TRIGGER client_set_updated_at BEFORE UPDATE ON public.client FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


  create policy "users can delete own files"
  on "storage"."objects"
  as permissive
  for delete
  to authenticated
using (((bucket_id = 'user-images'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));



  create policy "users can read own files"
  on "storage"."objects"
  as permissive
  for select
  to authenticated
using (((bucket_id = 'user-images'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));



  create policy "users can upload to own folder"
  on "storage"."objects"
  as permissive
  for insert
  to authenticated
with check (((bucket_id = 'user-images'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));



