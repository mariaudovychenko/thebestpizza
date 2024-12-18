import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    // <div className="grid h-screen grid-rows-[auto_1fr_auto]">
    <div className="flex h-screen flex-col">
      {isLoading && <Loader />}
      <Header />
      {/* <div className="overflow-auto"> */}
      <div className="flex-1 overflow-auto">
        <main className="mx-auto  max-w-3xl">
          <Outlet />
        </main>
      </div>
      {/* <CartOverview /> */}

      <div className="sticky bottom-0">
        <CartOverview />
      </div>
    </div>
  );
}

export default AppLayout;
