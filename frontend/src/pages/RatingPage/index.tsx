import {
  Avatar,
  Cell,
  Chip,
  List,
  Section,
  Text,
} from "@telegram-apps/telegram-ui";

export const RatingPage = () => {
  return (
    <List>
      <Section header={<Section.Header large>{"Your rating"}</Section.Header>}>
        <Cell
          before={<Avatar />}
          subtitle={<Text>{"Games won: "}</Text>}
          after={
            <Chip mode="mono" before={<Text>Place:</Text>}>
              {1}
            </Chip>
          }>
          @stanislaw
        </Cell>
      </Section>
      <Section header={<Section.Header large>{"Top players"}</Section.Header>}>
        <Cell
          before={<Avatar />}
          subtitle={<Text>{"Games won: "}</Text>}
          after={
            <Chip mode="mono" before={<Text>Place:</Text>}>
              {1}
            </Chip>
          }>
          @stanislaw
        </Cell>
        <Cell
          before={<Avatar />}
          subtitle={<Text>{"Games won: "}</Text>}
          after={
            <Chip mode="mono" before={<Text>Place:</Text>}>
              {1}
            </Chip>
          }>
          @stanislaw
        </Cell>
      </Section>
    </List>
  );
};
