export default class LocalStorage {

    async get({keyword}){
        return await window.localStorage.getItem(keyword) 
    }

    async set({key, value}){
        await window.localStorage.setItem(key, value)
    }
}