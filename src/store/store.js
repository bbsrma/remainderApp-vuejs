import Vue from 'vue';
import Vuex from 'vuex';
// import remainders from '../data/remainders';
// import histories from '../data/histories';
import axios from 'axios';

import  moment from 'moment';
moment().format();

Vue.use(Vuex);

const state =  {
    remainders:[],
    remainder:[],
    histories:[],
    pending:false,
    isHistoryDeleting: false,
  };
const actions = {
    createRemainder: ({ commit }, payload) => {
      commit('CREATE_REMAINDER', payload);
    },
    async  initRemainders  ({commit} ) {
      state.pending = true;
      const { data }  = await axios.get('http://localhost:8000/api/remainders');

      let response = null;
            setTimeout(() => {
                if (response === null) {
                    source.cancel();
                }
            }, 4000);
            // .then(res => {
            //   const remainders = res.data;
            //   state.pending = false;
            //   commit('SET_REMAINDERS', remainders)
            // })

            // const remainders = res.data;
              state.pending = false;
              // state.remainders = data;
              commit('SET_REMAINDERS', data)

        

    },
    deleteRemainder:({commit}, index) => {
      // alert(index)
      var config = {
                      'Content-Type' : 'application/json',
                    } 
      axios.get('http://localhost:8000/api/remainder/delete/'+ index , config)
            .then(response => {
              console.log(response);
            })

      // commit('DELETE_REMAINDER', index);
    },
    async initHistories ({ commit }) {
      var config ={
        headers: { 'Content-Type':"application/json" }
      };
      state.isHistoryDeleting = true;
      const { data } = await axios.get( 'http://localhost:8000/api/remainders/history' , config);
      // console.log( data );
      commit( 'SET_HISTORIES', data )
      state.isHistoryDeleting = false;

    },
    createHistory:( { commit }, payload ) => {
      commit('CREATE_HISTORY', payload)
    },
    async deleteHistory( { commit }, id ){
      state.isHistoryDeleting = true;
      const { data }  = await axios.get('http://localhost:8000/api/remainders/history/delete/'+ id );
      
      commit('SET_HISTORIES', data.data)
      state.isHistoryDeleting = false;
    }
  };

const mutations =  {
    'CREATE_REMAINDER': (state, payload) => {
      alert(payload.id);
      // console.log( state.remainders);
    // var a = moment( new Date().toLocaleString() );//now
    // var b = moment(payload.datetime);
    // const hourdiff = a.diff(b, 'days');
      state.remainders.push({
        id: payload.id,
        title : payload.title,
        ramainingtime : hourdiff +'days Remaining',
        lastdatetime: payload.datetime

      });
    },
    'SET_REMAINDERS': (state, remainders) => {
        state.remainders = remainders;
        console.log(state.remainders);
      },
      'DELETE_REMAINDER': (state,index) => {
        state.remainders.splice(index, 1);
      },
      'SET_HISTORIES':(state, histories) => {
        state.histories = histories;
        console.log(state.histories);
      },
      'CREATE_HISTORY': (state, history) => {
        state.histories.push({
          id: history.id,
          title: history.title,
          lastdatetime: history.datetime,
        })
        console.log(state.histories);
      },
      'DELETE_HISTORY': (state, index) => {

      }
  };
  const getters =  {
    remainders : state => {
      return state.remainders;
    },
    histories: state => {
      return state.histories;
    },
    pending : state => {
      return state.pending;
    },
    historyDeletingStatus: state => {
      return state.isHistoryDeleting;
    }
  };

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})