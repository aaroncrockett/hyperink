type PricingProps = {
  className?: string;
};

export default function Pricing({ className }: PricingProps) {
  return (
    <div className={className}>
      <ul>
        <li>Pricing Info</li>
      </ul>
    </div>
  );
}
