import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

// rootReducer
import { reducer } from './reducer/reducer';

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
	whiteList: ['reducer']
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = compose;

export const configureStore = () => createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk))
);