create table public.options (
  id uuid not null default gen_random_uuid(),
  profile_id uuid not null,
  profile_opts jsonb null,
  tattoo_image_opts jsonb null,
  flash_opts jsonb null,
  client_tattoo_opts jsonb null,
  display_opts jsonb null,
  request_opts jsonb null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint options_pkey primary key (id),
  constraint options_profile_id_fkey
    foreign key (profile_id)
    references public.profile (id)
    on delete cascade,
  constraint options_profile_id_unique unique (profile_id)
);

alter table public.options enable row level security;

create policy "Allow authenticated users to view their options"
on public.options
for select
to authenticated
using (profile_id = auth.uid());

create policy "Allow authenticated users to create their options"
on public.options
for insert
to authenticated
with check (profile_id = auth.uid());

create policy "Allow authenticated users to update their options"
on public.options
for update
to authenticated
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "Allow authenticated users to delete their options"
on public.options
for delete
to authenticated
using (profile_id = auth.uid());