for(let k=0;k<values.length;k++)
                {
                for (let m=0;m<9;m++)
                {                                 
               if(
                ((eval(`${nextcolval}[m][1]`) === values[k]) 
               || (eval(`${nextrowval}[m][1]`) === values[k]))
               )
               {
                  //morepossiblevalues.push(values[k]);
                  //console.log("FOUND", values[k]);   
                    for (let o=0;o<9;o++)
                      {
                        if( ((eval(`${secondnextrowval}[o][1]`) === values[k])
                          || (eval(`${secondnextcolval}[o][1]`) === values[k]))) 
                            {
                              //console.log("FOUND", values[k]);    
                              onlypossibleval.push(values[k]);
                              
                     
                             }
                     }
                                           
                }
  
               }
             
          }


let valuesarray = [colval, rowval];

for(let k=0;k<values.length;k++)
{

for (let m=0;m<9;m++)
{                                 
if((eval(`${nextcolval}[m][1]`) === values[k])) { possiblevaluearray.push(nextcolval)}
if((eval(`${secondnextcolval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextcolval)}
if((eval(`${nextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(nextrowval)}
if((eval(`${secondnextcolval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextcolval)}
}
if(possiblevaluearray.length === 0)
{
    console.log(valuesarray);
    onlypossibleval.push(values[k])
}
else{
    console.log(valuesarray, possiblevaluearray);
}
}


 for (let o=0;o<9;o++)
      {
        if( ((eval(`${secondnextrowval}[o][1]`) === values[k])
          || (eval(`${secondnextcolval}[o][1]`) === values[k]))) 
            {
              //console.log("FOUND", values[k]);    
              onlypossibleval.push(values[k]);
              
     
             }
     }
                           
}

}

}





















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
  
  possible();
  
  
  function possible()
  {
  for (let blocknum=1; blocknum<=9;blocknum++)
  {
        
  let blockvalue = "block"+blocknum;
  console.log(blockvalue);
  let possibleval=[];
  let values=[];
  
  for(let i=0;i<9;i++)
  {
   let blockval = eval(`${blockvalue}[i][0]`);
   
  if(eval(`${blockvalue}[i][1]`) === 0) 
  {
       //console.log(eval(`${blockvalue}[i][0]`), "is EMPTY");
        let rowval=blockval.substr(0,2);
        let colval=blockval.substr(2,4);
        let count=0;
        
       
        loop2:
        for(let num=1; num<=9;num++)
        {
        count=0;
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
  
            if(count ===9)
            {
             possibleval.push([eval(`${blockvalue}[i][0]`),num]);
             //console.log(eval(`${blockvalue}[i][0]`), "possible", num)
             values.push(num);
          
            }
          
          }
               
                    
       
            }
  
          //console.log(possibleval,values);
         
      function possiblevalue(values)
      {
        let onlypossibleval=[];
        let morepossiblevalues=[];
         
          if(values.length > 1 || values.length ===1)
            {
                 //console.log("TWO");
                 let counting=0;
                
                  loop3:
                
                  //let nextcolval=colval.substr(1,2);
                  //let secondnextcolval=colval.substr(1,2);
                  //let nextrowval=rowval.substr(1,2);
                  //let secondnextrowval=rowval.substr(1,2);
                  //console.log(nextcolval, secondnextcolval);
  
                  if(colval === "c1") {  nextcolval="c2" ; secondnextcolval="c3" } 
                  if(colval === "c2") {  nextcolval="c3" ; secondnextcolval="c1" } 
                  if(colval === "c3") {  nextcolval="c2" ; secondnextcolval="c1" } 
                  if(colval === "c4") {  nextcolval="c5" ; secondnextcolval="c6" } 
                  if(colval === "c5") {  nextcolval="c6" ; secondnextcolval="c4" } 
                  if(colval === "c6") {  nextcolval="c5" ; secondnextcolval="c4" } 
                  if(colval === "c7") {  nextcolval="c8" ; secondnextcolval="c9" } 
                  if(colval === "c8") {  nextcolval="c9" ; secondnextcolval="c7" } 
                  if(colval === "c9") {  nextcolval="c8" ; secondnextcolval="c7" } 
  
  
                  if(rowval === "r1") {  nextrowval="r2" ; secondnextrowval="r3" } 
  if(rowval === "r2") {  nextrowval="r3" ; secondnextrowval="r1" } 
  if(rowval === "r3") {  nextrowval="r2" ; secondnextrowval="r1" } 
  if(rowval === "r4") {  nextrowval="r5" ; secondnextrowval="r6" } 
  if(rowval === "r5") {  nextrowval="r6" ; secondnextrowval="r4" } 
  if(rowval === "r6") {  nextrowval="r5" ; secondnextrowval="r4" } 
  if(rowval === "r7") {  nextrowval="r8" ; secondnextrowval="r9" } 
  if(rowval === "r8") {  nextrowval="r9" ; secondnextrowval="r7" } 
  if(rowval === "r9") {  nextrowval="r8" ; secondnextrowval="r7" } 
  
          
  
  
  let valuesarray = [colval, rowval];
  let uniquepossiblevaluearray=[nextcolval, nextrowval, secondnextcolval, secondnextrowval]
  //possiblevaluearray=[];
  
  for(let k=0;k<values.length;k++)
  {
   let possiblevaluearray=[];
  for (let m=0;m<9;m++)
  {                                 
  if((eval(`${nextcolval}[m][1]`) === values[k])) { possiblevaluearray.push(nextcolval)}
  if((eval(`${secondnextcolval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextcolval)}
  if((eval(`${nextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(nextrowval)}
  if((eval(`${secondnextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextrowval)}
  }
  
  possiblevaluearray1 = [...new Set(possiblevaluearray)]
  let onlyotherpossibleposition = uniquepossiblevaluearray.filter(x => !possiblevaluearray1.includes(x));
  console.log(onlyotherpossibleposition, "for", values[k], "otherthan", eval(`${blockvalue}[i][0]`) );
  
  if(onlyotherpossibleposition.length === 1)
  {
  
    let id=rowval+colval;
    if(onlyotherpossibleposition[0].includes("r"))
    {
      id=onlyotherpossibleposition[0]+colval;
    }
    else {
      id=rowval+onlyotherpossibleposition[0];
  
    }
   //console.log(id.toString());
    
    let value = document.getElementById(id).innerText;
  
    if (value != null || value != undefined || value != "" || value != "undefined"  )
    {
      onlypossibleval.push(values[k]);                           
      //console.log("PLACING @",eval(`${blockvalue}[i][0]`),surelyonlypossibleval[0]);
               // document.getElementById(eval(`${blockvalue}[i][0]`)).textContent=surelyonlypossibleval[0];
  
                //solution();
                //return;
    }
    else {
      document.getElementById(id).innerText=0;
    }
    
  }
  
  if(onlyotherpossibleposition.length === 0)
  {
    onlypossibleval.push(values[k]);  
  }
  
    }
  }
             return onlypossibleval;
          }
  
          const onlypossiblevalue = possiblevalue(values);
         
            
              if(onlypossiblevalue.length === 1 || onlypossiblevalue.length>1 )
              {
                const surelyonlypossibleval = [...new Set(onlypossiblevalue)]
               //console.log(surelyonlypossibleval, surelyonlypossibleval)
                if(surelyonlypossibleval.length ===1 )
                  {
                console.log("PLACING @",eval(`${blockvalue}[i][0]`),surelyonlypossibleval[0]);
                document.getElementById(eval(`${blockvalue}[i][0]`)).textContent=surelyonlypossibleval[0];
  
                solution();
                return;
                  }
                  if(surelyonlypossibleval.length > 1 )
                  {
                    values.push(surelyonlypossibleval)
                    possiblevalue(values);
                  }
                  else{ 
                    document.getElementById(eval(`${blockvalue}[i][0]`)).textContent=0;
                    //solution();
                    //return;
                  }
  
              }
           
              
            
            i++;
            
  
            
          }
  
          
         }
  
         
  
        
         
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
  





    if((eval(`${nextcolval}[m][1]`)!= "") && (eval(`${nextcolval}[m][1]`)!= "") === values[k]) { possiblevaluearray.push(nextcolval)}
if((eval(`${secondnextcolval}[m][1]`)!= "") && (eval(`${secondnextcolval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextcolval)}
if((eval(`${nextrowval}[m][1]`)!= "") && (eval(`${nextrowval}[m][1]`)!= "") === values[k]) { possiblevaluearray.push(nextrowval)}
if((eval(`${secondnextrowval}[m][1]`)!= "") && (eval(`${secondnextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextrowval)}}












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

possible();


function possible()
{
for (let blocknum=1; blocknum<=9;blocknum++)
{
      
let blockvalue = "block"+blocknum;
console.log(blockvalue);
let possibleval=[];
let values=[];

for(let i=0;i<9;i++)
{
 let blockval = eval(`${blockvalue}[i][0]`);
 loop0:
if(eval(`${blockvalue}[i][1]`) === 0) 
{
     console.log(eval(`${blockvalue}[i][0]`), "is EMPTY");
      let rowval=blockval.substr(0,2);
      let colval=blockval.substr(2,4);
      let count=0;
      
     
      loop2:
      for(let num=1; num<=9;num++)
      {
      count=0;
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

          if(count ===9)
          {
           possibleval.push([eval(`${blockvalue}[i][0]`),num]);
           //console.log(eval(`${blockvalue}[i][0]`), "possible", num)
           values.push(num);
                  
          }
        
        }
             
                  
     
          }

        //console.log(eval(`${blockvalue}[i][0]`),possibleval,values);
        possiblevalue(values);
       
    function possiblevalue(values)
    {
      //console.log(values)
      let onlypossibleval=[];
      //let morepossiblevalues=[];
      //console.log("GOING IN");
       
        if(values.length > 1 || values.length ===1)
          {
               //console.log("TWO");
               let counting=0;
              
                loop3:
              
                //let nextcolval=colval.substr(1,2);
                //let secondnextcolval=colval.substr(1,2);
                //let nextrowval=rowval.substr(1,2);
                //let secondnextrowval=rowval.substr(1,2);
                //console.log(nextcolval, secondnextcolval);

                if(colval === "c1") {  nextcolval="c2" ; secondnextcolval="c3" } 
                if(colval === "c2") {  nextcolval="c3" ; secondnextcolval="c1" } 
                if(colval === "c3") {  nextcolval="c2" ; secondnextcolval="c1" } 
                if(colval === "c4") {  nextcolval="c5" ; secondnextcolval="c6" } 
                if(colval === "c5") {  nextcolval="c6" ; secondnextcolval="c4" } 
                if(colval === "c6") {  nextcolval="c5" ; secondnextcolval="c4" } 
                if(colval === "c7") {  nextcolval="c8" ; secondnextcolval="c9" } 
                if(colval === "c8") {  nextcolval="c9" ; secondnextcolval="c7" } 
                if(colval === "c9") {  nextcolval="c8" ; secondnextcolval="c7" } 


                if(rowval === "r1") {  nextrowval="r2" ; secondnextrowval="r3" } 
if(rowval === "r2") {  nextrowval="r3" ; secondnextrowval="r1" } 
if(rowval === "r3") {  nextrowval="r2" ; secondnextrowval="r1" } 
if(rowval === "r4") {  nextrowval="r5" ; secondnextrowval="r6" } 
if(rowval === "r5") {  nextrowval="r6" ; secondnextrowval="r4" } 
if(rowval === "r6") {  nextrowval="r5" ; secondnextrowval="r4" } 
if(rowval === "r7") {  nextrowval="r8" ; secondnextrowval="r9" } 
if(rowval === "r8") {  nextrowval="r9" ; secondnextrowval="r7" } 
if(rowval === "r9") {  nextrowval="r8" ; secondnextrowval="r7" } 

        

let uniquepossiblevaluearray=[nextcolval, nextrowval, secondnextcolval, secondnextrowval]

for(let k=0;k<values.length;k++)
{
 let possiblevaluearray=[];
 
for (let m=0;m<9;m++)
{                                 
if((eval(`${nextcolval}[m][1]`) === values[k])) { possiblevaluearray.push(nextcolval)}
if((eval(`${secondnextcolval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextcolval)}
if((eval(`${nextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(nextrowval)}
if((eval(`${secondnextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextrowval)}
}

possiblevaluearray1 = [...new Set(possiblevaluearray)]
let onlyotherpossibleposition = uniquepossiblevaluearray.filter(x => !possiblevaluearray1.includes(x));
console.log(onlyotherpossibleposition, "for", values[k], "otherthan", eval(`${blockvalue}[i][0]`) );

if(onlyotherpossibleposition.length === 1)
{
 
  let id=rowval+colval;
  if(onlyotherpossibleposition[0].substr(0,1) === "r")
  {
    id=onlyotherpossibleposition[0]+colval;
  }
  if(onlyotherpossibleposition[0].substr(0,1) === "c")
  {
    id=rowval+onlyotherpossibleposition[0];

  }

  let value = document.getElementById(id).innerText;
  //console.log("VALUE",value);

  if (value != null || value != undefined || value != "" || value != "undefined"  )
  {
  
    onlypossibleval.push(values[k]);
    calculate(onlypossibleval);   
    k++;                          
 
  }
  if (value === null || value === undefined || value === "" || value === "undefined"  )
  {
     onlypossibleval.push(0);
     //calculate(onlypossibleval);  
    k++;
 
  }
  
}


else
{
if(onlyotherpossibleposition.length > 1)
{
  
  let id=rowval+colval;
  for(let a=0;a<onlyotherpossibleposition.length;a++)
  {
  if(onlyotherpossibleposition[a].substr(0,1) === "r" )
  {
    id=onlyotherpossibleposition[a]+colval;
  }
  if(onlyotherpossibleposition[a].substr(0,1) === "c" )
  {
    id=rowval+onlyotherpossibleposition[a];

  }

  let value = document.getElementById(id).innerText;
  //console.log("VALUE",value);

  if (value != null || value != undefined || value != "" || value != "undefined"  )
  {
  
    onlypossibleval.push(values[k]);
    calculate(onlypossibleval);                          
 
  }
  if (value === null || value === undefined || value === "" || value === "undefined"  )
  {
    onlypossibleval.push(0);
    calculate(onlypossibleval);  
    a++;
 
  }
}
  
}





else {
if(onlyotherpossibleposition.length === 0)
{
  onlypossibleval.push(values[k]); 
}
}
}


  }
}
           return onlypossibleval;
}

function calculate(onlypossiblevalue) {
        //let onlypossiblevalue = possiblevalue(values);
       //console.log(onlypossiblevalue);
          
            if(onlypossiblevalue.length === 1 || onlypossiblevalue.length>1 )
            {
              const surelyonlypossibleval = [...new Set(onlypossiblevalue)]
             //console.log(surelyonlypossibleval, surelyonlypossibleval)
              if(surelyonlypossibleval.length ===1 )
                {
              console.log("PLACING @",eval(`${blockvalue}[i][0]`),surelyonlypossibleval[0]);
              document.getElementById(eval(`${blockvalue}[i][0]`)).textContent=surelyonlypossibleval[0];

              //solution();
              //return;
             
                }
                
                if(surelyonlypossibleval.length > 1 )
                {
                  return;
                  //i++;
                }
                else{ 
                  //document.getElementById(eval(`${blockvalue}[i][0]`)).textContent=0;
                  //solution();
                  return;
                  //i++;
                }
                //i++;
            }
          }
         
            
          
          
          
            i++; 
          
        }

        //blocknum++;    
       }

       
       //blocknum++;
      
       
      }
}



return;  
}
  
  

  
  

const solution = () =>
{

 let obj = fetchfromdom();
 //console.log(obj);
 compute(obj);
 //return;
 
}


/*const solution1 = () =>
{

solution();
let obj = fetchfromdom();
 //console.log(obj);
 compute(obj);
 
 console.log(obj);
 let count=1;
 for ( let val in obj)
 {
  //console.log(obj[val])
   if(obj[val]===0)
   {
    //console.log(obj[val])
    count++;
    
   }
   console.log(count);
 }

 if(count>10)
 {
  solution();
 }
}*/


  


  
  
  
  
  
  const genrandomvalue = document.getElementById("puzzle");
  genrandomvalue.addEventListener("click", randomvalues);
  
  const sudokusolution = document.getElementById("solution");
  sudokusolution.addEventListener("click", solution);


















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
  
  possible();
  
  
  function possible()
  {
  for (let blocknum=1; blocknum<=9;blocknum++)
  {
        
  let blockvalue = "block"+blocknum;
  console.log(blockvalue);
  let possibleval=[];
  let values=[];
  
  for(let i=0;i<9;i++)
  {
   let blockval = eval(`${blockvalue}[i][0]`);
   
  if(eval(`${blockvalue}[i][1]`) === 0) 
  {
       //console.log(eval(`${blockvalue}[i][0]`), "is EMPTY");
        let rowval=blockval.substr(0,2);
        let colval=blockval.substr(2,4);
        let count=0;
        
       
        loop2:
        for(let num=1; num<=9;num++)
        {
        count=0;
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
  
            if(count ===9)
            {
             possibleval.push([eval(`${blockvalue}[i][0]`),num]);
             //console.log(eval(`${blockvalue}[i][0]`), "possible", num)
             values.push(num);
          
            }
          
          }
               
                    
       
            }
  
          //console.log(possibleval,values);
         
         
      function possiblevalue(values)
      {
        let onlypossibleloc=[];
        let morepossiblevalues=[];
         
          if(values.length > 1 || values.length ===1)
            {
                 //console.log("TWO");
                 let counting=0;
                
                  loop3:
                
                  //let nextcolval=colval.substr(1,2);
                  //let secondnextcolval=colval.substr(1,2);
                  //let nextrowval=rowval.substr(1,2);
                  //let secondnextrowval=rowval.substr(1,2);
                  //console.log(nextcolval, secondnextcolval);
  
                  if(colval === "c1") {  nextcolval="c2" ; secondnextcolval="c3" } 
                  if(colval === "c2") {  nextcolval="c3" ; secondnextcolval="c1" } 
                  if(colval === "c3") {  nextcolval="c2" ; secondnextcolval="c1" } 
                  if(colval === "c4") {  nextcolval="c5" ; secondnextcolval="c6" } 
                  if(colval === "c5") {  nextcolval="c6" ; secondnextcolval="c4" } 
                  if(colval === "c6") {  nextcolval="c5" ; secondnextcolval="c4" } 
                  if(colval === "c7") {  nextcolval="c8" ; secondnextcolval="c9" } 
                  if(colval === "c8") {  nextcolval="c9" ; secondnextcolval="c7" } 
                  if(colval === "c9") {  nextcolval="c8" ; secondnextcolval="c7" } 
  
  
                  if(rowval === "r1") {  nextrowval="r2" ; secondnextrowval="r3" } 
  if(rowval === "r2") {  nextrowval="r3" ; secondnextrowval="r1" } 
  if(rowval === "r3") {  nextrowval="r2" ; secondnextrowval="r1" } 
  if(rowval === "r4") {  nextrowval="r5" ; secondnextrowval="r6" } 
  if(rowval === "r5") {  nextrowval="r6" ; secondnextrowval="r4" } 
  if(rowval === "r6") {  nextrowval="r5" ; secondnextrowval="r4" } 
  if(rowval === "r7") {  nextrowval="r8" ; secondnextrowval="r9" } 
  if(rowval === "r8") {  nextrowval="r9" ; secondnextrowval="r7" } 
  if(rowval === "r9") {  nextrowval="r8" ; secondnextrowval="r7" } 
  
          
  
  
  let valuesarray = [colval, rowval];
  let uniquepossiblevaluearray=[nextcolval, nextrowval, secondnextcolval, secondnextrowval]
  //possiblevaluearray=[];
  
  for(let k=0;k<values.length;k++)
  {
   let possiblevaluearray=[];
  for (let m=0;m<9;m++)
  {                                 
  if((eval(`${nextcolval}[m][1]`) === values[k])) { possiblevaluearray.push(nextcolval)}
  if((eval(`${secondnextcolval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextcolval)}
  if((eval(`${nextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(nextrowval)}
  if((eval(`${secondnextrowval}[m][1]`) === values[k])) {possiblevaluearray.push(secondnextrowval)}
  }
  
  possiblevaluearray1 = [...new Set(possiblevaluearray)]
  let onlyotherpossibleposition = uniquepossiblevaluearray.filter(x => !possiblevaluearray1.includes(x));
  console.log(onlyotherpossibleposition, "for", values[k], "otherthan", eval(`${blockvalue}[i][0]`) );
  
  if(onlyotherpossibleposition.length === 1)
  {
  
    let id=rowval+colval;
    if(onlyotherpossibleposition[0].includes("r"))
    {
      id=onlyotherpossibleposition[0]+colval;
    }
    else {
      id=rowval+onlyotherpossibleposition[0];
  
    }
   //console.log(id.toString());
    
    let value = document.getElementById(id).innerText;
  
    if (value != null || value != undefined || value != "" || value != "undefined"  )
    {
      id=rowval+colval;                         
      console.log("PLACING @",eval(`${blockvalue}[i][0]`),id, values[k]);
      document.getElementById(id).textContent=values[k];
  
               solution();
                return;
    }
    else {
      onlypossibleloc.push(values(k), rowval+colval, id);
      
    }
    
  }
  
    }
  }
             return onlypossibleloc;
          }
  
                 
          const onlypossibleloc = possiblevalue(values);
          console.log(onlypossibleloc);
              
            
            i++;
            
  
            
          }
  
          
         }
  
         
  
        
         
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
  