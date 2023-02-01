import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/messages";
import userReducer from "./slices/apiServices";
import orderReducer from "./slices/userOrder";
import orderAdminReducer from "./slices/adminOrder";
import usersReducer from "./slices/users";
import subAdminReducer from "./slices/subAdmin";
import driverReducer from "./slices/driverOrder";
import staffReducer from "./slices/staffService";
import inventReducer from "./slices/inventService";
import notifyReducer from "./slices/notify";
import vehicleReducer from "./slices/vehicleService";

const reducer = {
    auth: authReducer,
    message: messageReducer,
    user: userReducer,
    order: orderReducer,
    orderAdmin: orderAdminReducer,
    userlist: usersReducer,
    subAdmin: subAdminReducer,
    driver: driverReducer,
    staff: staffReducer,
    inventory: inventReducer,
    notify: notifyReducer,
    vehicle: vehicleReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;