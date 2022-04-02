export const ListItem = (props) => {
  return (
    <div onClick={() => props.clickHandler(props.item)}>
      ListItem: {props.item.text} ({props.item.quantity})
    </div>
  );
};