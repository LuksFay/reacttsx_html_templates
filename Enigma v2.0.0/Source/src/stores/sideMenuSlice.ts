import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Home",
      pathname: "/",
      title: "Home",
    },
    {
      icon: "Box",
      title: "Agregar Red Social",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/",
          title: "Facebook",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/",
          title: "Twitter",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/",
          title: "TikTok",
          ignore: true,
        },
      ],
    },
    {
      icon: "ShoppingBag",
      title: "Equipos",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/categories",
          title: "AppetitPlus",
        },
        {
          icon: "Activity",
          pathname: "/add-product",
          title: "WeekB&B",
        },
        {
          icon: "Activity",
          pathname: "/products",
          title: "Packsito",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/product-list",
              title: "Frontend",
            },
            {
              icon: "Zap",
              pathname: "/product-grid",
              title: "Backend",
            },
          ],
        },
        {
          icon: "Activity",
          pathname: "/transactions",
          title: "Ijji",
          subMenu: [
            {
              icon: "Zap",
              pathname: "/transaction-list",
              title: "Frontend",
            },
            {
              icon: "Zap",
              pathname: "/transaction-detail",
              title: "Backend",
            }, 
            {
              icon: "Zap",
              pathname: "/transaction-detail",
              title: "Diseño",
            },
          ],
        },
        
        {
          icon: "Activity",
          pathname: "/reviews",
          title: "PrelAdmin",
        },
      ],
    },
    {
      icon: "Inbox",
      pathname: "/inbox",
      title: "Inbox",
    },
    {
      icon: "CreditCard",
      pathname: "/point-of-sale",
      title: "Pasarela de pagos",
    },
    {
      icon: "MessageSquare",
      pathname: "/chat",
      title: "Chat",
    },
    {
      icon: "FileText",
      pathname: "/post",
      title: "Post",
    },
    "divider",
    {
      icon: "Users",
      title: "Gestion de Usuarios",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/users-layout-3",
          title: "Asignar Tareas",
        },
        {
          icon: "Activity",
          pathname: "/users-layout-1",
          title: "Dar de alta",
        },
        {
          icon: "Activity",
          pathname: "/users-layout-2",
          title: "Dar de baja",
        },
      ],
    },
    "divider",
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
