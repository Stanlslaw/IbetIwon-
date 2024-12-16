import { Text, Tabbar, Chip } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { MdAttachMoney } from "react-icons/md";
import { MdGames } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type TabBarItemType = {
  id: number;
  path: string;
  text: string;
  Icon: IconType;
};

const TAB_BARS: TabBarItemType[] = [
  {
    id: 0,
    path: "/profile",
    text: "Profile",
    Icon: FaRegUser,
  },
  {
    id: 1,
    path: "/",
    text: "Games",
    Icon: MdGames,
  },
  {
    id: 2,
    path: "/earn",
    text: "Earn",
    Icon: MdAttachMoney,
  },
  {
    id: 3,
    path: "/store",
    text: "Store",
    Icon: FaShoppingBag,
  },
];
export const TabBarLayout = () => {
  const [selectedTab, setSelectedTab] = useState<TabBarItemType | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const item = TAB_BARS.find(({ path }) => location.pathname === path);
    if (item) {
      setSelectedTab(item);
    } else {
      setSelectedTab(null);
    }
  }, [location]);

  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
        background: "var(--tgui--secondary_bg_color)",
      }}>
      <div className={"flex__center"}>
        <Chip
          style={{ margin: "8px 0" }}
          before={<Text>Coins:</Text>}
          mode="elevated"
          onClick={() => navigate("earn")}>
          399
        </Chip>
      </div>
      <Outlet />
      <Tabbar>
        {TAB_BARS.map(({ text, path, Icon, id }, index) => {
          return (
            <Tabbar.Item
              selected={selectedTab?.id === id}
              text={text}
              key={`tab-bar-el-${index}`}
              onClick={() => navigate(path)}>
              <Icon width={32} height={32} />
            </Tabbar.Item>
          );
        })}
      </Tabbar>
    </div>
  );
};
