import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { searchPageList, modifyWebUser, getWebUser, deleteWebUser } from '@/services/webUser';

const initialState = function getInitialState() {
  return {
    webUserEntity: {},
    webUserList: {
      list: [],
      pagination: {},
    },
  };
};

export default {
  namespace: 'webUser',

  state: initialState(),

  effects: {
    * getWebUser({ payload }, { call, put }) {
      try {
        const response = yield call(getWebUser, payload);
        yield put({
          type: 'updateEntity',
          payload: response,
        });
      } catch (err) {
        message.error('获取详情失败');
      }
    },
    * modifyWebUser({ payload }, { call, put }) {
      try {
        yield call(modifyWebUser, payload);

        message.success('保存成功');
        yield put(routerRedux.push('/webUser/list'));
      } catch (err) {
        message.error('保存失败');
      }
    },
    * delete({ payload }, { call, put }) {
      try {
        yield call(deleteWebUser, payload);

        message.success('操作成功');
        yield put({ type: 'search'});
        console.log("列表加载")
      } catch (err) {
        message.error('操作失败');
      }
    },
    * search({ payload = { pageIndex: 1, pageSize: 10 } }, { call, put }) {
      try {
        const response = yield call(searchPageList, payload);
        yield put({
          type: 'updateList',
          payload: response,
        });
      } catch (err) {
        message.error('加载列表失败');
      }
    },
  },

  reducers: {
    updateEntity(state, action) {
      return {
        ...state,
        webUserEntity: action.payload || initialState().webUserEntity,
      };
    },
    updateList(state, action) {
      return {
        ...state,
        webUserList: action.payload || initialState().webUserList,
      };
    },
  },
};
