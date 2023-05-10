import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import {DataService} from 'src/app/service/data.service';

@Component({
  selector: 'app-equipement-edit',
  templateUrl: './equipement-edit.component.html',
  styleUrls: ['./equipement-edit.component.css']
})
export class EquipementEditComponent implements OnInit{
  data:any;
  name:string="";
  description:string="";
  departement:string="";
  ip_adress:string="";
  type:string="";
  
  currentEquipementID="";
  

  EquipementArray: any[]=[];
  isResultLoaded=false;
  isUpdateFormActive=false;
   public headerOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'multipart/form-data',
       'Access-Control-Allow-Origin' : '*',
       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
       'Access-Control-Allow-Credentials': 'true'
    }),
  };
  constructor(private http:HttpClient,private route:ActivatedRoute){this.getData();}
  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.currentEquipementID=this.route.snapshot.params['id'];
    this.getData();
    
  }

  getAllEquipement()
  {
     
    this.http.get("http://127.0.0.1:8000/api/equipements")
    .subscribe((resultData: any)=>
    {
     this.isResultLoaded=true;
     console.log(resultData);
     this.EquipementArray=resultData;
    })
  }
  //view function
  getData(){
    console
    this.http.get("http://127.0.0.1:8000/api/equipements"+"/"+this.currentEquipementID).subscribe((resultData:any)=>{
    console.log(resultData);
    this.data=resultData;
    this.name=this.data.name;
    this.description=this.data.description;
    this.departement=this.data.departement;
    this.ip_adress=this.data.ip_adress;
    this.type=this.data.type;
     }
     );
 }

//function update equipement 

UpdateRecords(){
  let bodyData={
    "name":this.name,
    "description":this.description,
    "departement":this.departement,
    "ip_adress":this.ip_adress,
    "type":this.type,
   
  }
this.http.put("http://127.0.0.1:8000/api/update"+"/"+this.currentEquipementID,bodyData).subscribe((resultData:any)=>{
console.log(resultData);
alert("Equipement Registered Updated")
this.getAllEquipement();
this.name='';
this.description='';
this.departement='';
this.ip_adress='';
this.type='';
});
}  

}
