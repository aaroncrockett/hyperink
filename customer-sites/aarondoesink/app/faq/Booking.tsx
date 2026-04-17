type BookingProps = {
  className?: string;
};

export default function Booking({ className }: BookingProps) {
  return (
    <div className={className}>
      <ul>
        <li>Booking Info</li>
      </ul>
    </div>
  );
}
