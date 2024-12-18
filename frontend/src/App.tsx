import { useEffect, useState } from "react";
import { GameSelectorPage } from "./pages/GameSelectorPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { EarnPage } from "./pages/EarnPage";
import { TabBarLayout } from "./components/Layouts/TabBarLayout";
import { ProfilePage } from "./pages/ProfilePage";
import { StorePage } from "./pages/StorePage";
import {
  backButton,
  mainButton,
  init,
  isTMA,
  viewport,
  swipeBehavior,
  closingBehavior,
  initData,
} from "@telegram-apps/sdk";
import { RatingPage } from "./pages/RatingPage";
import { BasicLayout } from "./components/Layouts/BasicLayot";
import { GameSearch } from "./pages/GameSearch";
import { RoomSetupPage } from "./pages/RoomSetupPage";
import { GamePage } from "./pages/GamePage";
import userService from "./services/user.service";
import { Spinner } from "@telegram-apps/telegram-ui";

function App() {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    const isTGApp = await isTMA();
    if (isTGApp) {
      init();

      if (backButton.mount.isAvailable()) {
        backButton.mount();
      }
      if (mainButton.mount.isAvailable()) {
        mainButton.mount();
      }
      swipeBehavior.mount();
      closingBehavior.mount();
      viewport.mount();

      viewport.expand();
      swipeBehavior.disableVertical();
      closingBehavior.enableConfirmation();
      initData.restore();
      const user = initData.user();
      console.log(user);
      const isUserRegistered = await userService.getUser(user?.id);
      if (isUserRegistered) {
        await userService.updateUser(user);
      } else {
        await userService.saveUser(user);
      }

      setIsAppReady(true);
    }
  };

  if (!isAppReady) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          minHeight: "100vh",
          background: "var(--tgui--secondary_bg_color)",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Spinner size="l" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TabBarLayout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route index element={<GameSelectorPage />} />
          <Route path="earn" element={<EarnPage />} />
          <Route path="store" element={<StorePage />} />
        </Route>
      </Routes>

      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="rating" element={<RatingPage />} />
        </Route>
      </Routes>

      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="gamesearch" element={<GameSearch />} />
          <Route path="createroom" element={<RoomSetupPage />} />
          <Route path="game/:roomId" element={<GamePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
