import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";

import buyn from "../assets/images/buyn.png";

import SimpleBar from "simplebar-react";
import "./simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
      style={{ maxHeight: "100vh", overflowY: "hidden" }}
    >
      <CSidebarBrand
        className="d-none d-md-flex"
        to="/"
        style={{
          justifyContent: "space-around",
          margin: "auto",
          width: "100%",
          alignItems: "center",
          padding: "0 15%",
        }}
      >
        <img src={buyn} style={{ width: "30px" }} alt="buynance top icon" />
        <h4> Buynance</h4>
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
