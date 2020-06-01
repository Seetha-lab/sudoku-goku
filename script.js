
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
  
    
      
  const fetchfromdom = () => 
  
  {
      var obj={ };
  
      for (var i=1;i<=9;i++)
      {
         for (var j=1;j<=9;j++)
         {
           var id = `r${i}c${j}`;
 
            var val = document.getElementById(id).textContent;

            if (val === null || val === undefined || val === "" || val === "undefined"  )
            {
                val=0;                              
               
            }
            obj[id] = Number(val);
            
         }
         
  
     }
  
     return obj;
    }

  const compute = (obj) => 
  {
    
    const rowcol=Object.entries(obj);
   
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
    
   
    for (let i=0;i<9;i++)
    {
    
    (i<3) ?
    (
        block1.push(r1[i],r2[i],r3[i]),
        block4.push(r4[i],r5[i],r6[i]),
        block7.push(r7[i],r8[i],r9[i])
     ) :
    (i>=3 && i<6) ?
    (
        block2.push(r1[i], r2[i], r3[i]),
        block5.push(r4[i], r5[i], r6[i]),
        block8.push(r7[i], r8[i], r9[i])
    
    ):
    (
    
        block3.push(r1[i], r2[i], r3[i]),
        block6.push(r4[i], r5[i], r6[i]),
        block9.push(r7[i], r8[i], r9[i])
    
    )
    
  }


  /*const rowcol=Object.entries(obj);
  console.log(rowcol);

  var globalgrid=[];
   for(let i=0;i<rowcol.length;i++)
   {
    let r=rowcol[i][0].substr(0,2);
    let c=rowcol[i][0].substr(2,4);
    let n=rowcol[i][1]
    globalgrid.push([r,c,n]);
   }
   console.log(globalgrid);
   return globalgrid;*/


for (let blocknum=1; blocknum<=9;blocknum++)
{
      
let blockvalue = "block"+blocknum;
console.log(blockvalue);
let possibleval=[];
let values=[];

     for(let num=1; num<=9;num++)
      {

        for(let i=0;i<9;i++)
          {
            let blockval = eval(`${blockvalue}[i][0]`);
 
            if(eval(`${blockvalue}[i][1]`) === 0) 
          {
     //console.log(eval(`${blockvalue}[i][0]`), "is EMPTY");
      let rowval=blockval.substr(0,2);
      let colval=blockval.substr(2,4);
      let count=0;
      loop1:  
      for (let j=0;j<9;j++)
      {
        
        if(eval(`${rowval}[j][1]`) === num || 
        eval(`${colval}[j][1]`) === num || eval(`${blockvalue}[j][1]`) === num)
          {
            //console.log(num,"found");
            //num++;
            break loop1;
          }
          else {
            //console.log(num,"NOT found",j);
            count++;
            //console.log(num, count,"NOT found",j);
                //break loop2;

          }
      }

          if(count ===9)
          {
           possibleval.push([blockval,num]);
           //console.log(eval(`${blockvalue}[i][0]`), "possible", num)
           values.push(num);
        
          }
        
        }

        

       
             
                  
         
  
       
      }

      onepossiblevalue(possibleval, values);
      solution();
      return;
     
}


}
return;  
}
  
  
function onepossiblevalue(possibleval, values, blockvalue){

//console.log(possibleval)
  //console.log(Object.fromEntries(possibleval));
  let counts = {};
  //let fulldetail = {};
  let onlypossiblevalue=0;
        
  for (let k = 0; k < possibleval.length; k++) {
    let number = possibleval[k][1];
    counts[number] = counts[number] ? counts[number] + 1 : 1;
   
  }

  //console.log(counts, possibleval);

  for (let m in counts)
  {
    if(counts[m] === 1)
    {
      //console.log(m)
      onlypossiblevalue=m;
      
    }
    //console.log("1",onlypossiblevalue)
  }
  //console.log("2",onlypossiblevalue)

  for(let j=0;j<possibleval.length;j++)
  {
    if(possibleval[j][1] === Number(onlypossiblevalue))
    {
      //console.log("MATCH",possibleval[j][1],onlypossiblevalue )
      //console.log(onlypossiblevalue, "TO BE PLACED AT",possibleval[j][0] )
      document.getElementById(possibleval[j][0]).textContent=Number(onlypossiblevalue);
     
    }
    else{
      //console.log("NO MATCH",possibleval[j][1],onlypossiblevalue )
    }
  }

  return;
}


  
  

const solution = () =>
{

 let obj = fetchfromdom();
 compute(obj);
 //possible(globalgrid);
 //solve(globalgrid)
 
  


}


  


  


  
  
  
  
  
  const genrandomvalue = document.getElementById("puzzle");
  genrandomvalue.addEventListener("click", randomvalues);
  
  const sudokusolution = document.getElementById("solution");
  sudokusolution.addEventListener("click", solution);

