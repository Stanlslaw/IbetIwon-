import { ButtonCell, List, Section } from "@telegram-apps/telegram-ui";

export const StorePage = () => {
  return (
    <div>
      <List
        style={{
          padding: 10,
        }}>
        <Section header={"Profile badges"}>
          <ButtonCell before={""}></ButtonCell>
        </Section>
        <Section header={"Game skins"}></Section>
      </List>
    </div>
  );
};
