// Local @
import { Page, Heading, ViewTransition } from "@/ui";
// Local
//
export default function PreferencesPage() {
  return (
    <ViewTransition transition="nav-forward">
      <Page>
        <Heading
          as="h2"
          h2TextAtrs="text-surface-800-200"
          text="Preferences"
        ></Heading>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae sem at arcu fermentum tincidunt. Praesent consequat, nisl
            vitae aliquam tincidunt, justo libero volutpat mauris, vitae
            tincidunt erat lorem non justo.
          </p>
          <div className="w-full h-20 p-5 m-5 bg-primary-200-800"></div>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Mauris tincidunt, sapien sed feugiat
            vulputate, lectus magna consequat nulla, vitae tincidunt neque ipsum
            at justo.
          </p>
          <p>
            Sed consectetur felis vel lacus consequat, vitae faucibus justo
            malesuada. Donec posuere, lectus at ullamcorper pretium, sapien
            magna tincidunt lectus, non tincidunt lorem arcu eget purus.
          </p>
          <p>
            Nullam euismod, libero quis tincidunt malesuada, augue lectus
            consequat erat, at feugiat sapien mauris vel ipsum. Curabitur
            aliquam turpis id mauris tincidunt, sed vulputate justo tincidunt.
          </p>
          <p>
            Fusce vitae magna sed erat facilisis tincidunt. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Donec volutpat lorem at sapien aliquet, vitae
            consequat augue interdum.
          </p>
          <p>
            Aliquam erat volutpat. Suspendisse potenti. Aenean tincidunt, neque
            vel posuere malesuada, arcu erat consequat lectus, vitae tincidunt
            lorem nisl non mauris. Integer feugiat ipsum vitae lectus consequat.
          </p>
          <p>
            Morbi interdum, ligula at malesuada consequat, justo augue
            vestibulum neque, vitae ullamcorper libero nulla sed erat. Proin
            dignissim, nisl vel aliquam faucibus, lorem turpis tincidunt purus,
            at volutpat sem erat eget nunc.
          </p>
        </div>
      </Page>
    </ViewTransition>
  );
}
