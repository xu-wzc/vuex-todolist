import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        list: [],
    inputValue: '记单词',
        nextId: 5,
        viewKey:'all'
    },
    mutations: {
        initList(state, list) {
            state.list = list
        },
        setInputValue(state, val) {
            state.inputValue = val
        },
        addItem(state) {
            const obj = {
                id: state.nextId,
                info: state.inputValue.trim(),
                done: false
            }
            state.list.push(obj)
            state.nextId++
            state.inputValue = ''
        },
        removeItem(state, id) {
            const index = state.list.findIndex(v => v.id === id)
            if (index !== -1) {
                state.list.splice(index, 1)
            }
        },
        changeStatus(state, param) {
            const index = state.list.findIndex(v => v.id === param.id)
            if (index !== -1) {
                state.list[index].done = param.status
            }
        },
        cleanDone(state) { 
state.list= state.list.filter(v=>v.done===false)
        },
        changeViewKey(state,key){
            state.viewKey=key
        }
    },
    actions: {
        getList(context) {
            axios.get('../../static/list.json').then(({ data }) => {
                // console.log(data);
                context.commit('initList', data)
            })
        }
    },
    getters: {
        //统计未完成的任务条数
        unDoneLength(state) {
            return state.list.filter(v => v.done === false).length
        },
        infolist(state){
            if(state.viewKey==='all'){
                return state.list
            }else if(state.viewKey==='undone'){
                return state.list.filter(v=>!v.done)
            }else if(state.viewKey==='done'){
                return state.list.filter(v=>v.done)
            }else{
                return state.list
            }
        }
    }
})