import React from "react";
import { Button, Cell, List, Section } from "@telegram-apps/telegram-ui";

import { FaTelegram } from "react-icons/fa";
import userService from "../../services/user.service";
import { useUserStore } from "../../stores/useUserStore";

export const EarnPage = () => {
  const { user, loading, updateUser } = useUserStore();
  const handleEarn = async () => {
    if (user) {
      updateUser(user, {
        id: user.id,
        coinBalance: user.coinBalance + 200,
      });
    }
  };
  return (
    <List
      style={{
        padding: 10,
      }}>
      <Section>
        <Cell
          before={<FaTelegram size={36} color="blue" />}
          after={
            <Button style={{ width: 96 }} mode="filled" onClick={handleEarn}>
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
