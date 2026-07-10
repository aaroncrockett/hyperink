type LookupType = "email" | "phone" | "preferredName";

type Props = {
  lookupType: LookupType;
};

export function GetClientFormContent({ lookupType }: Props) {
  switch (lookupType) {
    case "email":
      return (
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
      );

    case "phone":
      return (
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
      );

    case "preferredName":
      return (
        <div>
          <label htmlFor="preferredName">Preferred Name</label>
          <input
            id="preferredName"
            name="preferredName"
            type="text"
            className="input"
            placeholder="Client preferred name"
          />
        </div>
      );
  }
}
