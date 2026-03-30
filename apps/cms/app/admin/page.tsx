import { createClient } from "@/utils/supabase/server";
import type { Client } from "../../../../packages/db";

import { uploadImage } from "./actions";

// const { data, error } = await supabase.storage
//   .from("user-uploads")
//   .upload(`${user.id}/${file.name}`, file);

export default async function AdminPage() {
  const client: Client = await createClient();

  const {
    data: { user },
  } = await client.getUser();

  return (
    <div>
      <h1>ADMIN</h1>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <p>Hello, {user?.user_metadata.full_name}</p>
      <form action={uploadImage}>
        <input type="file" name="file" required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
