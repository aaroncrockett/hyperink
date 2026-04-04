import { data } from "./index";

export default async function Tattoos() {
  // if (error) {
  //   console.error(error);
  //   return <div>Error loading images</div>;
  // }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tattoos</h1>
      <p>{data ? data[0].name : null}</p>
    </div>
  );
}
