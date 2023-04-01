import { Card } from '../card';
import './styles.css';
 
export function CardList({ goods, 
  onProductLike, 
  currentUser }) {
  return (
    <div className='cards content__cards'>
      {goods.map(function (dataItem, index) {
        return <Card key={index} {...dataItem} 
        onProductLike={onProductLike} 
        currentUser={currentUser}/>;
      })}
    </div>
  );
}

