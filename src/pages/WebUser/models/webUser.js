import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { searchPageList } from '@/services/webUser';

const initialState = function getInitialState() {
  return {
    entity: {},
    pager: {
      list: [],
      pagination: {},
    },
  };
};

export default {
  namespace: 'webUser',

  state: initialState(),

  effects: {
    // *getSample({ payload }, { call, put }) {
    //   try {
    //     const response = yield call(getSample, payload);
    //     yield put({
    //       type: 'updateEntity',
    //       payload: response.data,
    //     });
    //   } catch (err) {
    //     message.error('获取详情失败');
    //   }
    // },
    // *saveSample({ payload }, { call, put }) {
    //   try {
    //     yield call(saveSample, payload);
    //
    //     message.success('保存成功');
    //     yield put(routerRedux.push('/sample/list'));
    //   } catch (err) {
    //     message.error('保存失败');
    //   }
    // },
    *search({ payload }, { call, put }) {
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
        entity: action.payload || initialState().entity,
      };
    },
    updateList(state, action) {
      return {
        ...state,
        pager: action.payload || initialState().pager,
      };
    },
  },
};