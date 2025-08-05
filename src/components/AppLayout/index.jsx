import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Content, AppLayout as StyledAppLayout } from "./styles";

export function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </StyledAppLayout>
  );
}
