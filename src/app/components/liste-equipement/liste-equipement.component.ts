import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-liste-equipement',
  templateUrl: './liste-equipement.component.html',
  styleUrls: ['./liste-equipement.component.css']
})
export class ListeEquipementComponent implements OnInit {
  data:any;
  EquipementArray: any[]=[];
  isResultLoaded=false;
  isUpdateFormActive=false;

  name:string="";
  description:string="";
  ip_adress:string="";
  type:string="";

  currentEquipementID="";
  
  
  constructor(private http:HttpClient,private route:ActivatedRoute){
    this.getAllEquipement();
  }
  ngOnInit(): void {
   // this.ip_adress=this.route.snapshot.params['ip_adress']
  }
  // return all equipement function
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

  
//delete function
 setDelete(data:any)
 {
  this.http.delete("http://127.0.0.1:8000/api/delete"+"/"+data.id).subscribe((resulData:any)=>
  {
    console.log(resulData);
    alert("Equipement Deleted")
    this.getAllEquipement()
  });
 }
 
}
