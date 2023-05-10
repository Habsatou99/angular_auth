import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-ping',
  templateUrl: './liste-ping.component.html',
  styleUrls: ['./liste-ping.component.css']
})
export class ListePingComponent implements OnInit{
  Pingdata:any=[];
  PingArray:any;
  PingArray2:any;
  isResultLoaded=false;
  isUpdateFormActive=false;

  result:string="";
  
  

  currentEquipementID="";

  data:any;
  name:string="";
  description:string="";
  ip_adress:string="";
  time="";
  rougeCount: number = 0;
  vertCount: number = 0;
  
  
  
  
  constructor(private http:HttpClient,private route:ActivatedRoute){
  this.getPingById();
  }
  ngOnInit(): void {
    //this.ip_adress=this.route.snapshot.params['ip_adress'];
    this.currentEquipementID=this.route.snapshot.params['id'];
    this.getPingById();
   //this.getAllPing();
  }
   // return all pings function
getAllPing()
 {
    
   this.http.get("http://127.0.0.1:8000/api/ping")
   .subscribe((resultData: any)=>
   {
    //this.isResultLoaded=true;
    console.log(resultData);
    this.PingArray2=resultData;
    for (let i = 0; i < this.PingArray2.length; i++){
      const couleur =this.PingArray2[i].time > 60 || this.PingArray2[i].time  < 1 ? 'red' : 'green';
    if (couleur=== 'red') {
      this.rougeCount++;
    } else if(couleur === 'green'){
      this.vertCount++;
    }
    }
    console.log(this.rougeCount);
    console.log(this.vertCount);
    this.ip_adress=this.PingArray2.ip_adress;
    //console.log(this.ip_adress);
    this.result=this.PingArray2.result;
    this.time=this.PingArray2.time;
   })
 }
  // return all equipement function
  getPingById()
  {
    this.ip_adress=this.route.snapshot.params['ip_adress'];
    this.http.get("http://127.0.0.1:8000/api/ping"+"/"+this.ip_adress)
    .subscribe((resultData: any)=>
    {
     //this.isResultLoaded=true;
     console.log(resultData);
     console.log(this.PingArray2);
     this.PingArray=resultData;
     console.log(this.PingArray);
     this.ip_adress=this.PingArray.ip_adress;
     console.log(this.ip_adress);
     this.result=this.PingArray.result;
     this.time=this.PingArray.time;
   
    })
  }

 
 // ping register
 registerPing()
 {
   let bodyData={
    "ip_adress":this.ip_adress,
     "result":this.result,
     "time":this.time,
   };
   this.ip_adress=this.route.snapshot.params['ip_adress'];
   console.log(this.ip_adress);
   this.http.post("http://127.0.0.1:8000/api/saveping"+"/"+this.ip_adress,bodyData).subscribe((resultData:any)=>
   {
     console.log(resultData);
     alert("Ping Successfuly");
     this.Pingdata=resultData;
     console.log(this.Pingdata);
     this.ip_adress=this.Pingdata.ip_adress;
     console.log(this.ip_adress);
     this.result=this.Pingdata.result;
     this.time=this.PingArray.time;
   
   
   })
 }

 save()
 {
   this.registerPing();

 }

  
//delete function
 setDelete(data:any)
 {
  this.http.delete("http://127.0.0.1:8000/api/pingdelete"+"/"+data.id).subscribe((resulData:any)=>
  {
    console.log(resulData);
    alert("Ping Deleted")
    this.getPingById()
  });
 }
 //deleteAll function
 /*setDeleteAll()
 {
  this.http.delete("http://127.0.0.1:8000/api/pingdeleteAll").subscribe((resulData:any)=>
  {
    console.log(resulData);
    alert("Ping Deleted")
    this.getPingById()
  });
 }*/
}