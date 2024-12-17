import { Card, Skeleton, Title } from "@telegram-apps/telegram-ui";
import React, { useEffect } from "react";

import DiceImage from "../../assets/images/games/dice.png";
import { useNavigate } from "react-router";
import { initData } from "@telegram-apps/sdk";

export const GameSelectorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    initData.restore();
    const roomId = initData.startParam();
    if (roomId && !window.sessionStorage.isRedirected) {
      console.log(roomId);
      navigate(`/game/${roomId}`);
      window.sessionStorage.isRedirected = true;
    }
  }, []);
  return (
    <div style={{ padding: "0 24px" }}>
      <Title style={{ textAlign: "center" }}>Games</Title>
      <div
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          margin: "24px 0 0 0",
        }}>
        <Skeleton visible={false}>
          <Card style={{ width: "100%" }}>
            <React.Fragment>
              <Card.Chip onClick={() => navigate("gamesearch")} readOnly>
                Play
              </Card.Chip>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <img
                  src={DiceImage}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: 200,
                    height: 200,
                  }}></img>
              </div>
              <Card.Cell readOnly subtitle="United states">
                Dice game
              </Card.Cell>
            </React.Fragment>
          </Card>
        </Skeleton>
      </div>
    </div>
  );
};
