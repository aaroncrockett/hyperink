export async function getImageFormInputs(formData: FormData) {
  const files = formData.getAll("files") as File[];
  const readableNames = formData.getAll("readable_name") as string[];
  const setOrder = formData.getAll("set_order") as string[];

  const styles = formData.getAll("styles") as string[];
  const collections = formData.getAll("collections") as string[];
  const groups = formData.getAll("groups") as string[];
  const tags = formData.getAll("tags") as string[];

  const coverIndex = Number(formData.get("coverIndex"));

  if (files.length === 0) {
    throw new Error("No files");
  }

  return {
    files,
    readableNames,
    setOrder,
    styles,
    collections,
    groups,
    tags,
    coverIndex,
  };
}
