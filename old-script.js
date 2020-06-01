const randomvalues = () => {
 
//const r1c1 = document.getElementById("r1c1");
//r1c1.innerText = getRandomIntInclusive(1,9);

document.getElementById("r1c3").innerText=1;
document.getElementById("r2c1").innerText=8;
document.getElementById("r2c3").innerText=2;
document.getElementById("r3c2").innerText=5;

document.getElementById("r1c5").innerText=7;
document.getElementById("r3c5").innerText=2;
document.getElementById("r3c6").innerText=9;

document.getElementById("r1c8").innerText=5;
document.getElementById("r1c9").innerText=2;
document.getElementById("r2c9").innerText=1;
document.getElementById("r3c8").innerText=4;

document.getElementById("r4c1").innerText=7;
document.getElementById("r5c3").innerText=3;
document.getElementById("r6c1").innerText=2;
document.getElementById("r6c2").innerText=1;
document.getElementById("r6c3").innerText=4;

document.getElementById("r4c5").innerText=5;
document.getElementById("r5c5").innerText=8;
document.getElementById("r6c5").innerText=9;


document.getElementById("r4c7").innerText=3;
document.getElementById("r4c8").innerText=1;
document.getElementById("r4c9").innerText=4;
document.getElementById("r5c7").innerText=2;
document.getElementById("r6c9").innerText=6;

document.getElementById("r7c2").innerText=4;
document.getElementById("r8c1").innerText=6;
document.getElementById("r9c1").innerText=1;
document.getElementById("r9c2").innerText=2;

document.getElementById("r7c4").innerText=8;
document.getElementById("r7c5").innerText=3;
document.getElementById("r9c5").innerText=4;

document.getElementById("r7c8").innerText=6;
document.getElementById("r8c7").innerText=4;
document.getElementById("r8c9").innerText=5;
document.getElementById("r9c7").innerText=8;

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }



  var array1 = [];
  var array2 = [];
  var array3 = [];
  var array4 = [];
  var array5 = [];
  var array6 = [];
  var array7 = [];
  var array8 = [];
  var array9 = [];
  var findingthenumbertosolve=[];

const solution = () => 

{
    let obj={ };

    for (let i=1;i<=9;i++)
    {
       for (let j=1;j<=9;j++)
       {
         let id = `r${i}c${j}`;
         //console.log(id);
          let val = document.getElementById(id).textContent;
          //console.log(val);
          if (val === null || val === undefined || val === "")
          {
              val=0;                              
             
          }
          obj[id] = Number(val);
          //console.log(obj);
         
           
       }
       

   }

  compute(obj);



}


const compute = (obj) =>
{

const rowcol=Object.entries(obj);
//console.log(rowcol);
//console.log(rowcol.length);
let findingthenumbertosolve=[];
let rc="";
let rcval=0;
let objvalues= {};

for (let i=0;i<rowcol.length;i++)
    {
      
         rc = rowcol[i][0];
         rcval = Number(rowcol[i][1]);
         
         if (rcval === null || rcval === undefined || rcval === "" || rcval === NaN )
         {
            rcval=0;                              
            
         }
         if(rcval != 0) {   
                findingthenumbertosolve = findthenumber(rc,Number(rcval));
}
           
//console.log(findingthenumbertosolve);           
   
}
}


 function findthenumber(rc,rcval)
{
    switch(rcval) {
		case 1:  array1.push({[rc]:rcval});   break;
		case 2: array2.push({[rc]:rcval});     break;
		case 3:  array3.push({[rc]:rcval});   break;
		case 4:  array4.push({[rc]:rcval});   break;
		case 5:  array5.push({[rc]:rcval});  break;
        case 6:  array6.push({[rc]:rcval});    break;
        case 7:  array7.push({[rc]:rcval});    break;
        case 8:  array8.push({[rc]:rcval});   break;
        case 9:  array9.push({[rc]:rcval});    break;
        default: 0; break;
        

    }
    console.log(array1,array2,array3,array4,array5,array6,array7,array8,array9);
    
     //findingthenumbertosolve.push(array1,array2,array3,array4,array5,array6,array7,array8,array9);

   const array1length = array1.length;
   const array2length = array2.length;
   const array3length = array3.length;
   const array4length = array4.length;
   const array5length = array5.length;
   const array6length = array6.length;
   const array7length = array7.length;
   const array8length = array8.length;
   const array9length = array9.length;
   


     return 1;



} 






const genrandomvalue = document.getElementById("puzzle");
genrandomvalue.addEventListener("click", randomvalues);

const sudokusolution = document.getElementById("solution");
sudokusolution.addEventListener("click", solution);




for (let i=0;i<=9;i++)
    {
      
         
   for (let j=0;j<rowcol.length;j++)
     {

         rc = rowcol[j][0];
         console.log(rc);
         rcval = Number(rowcol[j][1]);
         console.log(rcval);
           
        if ( i === rcval )
         {
             countvalue++;
             
         }
    }
   
         countArray.push([i,countvalue])  
         countvalue = 0;
         
    }

    countArray.sort((a,b) => {
        a>b;
    })


    rcArray.push(rowcol[i][0]);
rcvalArray.push(rowcol[i][1]);



console.log(col1[0], col1[1], col1[2]);
console.log(col2[0], col2[1], col2[2]);
console.log(col3[0], col3[1], col3[2]);



for (let i=0;i<rowcol.length;i++)
{
    if( (rowcol[i][0]).includes("c1") )
     col1.push([rowcol[i][0], rowcol[i][1]])
     if( (rowcol[i][0]).includes("c2") )
     col2.push([rowcol[i][0], rowcol[i][1]])

     if( (rowcol[i][0]).includes("c3") )
     col3.push([rowcol[i][0], rowcol[i][1]])    
     if( (rowcol[i][0]).includes("c4") )
     col4.push([rowcol[i][0], rowcol[i][1]])
     if( (rowcol[i][0]).includes("c5") )
     col5.push([rowcol[i][0], rowcol[i][1]])
     if( (rowcol[i][0]).includes("c6") )
     col6.push([rowcol[i][0], rowcol[i][1]])
     if( (rowcol[i][0]).includes("c7") )
     col7.push([rowcol[i][0], rowcol[i][1]]) 
     if( (rowcol[i][0]).includes("c8") )
     col8.push([rowcol[i][0], rowcol[i][1]])
     if( (rowcol[i][0]).includes("c9") )
     col9.push([rowcol[i][0], rowcol[i][1]])

}


if(block6[i][1] === j) {
  numbersinblock.push(block6[i][1]);
  } 


          //console.log(numbersinblock);
       // console.log(numberstobefilled);



       for (let i=0;i<9;i++) {
        debugger;
       
           if(block6[i][1] === 0) {
                    
                      
                for(let n=1;n<=9;n++)
                 
                 if(row6[i][1] != n)
                 {
                    for(let k=0;k<9;k++) 
                    {
                        if(col6[k][1] != n) {
                                
                            for(let l=0;l<9;l++) 
                            {
                                if(block6[l][1] != n)
                            {
                               console.log(n)
                                document.getElementById("block6[l][0]").innerHTML = n;
                            }
                        }
    
    
                     }
         
                   }
        
               }
                     




               for (let i=0;i<9;i++) {
                //debugger;
               
               
                if(block6[i][1] === 0) 
                {
            
                    if(n <=9)
                     {
                       for (let j=0;j<9;j++)
                       {
                           if (block6[j][1] === n)
                           {
                               n++;
                           }
                           else 
                           
                           {
                            for (let k=0;k<9;k++)
                             { 
                                if (col6[k][1] === n)
                                {
                                    n++;
                                }
                                else 
                                {
                                    for (let l=0;l<9;l++)
                                    {
                                    if (row6[l][1] === n)
                                    {
                                        n++;
                                     }
                                    else {
                                    console.log(n);
                                    console.log(block6[i][0]);
                                    console.log(document.getElementById("r5c8"));
                                    document.getElementById("r5c8").innerText=n;
                                    n++;
                                    }
                                   }
                                }
                             }
                          }
                        }
                    }
                }
              }
            }




            for (let n=1;n<=9;n++)
           {
              for (let k=0;k<9;k++)
                {
                //console.log(colval);
                   //console.log(c8);
                   console.log((block6[i][0].substr(0,2)));
                   console.log((block6[i][0].substr(0,2))[k][1]);

                   if (colval[k][1] === n || rowval[k][1] === n)
                   {
                   
                       n++;
                   }
                   else {

                        for(let j=0;j<9;j++) 
                            {
                                if (block6[j][1] === n)
                                    {
                                       n++;

                                    }
                                    else {
                                        //console.log(block6[i][0]);
                                        document.getElementById(block6[i][0]).innerText=n;
                                    }
                            }
                        }
                
                }
            }
            
    }
  }
}




--------------





const randomvalues = () => {
 
  //const r1c1 = document.getElementById("r1c1");
  //r1c1.innerText = getRandomIntInclusive(1,9);
  
  document.getElementById("r1c3").innerText=1;
  document.getElementById("r2c1").innerText=8;
  document.getElementById("r2c3").innerText=2;
  document.getElementById("r3c2").innerText=5;
  
  document.getElementById("r1c5").innerText=7;
  document.getElementById("r3c5").innerText=2;
  document.getElementById("r3c6").innerText=9;
  
  document.getElementById("r1c8").innerText=5;
  document.getElementById("r1c9").innerText=2;
  document.getElementById("r2c9").innerText=1;
  document.getElementById("r3c8").innerText=4;
  
  document.getElementById("r4c1").innerText=7;
  document.getElementById("r5c3").innerText=3;
  document.getElementById("r6c1").innerText=2;
  document.getElementById("r6c2").innerText=1;
  document.getElementById("r6c3").innerText=4;
  
  document.getElementById("r4c5").innerText=5;
  document.getElementById("r5c5").innerText=8;
  document.getElementById("r6c5").innerText=9;
  
  
  document.getElementById("r4c7").innerText=3;
  document.getElementById("r4c8").innerText=1;
  document.getElementById("r4c9").innerText=4;
  document.getElementById("r5c7").innerText=2;
  document.getElementById("r6c9").innerText=6;
  
  document.getElementById("r7c2").innerText=4;
  document.getElementById("r8c1").innerText=6;
  document.getElementById("r9c1").innerText=1;
  document.getElementById("r9c2").innerText=2;
  
  document.getElementById("r7c4").innerText=8;
  document.getElementById("r7c5").innerText=3;
  document.getElementById("r9c5").innerText=4;
  
  document.getElementById("r7c8").innerText=6;
  document.getElementById("r8c7").innerText=4;
  document.getElementById("r8c9").innerText=5;
  document.getElementById("r9c7").innerText=8;
  
  }
  
  
  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
  
  
      
  const solution = () => 
  
  {
      let obj={ };
  
      for (let i=1;i<=9;i++)
      {
         for (let j=1;j<=9;j++)
         {
           let id = `r${i}c${j}`;
           //console.log(id);
            let val = document.getElementById(id).textContent;
            //console.log(val);
            if (val === null || val === undefined || val === "")
            {
                val=0;                              
               
            }
            obj[id] = Number(val);
            //console.log(obj);

           
             
         }
         
  
     }
  
    compute(obj);
  
  
  
  }
  
const compute = (obj) =>
{

const rowcol=Object.entries(obj);
console.log(rowcol);
//console.log(rowcol.length);
let findingthenumbertosolve=[];
let rc="";
let rcval=0;
let countArray= [];
let countvalue =0;
let r1 =[];
let r2 =[];
let r3 =[];
let r4 =[];
let r5 =[];
let r6 =[];
let r7 =[];
let r8 =[];
let r9 =[];



let c1 =[];
let c2 =[];
let c3 =[];
let c4 =[];
let c5  =[];
let c6 =[];
let c7  =[];
let c8 =[];
let c9 =[];



let block1 =[];
let block2 =[];
let block3 =[];
let block4 =[];
let block5  =[];
let block6 =[];
let block7  =[];
let block8 =[];
let block9 =[];


let rcvalArray=[];
let rowval=[];

for (let i=0;i<rowcol.length;i++)
{
  if( (rowcol[i][0]).includes("r1") )
   r1.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r2") )
   r2.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r3") )
   r3.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r4") )
   r4.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r5") )
   r5.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r6") )
   r6.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r7") )
   r7.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r8") )
   r8.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("r9") )
   r9.push([rowcol[i][0], rowcol[i][1]])
}



for (let i=0;i<rowcol.length;i++)
{
  if( (rowcol[i][0]).includes("c1") )
   c1.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("c2") )
   c2.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("c3") )
   c3.push([rowcol[i][0], rowcol[i][1]])    
   if( (rowcol[i][0]).includes("c4") )
   c4.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("c5") )
   c5.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("c6") )
   c6.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("c7") )
   c7.push([rowcol[i][0], rowcol[i][1]]) 
   if( (rowcol[i][0]).includes("c8") )
   c8.push([rowcol[i][0], rowcol[i][1]])
   if( (rowcol[i][0]).includes("c9") )
   c9.push([rowcol[i][0], rowcol[i][1]])

}


block1.push(r1[0], r1[1], r1[2]);
block1.push(r2[0], r2[1], r2[2]);
block1.push(r3[0], r3[1], r3[2]);




block4.push(r4[0], r4[1], r4[2]);
block4.push(r5[0], r5[1], r5[2]);
block4.push(r6[0], r6[1], r6[2]);

block5.push(r4[3], r4[4], r4[5]);
block5.push(r5[3], r5[4], r5[5]);
block5.push(r6[3], r6[4], r6[5]);


block3.push(r4[6], r4[7], r4[8]);
block3.push(r5[6], r5[7], r5[8]);
block3.push(r6[6], r6[7], r6[8]);

block6.push(r4[6], r4[7], r4[8]);
block6.push(r5[6], r5[7], r5[8]);
block6.push(r6[6], r6[7], r6[8]);


block9.push(r7[6], r7[7], r7[8]);
block9.push(r8[6], r8[7], r8[8]);
block9.push(r9[6], r9[7], r9[8]);




let numberstobefilled = [1,2,3,4,5,6,7,8,9];
let numbersinblock = [];


for (let i=0;i<9;i++) 
{
 
      if(block6[i][1] != 0) {
      numbersinblock.push(block6[i][1]);
             
      }
            
}

numberstobefilled = numberstobefilled.filter(val => !numbersinblock.includes(val))

for (let i=0;i<9;) {
  //debugger;
 
   if(block6[i][1] === 0) 
  {
  
      for(n=0;n<numberstobefilled.length;n++) 
      {
        for(let j=0;j<9;)
        {

                if(c8[j][1] === numberstobefilled[n] || r5[j][1] === numberstobefilled[n])
                {
                    i++;
                }
                else {
                    j++;
              }

        }
                  
      }

      console.log(numberstobefilled[n])
      document.getElementById(block6[i][0]).innerText=numberstobefilled[n];
      numberstobefilled.splice(n,1);
      console.log(numberstobefilled)


  
  }
 

  }

}


    















 
  
  

  
  
  
  
  
  const genrandomvalue = document.getElementById("puzzle");
  genrandomvalue.addEventListener("click", randomvalues);
  
  const sudokusolution = document.getElementById("solution");
  sudokusolution.addEventListener("click", solution);
  


  //const rowcol=Object.entries(obj);
//console.log(rowcol);
//console.log(rowcol.length);

let r1={};
let r2={};
let r3={};
let r4={};
let r5={};
let r6={};
let r7={};
let r8={};
let r9={};
let c1={};
let c2={};
let c3={};
let c4={};
let c5={};
let c6={};
let c7={};
let c8={};
let c9={};

let block1={};
let block2={};
let block3={};
let block4={};
let block5={};
let block6={};
let block7={};
let block8={};
let block9={};




const compute = (obj) =>
{

 //console.log(obj);

 for (let val in obj)
 {
     (val.includes("r1")) ? r1[val]=obj[val] 
     :  (val.includes("r2")) ? r2[val]=obj[val] 
     :  (val.includes("r3")) ? r3[val]=obj[val] 
     :  (val.includes("r4")) ? r4[val]=obj[val] 
     :  (val.includes("r5")) ? r5[val]=obj[val] 
     :  (val.includes("r6")) ? r6[val]=obj[val] 
     :  (val.includes("r7")) ? r7[val]=obj[val] 
     :  (val.includes("r8")) ? r8[val]=obj[val] 
     :  r9[val]=obj[val] 
     

}

for (let val in obj)
{

 (val.includes("c1")) ? c1[val]=obj[val] 
     :  (val.includes("c2")) ? c2[val]=obj[val] 
     :  (val.includes("c3")) ? c3[val]=obj[val] 
     :  (val.includes("c4")) ? c4[val]=obj[val] 
     :  (val.includes("c5")) ? c5[val]=obj[val] 
     :  (val.includes("c6")) ? c6[val]=obj[val] 
     :  (val.includes("c7")) ? c7[val]=obj[val] 
     :  (val.includes("c8")) ? c8[val]=obj[val] 
     :  c9[val]=obj[val] 

}


const rowcol =Object.keys(obj);
const rowcolvalues =Object.values(obj);


for (let i=0;i<=9;i++) {
    for (let j=0;j<=9;j++) {

        block1.push

    }
}


for ( let i=0; i<9;i++)
{
   
 if(block7[i][1] === 0) {
   console.log(block7[i][0]);
   let rowval=block7[i][0].substr(0,2);
   console.log(rowval);
   let colval=block7[i][0].substr(2,4);
   console.log(colval);
   loop1:
    
     for(let num=0;num<numberstobefilledinblock7.length;num++)
     {
       console.log(numberstobefilledinblock7[num]);
       loop2:
       for (let j=0;j<9;j++)
         {
             if(eval(`${rowval}[j][1]`) != numberstobefilledinblock7[num]) 
             {
                 //console.log(num, eval(`${rowval}[j][1]`), `${rowval}`, block7[i][0], block7[i][1]);
              loop3:
               for (let k=0;k<9;k++) 
               {
                 if(eval(`${colval}[k][1]`) != numberstobefilledinblock7[num])
                 {
                   //console.log(num, eval(`${colval}[k][1]`), `${colval}`, block7[i][0], block7[i][1])
                   //console.log(numberstobefilledinblock7);
                   //console.log(numberstobefilledinblock7[num])
                   document.getElementById(block7[i][0]).innerText=numberstobefilledinblock7[num];
                   numberstobefilledinblock7.splice(num,1);
                   //console.log(numberstobefilledinblock7);
                   break loop1;
                  }
                 else {
                   break loop3;
                 }
               } 
            }
            else {
                break loop2;
            }
           
       }
     }
 }
}



//console.log("coming in", numberstobefilledinblock7);
                  //document.getElementById(block7[i][0]).innerText=numberstobefilledinblock7[num];
                  //numberstobefilledinblock7.splice(num,1);
                  //console.log(numberstobefilledinblock7); 
                  //break loop1;
                  //console.log("to be printed");
                  //break loop3;




                   /*console.log(r5);
 console.log(r6);
 console.log(c8);
 console.log(c1);
 console.log(block1);
 console.log(block5);
 console.log(block9);
 console.log(block7);
 console.log(numberstobefilledinblock1);
 console.log(numberstobefilledinblock7);
 */

 //console.log(block6);
 //console.log(numbersinblock6);
 //console.log(numberstobefilledinblock6);


 /*for ( let i=0; i<9;i++)
 {
    
  if(block6[i][1] === 0) {
    console.log(block6[i][0]);
    let rowval=block6[i][0].substr(0,2);
    console.log(rowval);
    let colval=block6[i][0].substr(2,4);
    console.log(colval);
    loop1:
     
      for(let num=0;num<numberstobefilledinblock6.length;num++)
      {
        //console.log(numberstobefilledinblock6[num]);
        loop2:
        for (let j=0;j<9;j++)
          {
              if(eval(`${rowval}[j][1]`) != numberstobefilledinblock6[num]) 
              {
                loop3:
                for (let k=0;k<9;k++) {
                  if(eval(`${colval}[k][1]`) != numberstobefilledinblock6[num])
                  {

                    document.getElementById(block6[i][0]).innerText=numberstobefilledinblock6[num];
                    numberstobefilledinblock6.splice(num,1);
                    console.log(numberstobefilledinblock6);
                    break loop1;
                   }
                  else {
                    break loop2;
                  }
                } 
             }
            
        }
      }
  }
 }*/





 for ( let i=0; i<9;i++)
 {
    
    //debugger;
  if(block3[i][1] === 0) 
  {
    //console.log(block7[i][0]);
    let rowval=block3[i][0].substr(0,2);
    //console.log(rowval);
    let colval=block3[i][0].substr(2,4);
    //console.log(colval);
    let count=0;
    loop1:
     
      for(let num=0;num<numberstobefilledinblock3.length;num++)
      {
        console.log("Firstnumber",numberstobefilledinblock3[num]);
        loop2:
        for (let j=0;j<9;j++)
          {
              if(eval(`${rowval}[j][1]`) === numberstobefilledinblock3[num] || eval(`${colval}[j][1]`) === numberstobefilledinblock3[num])
              {
                  console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                  break loop2;
              }
              else
              {
                count++;
              }
              if (count === 9)
              {
                  console.log("coming in", numberstobefilledinblock3[num]);
                  document.getElementById(block3[i][0]).innerText=numberstobefilledinblock3[num];
                  numberstobefilledinblock3.splice(num,1);
                  console.log(numberstobefilledinblock3); 
                  break loop1;
                  //console.log("to be printed");
                  //break loop3;
              }
           }
        }
  }

 }






 for ( let i=0; i<9;i++)
 {
    
    //debugger;
  if(block9[i][1] === 0) 
  {
    //console.log(block7[i][0]);
    let rowval=block9[i][0].substr(0,2);
    //console.log(rowval);
    let colval=block9[i][0].substr(2,4);
    //console.log(colval);
    let count=0;
    loop1:
     
      for(let num=0;num<numberstobefilledinblock9.length;num++)
      {
        console.log("Firstnumber",numberstobefilledinblock9[num]);
        loop2:
        for (let j=0;j<9;j++)
          {
              if(eval(`${rowval}[j][1]`) === numberstobefilledinblock9[num] || eval(`${colval}[j][1]`) === numberstobefilledinblock9[num])
              {
                  console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                  break loop2;
              }
              else
              {
                count++;
              }
              if (count === 9)
              {
                  console.log("coming in", numberstobefilledinblock9[num]);
                  document.getElementById(block9[i][0]).innerText=numberstobefilledinblock9[num];
                  numberstobefilledinblock9.splice(num,1);
                  console.log(numberstobefilledinblock9); 
                  break loop1;
                  //console.log("to be printed");
                  //break loop3;
              }
           }
        }
  }

 }


 for ( let i=0; i<9;i++)
 {
    
    //debugger;
  if(block4[i][1] === 0) 
  {
    //console.log(block7[i][0]);
    let rowval=block4[i][0].substr(0,2);
    //console.log(rowval);
    let colval=block4[i][0].substr(2,4);
    //console.log(colval);
    let count=0;
    loop1:
     
      for(let num=0;num<numberstobefilledinblock4.length;num++)
      {
        console.log("Firstnumber",numberstobefilledinblock4[num]);
        loop2:
        for (let j=0;j<9;j++)
          {
              if(eval(`${rowval}[j][1]`) === numberstobefilledinblock4[num] || eval(`${colval}[j][1]`) === numberstobefilledinblock4[num])
              {
                  console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                  break loop2;
              }
              else
              {
                count++;
              }
              if (count === 9)
              {
                  console.log("coming in", numberstobefilledinblock4[num]);
                  document.getElementById(block4[i][0]).innerText=numberstobefilledinblock4[num];
                  numberstobefilledinblock4.splice(num,1);
                  console.log(numberstobefilledinblock4); 
                  break loop1;
                  //console.log("to be printed");
                  //break loop3;
              }
           }
        }
  }

 }




 for ( let i=0; i<9;i++)
 {
    
    //debugger;
  if(block1[i][1] === 0) 
  {
    //console.log(block7[i][0]);
    let rowval=block1[i][0].substr(0,2);
    //console.log(rowval);
    let colval=block1[i][0].substr(2,4);
    //console.log(colval);
    let count=0;
    loop1:
     
      for(let num=0;num<numberstobefilledinblock1.length;num++)
      {
        console.log("Firstnumber",numberstobefilledinblock1[num]);
        loop2:
        for (let j=0;j<9;j++)
          {
              if(eval(`${rowval}[j][1]`) === numberstobefilledinblock1[num] || eval(`${colval}[j][1]`) === numberstobefilledinblock1[num])
              {
                  console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                  break loop2;
              }
              else
              {
                count++;
              }
              if (count === 9)
              {
                  console.log("coming in", numberstobefilledinblock1[num]);
                  document.getElementById(block4[i][0]).innerText=numberstobefilledinblock1[num];
                  numberstobefilledinblock1.splice(num,1);
                  console.log(numberstobefilledinblock1); 
                  break loop1;
                  //console.log("to be printed");
                  //break loop3;
              }
           }
        }
  }

 }




 for ( let i=0; i<9;i++)
 {
    
    //debugger;
  if(block5[i][1] === 0) 
  {
    //console.log(block7[i][0]);
    let rowval=block5[i][0].substr(0,2);
    //console.log(rowval);
    let colval=block5[i][0].substr(2,4);
    //console.log(colval);
    let count=0;
    loop1:
     
      for(let num=0;num<numberstobefilledinblock5.length;num++)
      {
        console.log("Firstnumber",numberstobefilledinblock5[num]);
        loop2:
        for (let j=0;j<9;j++)
          {
              if(eval(`${rowval}[j][1]`) === numberstobefilledinblock5[num] || eval(`${colval}[j][1]`) === numberstobefilledinblock5[num])
              {
                  console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                  break loop2;
              }
              else
              {
                count++;
              }
              if (count === 9)
              {
                  console.log("coming in", numberstobefilledinblock5[num]);
                  document.getElementById(block5[i][0]).innerText=numberstobefilledinblock5[num];
                  numberstobefilledinblock5.splice(num,1);
                  console.log(numberstobefilledinblock5); 
                  break loop1;
                  //console.log("to be printed");
                  //break loop3;
              }
           }
        }
  }

 }



 for ( let i=0; i<9;i++)
 {
    
    //debugger;
  if(block7[i][1] === 0) 
  {
    //console.log(block7[i][0]);
    let rowval=block7[i][0].substr(0,2);
    //console.log(rowval);
    let colval=block7[i][0].substr(2,4);
    //console.log(colval);
    let count=0;
    loop1:
     
      for(let num=0;num<numberstobefilledinblock7.length;num++)
      {
        console.log("Firstnumber",numberstobefilledinblock7[num]);
        loop2:
        for (let j=0;j<9;j++)
          {
              if(eval(`${rowval}[j][1]`) === numberstobefilledinblock7[num] || eval(`${colval}[j][1]`) === numberstobefilledinblock7[num])
              {
                  console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                  break loop2;
              }
              else
              {
                count++;
              }
              if (count === 9)
              {
                  console.log("coming in", numberstobefilledinblock7[num]);
                  document.getElementById(block7[i][0]).innerText=numberstobefilledinblock7[num];
                  numberstobefilledinblock7.splice(num,1);
                  console.log(numberstobefilledinblock7); 
                  break loop1;
                  //console.log("to be printed");
                  //break loop3;
              }
           }
        }
  }

 }




 for ( let i=0; i<9;i++)
    {
       
       //debugger;
     if(block8[i][1] === 0) 
     {
       //console.log(block7[i][0]);
       let rowval=block8[i][0].substr(0,2);
       //console.log(rowval);
       let colval=block8[i][0].substr(2,4);
       //console.log(colval);
       let count=0;
       loop1:
               
         for(let num=0;num<numberstobefilledinblock8.length;num++)
         {
           console.log("Firstnumber",numberstobefilledinblock8[num]);
           console.log(numberstobefilledinblock8);
           loop2:
           for (let j=0;j<9;j++)
             {
                 if(eval(`${rowval}[j][1]`) === numberstobefilledinblock8[num] || eval(`${colval}[j][1]`) === numberstobefilledinblock8[num])
                 {
                     console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                     break loop2;
                 }
                 else
                 {
                   count++;
                 }
                 if (count === 9)
                 {
                     console.log("coming in", numberstobefilledinblock8[num]);
                     document.getElementById(block8[i][0]).innerText=numberstobefilledinblock8[num];
                     numberstobefilledinblock8.splice(num,1);
                     console.log(numberstobefilledinblock8); 
                     break loop1;
                     //console.log("to be printed");
                     //break loop3;
                 }
              }
           }
     }
   
    }







     
    /*block1.push(r1[0], r1[1], r1[2]);
    block1.push(r2[0], r2[1], r2[2]);
    block1.push(r3[0], r3[1], r3[2]);
    
    block2.push(r1[3], r1[4], r1[5]);
    block2.push(r2[3], r2[4], r2[5]);
    block2.push(r3[3], r3[4], r3[5]);
    
    
    block3.push(r1[6], r1[7], r1[8]);
    block3.push(r2[6], r2[7], r2[8]);
    block3.push(r3[6], r3[7], r3[8]);
    
    block4.push(r4[0], r4[1], r4[2]);
    block4.push(r5[0], r5[1], r5[2]);
    block4.push(r6[0], r6[1], r6[2]);
    
    block5.push(r4[3], r4[4], r4[5]);
    block5.push(r5[3], r5[4], r5[5]);
    block5.push(r6[3], r6[4], r6[5]);
    
        
    block6.push(r4[6], r4[7], r4[8]);
    block6.push(r5[6], r5[7], r5[8]);
    block6.push(r6[6], r6[7], r6[8]);
    
    block7.push(r7[0], r7[1], r7[2]);
    block7.push(r8[0], r8[1], r8[2]);
    block7.push(r9[0], r9[1], r9[2]);
    
    block8.push(r7[3], r7[4], r7[5]);
    block8.push(r8[3], r8[4], r8[5]);
    block8.push(r9[3], r9[4], r9[5]);
    
    block9.push(r7[6], r7[7], r7[8]);
    block9.push(r8[6], r8[7], r8[8]);
    block9.push(r9[6], r9[7], r9[8]);*/



    lengthofblocks.push(numbersinblock1.length,",block1", "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length, "block5,"+numbersinblock5.length, 
    "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)


    lengthofblocks.push({"block1":numbersinblock1.length}, {"block2":numbersinblock2.length}, {"block3":numbersinblock3.length},{"block4":numbersinblock4.length},
    { "block5":numbersinblock5.length}, 
    { "block6":numbersinblock6.length}, 
    { "block7":numbersinblock7.length}, 
    { "block8":numbersinblock8.length}, 
    { "block9":numbersinblock9.length});


    lengthofblocks["block1"]=numbersinblock1.length;
    lengthofblocks["block2"]=numbersinblock2.length;
    lengthofblocks["block3"]=numbersinblock3.length;
    lengthofblocks["block4"]=numbersinblock4.length;
    lengthofblocks["block5"]=numbersinblock5.length;
    lengthofblocks["block6"]=numbersinblock6.length;
    lengthofblocks["block7"]=numbersinblock7.length;
    lengthofblocks["block8"]=numbersinblock8.length;
    lengthofblocks["block9"]=numbersinblock9.length;
      


    eval(`${rowval}`).includes(blockval) = eval(`numberstobefilledin${blockvalue}`)[num];
                  eval(`${colval}`).includes(blockval) = eval(`numberstobefilledin${blockvalue}`)[num];
                  eval(`${blockvalue}`).includes(blockval) = eval(`numberstobefilledin${blockvalue}`)[num];