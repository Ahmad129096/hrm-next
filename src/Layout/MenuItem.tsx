import { SingleLevel } from "./SingleMenu";
import { MultiLevel } from "./MultipleMenu";

function hasChildren(item: any) {
  const { items: children } = item;
  if (children === undefined) {
    return false;
  }
  if (children.constructor !== Array) {
    return false;
  }
  if (children.length === 0) {
    return false;
  }
  return true;
}

export const MenuItem = ({ item, router }: any) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  if (item.permission) {
    return <Component item={item} router={router} />;
  } else {
    return null;
  }
};
