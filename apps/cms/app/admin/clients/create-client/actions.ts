// "use server";

// import { redirect } from "next/navigation";

// import type { ClientTable } from "@/business/types";
// import { createSSClient, getAuthedUser } from "@/auth/server";
// import { createClientPerson } from "@/business/clientPersons";
// import { LINKS_ADMIN } from "@/app/consts";

// import { EDITABLE_CLIENT_FORM_SCHEMA } from "@/business/clientPersons";

// export type ClientFormState = {
//   errors: Record<string, string> | null;
//   client: Partial<ClientTable> | null;
// };

// export async function createClient(
//   _prevState: ClientFormState,
//   formData: FormData,
// ): Promise<void> {
//   const formDataObject = Object.fromEntries(formData.entries());

//   const parsedForm = EDITABLE_CLIENT_FORM_SCHEMA.safeParse(formDataObject);

//   const actionResults: ClientFormState = {
//     client: null,
//     errors: null,
//   };

//   const authedClient = await createSSClient();

//   const {
//     data: { user },
//   } = await getAuthedUser(authedClient);

//   if (!user) {
//     return {
//       ..._prevState,
//       errors: {
//         ..._prevState.errors,
//         unauthorized: "The person is unauthorized",
//       },
//     };
//   }

//   const { data: client, error } = await createClientPerson(authedClient, {
//     user_id: user.id,
//     ...parsedForm,
//   });

//   if (client) {
//     redirect(
//       `${LINKS_ADMIN.createTattooRecord.href}?clientId=${client?.id}&preferredName=${client?.preferred_name}`,
//     );
//   }

//   redirect(LINKS_ADMIN.home.href);
// }
