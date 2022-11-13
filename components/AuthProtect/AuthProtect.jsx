import { useSelector, useDispatch } from "react-redux";
import { fetchMe } from "../../redux/user/userSlice";
import { useEffect } from "react";
import { getToken } from "../../service/service";
import { fetchFavorites } from "../../redux/favorites/favoritesSlice";

const AuthProtect = ({children}) => {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch(fetchMe());

    useEffect(() => {
        if(user.data){
          dispatch(fetchFavorites({userId: user.data.id, token: user.data.token}))
        };
      }, [user.data]);

    if(!user.data && user.status === 'pending'){
        return <p>wait</p>
    }else if(user.data && user.status === 'fulfilled'){
        return children
    }else if(!user.data && user.status === 'rejected' || !user.data && user.status === 'fulfilled'){
        return <p>У Вас нет доступа к этой странице. Войдите или зарегистрируйтесь</p>
    }else if(!user.data && !user.status){
        return <p>У Вас нет доступа к этой странице. Войдите или зарегистрируйтесь</p>
    }
}

export default AuthProtect