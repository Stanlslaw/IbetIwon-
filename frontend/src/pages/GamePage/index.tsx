import { Text } from "@telegram-apps/telegram-ui";
import { useParams } from "react-router";
import { shareURL, mainButton } from "@telegram-apps/sdk";
import { useEffect } from "react";
export const GamePage = () => {
  const { roomId } = useParams();

  const handleShare = () => {
    if (shareURL.isAvailable()) {
      shareURL(
        "https://t.me/ibetiwonbot/ibetiwon?startapp=123",
        "Let play together"
      );
    }
  };

  useEffect(() => {
    mainButton.setParams({ isVisible: true, text: "Invite friend" });
    const offClick = mainButton.onClick(() => {
      handleShare();
    });
    return () => {
      offClick();
      mainButton.setParams({ isVisible: false });
    };
  });

  return <Text>{roomId}</Text>;
};
