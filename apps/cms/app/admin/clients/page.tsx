// "use server";

// // Hyperink
// import {
//   TableLayout,
//   RowOfTableLayout,
// } from "@hyperinkstudio/ui-react-next/components";
// import { formatDate } from "@hyperinkstudio/utils/dates";

// // Local Outter
// import { createSSClient } from "@/auth/server";
// import { getLastTenClients, getClientColLabel } from "@/business/clientPersons";
// // Local UI
// import { Page, Heading } from "@/ui";
// // Local
// import { NAV_ADMIN_CLIENT_LIST } from "@/consts";
// import { PageAdminNav } from "../_components/PageAdminNav";

// const gridColCls = "grid-cols-[6rem_6rem_10rem_10rem_10rem_8rem_8rem]";

// export default async function ClientsPage() {
//   const authedClient = await createSSClient();
//   const { data: lastTenClients } = await getLastTenClients(authedClient);

//   return (
//     <Page>
//       <Heading as="h1" text="Client Records" />

//       {/* <PageAdminNav links={NAV_ADMIN_CLIENT_LIST} /> */}

//       {lastTenClients && (
//         <TableLayout
//           gridColCls={gridColCls}
//           headerCols={
//             <>
//               <span>Update Client</span>
//               <span>Create Tatt Record</span>
//               <span>{getClientColLabel("preferred_name")}</span>
//               <span>{getClientColLabel("first_name")}</span>
//               <span>{getClientColLabel("last_name")}</span>
//               <span>{getClientColLabel("created_at")}</span>
//               <span>{getClientColLabel("updated_at")}</span>
//             </>
//           }
//         >
//           {lastTenClients?.map((client, index) => (
//             <RowOfTableLayout key={client.id} gridColCls={gridColCls}>
//               <span className="text-secondary-500 font-bold underline truncate">
//                 update
//               </span>
//               <span className="text-secondary-500 font-bold underline  truncate">
//                 create
//               </span>
//               <span className="truncate font-semibold">
//                 {client.preferred_name}
//               </span>

//               <span className="truncate">{client.first_name}</span>

//               <span className="truncate">{client.last_name}</span>

//               <span className="truncate">
//                 {formatDate(client?.created_at ?? "")}
//               </span>

//               <span className="truncate">
//                 {formatDate(client?.updated_at ?? "")}
//               </span>
//             </RowOfTableLayout>
//           ))}
//         </TableLayout>
//       )}
//     </Page>
//   );
// }
