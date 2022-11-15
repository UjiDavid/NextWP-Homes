export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: menuItem.node.id,
    path: menuItem.node.path,
    label: menuItem.node.label,
    subMenuItems: (menuItem.node.childItems.nodes || []).map((subMenuItem) => ({
      id: subMenuItem.id,
      label: subMenuItem.label,
      path: subMenuItem.path,
    })),
  }));
};
