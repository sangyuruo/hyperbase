import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
i

const Model = {
    namespace: 'todoList',

    state: [],
  
    effects: {
      *query({ _ }, { put, call }) {
        const rsp = yield call(queryTodoListFromServer);
        const todoList = rsp.data;
        yield put({ type: 'save', payload: todoList });
      },
    },
  
    reducers: {
      save(state, { payload: todoList }) {
        return [...state, todoList];
      },
    },
};

export default Model;
