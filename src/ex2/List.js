import React from 'react';
import { ListItem } from './ListItem';

const initialNumbers = [
  { number: 1, text: "First item", quantity: 10 },
  { number: 2, text: "Second item", quantity: 15 },
  { number: 3, text: "Third item", quantity: 20 },
  { number: 4, text: "Fourth item", quantity: 25 },
  { number: 5, text: "Fifth item", quantity: 30 },
];

export const List = () => {
  const [numbers, setNumbers] = React.useState(initialNumbers);

  const onItemClick = (item) => {
    const newNumbers = numbers.map(currentItem => {
      if (currentItem.number === item.number) {
        return {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        }
      }

      return currentItem;
    });
    setNumbers(newNumbers);
  };

  return <div>
    List:
    <ul>
      {numbers.map((item =>
        <li key={item.number}>
          <ListItem item={item} clickHandler={onItemClick} />
        </li>
      ))}
    </ul>
  </div>
};