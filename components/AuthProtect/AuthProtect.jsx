import { useSelector, useDispatch } from "react-redux";
import { fetchMe } from "../../redux/user/userSlice";
import Loader from "../Loader/Loader";

const AuthProtect = ({children}) => {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch(fetchMe());

    // useEffect(() => {
    //     if(user.data){
    //       dispatch(fetchFavorites({userId: user.data.id, token: user.data.token}))
    //     };
    //   }, [user.data]);

    if(!user.data && user.status === 'pending'){
        return <Loader />
    }else if(user.data && user.status === 'fulfilled'){
        return children
    }else if(!user.data && user.status === 'rejected' || !user.data && user.status === 'fulfilled'){
        return <p>У Вас нет доступа к этой странице. Войдите или зарегистрируйтесь</p>
    }else if(!user.data && !user.status){
        return <p>У Вас нет доступа к этой странице. Войдите или зарегистрируйтесь</p>
    }
}

export default AuthProtect