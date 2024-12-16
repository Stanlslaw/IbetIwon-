import { List, Section, Title } from "@telegram-apps/telegram-ui";
import { backButton } from "@telegram-apps/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const RatingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    backButton.show();
    const offClick = backButton.onClick(() => navigate(-1));
    return () => {
      offClick();
      backButton.hide();
    };
  });

  return (
    <div>
      <Title>Top 10 players</Title>
      <List>
        <Section></Section>
      </List>
    </div>
  );
};
