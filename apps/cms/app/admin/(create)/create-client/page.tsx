import { Heading, Page, ServerForm } from "@inktree/ui-react/components";

import { createClient } from "./actions";

export default function CreateClientPage() {
  return (
    <Page>
      <Heading as="h2" text="Create A Client" />

      <ServerForm
        action={createClient}
        className="flex flex-col gap-4 max-w-md"
      >
        <div>
          <label htmlFor="preferred_name" className="label">
            Preferred Name
          </label>
          <input id="preferred_name" name="preferred_name" className="input" />
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className="input" />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input id="email" name="email" type="email" className="input" />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center">
          <label htmlFor="create_tattoo" className="">
            Create A Tattoo with the client
          </label>
          <input
            id="create_tattoo"
            name="create_tattoo"
            type="checkbox"
            className="checkbox"
          />
        </div>
      </ServerForm>
    </Page>
  );
}
