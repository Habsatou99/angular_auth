import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ajout-equipement',
  templateUrl: './ajout-equipement.component.html',
  styleUrls: ['./ajout-equipement.component.css']
})
export class AjoutEquipementComponent implements OnInit{
  name:string="";
  description:string="";
  ip_adress:string="";
  type:string="";
  departement:string="";
  selectedValue: string="";
  values: string[] = ['point_dacces', 'routeur', 'machine virtuelle','machine physique','telephone','imprimante'];

  currentEquipementID="";
  

  EquipementArray: any[]=[];
  isResultLoaded=false;
  isUpdateFormActive=false;

  constructor(private http:HttpClient,private route:ActivatedRoute){
   // this.getAllEquipement();
  }
  ngOnInit(): void {
    
  }
  //
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
  // equipement register
  register()
  {
    let bodyData={
      "name":this.name,
      "description":this.description,
      "departement":this.departement,
      "ip_adress":this.ip_adress,
      "type":this.type
    };
    this.http.post("http://127.0.0.1:8000/api/save",bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Equipement Registered Successfuly")
      this.getAllEquipement();
      this.name='';
      this.description='';
      this.departement='';
      this.ip_adress='';
      this.type='';

    })
  }
  save1()
  {
    this.register();
  }
}
