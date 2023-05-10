import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart,registerables,} from 'chart.js'


Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit{
// labelsList:string[]=['Ping_Normal','Ping_Anormal'];
 data:number[]=[];
 message: string="";
 //sdata:number[]=[1,2,3,5];
 percentage_vert:any;
 percentage_rouge:any;
 chartName='Data Charts';
 chart:any=[];
 chart2:any=[];
 chart3:any=[];
 chart4:any=[];
  PingArray2:any;
  PingArray:any;
  isResultLoaded=false;
  isUpdateFormActive=false;
  result:string="";
  name:string="";
  description:string="";
  ip_adress:string="";
  ip_adress_ping:string="";
  time="";
  rougeCount: number = 0;
  vertCount: number = 0;
  selectedValue:string[]=[];
  EquipementArray: any=[];
  EquipementName:string="";
  values: string[] =[];
  pings:any;
  dateFrom: string="";
  dateTo: string="";
  errorMessage: string = "";
  constructor(private http:HttpClient){

  }
 /* getP()
  {
    let vertCount1:number=0;
    let rougeCount1:number=0;
    var data:number[]=[];
    let labelsList;
    let percentage_vert1:any;
    let percentage_rouge1:any;
    this.http.get("http://127.0.0.1:8000/api/pingData"+"/"+this.dateFrom+"/"+this.dateTo).subscribe((data1:any) => {
          
        this.pings = data1;
        console.log(this.pings);
      if(this.selectedValue!=null)
      {
       if(this.selectedValue.length==1)
       {
        for(let i=0;i<this.pings.length;i++)
        {
          if(this.selectedValue==this.pings[i].ip_adress)
          {

          }
        }
       }
      }
        //  console.log(this.selectedValue);
          //let myChart:any=[];
          if(this.pings[0].length==1){
              const couleur =this.pings[0].time > 60 || this.pings[0].time  < 1 ? 'red' : 'green';
            if (couleur=== 'red') {
              rougeCount1++;
            } else if(couleur === 'green'){
              vertCount1++;
            }
            
            percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
            percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
            data=[vertCount1,rougeCount1];
          
            console.log(data);
             //doughnut model***********
             if(this.chart){
               //this.chart.clear();
               // myChart.destroy()
                 this.chart.destroy();
                 this.chart2.destroy();
                 this.chart3.destroy();
                 this.chart4.destroy();
             }
       
          //doughnut model***********
          this.chart=new Chart('doughnut-chart',{
           type:'doughnut',
           data:{
             labels:["Ping_normal: "+percentage_vert1,"Ping_anormal: "+percentage_rouge1],
             datasets:[{
               label:'Key',
               backgroundColor: [ '#28a745','#dc3545'],
               data:data, 
             }]
           },
           options:{
             responsive: false,
             plugins:{
             }
         },
         
       })
       //pie  model****************
       this.chart2=new Chart('pie-chart',{
         type:'pie',
         data:{
           labels:["Ping_normal: "+percentage_vert1,"Ping_anormal: "+percentage_rouge1],
           datasets:[{
             label:'Key',
             backgroundColor: [ '#28a745','#dc3545'],
             data:data,
            
           }]
         },
         options:{
           responsive: false,
       },
       })
        //bar model************
       this.chart3=new Chart('bar-chart',{
       type:'bar',
       data:{
         labels:['Ping_normal','Ping_anormal'],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data,
          
         }]
       },
       options:{
         responsive: false,
         
         //maintainAspectRatio: false
       
       },
        
       
       
       })
       //PolarArea model************
       this.chart4=new Chart('polarArea-chart',{
       type:'polarArea',
       data:{
         labels:["Ping_normal: "+percentage_vert1,"Ping_anormal: "+percentage_rouge1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data,
          
         }]
       },
       options:{
         responsive: false,
         
         //maintainAspectRatio: false
       
       },
        
       })
         
          }
     
          else {
           let vertCount1:number=0;
           let rougeCount1:number=0;
           var data:number[]=[];
           let labelsList;
           let percentage_vert1:number=0;
           let percentage_rouge1:number=0;
           //console.log(this.selectedValue);
           //let myChart:any=[];
          for(let i=0;i<this.pings.length;i++)
          {
          
              const couleur =this.pings[i].time > 60 || this.pings[i].time  < 1 ? 'red' : 'green';
            if (couleur=== 'red') {
              rougeCount1++;
              //percentage_rouge1=percentage_rouge1+((rougeCount1*100)/this.PingArray.length)
            } else if(couleur === 'green'){
              vertCount1++;
              //percentage_vert1=percentage_vert1+((vertCount1*100)/this.PingArray.length)
            }
            }
           
             //percentage_vert1=((vertCount1*100)/this.selectedValue.length).toFixed(2)+"%";
             //percentage_rouge1=(100-percentage_vert1).toFixed(2)+"%";
             data=[vertCount1,rougeCount1];
           
             console.log(data);
              //doughnut model***********
              if(this.chart){
                //this.chart.clear();
                // myChart.destroy()
                  this.chart.destroy();
                  this.chart2.destroy();
                  this.chart3.destroy();
                  this.chart4.destroy();
              }
        
           //doughnut model***********
           this.chart=new Chart('doughnut-chart',{
            type:'doughnut',
            data:{
              labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
              datasets:[{
                label:'Key',
                backgroundColor: [ '#28a745','#dc3545'],
                data:data, 
              }]
            },
            options:{
              responsive: false,
              plugins:{
              }
          },
          
        })
        //pie  model****************
        this.chart2=new Chart('pie-chart',{
          type:'pie',
          data:{
            labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
            datasets:[{
              label:'Key',
              backgroundColor: [ '#28a745','#dc3545'],
              data:data,
             
            }]
          },
          options:{
            responsive: false,
        },
        })
         //bar model************
        this.chart3=new Chart('bar-chart',{
        type:'bar',
        data:{
          labels:['Ping_normal','Ping_anormal'],
          datasets:[{
            label:'Key',
            backgroundColor: [ '#28a745','#dc3545'],
            data:data,
           
          }]
        },
        options:{
          responsive: false,
          
          //maintainAspectRatio: false
        
        },
         
        
        
        })
        //PolarArea model************
        this.chart4=new Chart('polarArea-chart',{
        type:'polarArea',
        data:{
          labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
          datasets:[{
            label:'Key',
            backgroundColor: [ '#28a745','#dc3545'],
            data:data,
           
          }]
        },
        options:{
          responsive: false,
          
          //maintainAspectRatio: false
        
        },
         
        })
          }
          }
        
    );
  }*/
   
    get(){
 if(this.selectedValue.length>=1)
 {
     if(this.dateFrom!="" && this.dateTo!=""){
      let vertCount1:number=0;
      let rougeCount1:number=0;
      var data:number[]=[];
      let labelsList;
      let percentage_vert1:any;
      let percentage_rouge1:any;
      console.log(this.selectedValue);
      let myChart:any=[];
      if(this.selectedValue.length==1 ){
        
       this.http.get("http://127.0.0.1:8000/api/pingData"+"/"+this.dateFrom+"/"+this.dateTo+"/"+this.selectedValue)
       .subscribe((resultData: any)=>
       {
        //this.isResultLoaded=true;
        console.log(resultData);
        console.log(this.PingArray);
        this.PingArray=resultData;
        console.log(this.PingArray);
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue+" entre "+this.dateFrom+" et "+this.dateTo;
        } else {
          this.errorMessage = "";
        }
       console.log(this.errorMessage);
        for (let i = 0; i < this.PingArray.length; i++){
         const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
       if (couleur=== 'red') {
         rougeCount1++;
       } else if(couleur === 'green'){
         vertCount1++;
       }
       }
        percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
        percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
        data=[vertCount1,rougeCount1];
      
        console.log(data);
         //doughnut model***********
         if(this.chart){
           //this.chart.clear();
           // myChart.destroy()
             this.chart.destroy();
             this.chart2.destroy();
             this.chart3.destroy();
             this.chart4.destroy();
         }
   
      //doughnut model***********
      this.chart=new Chart('doughnut-chart',{
       type:'doughnut',
       data:{
         labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data, 
         }]
       },
       options:{
         responsive: false,
         plugins:{
         }
     },
     
   })
   //pie  model****************
   this.chart2=new Chart('pie-chart',{
     type:'pie',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data,
        
       }]
     },
     options:{
       responsive: false,
   },
   })
    //bar model************
   this.chart3=new Chart('bar-chart',{
   type:'bar',
   data:{
     labels:['Ping_normal','Ping_anormal'],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   
   
   })
   //PolarArea model************
   this.chart4=new Chart('polarArea-chart',{
   type:'polarArea',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   })
    })
      }
 
      else {
       let vertCount1:number=0;
       let rougeCount1:number=0;
       var data:number[]=[];
       let labelsList;
       let percentage_vert1:number=0;
       let percentage_rouge1:number=0;
       console.log(this.selectedValue);
       let myChart:any=[];
      for(let i=0;i<this.selectedValue.length;i++)
      {
       this.http.get("http://127.0.0.1:8000/api/pingData"+"/"+this.dateFrom+"/"+this.dateTo+"/"+this.selectedValue[i])
     .subscribe((resultData: any)=>
     {
      //this.isResultLoaded=true;
      console.log(resultData);
      console.log(this.PingArray);
      this.PingArray=resultData;
      console.log(this.PingArray);
    
     
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue[i]+" entre "+this.dateFrom+" et "+this.dateTo;
        } else {
          this.errorMessage = "";
        }
      
      for (let i = 0; i < this.PingArray.length; i++){
       const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
     if (couleur=== 'red') {
       rougeCount1++;
       //percentage_rouge1=percentage_rouge1+((rougeCount1*100)/this.PingArray.length)
     } else if(couleur === 'green'){
       vertCount1++;
       //percentage_vert1=percentage_vert1+((vertCount1*100)/this.PingArray.length)
     }
     }
    
      //percentage_vert1=((vertCount1*100)/this.selectedValue.length).toFixed(2)+"%";
      //percentage_rouge1=(100-percentage_vert1).toFixed(2)+"%";
      data=[vertCount1,rougeCount1];
    
      console.log(data);
       //doughnut model***********
       if(this.chart){
         //this.chart.clear();
         // myChart.destroy()
           this.chart.destroy();
           this.chart2.destroy();
           this.chart3.destroy();
           this.chart4.destroy();
       }
 
    //doughnut model***********
    this.chart=new Chart('doughnut-chart',{
     type:'doughnut',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data, 
       }]
     },
     options:{
       responsive: false,
       plugins:{
       }
   },
   
 })
 //pie  model****************
 this.chart2=new Chart('pie-chart',{
   type:'pie',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
 },
 })
  //bar model************
 this.chart3=new Chart('bar-chart',{
 type:'bar',
 data:{
   labels:['Ping_normal','Ping_anormal'],
   datasets:[{
     label:'Key',
     backgroundColor: [ '#28a745','#dc3545'],
     data:data,
    
   }]
 },
 options:{
   responsive: false,
   
   //maintainAspectRatio: false
 
 },
  
 
 
 })
 //PolarArea model************
 this.chart4=new Chart('polarArea-chart',{
 type:'polarArea',
 data:{
   labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
   datasets:[{
     label:'Key',
     backgroundColor: [ '#28a745','#dc3545'],
     data:data,
    
   }]
 },
 options:{
   responsive: false,
   
   //maintainAspectRatio: false
 
 },
  
 })
  })
      }
      }
     
     console.log(data);
    }
    else if(this.dateFrom=="" && this.dateTo==""){
      
      {
   
        
          let vertCount1:number=0;
          let rougeCount1:number=0;
          var data:number[]=[];
          let labelsList;
          let percentage_vert1:any;
          let percentage_rouge1:any;
          console.log(this.selectedValue);
          let myChart:any=[];
          if(this.selectedValue.length==1 ){
            
           this.http.get("http://127.0.0.1:8000/api/ping"+"/"+this.selectedValue)
           .subscribe((resultData: any)=>
           {
            //this.isResultLoaded=true;
            console.log(resultData);
            console.log(this.PingArray);
            this.PingArray=resultData;
            console.log(this.PingArray);
            if (this.PingArray.length === 0) {
              this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue+" entre "+this.dateFrom+" et "+this.dateTo;
            } else {
              this.errorMessage = "";
            }
           console.log(this.errorMessage);
            for (let i = 0; i < this.PingArray.length; i++){
             const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
           if (couleur=== 'red') {
             rougeCount1++;
           } else if(couleur === 'green'){
             vertCount1++;
           }
           }
            percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
            percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
            data=[vertCount1,rougeCount1];
          
            console.log(data);
             //doughnut model***********
             if(this.chart){
               //this.chart.clear();
               // myChart.destroy()
                 this.chart.destroy();
                 this.chart2.destroy();
                 this.chart3.destroy();
                 this.chart4.destroy();
             }
       
          //doughnut model***********
          this.chart=new Chart('doughnut-chart',{
           type:'doughnut',
           data:{
             labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
             datasets:[{
               label:'Key',
               backgroundColor: [ '#28a745','#dc3545'],
               data:data, 
             }]
           },
           options:{
             responsive: false,
             plugins:{
             }
         },
         
       })
       //pie  model****************
       this.chart2=new Chart('pie-chart',{
         type:'pie',
         data:{
           labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
           datasets:[{
             label:'Key',
             backgroundColor: [ '#28a745','#dc3545'],
             data:data,
            
           }]
         },
         options:{
           responsive: false,
       },
       })
        //bar model************
       this.chart3=new Chart('bar-chart',{
       type:'bar',
       data:{
         labels:['Ping_normal','Ping_anormal'],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data,
          
         }]
       },
       options:{
         responsive: false,
         
         //maintainAspectRatio: false
       
       },
        
       
       
       })
       //PolarArea model************
       this.chart4=new Chart('polarArea-chart',{
       type:'polarArea',
       data:{
         labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data,
          
         }]
       },
       options:{
         responsive: false,
         
         //maintainAspectRatio: false
       
       },
        
       })
        })
          }
     
          else {
           let vertCount1:number=0;
           let rougeCount1:number=0;
           var data:number[]=[];
           let labelsList;
           let percentage_vert1:number=0;
           let percentage_rouge1:number=0;
           console.log(this.selectedValue);
           let myChart:any=[];
          for(let i=0;i<this.selectedValue.length;i++)
          {
           this.http.get("http://127.0.0.1:8000/api/ping"+"/"+this.selectedValue[i])
         .subscribe((resultData: any)=>
         {
          //this.isResultLoaded=true;
          console.log(resultData);
          console.log(this.PingArray);
          this.PingArray=resultData;
          console.log(this.PingArray);
        
         
            if (this.PingArray.length === 0) {
              this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue[i]+" entre "+this.dateFrom+" et "+this.dateTo;
            } else {
              this.errorMessage = "";
            }
          
          for (let i = 0; i < this.PingArray.length; i++){
           const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
         if (couleur=== 'red') {
           rougeCount1++;
           //percentage_rouge1=percentage_rouge1+((rougeCount1*100)/this.PingArray.length)
         } else if(couleur === 'green'){
           vertCount1++;
           //percentage_vert1=percentage_vert1+((vertCount1*100)/this.PingArray.length)
         }
         }
        
          //percentage_vert1=((vertCount1*100)/this.selectedValue.length).toFixed(2)+"%";
          //percentage_rouge1=(100-percentage_vert1).toFixed(2)+"%";
          data=[vertCount1,rougeCount1];
        
          console.log(data);
           //doughnut model***********
           if(this.chart){
             //this.chart.clear();
             // myChart.destroy()
               this.chart.destroy();
               this.chart2.destroy();
               this.chart3.destroy();
               this.chart4.destroy();
           }
     
        //doughnut model***********
        this.chart=new Chart('doughnut-chart',{
         type:'doughnut',
         data:{
           labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
           datasets:[{
             label:'Key',
             backgroundColor: [ '#28a745','#dc3545'],
             data:data, 
           }]
         },
         options:{
           responsive: false,
           plugins:{
           }
       },
       
     })
     //pie  model****************
     this.chart2=new Chart('pie-chart',{
       type:'pie',
       data:{
         labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data,
          
         }]
       },
       options:{
         responsive: false,
     },
     })
      //bar model************
     this.chart3=new Chart('bar-chart',{
     type:'bar',
     data:{
       labels:['Ping_normal','Ping_anormal'],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data,
        
       }]
     },
     options:{
       responsive: false,
       
       //maintainAspectRatio: false
     
     },
      
     
     
     })
     //PolarArea model************
     this.chart4=new Chart('polarArea-chart',{
     type:'polarArea',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data,
        
       }]
     },
     options:{
       responsive: false,
       
       //maintainAspectRatio: false
     
     },
      
     })
      })
          }
          }
         
         console.log(data);
        
    }
   
   }
   else if(this.dateFrom!="" && this.dateTo=="")
   {
    
      let vertCount1:number=0;
      let rougeCount1:number=0;
      var data:number[]=[];
      let labelsList;
      let percentage_vert1:any;
      let percentage_rouge1:any;
      console.log(this.selectedValue);
      let myChart:any=[];
      if(this.selectedValue.length==1 ){
        
       this.http.get("http://127.0.0.1:8000/api/pingData2"+"/"+this.dateFrom+"/"+this.selectedValue)
       .subscribe((resultData: any)=>
       {
        //this.isResultLoaded=true;
        console.log(resultData);
        console.log(this.PingArray);
        this.PingArray=resultData;
        console.log(this.PingArray);
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue+" à la date "+this.dateFrom;
        } else {
          this.errorMessage = "";
        }
       console.log(this.errorMessage);
        for (let i = 0; i < this.PingArray.length; i++){
         const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
       if (couleur=== 'red') {
         rougeCount1++;
       } else if(couleur === 'green'){
         vertCount1++;
       }
       }
        percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
        percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
        data=[vertCount1,rougeCount1];
      
        console.log(data);
         //doughnut model***********
         if(this.chart){
           //this.chart.clear();
           // myChart.destroy()
             this.chart.destroy();
             this.chart2.destroy();
             this.chart3.destroy();
             this.chart4.destroy();
         }
   
      //doughnut model***********
      this.chart=new Chart('doughnut-chart',{
       type:'doughnut',
       data:{
         labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data, 
         }]
       },
       options:{
         responsive: false,
         plugins:{
         }
     },
     
   })
   //pie  model****************
   this.chart2=new Chart('pie-chart',{
     type:'pie',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data,
        
       }]
     },
     options:{
       responsive: false,
   },
   })
    //bar model************
   this.chart3=new Chart('bar-chart',{
   type:'bar',
   data:{
     labels:['Ping_normal','Ping_anormal'],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   
   
   })
   //PolarArea model************
   this.chart4=new Chart('polarArea-chart',{
   type:'polarArea',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   })
    })
      }
 
      else {
       let vertCount1:number=0;
       let rougeCount1:number=0;
       var data:number[]=[];
       let labelsList;
       let percentage_vert1:number=0;
       let percentage_rouge1:number=0;
       console.log(this.selectedValue);
       let myChart:any=[];
      for(let i=0;i<this.selectedValue.length;i++)
      {
       this.http.get("http://127.0.0.1:8000/api/pingData2"+"/"+this.dateFrom+"/"+this.selectedValue[i])
     .subscribe((resultData: any)=>
     {
      //this.isResultLoaded=true;
      console.log(resultData);
      console.log(this.PingArray);
      this.PingArray=resultData;
      console.log(this.PingArray);
    
     
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue[i]+" à la date "+this.dateFrom;
        } else {
          this.errorMessage = "";
        }
      
      for (let i = 0; i < this.PingArray.length; i++){
       const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
     if (couleur=== 'red') {
       rougeCount1++;
       //percentage_rouge1=percentage_rouge1+((rougeCount1*100)/this.PingArray.length)
     } else if(couleur === 'green'){
       vertCount1++;
       //percentage_vert1=percentage_vert1+((vertCount1*100)/this.PingArray.length)
     }
     }
    
      //percentage_vert1=((vertCount1*100)/this.selectedValue.length).toFixed(2)+"%";
      //percentage_rouge1=(100-percentage_vert1).toFixed(2)+"%";
      data=[vertCount1,rougeCount1];
    
      console.log(data);
       //doughnut model***********
       if(this.chart){
         //this.chart.clear();
         // myChart.destroy()
           this.chart.destroy();
           this.chart2.destroy();
           this.chart3.destroy();
           this.chart4.destroy();
       }
 
    //doughnut model***********
    this.chart=new Chart('doughnut-chart',{
     type:'doughnut',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data, 
       }]
     },
     options:{
       responsive: false,
       plugins:{
       }
   },
   
 })
 //pie  model****************
 this.chart2=new Chart('pie-chart',{
   type:'pie',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
 },
 })
  //bar model************
 this.chart3=new Chart('bar-chart',{
 type:'bar',
 data:{
   labels:['Ping_normal','Ping_anormal'],
   datasets:[{
     label:'Key',
     backgroundColor: [ '#28a745','#dc3545'],
     data:data,
    
   }]
 },
 options:{
   responsive: false,
   
   //maintainAspectRatio: false
 
 },
  
 
 
 })
 //PolarArea model************
 this.chart4=new Chart('polarArea-chart',{
 type:'polarArea',
 data:{
   labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
   datasets:[{
     label:'Key',
     backgroundColor: [ '#28a745','#dc3545'],
     data:data,
    
   }]
 },
 options:{
   responsive: false,
   
   //maintainAspectRatio: false
 
 },
  
 })
  })
      }
      }
     
     console.log(data);
    
   }
   else if(this.dateFrom=="" && this.dateTo!="")
   {
      let vertCount1:number=0;
      let rougeCount1:number=0;
      var data:number[]=[];
      let labelsList;
      let percentage_vert1:any;
      let percentage_rouge1:any;
      console.log(this.selectedValue);
      let myChart:any=[];
      if(this.selectedValue.length==1 ){
        
       this.http.get("http://127.0.0.1:8000/api/pingData2"+"/"+this.dateTo+"/"+this.selectedValue)
       .subscribe((resultData: any)=>
       {
        //this.isResultLoaded=true;
        console.log(resultData);
        console.log(this.PingArray);
        this.PingArray=resultData;
        console.log(this.PingArray);
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue+" entre "+this.dateFrom+" et "+this.dateTo;
        } else {
          this.errorMessage = "";
        }
       console.log(this.errorMessage);
        for (let i = 0; i < this.PingArray.length; i++){
         const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
       if (couleur=== 'red') {
         rougeCount1++;
       } else if(couleur === 'green'){
         vertCount1++;
       }
       }
        percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
        percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
        data=[vertCount1,rougeCount1];
      
        console.log(data);
         //doughnut model***********
         if(this.chart){
           //this.chart.clear();
           // myChart.destroy()
             this.chart.destroy();
             this.chart2.destroy();
             this.chart3.destroy();
             this.chart4.destroy();
         }
   
      //doughnut model***********
      this.chart=new Chart('doughnut-chart',{
       type:'doughnut',
       data:{
         labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data, 
         }]
       },
       options:{
         responsive: false,
         plugins:{
         }
     },
     
   })
   //pie  model****************
   this.chart2=new Chart('pie-chart',{
     type:'pie',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data,
        
       }]
     },
     options:{
       responsive: false,
   },
   })
    //bar model************
   this.chart3=new Chart('bar-chart',{
   type:'bar',
   data:{
     labels:['Ping_normal','Ping_anormal'],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   
   
   })
   //PolarArea model************
   this.chart4=new Chart('polarArea-chart',{
   type:'polarArea',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   })
    })
      }
 
      else {
       let vertCount1:number=0;
       let rougeCount1:number=0;
       var data:number[]=[];
       let labelsList;
       let percentage_vert1:number=0;
       let percentage_rouge1:number=0;
       console.log(this.selectedValue);
       let myChart:any=[];
      for(let i=0;i<this.selectedValue.length;i++)
      {
       this.http.get("http://127.0.0.1:8000/api/pingData2"+"/"+this.dateTo+"/"+this.selectedValue[i])
     .subscribe((resultData: any)=>
     {
      //this.isResultLoaded=true;
      console.log(resultData);
      console.log(this.PingArray);
      this.PingArray=resultData;
      console.log(this.PingArray);
    
     
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé pour l'adresse IP "+this.selectedValue[i]+" entre "+this.dateFrom+" et "+this.dateTo;
        } else {
          this.errorMessage = "";
        }
      
      for (let i = 0; i < this.PingArray.length; i++){
       const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
     if (couleur=== 'red') {
       rougeCount1++;
       //percentage_rouge1=percentage_rouge1+((rougeCount1*100)/this.PingArray.length)
     } else if(couleur === 'green'){
       vertCount1++;
       //percentage_vert1=percentage_vert1+((vertCount1*100)/this.PingArray.length)
     }
     }
    
      //percentage_vert1=((vertCount1*100)/this.selectedValue.length).toFixed(2)+"%";
      //percentage_rouge1=(100-percentage_vert1).toFixed(2)+"%";
      data=[vertCount1,rougeCount1];
    
      console.log(data);
       //doughnut model***********
       if(this.chart){
         //this.chart.clear();
         // myChart.destroy()
           this.chart.destroy();
           this.chart2.destroy();
           this.chart3.destroy();
           this.chart4.destroy();
       }
 
    //doughnut model***********
    this.chart=new Chart('doughnut-chart',{
     type:'doughnut',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data, 
       }]
     },
     options:{
       responsive: false,
       plugins:{
       }
   },
   
 })
 //pie  model****************
 this.chart2=new Chart('pie-chart',{
   type:'pie',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
 },
 })
  //bar model************
 this.chart3=new Chart('bar-chart',{
 type:'bar',
 data:{
   labels:['Ping_normal','Ping_anormal'],
   datasets:[{
     label:'Key',
     backgroundColor: [ '#28a745','#dc3545'],
     data:data,
    
   }]
 },
 options:{
   responsive: false,
   
   //maintainAspectRatio: false
 
 },
  
 
 
 })
 //PolarArea model************
 this.chart4=new Chart('polarArea-chart',{
 type:'polarArea',
 data:{
   labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
   datasets:[{
     label:'Key',
     backgroundColor: [ '#28a745','#dc3545'],
     data:data,
    
   }]
 },
 options:{
   responsive: false,
   
   //maintainAspectRatio: false
 
 },
  
 })
  })
      }
      }
     
     console.log(data);
    
   
   }
 }
 
  else if(this.selectedValue.length==0)
  {
    if(this.dateFrom!="" && this.dateTo!=""){
      let vertCount1:number=0;
      let rougeCount1:number=0;
      var data:number[]=[];
      let labelsList;
      let percentage_vert1:any;
      let percentage_rouge1:any;
      console.log(this.selectedValue);
      let myChart:any=[];   
       this.http.get("http://127.0.0.1:8000/api/pingData"+"/"+this.dateFrom+"/"+this.dateTo+"/"+this.selectedValue[0])
       .subscribe((resultData: any)=>
       {
        //this.isResultLoaded=true;
        console.log(resultData);
        console.log(this.PingArray);
        this.PingArray=resultData;
        console.log(this.PingArray);
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé pour l'adresse IP entre "+this.dateFrom+" et "+this.dateTo;
        } else {
          this.errorMessage = "";
        }
       console.log(this.errorMessage);
        for (let i = 0; i < this.PingArray.length; i++){
         const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
       if (couleur=== 'red') {
         rougeCount1++;
       } else if(couleur === 'green'){
         vertCount1++;
       }
       }
        percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
        percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
        data=[vertCount1,rougeCount1];
      
        console.log(data);
         //doughnut model***********
         if(this.chart){
           //this.chart.clear();
           // myChart.destroy()
             this.chart.destroy();
             this.chart2.destroy();
             this.chart3.destroy();
             this.chart4.destroy();
         }
   
      //doughnut model***********
      this.chart=new Chart('doughnut-chart',{
       type:'doughnut',
       data:{
         labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data, 
         }]
       },
       options:{
         responsive: false,
         plugins:{
         }
     },
     
   })
   //pie  model****************
   this.chart2=new Chart('pie-chart',{
     type:'pie',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data,
        
       }]
     },
     options:{
       responsive: false,
   },
   })
    //bar model************
   this.chart3=new Chart('bar-chart',{
   type:'bar',
   data:{
     labels:['Ping_normal','Ping_anormal'],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   
   
   })
   //PolarArea model************
   this.chart4=new Chart('polarArea-chart',{
   type:'polarArea',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   })
    })
     console.log(data);
    }
    else if(this.dateFrom!="" && this.dateTo=="")
    {
     
       let vertCount1:number=0;
       let rougeCount1:number=0;
       var data:number[]=[];
       let labelsList;
       let percentage_vert1:any;
       let percentage_rouge1:any;
       console.log(this.selectedValue);
       let myChart:any=[];
        this.http.get("http://127.0.0.1:8000/api/pingData2"+"/"+this.dateFrom+"/"+this.selectedValue[0])
        .subscribe((resultData: any)=>
        {
         //this.isResultLoaded=true;
         console.log(resultData);
         console.log(this.PingArray);
         this.PingArray=resultData;
         console.log(this.PingArray);
         if (this.PingArray.length === 0) {
           this.errorMessage = "Aucun ping trouvé à la date "+this.dateFrom;
         } else {
           this.errorMessage = "";
         }
        console.log(this.errorMessage);
         for (let i = 0; i < this.PingArray.length; i++){
          const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
        if (couleur=== 'red') {
          rougeCount1++;
        } else if(couleur === 'green'){
          vertCount1++;
        }
        }
         percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
         percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
         data=[vertCount1,rougeCount1];
       
         console.log(data);
          //doughnut model***********
          if(this.chart){
            //this.chart.clear();
            // myChart.destroy()
              this.chart.destroy();
              this.chart2.destroy();
              this.chart3.destroy();
              this.chart4.destroy();
          }
    
       //doughnut model***********
       this.chart=new Chart('doughnut-chart',{
        type:'doughnut',
        data:{
          labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
          datasets:[{
            label:'Key',
            backgroundColor: [ '#28a745','#dc3545'],
            data:data, 
          }]
        },
        options:{
          responsive: false,
          plugins:{
          }
      },
      
    })
    //pie  model****************
    this.chart2=new Chart('pie-chart',{
      type:'pie',
      data:{
        labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
        datasets:[{
          label:'Key',
          backgroundColor: [ '#28a745','#dc3545'],
          data:data,
         
        }]
      },
      options:{
        responsive: false,
    },
    })
     //bar model************
    this.chart3=new Chart('bar-chart',{
    type:'bar',
    data:{
      labels:['Ping_normal','Ping_anormal'],
      datasets:[{
        label:'Key',
        backgroundColor: [ '#28a745','#dc3545'],
        data:data,
       
      }]
    },
    options:{
      responsive: false,
      
      //maintainAspectRatio: false
    
    },
     
    
    
    })
    //PolarArea model************
    this.chart4=new Chart('polarArea-chart',{
    type:'polarArea',
    data:{
      labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
      datasets:[{
        label:'Key',
        backgroundColor: [ '#28a745','#dc3545'],
        data:data,
       
      }]
    },
    options:{
      responsive: false,
      
      //maintainAspectRatio: false
    
    },
     
    })
     })
     
      console.log(data);
     
    }
  }
  
 
   else if(this.dateFrom=="" && this.dateTo!="")
   {
      let vertCount1:number=0;
      let rougeCount1:number=0;
      var data:number[]=[];
      let labelsList;
      let percentage_vert1:any;
      let percentage_rouge1:any;
      console.log(this.selectedValue);
      let myChart:any=[];    
       this.http.get("http://127.0.0.1:8000/api/pingData2"+"/"+this.dateTo+"/"+this.selectedValue[0])
       .subscribe((resultData: any)=>
       {
        //this.isResultLoaded=true;
        console.log(resultData);
        console.log(this.PingArray);
        this.PingArray=resultData;
        console.log(this.PingArray);
        if (this.PingArray.length === 0) {
          this.errorMessage = "Aucun ping trouvé à la date "+this.dateTo;
        } else {
          this.errorMessage = "";
        }
       console.log(this.errorMessage);
        for (let i = 0; i < this.PingArray.length; i++){
         const couleur =this.PingArray[i].time > 60 || this.PingArray[i].time  < 1 ? 'red' : 'green';
       if (couleur=== 'red') {
         rougeCount1++;
       } else if(couleur === 'green'){
         vertCount1++;
       }
       }
        percentage_vert1=((vertCount1*100)/this.PingArray.length).toFixed(2)+"%";
        percentage_rouge1=((rougeCount1*100)/this.PingArray.length).toFixed(2)+"%";
        data=[vertCount1,rougeCount1];
      
        console.log(data);
         //doughnut model***********
         if(this.chart){
           //this.chart.clear();
           // myChart.destroy()
             this.chart.destroy();
             this.chart2.destroy();
             this.chart3.destroy();
             this.chart4.destroy();
         }
   
      //doughnut model***********
      this.chart=new Chart('doughnut-chart',{
       type:'doughnut',
       data:{
         labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
         datasets:[{
           label:'Key',
           backgroundColor: [ '#28a745','#dc3545'],
           data:data, 
         }]
       },
       options:{
         responsive: false,
         plugins:{
         }
     },
     
   })
   //pie  model****************
   this.chart2=new Chart('pie-chart',{
     type:'pie',
     data:{
       labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
       datasets:[{
         label:'Key',
         backgroundColor: [ '#28a745','#dc3545'],
         data:data,
        
       }]
     },
     options:{
       responsive: false,
   },
   })
    //bar model************
   this.chart3=new Chart('bar-chart',{
   type:'bar',
   data:{
     labels:['Ping_normal','Ping_anormal'],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   
   
   })
   //PolarArea model************
   this.chart4=new Chart('polarArea-chart',{
   type:'polarArea',
   data:{
     labels:["Ping_normal: "+vertCount1,"Ping_anormal: "+rougeCount1],
     datasets:[{
       label:'Key',
       backgroundColor: [ '#28a745','#dc3545'],
       data:data,
      
     }]
   },
   options:{
     responsive: false,
     
     //maintainAspectRatio: false
   
   },
    
   })
    })
     console.log(data);
    
   
   }
 
 }
    
  ngOnInit(): void {
  // this.getPindate();
  /*this.data=[5,1];
  this.single(this.chartName,'Key',this.labelsList,this.data,'doughnut-chart','doughnut');
  this.single(this.chartName,'Key',this.labelsList,this.data,'pie-chart','pie');
  this.getAllPing();*/
  
  this.http.get("http://127.0.0.1:8000/api/ping")
  .subscribe((resultData: any)=>
  {
   //this.isResultLoaded=true;
   console.log(resultData);
   this.PingArray2=resultData;
   console.log(this.PingArray2);
   for (let i = 0; i < this.PingArray2.length; i++){
     const couleur =this.PingArray2[i].time > 60 || this.PingArray2[i].time  < 1 ? 'red' : 'green';
   if (couleur=== 'red') {
     this.rougeCount++;
   } else if(couleur === 'green'){
     this.vertCount++;
   }
   }
   this.percentage_vert=((this.vertCount*100)/this.PingArray2.length).toFixed(2)+"%";
   this.percentage_rouge=((this.rougeCount*100)/this.PingArray2.length).toFixed(2)+"%";
   let data=[this.vertCount,this.rougeCount];
   this.data=data;
   console.log(this.data);
   console.log(this.rougeCount);
   console.log(this.vertCount);
   this.ip_adress=this.PingArray2.ip_adress;
   //console.log(this.ip_adress);
   this.result=this.PingArray2.result;
   this.time=this.PingArray2.time;
  
   //show chart
  
   console.log(this.data);
  
   //doughnut model***********
    this.chart=new Chart('doughnut-chart',{
      type:'doughnut',
      data:{
        labels:["Ping_normal: "+this.vertCount,"Ping_anormal: "+this.rougeCount],
        datasets:[{
          label:'Key',
          backgroundColor: [ '#28a745','#dc3545'],
          data:this.data, 
        }]
      },
      options:{
        responsive: false,
        plugins:{
        }
    },
    
  })
  //pie  model****************
  this.chart2=new Chart('pie-chart',{
    type:'pie',
    data:{
      labels:["Ping_normal: "+this.vertCount,"Ping_anormal: "+this.rougeCount],
      datasets:[{
        label:'Key',
        backgroundColor: [ '#28a745','#dc3545'],
        data:this.data,
       
      }]
    },
    options:{
      responsive: false,
  },
})
   //bar model************
this.chart3=new Chart('bar-chart',{
  type:'bar',
  data:{
    labels:['Ping_normal','Ping_anormal'],
    datasets:[{
      label:'Key',
      backgroundColor: [ '#28a745','#dc3545'],
      data:this.data,
     
    }]
  },
  options:{
    responsive: false,
    
    //maintainAspectRatio: false

},
   


})
//PolarArea model************
this.chart4=new Chart('polarArea-chart',{
  type:'polarArea',
  data:{
    labels:["Ping_normal: "+this.vertCount,"Ping_anormal: "+this.rougeCount],
    datasets:[{
      label:'Key',
      backgroundColor: [ '#28a745','#dc3545'],
      data:this.data,
     
    }]
  },
  options:{
    responsive: false,
    
    //maintainAspectRatio: false

},
   


})
  })

  //Equipement liste
  this.http.get("http://127.0.0.1:8000/api/equipements")
  .subscribe((resultData: any)=>
  {
   this.isResultLoaded=true;
   console.log(resultData);
   this.EquipementArray=resultData;
  /* console.log(this.EquipementArray);
   this.name=this.EquipementArray.name;
   console.log(this.name);*/
  
   for (let i = 0; i < this.EquipementArray.length; i++){
   this.values[i]=this.EquipementArray[i].ip_adress;
   this.ip_adress_ping=this.EquipementArray[i].ip_adress;
 
   }
   console.log(this.values);
  })
    
  }

  toggleSelectAll() {
    this.http.get("http://127.0.0.1:8000/api/equipements")
    .subscribe((resultData: any)=>
    {
     this.isResultLoaded=true;
     console.log(resultData);
     this.EquipementArray=resultData;
    /* console.log(this.EquipementArray);
     this.name=this.EquipementArray.name;
     console.log(this.name);*/
    
     for (let i = 0; i < this.EquipementArray.length; i++){
     this.values[i]=this.EquipementArray[i].ip_adress;
      //this.selectedValue=this.values.slice();
 
     this.ip_adress_ping=this.EquipementArray[i].ip_adress;
   
     }
     if (this.selectedValue.length === this.values.length) {
      this.selectedValue = [];
    } else {
      this.selectedValue = this.values.slice();
    }
    console.log(this.selectedValue.length);
     console.log(this.values);
    })
      
  }
  ngOnDestroy() {
    this.destroyChart();
  } 
  destroyChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
  
  // return all equipement function
  /*getPingById()
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
  }*/


 //chart fonction
  single(graphTitle:string, key:string,labels:any,data:any,context:string,charttype:any){
   // console.log(this.message);
    console.log(this.data);
    var chart=new Chart(context,{
      type:charttype,
      data:{
        labels:labels,
        datasets:[{
          label:key,
          backgroundColor: [ '#28a745','#dc3545'],
          data:data,
         
        }]
      },
      options:{
        responsive: false,
        
				//maintainAspectRatio: false
        legend: {
          position: 'right'
      },
      plugins: {
          datalabels: {
              color: '#fff',
              anchor: 'end',
              align: 'start',
              offset: 10
          }
          
      }
    },
  })
 

  }


 

}