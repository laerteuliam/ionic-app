
export class DAOContas{
    list:any[];
    constructor() {
        
    }

    getList(){
        this.list = [
            {descricao: "Alimenta��o"},
            {descricao: "Lazer"},
            {descricao: "Transporte"}
        ];
        return this.list;
    }
}