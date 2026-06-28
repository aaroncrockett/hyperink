import UploadImage from "../../ImageInputs/ImageInputs";
import Form from "../../Form";
import { uploadImage } from "./actions";

export default async function UploadImagePage() {
  return (
    <div className="bg-slate-50 p-6 border flex flex-col space-y-4">
      {/* <Form action={uploadImage}>
  
      </Form> */}
      <UploadImage />
    </div>
  );
}
