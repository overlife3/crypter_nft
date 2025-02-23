import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATHS } from "@/shared/constants/routes";
import { RootLayout } from "@/widgets/root-layout";
import { MainPage } from "@/pages/home";
import { FaqPage } from "@/pages/faq";
import { RouterProvider } from "react-router-dom";
import { ActivityPage } from "@/pages/activity";
import { UploadItemPage } from "@/pages/upload-item";
import { ProfilePage } from "@/pages/profile";
import { ProfileItemsPage } from "@/pages/profile-items";
import { DiscoverPage } from "@/pages/discover";
import { CreateSingleTokenPage } from "@/pages/create-single-token";
import { ConnectWalletPage } from "@/pages/connect-wallet";

const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: ROUTER_PATHS.FAQ,
        element: <FaqPage />,
      },
      {
        path: ROUTER_PATHS.ACTIVITY,
        element: <ActivityPage />,
      },
      {
        path: ROUTER_PATHS.UPLOAD_ITEM,
        element: <UploadItemPage />,
      },
      {
        path: ROUTER_PATHS.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: ROUTER_PATHS.PROFILE_ITEMS,
        element: <ProfileItemsPage />,
      },
      {
        path: ROUTER_PATHS.DISCOVER,
        element: <DiscoverPage />,
      },
      {
        path: ROUTER_PATHS.CREATE_SINGLE_TOKEN,
        element: <CreateSingleTokenPage />,
      },
      {
        path: ROUTER_PATHS.CONNECT_WALLET,
        element: <ConnectWalletPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
