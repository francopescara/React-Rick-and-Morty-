import { API_RM } from "../const/Api.constants";

class RickAndMortyService{
async getALLCharacter(){
    const response=await fetch(API_RM.CHARACTERS());
    return response.json();
}
async getCharacterByid(id){
    const response=await fetch(API_RM.CHARACTERS_BY_ID(id));
    return response.json();
}

}
export default new RickAndMortyService();