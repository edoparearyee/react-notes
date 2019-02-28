export const SIDEBAR_MOBILE_OPEN = '[UI] Sidebar Mobile Open';
export const SIDEBAR_MOBILE_CLOSE = '[UI] Sidebar Mobile Close';

export function sidebarOpen() {
  return { type: SIDEBAR_MOBILE_OPEN };
}

export function sidebarClose() {
  return { type: SIDEBAR_MOBILE_CLOSE };
}
