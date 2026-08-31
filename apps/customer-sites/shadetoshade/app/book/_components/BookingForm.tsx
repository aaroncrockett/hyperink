import { DISPLAY_TATT_REQ } from "@/business/tattooRequest";
//
type BookingFormProps = {
  flashId?: string;
};

console.log(DISPLAY_TATT_REQ);

export function BookingForm({ flashId }: BookingFormProps) {
  return (
    <div>
      {flashId && flashId}
      {DISPLAY_TATT_REQ.map((req) => (
        <div key={req.id}>{req.id}</div>
      ))}
    </div>
  );
}
