import { List, Section, Input, Cell, Switch } from "@telegram-apps/telegram-ui";
import { useEffect, useLayoutEffect } from "react";
import { mainButton, initData } from "@telegram-apps/sdk";
import { useNavigate } from "react-router";

export const RoomSetupPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    mainButton.setParams({ isVisible: true, text: "Start" });
    const offClick = mainButton.onClick(() => {
      navigate(`/game/123`);
    });
    return () => {
      offClick();
      mainButton.setParams({ isVisible: false });
    };
  });

  return (
    <List>
      <Section header={<Section.Header>Setup the room:</Section.Header>}>
        <Input header={"Room name"} />
        <Cell
          after={<Switch defaultChecked />}
          description="Use switch to close or open room"
          multiline>
          Closed room
        </Cell>
      </Section>
    </List>
  );
};
