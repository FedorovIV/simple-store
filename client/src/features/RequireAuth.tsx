import { useContext, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Context from "../main";


const RequireAuth: React.FC<{ children: React.ReactNode }> = observer(({ children }) => {
    const location = useLocation();
    const { store } = useContext(Context);
  
    useEffect(() => {
      store.getInfo();
    }, [store]); // Добавляем зависимость
  
    return (
      store.isAuth ? children : <Navigate to="/auth" state={{ from: location }} />
    );
  });
  
  export { RequireAuth };