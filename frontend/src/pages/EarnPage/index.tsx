import React from "react";
import { Button, Cell, List, Section } from "@telegram-apps/telegram-ui";

import { FaTelegram } from "react-icons/fa";

export const EarnPage = () => {
  return (
    <List
      style={{
        padding: 10,
      }}>
      <Section>
        <Cell
          before={<FaTelegram size={36} color="blue" />}
          after={
            <Button style={{ width: 96 }} mode="filled">
              Get
            </Button>
          }
          subtitle={"Go to channel and earn 200 points"}>
          Telegram dev
        </Cell>
      </Section>
    </List>
  );
};
