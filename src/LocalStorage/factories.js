import LocalStorage from './LocalStorage'

export default class LocalStorageFactories {
    static localStorage = () =>
        new LocalStorage()
}