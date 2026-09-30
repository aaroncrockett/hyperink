type Props = {
  params: Promise<{ id: string }>;
};

export default async function FlashItemEdit({ params }: Props) {
  const { id } = await params;

  return <div>Editing flash item: {id}</div>;
}
