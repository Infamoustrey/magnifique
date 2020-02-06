import { TOGGLE_SIDEBAR, ToggleSidebarAction } from "./types";

export const toggleShowSidebar = (): ToggleSidebarAction => ({
  type: TOGGLE_SIDEBAR
});
