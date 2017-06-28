
export class DAOContas{
    list:any[];
    constructor() {
        
    }

    getList(){
        this.list = [
            {descricao: "Alimentação"},
            {descricao: "Lazer"},
            {descricao: "Transporte"}
        ];
        return this.list;
    }
}