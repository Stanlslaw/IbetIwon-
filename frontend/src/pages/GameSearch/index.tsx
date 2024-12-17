import {
  List,
  Multiselect,
  Section,
  Slider,
  Text,
  Subheadline,
  Cell,
  Avatar,
  AvatarStack,
  Chip,
  Button,
  Input,
  Divider,
} from "@telegram-apps/telegram-ui";
import { MultiselectOption } from "@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types";
import { useEffect, useState } from "react";
import { mainButton } from "@telegram-apps/sdk";
import { useNavigate } from "react-router";
import React from "react";

const FILTER_OPTIONS: MultiselectOption[] = [
  {
    value: "open",
    label: "Open",
  },
  {
    value: "close",
    label: "Close",
  },
];

export const GameSearch = () => {
  const navigate = useNavigate();
  const [filterOptions, setFilterOptions] =
    useState<MultiselectOption[]>(FILTER_OPTIONS);
  const [maxBetValue, setMaxBetValue] = useState<number>();

  useEffect(() => {
    mainButton.setParams({ isVisible: true, text: "Create room" });
    const offClick = mainButton.onClick(() => {
      navigate("/createroom");
    });
    return () => {
      offClick();
      mainButton.setParams({ isVisible: false });
    };
  });

  return (
    <>
      <List>
        <Section header={<Section.Header>Setup the game</Section.Header>}>
          <Multiselect
            header={"Game type:"}
            onChange={(options) => setFilterOptions(options)}
            value={filterOptions}
            options={FILTER_OPTIONS}></Multiselect>
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px",
              }}>
              <Subheadline style={{ opacity: 0.6 }}>Game coins</Subheadline>
              <Chip
                style={{ margin: "8px 0" }}
                before={<Text>Coins:</Text>}
                mode="elevated">
                399
              </Chip>
            </div>
            <Slider
              before={<Text>0</Text>}
              after={<Text>1000</Text>}
              step={100}
              max={1000}
              min={0}></Slider>
          </>
          <Input header={"Room name"}></Input>
        </Section>
      </List>
      <List style={{ paddingTop: 12 }}>
        <Section
          header={<Section.Header large>Games</Section.Header>}
          footer={<Section.Footer>{"The end :)"}</Section.Footer>}>
          <Divider />
          <Cell
            title=""
            before={
              <AvatarStack>
                <Avatar />
                <Avatar />
              </AvatarStack>
            }
            after={<Button>Join</Button>}
            subtitle={
              <Chip mode="mono">
                <Text>Bet: 200</Text>
              </Chip>
            }>
            <Text>Room 1</Text>
          </Cell>
        </Section>
      </List>
    </>
  );
};
