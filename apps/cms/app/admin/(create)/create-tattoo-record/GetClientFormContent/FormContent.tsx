export function GetClientFormContent() {
  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="input"
          placeholder="Client email"
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="input"
          placeholder="Client phone"
        />
      </div>
    </>
  );
}
