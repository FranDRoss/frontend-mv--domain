export default class MovieListValueObject {
    constructor({listEntities}){
        this._listEntities = listEntities
    }

    isEmpty(){
        return this._listEntities.length === 0
    }

    concat({list}) {
        const updatedListEntities = []
        for (let i = 0; i < list.length; i++){
            for (let j = 0; j < this._listEntities.length; j++){
                if (this._listEntities[j].equal(list[i])){
                    updatedListEntities.push(list[i])
                    
                } else if (i === this._listEntities.length){
                    updatedListEntities.push(list[i])
                }
            }
        }

        return updatedListEntities
    }

    toJSON(){ // the exit of this is the entry of the factory 
        return {
            list: this._listEntities.map(entity => entity.toJSON())
        }
    }
}