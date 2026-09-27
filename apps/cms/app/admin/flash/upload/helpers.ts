export function getFileId(file: File) {
  return `${file.name}-${file.lastModified}`;
}
