import type { ClientTable } from "@hyperinkstudio/db";

type Props = {
  clients: ClientTable[];
  onSelectClient: (client: ClientTable) => void;
};

export function ClientResults({ clients, onSelectClient }: Props) {
  return (
    <ul className="">
      {clients.map((client) => (
        <li
          className=" odd:bg-surface-100/900 even:bg-surface-200/800"
          key={client.id}
        >
          <button
            className="btn btn preset-filled-primary-400-600"
            type="button"
            onClick={() => onSelectClient(client)}
          >
            SELECT
          </button>
          <span className="inline-block pl-2">
            {client.preferred_name}
            {client.first_name && ` (${client.first_name})`}
            {client.email && ` • ${client.email}`}
            {client.phone && ` • ${client.phone}`}
          </span>
        </li>
      ))}
    </ul>
  );
}
