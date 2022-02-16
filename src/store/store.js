import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { albumReducer } from '../reducers/albumReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, albumReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),

});

export const persistor = persistStore(store);


/* import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { albumReducer } from '../reducers/albumReducer';
import thunk from 'redux-thunk';

const enhancers = compose(applyMiddleware(thunk));

export const store = createStore(
    albumReducer,
    enhancers
); */