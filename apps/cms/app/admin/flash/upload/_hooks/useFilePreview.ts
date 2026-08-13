// import { useEffect, useState } from "react";

// export function useFilePreview(file: globalThis.File) {
//   const [previewUrl] = useState(() => URL.createObjectURL(file));

//   useEffect(() => {
//     return () => URL.revokeObjectURL(previewUrl);
//   }, [previewUrl]);

//   return previewUrl;
// }
