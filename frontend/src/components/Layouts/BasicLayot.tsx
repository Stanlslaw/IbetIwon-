import { Outlet, useNavigate } from "react-router";
import { backButton } from "@telegram-apps/sdk";
import { useEffect } from "react";

export const BasicLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    backButton.show();
    const offClick = backButton.onClick(() => navigate(-1));
    return () => {
      offClick();
      backButton.hide();
    };
  }, []);

  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
        background: "var(--tgui--secondary_bg_color)",
      }}>
      <Outlet />
    </div>
  );
};
