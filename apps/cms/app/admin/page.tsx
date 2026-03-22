import { createClient } from "@/utils/supabase/server";
import type { AuthClient } from "@inktree/auth";

// const { data, error } = await supabase.storage
//   .from("user-uploads")
//   .upload(`${user.id}/${file.name}`, file);

export default async function AdminPage() {
  const authClient: AuthClient = await createClient();

  const {
    data: { user },
  } = await authClient.getUser();

  return (
    <div>
      <h1>ADMIN</h1>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <p>Hello, {user?.user_metadata.full_name}</p>
    </div>
  );
}
