export default function AppointmentRequest() {
  return (
    <div className="bg-slate-50 p-6 border flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Appointment Requests</h1>
      <p className="text-gray-600">
        This is where you can view and manage appointment requests from clients.
      </p>
      <ul>
        <li>Customer name</li>
        <li>email</li>
        <li>social</li>
        <li>flash or custom</li>
        <li>details</li>
        <li>paid or not</li>
      </ul>
    </div>
  );
}
