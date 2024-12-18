import {
  Avatar,
  Cell,
  TabsList,
  Title,
  Text,
  Badge,
  Skeleton,
  Chip,
  Caption,
  Headline,
} from "@telegram-apps/telegram-ui";
import { useState } from "react";
import { toUpperCaseFirstLetter } from "../../helpers";
import { useNavigate } from "react-router";
import { useUserStore } from "../../stores/useUserStore";

const TAB_LIST_ITEMS = ["inventory", "games history"];

export const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("inventory");
  const navigate = useNavigate();
  const { user, loading, error, getUser } = useUserStore((state) => state);
  console.log(user);
  return (
    <div style={{ padding: "0 12px" }}>
      <center style={{ margin: 12 }}>
        <Avatar size={96} src={user?.photoUrl} />
        <Title style={{ marginTop: 12 }}>
          {user?.username || user?.firstName}
        </Title>
      </center>
      <center>
        <Chip
          onClick={() => navigate("/rating")}
          after={
            <Headline plain weight="2">
              12
            </Headline>
          }>
          Rating place:
        </Chip>
      </center>
      <center>
        <Caption style={{ opacity: 0.6 }}>Click to see the rating</Caption>
      </center>
      <Cell
        after={
          <Skeleton>
            <Badge type="number">200</Badge>
          </Skeleton>
        }>
        <Text>Games played:</Text>
      </Cell>
      <Cell
        after={
          <Skeleton>
            <Badge type="number">200</Badge>
          </Skeleton>
        }>
        <Text>Games won:</Text>
      </Cell>
      <Cell
        after={
          <Skeleton>
            <Badge type="number">200</Badge>
          </Skeleton>
        }>
        <Text>Games lost:</Text>
      </Cell>
      <TabsList>
        {TAB_LIST_ITEMS.map((tabname, index) => {
          return (
            <TabsList.Item
              key={`tablist-item-${index}`}
              selected={selectedTab === tabname}
              onClick={() => setSelectedTab(tabname)}>
              {toUpperCaseFirstLetter(tabname)}
            </TabsList.Item>
          );
        })}
      </TabsList>
    </div>
  );
};
