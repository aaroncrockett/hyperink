type AftercareProps = {
  className?: string;
};

export default function Aftercare({ className }: AftercareProps) {
  return (
    <div className={className}>
      <ul>
        <li>Aftercare Info</li>
      </ul>
    </div>
  );
}
