import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { DAOContas  } from "../../dao/dao-contas";

@Component({
    templateUrl:'contas.html'
})
export class ContasPage{
    dao:any[];
    constructor(navCtrl: NavController){
        this.dao = new DAOContas().getList();
    }
}