import {
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  Page,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Nav,
  NavList,
  NavItem,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const onSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  const headerToolbar = (
    <Toolbar id="toolbar">
      <ToolbarContent>
        <ToolbarItem>🧪 QA Task</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            variant="plain"
            aria-label="Global navigation"
            isSidebarOpen={isSidebarOpen}
            onSidebarToggle={onSidebarToggle}
            id="vertical-nav-toggle"
          >
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo
            href="https://docs.google.com/document/d/1Mmh8E9a0n1je02ialy5xe3I3fErgE1yK5NNqGyTIvjE/"
            target="_blank"
          >
            <img src="/openshift-virtualization.svg" alt="Logo" height={40} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isSidebarOpen} id="vertical-sidebar">
      <PageSidebarBody>
        <Nav aria-label="Main nav">
          <NavList>
            <NavItem
              data-testid="home-nav-item"
              isActive={location.pathname === "/"}
            >
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem
              data-testid="products-nav-item"
              isActive={location.pathname.startsWith("/products")}
            >
              <Link to="/products">Products</Link>
            </NavItem>
          </NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={masthead} sidebar={sidebar} isManagedSidebar>
      {children}
    </Page>
  );
};

export default AppLayout;
