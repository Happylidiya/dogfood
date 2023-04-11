import { useContext } from 'react';
import { Card } from '../card';
import './styles.css';
 
export function CardList({ goods }) {
  return (
    <div className='cards content__cards'>
      {goods.map(function (dataItem, index) {
        return <Card key={index} {...dataItem} />;
      })}
    </div>
  );
}

