import { Card, Skeleton, Title } from "@telegram-apps/telegram-ui";
import React from "react";

import DiceImage from "../../assets/images/games/dice.png";

export const GameSelectorPage = () => {
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
              <Card.Chip readOnly>Play</Card.Chip>
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
