import cn from 'classnames';
import s from "./styles.module.css";
import "./styles.css";
import { useContext } from 'react';
import { UserContext } from '../../contexts/current-user-context';
import { CardsContext } from '../../contexts/card-context';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as FavoriteIcon} from './img/favorites.svg'

export function Header({ children }) {
  const { currentUser, onUpdateUser } = useContext(UserContext);
  const { favorites } = useContext(CardsContext)
  const location = useLocation()
  
  const handleClickButtonEdit = () => {
    onUpdateUser({ name: 'Вася', about: 'Ментор' })
  }

  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}>
        {children}
        <div className={s.iconsMenu}>
          <Link className={s.favoritesLink} to={{ pathname: '/favorites' }}>
            <FavoriteIcon />
            {favorites.length !== 0 && <span className={s.iconBubble}>{favorites.length}</span>}
          </Link>
          <Link to='/login' style= {{paddingLeft: "10px"}} replace state={{backgroundLocation: location, initialPath: location.pathname}}>Войти</Link>
        </div>

        {/* <span>{currentUser?.name}: {currentUser?.about}</span>
        <span>{currentUser?.email}</span>
        <Button action={handleClickButtonEdit}>
          Изменить
        </Button> */}
      </div>
     
    </header>
  );
}

