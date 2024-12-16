import { useEffect, useState } from "react";
import { GameSelectorPage } from "./pages/GameSelectorPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { EarnPage } from "./pages/EarnPage";
import { TabBarLayout } from "./components/Layouts/TabBarLayout";
import { ProfilePage } from "./pages/ProfilePage";
import { StorePage } from "./pages/StorePage";
import { backButton, init, isTMA } from "@telegram-apps/sdk";
import { RatingPage } from "./pages/RatingPage";

function App() {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    setIsAppReady(true);
    const isTGApp = await isTMA();
    if (isTGApp) {
      init();
      if (backButton.mount.isAvailable()) {
        backButton.mount();
      }
    }
  };

  if (!isAppReady) {
    return null;
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
        <Route path="rating" element={<RatingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
