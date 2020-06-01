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
   // console.log(rowcol);
  
    let rc="";
    let rcval=0;
    let countArray= [];
    let countvalue =0;
    /*let countzeros = [];
    if (countzeros  === 0)
    {
      
    }*/

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
    


    let numberstobefilledinblock1 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock2 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock3 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock4 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock5 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock6 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock7 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock8 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock9 = [1,2,3,4,5,6,7,8,9];
    let numbersinblock1 = [];
    let numbersinblock2 = [];
    let numbersinblock3 = [];
    let numbersinblock4 = [];
    let numbersinblock5 = [];
    let numbersinblock6 = [];
    let numbersinblock7 = [];
    let numbersinblock8 = [];
    let numbersinblock9 = [];

    let lengthofblocks = [];
    let blocktostartwith = [];

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
   





for (let i=0;i<9;i++) 
  {
     
          if(block1[i][1] != 0) { numbersinblock1.push(block1[i][1]);  numberstobefilledinblock1 = numberstobefilledinblock1.filter(val => !numbersinblock1.includes(val))}
          if(block2[i][1] != 0) { numbersinblock2.push(block2[i][1]); numberstobefilledinblock2 = numberstobefilledinblock2.filter(val => !numbersinblock2.includes(val))}
          if(block3[i][1] != 0) { numbersinblock3.push(block3[i][1]); numberstobefilledinblock3 = numberstobefilledinblock3.filter(val => !numbersinblock3.includes(val))}
          if(block4[i][1] != 0) { numbersinblock4.push(block4[i][1]);   numberstobefilledinblock4 = numberstobefilledinblock4.filter(val => !numbersinblock4.includes(val))}
          if(block5[i][1] != 0) { numbersinblock5.push(block5[i][1]);  numberstobefilledinblock5 = numberstobefilledinblock5.filter(val => !numbersinblock5.includes(val))}
          if(block6[i][1] != 0) { numbersinblock6.push(block6[i][1]);  numberstobefilledinblock6 = numberstobefilledinblock6.filter(val => !numbersinblock6.includes(val))}
          if(block7[i][1] != 0) { numbersinblock7.push(block7[i][1]);   numberstobefilledinblock7 = numberstobefilledinblock7.filter(val => !numbersinblock7.includes(val))}
          if(block8[i][1] != 0) { numbersinblock8.push(block8[i][1]); numberstobefilledinblock8 = numberstobefilledinblock8.filter(val => !numbersinblock8.includes(val))}
          if(block9[i][1] != 0) { numbersinblock9.push(block9[i][1]);   numberstobefilledinblock9 = numberstobefilledinblock9.filter(val => !numbersinblock9.includes(val))}


          
              
    }


    lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
     "block5,"+numbersinblock5.length, 
    "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)


    //console.log(lengthofblocks);
    
    lengthofblocks.sort(function (a, b) {
      a= a.split(',')[1];
      b= b.split(',')[1];
      return b - a;
    });
    
      
    console.log(lengthofblocks);
    
    //console.log(blocktostartwith.sort());

    /*console.log(r5);
    console.log(c5);
    console.log(numbersinblock5);
    console.log(numberstobefilledinblock5);
    console.log(block5);*/
    
  

for (let blocknum=0; blocknum<lengthofblocks.length;blocknum++)
{
 
  let blockvalue = lengthofblocks[blocknum].split(",")[0];
  //console.log(blockvalue);

for ( let i=0; i<9;i++)
 {
    
  
 //console.log(eval(`${blockvalue}`));
 //console.log(eval(`${blockvalue}[i][1]`));

    //debugger;
   if(eval(`${blockvalue}[i][1]`) === 0) 
  {
    let blockval = eval(`${blockvalue}[i][0]`);
    //console.log("blockval", blockval);
    let rowval=blockval.substr(0,2);
    //console.log(rowval);
    let colval=blockval.substr(2,4);
    //console.log(colval);
    
    loop1:
     
      for(let num=0;num<eval(`numberstobefilledin${blockvalue}`).length;num++)
      {
        console.log("Number to be filled",eval(`numberstobefilledin${blockvalue}`)[num]);
        let count=0;
        loop2:
        for (let j=0;j<9;j++)
          {
            
              if(eval(`${rowval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num] || eval(`${colval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num])
              {
                console.log("Number found",eval(`numberstobefilledin${blockvalue}`)[num]);
                  //console.log("row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`),rowval);
                  break loop2;
                 
              }
              else
              {
                console.log("Number not found",eval(`numberstobefilledin${blockvalue}`)[num]);
                //console.log(count);
                count++; 
               
              }
              if (count === 9)
              {
                  console.log("coming in",blockval, eval(`numberstobefilledin${blockvalue}`)[num]);

                  let numbertobeupdated = eval(`numberstobefilledin${blockvalue}`)[num];
                  document.getElementById(blockval).innerText=numbertobeupdated;
                  console.log(eval(`numberstobefilledin${blockvalue}`));
                  eval(`numberstobefilledin${blockvalue}`).splice(num,1);
                  console.log(eval(`numberstobefilledin${blockvalue}`));
                  updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated);
                  break loop1;
                }
           }
        }
  }

 }


 console.log(numberstobefilledinblock1);
 console.log(numberstobefilledinblock2);
 console.log(numberstobefilledinblock3);
 console.log(numberstobefilledinblock4);
 console.log(numberstobefilledinblock5);
 console.log(numberstobefilledinblock6);
 console.log(numberstobefilledinblock7);
 console.log(numberstobefilledinblock8);
 console.log(numberstobefilledinblock9);

}


function updateblock(blockval,blockvalue,numbertobeupdated) {

  //console.log("inside update");
  //console.log("blockval",blockval);
  //console.log("blockvalue",blockvalue);

  for (let i=0;i<9;i++)
  {
    if(eval(`${blockvalue}[i][0]`) === blockval)
    {
      eval(`${blockvalue}`).splice(i, 1, [blockval , numbertobeupdated]);
    }
  }

  return;
}

function updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated)
{

  let j=0;
  let k=0;
  //console.log("blockval",blockval);
  //console.log("blockvalue",blockvalue);
  //console.log( eval(`${rowval}`));
  //console.log("numbertobeupdated",numbertobeupdated);
  

  (blockval.includes(1)) ? j=0 
  : (blockval.includes(2)) ? j=1
  : (blockval.includes(3)) ? j=2
  : (blockval.includes(4)) ? j=3
  : (blockval.includes(5)) ? j=4
  : (blockval.includes(6)) ? j=5
  : (blockval.includes(7)) ? j=6
  : (blockval.includes(8)) ? j=7
  : j=8;

  (blockval.includes("r1")) ? k=0 
  : (blockval.includes("r2")) ? k=1
  : (blockval.includes("r3")) ? k=2
  : (blockval.includes("r4")) ? k=3
  : (blockval.includes("r5")) ? k=4
  : (blockval.includes("r6")) ? k=5
  : (blockval.includes("r7")) ? k=6
  : (blockval.includes("r8")) ? k=7
  : k=8;


  eval(`${rowval}`).splice(j, 1, [blockval , eval(`${numbertobeupdated}`)]);
  //console.log("Row", eval(`${rowval}`));
  eval(`${colval}`).splice(k, 1, [blockval  , eval(`${numbertobeupdated}`)]);
  //console.log("Col", eval(`${colval}`))
  
  updateblock(blockval,blockvalue,numbertobeupdated);
  //updateblock();
  //console.log("Block", eval(`${blockvalue}`))
  //eval(`${blockvalue}[j][1]`).blockval = numbertobeupdated;

 
  

  return;
  
}




}
 


 





 
    

    
    
    
    
    
    const genrandomvalue = document.getElementById("puzzle");
    genrandomvalue.addEventListener("click", randomvalues);
    
    const sudokusolution = document.getElementById("solution");
    sudokusolution.addEventListener("click", solution);
    





    lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
   "block5,"+numbersinblock5.length, 
  "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)



  -----------





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
   // console.log(rowcol);
  
    let rc="";
    let rcval=0;
    let countArray= [];
    let countvalue =0;
    /*let countzeros = [];
    if (countzeros  === 0)
    {
      
    }*/
  
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
    
  
  
    let numberstobefilledinblock1 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock2 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock3 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock4 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock5 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock6 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock7 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock8 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock9 = [1,2,3,4,5,6,7,8,9];
    let numbersinblock1 = [];
    let numbersinblock2 = [];
    let numbersinblock3 = [];
    let numbersinblock4 = [];
    let numbersinblock5 = [];
    let numbersinblock6 = [];
    let numbersinblock7 = [];
    let numbersinblock8 = [];
    let numbersinblock9 = [];
  
    let lengthofblocks = [];
    let blocktostartwith = [];
  
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
   
  
  
  
  
  
  for (let i=0;i<9;i++) 
  {
     
          if(block1[i][1] != 0) { numbersinblock1.push(block1[i][1]);  numberstobefilledinblock1 = numberstobefilledinblock1.filter(val => !numbersinblock1.includes(val))}
          if(block2[i][1] != 0) { numbersinblock2.push(block2[i][1]); numberstobefilledinblock2 = numberstobefilledinblock2.filter(val => !numbersinblock2.includes(val))}
          if(block3[i][1] != 0) { numbersinblock3.push(block3[i][1]); numberstobefilledinblock3 = numberstobefilledinblock3.filter(val => !numbersinblock3.includes(val))}
          if(block4[i][1] != 0) { numbersinblock4.push(block4[i][1]);   numberstobefilledinblock4 = numberstobefilledinblock4.filter(val => !numbersinblock4.includes(val))}
          if(block5[i][1] != 0) { numbersinblock5.push(block5[i][1]);  numberstobefilledinblock5 = numberstobefilledinblock5.filter(val => !numbersinblock5.includes(val))}
          if(block6[i][1] != 0) { numbersinblock6.push(block6[i][1]);  numberstobefilledinblock6 = numberstobefilledinblock6.filter(val => !numbersinblock6.includes(val))}
          if(block7[i][1] != 0) { numbersinblock7.push(block7[i][1]);   numberstobefilledinblock7 = numberstobefilledinblock7.filter(val => !numbersinblock7.includes(val))}
          if(block8[i][1] != 0) { numbersinblock8.push(block8[i][1]); numberstobefilledinblock8 = numberstobefilledinblock8.filter(val => !numbersinblock8.includes(val))}
          if(block9[i][1] != 0) { numbersinblock9.push(block9[i][1]);   numberstobefilledinblock9 = numberstobefilledinblock9.filter(val => !numbersinblock9.includes(val))}
  
  
          
              
    }
  
    lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
     "block5,"+numbersinblock5.length, 
    "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)
  
    /*lengthofblocks.push(
      "block4,"+numbersinblock4.length, 
      "block1,"+numbersinblock1.length, 
      "block7,"+numbersinblock7.length,
      "block6,"+numbersinblock6.length,
     "block9,"+numbersinblock9.length, 
    "block3,"+numbersinblock3.length,
    "block2,"+numbersinblock2.length,
    "block5,"+numbersinblock5.length,
    "block8,"+numbersinblock8.length)*/
  
  
    //console.log(lengthofblocks);
    
    lengthofblocks.sort(function (a, b) {
      a= a.split(',')[1];
      b= b.split(',')[1];
      return b - a;
    });
    
      
   //console.log(lengthofblocks);
    
    //console.log(blocktostartwith.sort());
  
    /*console.log(r5);
    console.log(c5);
    console.log(numbersinblock5);
    console.log(numberstobefilledinblock5);
    console.log(block5);*/
    
    let possibileat=[];
  
  
  for (let blocknum=0; blocknum<lengthofblocks.length;blocknum++)
  {
  
  let blockvalue = lengthofblocks[blocknum].split(",")[0];
  console.log(blockvalue);
  loop1:
  
  for(let num=0;num<eval(`numberstobefilledin${blockvalue}`).length;num++)
  {
    let possibileat=[]; 
  
   for ( let i=0; i<9;i++)
  {
   loop2:
  if(eval(`${blockvalue}[i][1]`) === 0) 
  {
    let blockval = eval(`${blockvalue}[i][0]`);
    let rowval=blockval.substr(0,2);
    let colval=blockval.substr(2,4);
    let count=0;
  
      loop3:
        for (let j=0;j<9;j++)
          {
            
              if(eval(`${rowval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num] || 
              eval(`${colval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num])
              {
                //console.log("Number found",eval(`numberstobefilledin${blockvalue}`)[num]);
                  break loop3;
                 
              }
              else
              {
                //console.log("Number not found",eval(`numberstobefilledin${blockvalue}`)[num]);
                count++; 
                  if (count === 9)
                  {
                  console.log(eval(`numberstobefilledin${blockvalue}`)[num], "possible at", blockval);
                  possibileat.push([eval(`numberstobefilledin${blockvalue}`)[num], blockval]);
                  console.log(possibileat);
                  //break loop2;
                   
                  if( possibileat.length === 1) 
                     {
                      //console.log("coming in",blockval, eval(`numberstobefilledin${blockvalue}`)[num]);
                      let numbertobeupdated = eval(`numberstobefilledin${blockvalue}`)[num];
                      document.getElementById(blockval).innerText=numbertobeupdated;
                      // console.log(eval(`numberstobefilledin${blockvalue}`));
                     eval(`numberstobefilledin${blockvalue}`).splice(num,1);
                    // console.log(eval(`numberstobefilledin${blockvalue}`));                  
                       updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated);
                       console.log(eval(`numberstobefilledin${blockvalue}`).length);
                       if(eval(`numberstobefilledin${blockvalue}`.length === 0 ))
                       {
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
  }
  }
  
  
  
  console.log(numberstobefilledinblock1);
  console.log(numberstobefilledinblock2);
  console.log(numberstobefilledinblock3);
  console.log(numberstobefilledinblock4);
  console.log(numberstobefilledinblock5);
  console.log(numberstobefilledinblock6);
  console.log(numberstobefilledinblock7);
  console.log(numberstobefilledinblock8);
  console.log(numberstobefilledinblock9);
  
  }
  
  
  function updateblock(blockval,blockvalue,numbertobeupdated) {
  
  //console.log("inside update");
  //console.log("blockval",blockval);
  //console.log("blockvalue",blockvalue);
  
  for (let i=0;i<9;i++)
  {
    if(eval(`${blockvalue}[i][0]`) === blockval)
    {
      eval(`${blockvalue}`).splice(i, 1, [blockval , numbertobeupdated]);
    }
  }
  
  return;
  }
  
  function updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated)
  {
  
  let j=0;
  let k=0;
  //console.log("blockval",blockval);
  //console.log("blockvalue",blockvalue);
  //console.log( eval(`${rowval}`));
  //console.log("numbertobeupdated",numbertobeupdated);
  //console.log(eval(`${rowval}`), colval, blockval, blockvalue, numbertobeupdated);
  
  (blockval.includes(1)) ? j=0 
  : (blockval.includes(2)) ? j=1
  : (blockval.includes(3)) ? j=2
  : (blockval.includes(4)) ? j=3
  : (blockval.includes(5)) ? j=4
  : (blockval.includes(6)) ? j=5
  : (blockval.includes(7)) ? j=6
  : (blockval.includes(8)) ? j=7
  : j=8;
  
  (blockval.includes("r1")) ? k=0 
  : (blockval.includes("r2")) ? k=1
  : (blockval.includes("r3")) ? k=2
  : (blockval.includes("r4")) ? k=3
  : (blockval.includes("r5")) ? k=4
  : (blockval.includes("r6")) ? k=5
  : (blockval.includes("r7")) ? k=6
  : (blockval.includes("r8")) ? k=7
  : k=8;
  
  
  eval(`${rowval}`).splice(j, 1, [blockval , eval(`${numbertobeupdated}`)]);
  //console.log("Row", eval(`${rowval}`));
  eval(`${colval}`).splice(k, 1, [blockval  , eval(`${numbertobeupdated}`)]);
  //console.log("Col", eval(`${colval}`))
  
  updateblock(blockval,blockvalue,numbertobeupdated);
  //updateblock();
  //console.log("Block", eval(`${blockvalue}`))
  //eval(`${blockvalue}[j][1]`).blockval = numbertobeupdated;
  
  
  
  
  return;
  
  }
  
  
  
    }
  
  
  
  
  
  
  
  
  
  
  
    
  
    
    
    
    
    
    const genrandomvalue = document.getElementById("puzzle");
    genrandomvalue.addEventListener("click", randomvalues);
    
    const sudokusolution = document.getElementById("solution");
    sudokusolution.addEventListener("click", solution);
  
    

    -----------------


    WHILE loop1


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
     // console.log(rowcol);
    
      let rc="";
      let rcval=0;
      let countArray= [];
      let countvalue =0;
      /*let countzeros = [];
      if (countzeros  === 0)
      {
        
      }*/
    
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
      
    
    
      let numberstobefilledinblock1 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock2 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock3 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock4 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock5 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock6 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock7 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock8 = [1,2,3,4,5,6,7,8,9];
      let numberstobefilledinblock9 = [1,2,3,4,5,6,7,8,9];
      let numbersinblock1 = [];
      let numbersinblock2 = [];
      let numbersinblock3 = [];
      let numbersinblock4 = [];
      let numbersinblock5 = [];
      let numbersinblock6 = [];
      let numbersinblock7 = [];
      let numbersinblock8 = [];
      let numbersinblock9 = [];
    
      let lengthofblocks = [];
      let blocktostartwith = [];
    
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
     
    
    
    
    
    
    for (let i=0;i<9;i++) 
    {
       
            if(block1[i][1] != 0) { numbersinblock1.push(block1[i][1]);  numberstobefilledinblock1 = numberstobefilledinblock1.filter(val => !numbersinblock1.includes(val))}
            if(block2[i][1] != 0) { numbersinblock2.push(block2[i][1]); numberstobefilledinblock2 = numberstobefilledinblock2.filter(val => !numbersinblock2.includes(val))}
            if(block3[i][1] != 0) { numbersinblock3.push(block3[i][1]); numberstobefilledinblock3 = numberstobefilledinblock3.filter(val => !numbersinblock3.includes(val))}
            if(block4[i][1] != 0) { numbersinblock4.push(block4[i][1]);   numberstobefilledinblock4 = numberstobefilledinblock4.filter(val => !numbersinblock4.includes(val))}
            if(block5[i][1] != 0) { numbersinblock5.push(block5[i][1]);  numberstobefilledinblock5 = numberstobefilledinblock5.filter(val => !numbersinblock5.includes(val))}
            if(block6[i][1] != 0) { numbersinblock6.push(block6[i][1]);  numberstobefilledinblock6 = numberstobefilledinblock6.filter(val => !numbersinblock6.includes(val))}
            if(block7[i][1] != 0) { numbersinblock7.push(block7[i][1]);   numberstobefilledinblock7 = numberstobefilledinblock7.filter(val => !numbersinblock7.includes(val))}
            if(block8[i][1] != 0) { numbersinblock8.push(block8[i][1]); numberstobefilledinblock8 = numberstobefilledinblock8.filter(val => !numbersinblock8.includes(val))}
            if(block9[i][1] != 0) { numbersinblock9.push(block9[i][1]);   numberstobefilledinblock9 = numberstobefilledinblock9.filter(val => !numbersinblock9.includes(val))}
    
    
            
                
      }
    
      lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
       "block5,"+numbersinblock5.length, 
      "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)
    
      /*lengthofblocks.push(
        "block4,"+numbersinblock4.length, 
        "block1,"+numbersinblock1.length, 
        "block7,"+numbersinblock7.length,
        "block6,"+numbersinblock6.length,
       "block9,"+numbersinblock9.length, 
      "block3,"+numbersinblock3.length,
      "block2,"+numbersinblock2.length,
      "block5,"+numbersinblock5.length,
      "block8,"+numbersinblock8.length)*/
    
    
      //console.log(lengthofblocks);
      
      lengthofblocks.sort(function (a, b) {
        a= a.split(',')[1];
        b= b.split(',')[1];
        return b - a;
      });
      
        
     //console.log(lengthofblocks);
      
      //console.log(blocktostartwith.sort());
    
      /*console.log(r5);
      console.log(c5);
      console.log(numbersinblock5);
      console.log(numberstobefilledinblock5);
      console.log(block5);*/
      
      let possibileat=[];
    
    
    for (let blocknum=0; blocknum<lengthofblocks.length;blocknum++)
    {
    
      let num=0;
    let blockvalue = lengthofblocks[blocknum].split(",")[0];
    console.log(blockvalue);
    loop1:
    do
    {
      let possibileat=[]; 
    
     for ( let i=0; i<9;i++)
    {
     loop2:
    if(eval(`${blockvalue}[i][1]`) === 0) 
    {
      let blockval = eval(`${blockvalue}[i][0]`);
      let rowval=blockval.substr(0,2);
      let colval=blockval.substr(2,4);
      let count=0;
    
        loop3:
          for (let j=0;j<9;j++)
            {
              
                if(eval(`${rowval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num] || 
                eval(`${colval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num])
                {
                  //console.log("Number found",eval(`numberstobefilledin${blockvalue}`)[num]);
                    break loop3;
                   
                }
                else
                {
                  //console.log("Number not found",eval(`numberstobefilledin${blockvalue}`)[num]);
                  count++; 
                    if (count === 9)
                    {
                    console.log(eval(`numberstobefilledin${blockvalue}`)[num], "possible at", blockval);
                    possibileat.push([eval(`numberstobefilledin${blockvalue}`)[num], blockval]);
                    //console.log(possibileat);
                    //break loop2;
                     
                    if( possibileat.length === 1) 
                       {
                        //console.log("coming in",blockval, eval(`numberstobefilledin${blockvalue}`)[num]);
                        let numbertobeupdated = eval(`numberstobefilledin${blockvalue}`)[num];
                        document.getElementById(blockval).innerText=numbertobeupdated;
                        // console.log(eval(`numberstobefilledin${blockvalue}`));
                       eval(`numberstobefilledin${blockvalue}`).splice(num,1);
                      // console.log(eval(`numberstobefilledin${blockvalue}`));                  
                         updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated);
                        // console.log(eval(`numberstobefilledin${blockvalue}`).length);
                      
                         if(eval(`numberstobefilledin${blockvalue}`.length === 0 ))
                         {
                          break loop2;
                         }
                         else {
                         break loop3;
                          }
                         }
                          
                  }
                }
             }
          }
    }
    console.log(blockvalue, eval(`numberstobefilledin${blockvalue}`).length);
    console.log(num);
    num++;
    console.log(num);
    
    
    } while(num<eval(`numberstobefilledin${blockvalue}`).length !=0);
    
    
    
    console.log(numberstobefilledinblock1);
    console.log(numberstobefilledinblock2);
    console.log(numberstobefilledinblock3);
    console.log(numberstobefilledinblock4);
    console.log(numberstobefilledinblock5);
    console.log(numberstobefilledinblock6);
    console.log(numberstobefilledinblock7);
    console.log(numberstobefilledinblock8);
    console.log(numberstobefilledinblock9);
    
    }
    
    
    function updateblock(blockval,blockvalue,numbertobeupdated) {
    
    //console.log("inside update");
    //console.log("blockval",blockval);
    //console.log("blockvalue",blockvalue);
    
    for (let i=0;i<9;i++)
    {
      if(eval(`${blockvalue}[i][0]`) === blockval)
      {
        eval(`${blockvalue}`).splice(i, 1, [blockval , numbertobeupdated]);
      }
    }
    
    return;
    }
    
    function updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated)
    {
    
    let j=0;
    let k=0;
    //console.log("blockval",blockval);
    //console.log("blockvalue",blockvalue);
    //console.log( eval(`${rowval}`));
    //console.log("numbertobeupdated",numbertobeupdated);
    //console.log(eval(`${rowval}`), colval, blockval, blockvalue, numbertobeupdated);
    
    (blockval.includes(1)) ? j=0 
    : (blockval.includes(2)) ? j=1
    : (blockval.includes(3)) ? j=2
    : (blockval.includes(4)) ? j=3
    : (blockval.includes(5)) ? j=4
    : (blockval.includes(6)) ? j=5
    : (blockval.includes(7)) ? j=6
    : (blockval.includes(8)) ? j=7
    : j=8;
    
    (blockval.includes("r1")) ? k=0 
    : (blockval.includes("r2")) ? k=1
    : (blockval.includes("r3")) ? k=2
    : (blockval.includes("r4")) ? k=3
    : (blockval.includes("r5")) ? k=4
    : (blockval.includes("r6")) ? k=5
    : (blockval.includes("r7")) ? k=6
    : (blockval.includes("r8")) ? k=7
    : k=8;
    
    
    eval(`${rowval}`).splice(j, 1, [blockval , eval(`${numbertobeupdated}`)]);
    //console.log("Row", eval(`${rowval}`));
    eval(`${colval}`).splice(k, 1, [blockval  , eval(`${numbertobeupdated}`)]);
    //console.log("Col", eval(`${colval}`))
    
    updateblock(blockval,blockvalue,numbertobeupdated);
    //updateblock();
    //console.log("Block", eval(`${blockvalue}`))
    //eval(`${blockvalue}[j][1]`).blockval = numbertobeupdated;
    
    
    
    
    return;
    
    }
    
    
    
      }
    
    
    
    
    
    
    
    
    
    
    
      
    
      
      
      
      
      
      const genrandomvalue = document.getElementById("puzzle");
      genrandomvalue.addEventListener("click", randomvalues);
      
      const sudokusolution = document.getElementById("solution");
      sudokusolution.addEventListener("click", solution);
      




      ----------------------




      //console.log(eval(`${colval}[m][0]`));
      let nextcolval=colval.substr(1,2);
      nextcolval = eval(`${nextcolval}`)+1;
      nextcolval = "c"+nextcolval;
      //console.log(nextcolval);
      let newcolval=eval(`${colval}[m][0]`).substr(0,2)+nextcolval;
      //console.log(newcolval);

      let secondnextcolval=eval(`${colval}[m][0]`).substr(3,4);
      secondnextcolval = eval(`${secondnextcolval}`)+2;
      secondnextcolval = "c"+secondnextcolval;
      //console.log(nextcolval);
      let secondnewcolval=eval(`${colval}[m][0]`).substr(0,2)+secondnextcolval;
      //console.log(secondnewcolval);



      --------------------------------------




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
              if (val === null || val === undefined || val === "" || val === "undefined"  )
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
   // console.log(rowcol);
  
    let rc="";
    let rcval=0;
    let countArray= [];
    let countvalue =0;
    /*let countzeros = [];
    if (countzeros  === 0)
    {
      
    }*/
  
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
    
  
  
    let numberstobefilledinblock1 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock2 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock3 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock4 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock5 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock6 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock7 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock8 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock9 = [1,2,3,4,5,6,7,8,9];
    let numbersinblock1 = [];
    let numbersinblock2 = [];
    let numbersinblock3 = [];
    let numbersinblock4 = [];
    let numbersinblock5 = [];
    let numbersinblock6 = [];
    let numbersinblock7 = [];
    let numbersinblock8 = [];
    let numbersinblock9 = [];
  
    let lengthofblocks = [];
    let blocktostartwith = [];
  
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
   
  
  
  
  
  
  for (let i=0;i<9;i++) 
  {
     
          if(block1[i][1] != 0) { numbersinblock1.push(block1[i][1]);  numberstobefilledinblock1 = numberstobefilledinblock1.filter(val => !numbersinblock1.includes(val))}
          if(block2[i][1] != 0) { numbersinblock2.push(block2[i][1]); numberstobefilledinblock2 = numberstobefilledinblock2.filter(val => !numbersinblock2.includes(val))}
          if(block3[i][1] != 0) { numbersinblock3.push(block3[i][1]); numberstobefilledinblock3 = numberstobefilledinblock3.filter(val => !numbersinblock3.includes(val))}
          if(block4[i][1] != 0) { numbersinblock4.push(block4[i][1]);   numberstobefilledinblock4 = numberstobefilledinblock4.filter(val => !numbersinblock4.includes(val))}
          if(block5[i][1] != 0) { numbersinblock5.push(block5[i][1]);  numberstobefilledinblock5 = numberstobefilledinblock5.filter(val => !numbersinblock5.includes(val))}
          if(block6[i][1] != 0) { numbersinblock6.push(block6[i][1]);  numberstobefilledinblock6 = numberstobefilledinblock6.filter(val => !numbersinblock6.includes(val))}
          if(block7[i][1] != 0) { numbersinblock7.push(block7[i][1]);   numberstobefilledinblock7 = numberstobefilledinblock7.filter(val => !numbersinblock7.includes(val))}
          if(block8[i][1] != 0) { numbersinblock8.push(block8[i][1]); numberstobefilledinblock8 = numberstobefilledinblock8.filter(val => !numbersinblock8.includes(val))}
          if(block9[i][1] != 0) { numbersinblock9.push(block9[i][1]);   numberstobefilledinblock9 = numberstobefilledinblock9.filter(val => !numbersinblock9.includes(val))}
  
  
          
              
    }
  
    lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
     "block5,"+numbersinblock5.length, 
    "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)
  
    /*lengthofblocks.push(
      "block4,"+numbersinblock4.length, 
      "block1,"+numbersinblock1.length, 
      "block7,"+numbersinblock7.length,
      "block6,"+numbersinblock6.length,
     "block9,"+numbersinblock9.length, 
    "block3,"+numbersinblock3.length,
    "block2,"+numbersinblock2.length,
    "block5,"+numbersinblock5.length,
    "block8,"+numbersinblock8.length)*/
  
  
    //console.log(lengthofblocks);
    
    lengthofblocks.sort(function (a, b) {
      a= a.split(',')[1];
      b= b.split(',')[1];
      return b - a;
    });
    
      
   //console.log(lengthofblocks);
    
    //console.log(blocktostartwith.sort());
  
    /*console.log(r5);
    console.log(c5);
    console.log(numbersinblock5);
    console.log(numberstobefilledinblock5);
    console.log(block5);*/
    
    //let possibileat=[];
  
    //console.log("Initial block values", block1, block2, block3, block4, block5, block6, block7, block8, block9);
    
  
  for (let blocknum=0; blocknum<lengthofblocks.length;blocknum++)
  {
  
  let blockvalue = lengthofblocks[blocknum].split(",")[0];
  console.log(blockvalue);
  loop1:
  
  for(let num=0;num<eval(`numberstobefilledin${blockvalue}`).length;num++)
  {
    let possibileat=[]; 
    let onlypossibileat=[];
  
   for ( let i=0; i<9;i++)
  {
   loop2:
  if(eval(`${blockvalue}[i][1]`) === 0) 
  {
    let blockval = eval(`${blockvalue}[i][0]`);
    let rowval=blockval.substr(0,2);
    let colval=blockval.substr(2,4);
    let count=0;
    let anothercount=0;
  
      loop3:
        for (let j=0;j<9;j++)
          {
            
              if(eval(`${rowval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num] || 
              eval(`${colval}[j][1]`) === eval(`numberstobefilledin${blockvalue}`)[num])
              {
                //console.log("Number found",eval(`numberstobefilledin${blockvalue}`)[num]);
                  //break loop3;
                 
              }
              else
              {
                  //console.log("Number not found",eval(`numberstobefilledin${blockvalue}`)[num]);
                  count++; 
                  if (count === 9)
                  {
                  
                  possibileat.push([eval(`numberstobefilledin${blockvalue}`)[num], blockval]);
                  console.log(eval(`numberstobefilledin${blockvalue}`)[num], "possible at", possibileat, "length", possibileat.length);
                  
                      if(possibileat.length > 1 )
                      {
                         loop4:
                           for (let k=0;j<9;j++)
                              {
                                if(eval(`${rowval}[k][1]`) === eval(`numberstobefilledin${blockvalue}`)[num] || 
                                 eval(`${colval}[k][1]`) === eval(`numberstobefilledin${blockvalue}`)[num])
                                  {
                                   console.log("Number found",eval(`numberstobefilledin${blockvalue}`)[num]);
                                    //console.log("length", possibileat.length)
                                    //break loop4;
                                    }
                                   else 
                                    {
                                      console.log("Number not found",eval(`numberstobefilledin${blockvalue}`)[num]);
                                      onlypossibileat.push([eval(`numberstobefilledin${blockvalue}`)[num], blockval]);
                                      console.log("length", onlypossibileat.length);
                                      if( onlypossibileat.length === 1) 
                                      {
            
                                        console.log(eval(`numberstobefilledin${blockvalue}`)[num], "possible SECOND ONLY at", blockval);
                                       let numbertobeupdated = eval(`numberstobefilledin${blockvalue}`)[num];
                                        document.getElementById(blockval).innerText=numbertobeupdated;
                                       eval(`numberstobefilledin${blockvalue}`).splice(num,1);
                                       updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated);
                                       onlypossibileat=[];
                                       //break loop3;
                                      }
                                      else {
                                        console.log(eval(`numberstobefilledin${blockvalue}`)[num], "NOT possible at", blockval);
                                      //break loop1;
                                      }                                      
                                    }
                                  } 
                            } 
                          else {
                            if( possibileat.length === 1) 
                            {
  
                              console.log(eval(`numberstobefilledin${blockvalue}`)[num], "possible ONLY at", blockval);
                             let numbertobeupdated = eval(`numberstobefilledin${blockvalue}`)[num];
                              document.getElementById(blockval).innerText=numbertobeupdated;
                            eval(`numberstobefilledin${blockvalue}`).splice(num,1);
                             updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated);
                             possibileat=[];
                             //break loop3;
                            }
                            else {
                              //break loop2;
                              } 
                          }
                      }       
                }
            }
        
          }
        }
    }
  }
  
  
  
  
  /*console.log(numberstobefilledinblock1);
  console.log(numberstobefilledinblock2);
  console.log(numberstobefilledinblock3);
  console.log(numberstobefilledinblock4);
  console.log(numberstobefilledinblock5);
  console.log(numberstobefilledinblock6);
  console.log(numberstobefilledinblock7);
  console.log(numberstobefilledinblock8);
  console.log(numberstobefilledinblock9);*/
  
  
  
  
  /*function updateblock(blockval,blockvalue,numbertobeupdated) {
  
  //console.log("inside update");
  //console.log("blockval",blockval);
  //console.log("blockvalue",blockvalue);
  
  for (let i=0;i<9;i++)
  {
    if(eval(`${blockvalue}[i][0]`) === blockval)
    {
      //console.log(blockval,blockvalue);
      eval(`${blockvalue}`).splice(i, 1, [blockval , numbertobeupdated]);
      //console.log("Updated Blockval", eval(`${blockvalue}[i][0]`), eval(`${blockvalue}[i][1]`));
    }
  }
  
  return;
  }*/
  
  function updatearray(rowval, colval, blockval, blockvalue, numbertobeupdated)
  {
  
   // console.log("Coming in for update of ", numbertobeupdated)
  //let j=0;
  //let k=0;
  //console.log("blockval",blockval);
  //console.log("blockvalue",blockvalue);
  //console.log( eval(`${rowval}`));
  //console.log("numbertobeupdated",numbertobeupdated);
  //console.log(eval(`${rowval}`), colval, blockval, blockvalue, numbertobeupdated);

  for (let i=0;i<9;i++)
  {
    if(eval(`${rowval}[i][0]`) === blockval)
    {
      //console.log("FIRST UPDATE -------");
      eval(`${rowval}`).splice(i, 1, [blockval , eval(`${numbertobeupdated}`)]);
       console.log(eval(`${rowval}`));
    }
    if(eval(`${colval}[i][0]`) === blockval)
    {
     // console.log("SECOND UPDATE -------");
        eval(`${colval}`).splice(i, 1, [blockval , eval(`${numbertobeupdated}`)]);
       console.log(eval(`${colval}`));
    }
    if(eval(`${blockvalue}[i][0]`) === blockval)
    {
       //console.log("THIRD UPDATE -------");
      eval(`${blockvalue}`).splice(i, 1, [blockval , eval(`${numbertobeupdated}`)]);
      console.log( eval(`${blockvalue}`));
    }

  }
  
  
  /*(blockval.includes("c1")) ? j=0 
  : (blockval.includes("c2")) ? j=1
  : (blockval.includes("c3")) ? j=2
  : (blockval.includes("c4")) ? j=3
  : (blockval.includes("c5")) ? j=4
  : (blockval.includes("c6")) ? j=5
  : (blockval.includes("c7")) ? j=6
  : (blockval.includes("c8")) ? j=7
  : j=8;
  
   console.log("FIRST UPDATE -------");
  eval(`${rowval}`).splice(j, 1, [blockval , eval(`${numbertobeupdated}`)]);
   console.log(eval(`${rowval}`));

  (blockval.includes("r1")) ? k=0 
  : (blockval.includes("r2")) ? k=1
  : (blockval.includes("r3")) ? k=2
  : (blockval.includes("r4")) ? k=3
  : (blockval.includes("r5")) ? k=4
  : (blockval.includes("r6")) ? k=5
  : (blockval.includes("r7")) ? k=6
  : (blockval.includes("r8")) ? k=7
  : k=8;

  console.log("SECOND UPDATE -------");
  
  eval(`${colval}`).splice(k, 1, [blockval  , eval(`${numbertobeupdated}`)]);
   console.log(eval(`${colval}`));
  
  //console.log(eval(`${rowval}`));
  //console.log("Updated Row", eval(`${rowval}[j][0]`),eval(`${rowval}[j][1]`));
  
  //console.log("Updated Col", eval(`${colval}[k][0]`), eval(`${colval}[k][1]`));*/
  

  //console.log("THIRD UPDATE -------");
  //updateblock(blockval,blockvalue,numbertobeupdated);
  //console.log(eval(`${blockvalue}`));
  //updateblock();
  //console.log("Block", eval(`${blockvalue}`))
  //eval(`${blockvalue}[j][1]`).blockval = numbertobeupdated;
  
  
  
  
  return;
  
  }

}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
    
    
    
    
    
    const genrandomvalue = document.getElementById("puzzle");
    genrandomvalue.addEventListener("click", randomvalues);
    
    const sudokusolution = document.getElementById("solution");
    sudokusolution.addEventListener("click", solution);




    LAST try----







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
              if (val === null || val === undefined || val === "" || val === "undefined"  )
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
   // console.log(rowcol);
  
    let rc="";
    let rcval=0;
    let countArray= [];
    let countvalue =0;
    /*let countzeros = [];
    if (countzeros  === 0)
    {
      
    }*/
  
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

    let numberstobefilledinblock1 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock2 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock3 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock4 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock5 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock6 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock7 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock8 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock9 = [1,2,3,4,5,6,7,8,9];
    let numbersinblock1 = [];
    let numbersinblock2 = [];
    let numbersinblock3 = [];
    let numbersinblock4 = [];
    let numbersinblock5 = [];
    let numbersinblock6 = [];
    let numbersinblock7 = [];
    let numbersinblock8 = [];
    let numbersinblock9 = [];
  
    let lengthofblocks = [];
    
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


      
  for (let i=0;i<9;i++) 
  {
     
          if(block1[i][1] != 0) { numbersinblock1.push(block1[i][1]);  numberstobefilledinblock1 = numberstobefilledinblock1.filter(val => !numbersinblock1.includes(val))}
          if(block2[i][1] != 0) { numbersinblock2.push(block2[i][1]); numberstobefilledinblock2 = numberstobefilledinblock2.filter(val => !numbersinblock2.includes(val))}
          if(block3[i][1] != 0) { numbersinblock3.push(block3[i][1]); numberstobefilledinblock3 = numberstobefilledinblock3.filter(val => !numbersinblock3.includes(val))}
          if(block4[i][1] != 0) { numbersinblock4.push(block4[i][1]);   numberstobefilledinblock4 = numberstobefilledinblock4.filter(val => !numbersinblock4.includes(val))}
          if(block5[i][1] != 0) { numbersinblock5.push(block5[i][1]);  numberstobefilledinblock5 = numberstobefilledinblock5.filter(val => !numbersinblock5.includes(val))}
          if(block6[i][1] != 0) { numbersinblock6.push(block6[i][1]);  numberstobefilledinblock6 = numberstobefilledinblock6.filter(val => !numbersinblock6.includes(val))}
          if(block7[i][1] != 0) { numbersinblock7.push(block7[i][1]);   numberstobefilledinblock7 = numberstobefilledinblock7.filter(val => !numbersinblock7.includes(val))}
          if(block8[i][1] != 0) { numbersinblock8.push(block8[i][1]); numberstobefilledinblock8 = numberstobefilledinblock8.filter(val => !numbersinblock8.includes(val))}
          if(block9[i][1] != 0) { numbersinblock9.push(block9[i][1]);   numberstobefilledinblock9 = numberstobefilledinblock9.filter(val => !numbersinblock9.includes(val))}
  
               
    }
    lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
     "block5,"+numbersinblock5.length, 
    "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)
       
    lengthofblocks.sort(function (a, b) {
      a= a.split(',')[1];
      b= b.split(',')[1];
      return b - a;
    });
    
    let possibleval=[]; 
for (let blocknum=0; blocknum<1;blocknum++)
{
    
  let blockvalue = lengthofblocks[blocknum].split(",")[0];
  console.log(blockvalue);
 
   
  for(let i=0;i<9;i++)
   {
    
    let blockval = eval(`${blockvalue}[i][0]`);
    
    if(eval(`${blockvalue}[i][1]`) === 0) 
    {
     //console.log(eval(`${blockvalue}[i][0]`), "is EMPTY");
      let rowval=blockval.substr(0,2);
      let colval=blockval.substr(2,4);
      let count=0;
      
      let onlypossibleval=[];
      for(let num=1; num<=9;num++)
    {
      for (let j=0;j<9;j++)
      {
        
          if(eval(`${rowval}[j][1]`) === num || eval(`${colval}[j][1]`) === num || eval(`${blockvalue}[j][1]`) === num)
          {
            j++;
             
          }
          else {
            count++;

            if(count===9)
            {
              onlypossibleval.push(num);
              console.log("suitable @",eval(`${blockvalue}[i][0]`),onlypossibleval);
              if(onlypossibleval.length > 1)
              {
                
                
              }
                    // document.getElementById(eval(`${blockvalue}[i][0]`)).innerText=possibleval[0];
                //solution();
                //return;
              
             }
             
          }

      }
      
      count=0;
    }
    if(onlypossibleval.length === 1)
      {
       console.log(" ONLY suitable @",eval(`${blockvalue}[i][0]`),onlypossibleval);
       document.getElementById(eval(`${blockvalue}[i][0]`)).innerText=onlypossibleval[0];
       solution();
       return;
      }
      else {
       //i++;
      }
      if(possibleval.length > 1)
      {
       console.log("Consolidated",eval(`${blockvalue}[i][0]`),possibleval);
       //document.getElementById(eval(`${blockvalue}[i][0]`)).innerText=possibleval[0];
       //solution();
       //return;
      }
      else {
       //i++;
      }
  }
    else {
     //i++;
    }
   }
}






  }
   


    
    
    
    
    
    const genrandomvalue = document.getElementById("puzzle");
    genrandomvalue.addEventListener("click", randomvalues);
    
    const sudokusolution = document.getElementById("solution");
    sudokusolution.addEventListener("click", solution);




    -----





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
              if (val === null || val === undefined || val === "" || val === "undefined"  )
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
   // console.log(rowcol);
  
    let rc="";
    let rcval=0;
    let countArray= [];
    let countvalue =0;
    /*let countzeros = [];
    if (countzeros  === 0)
    {
      
    }*/
  
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

    let numberstobefilledinblock1 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock2 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock3 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock4 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock5 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock6 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock7 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock8 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock9 = [1,2,3,4,5,6,7,8,9];
    let numbersinblock1 = [];
    let numbersinblock2 = [];
    let numbersinblock3 = [];
    let numbersinblock4 = [];
    let numbersinblock5 = [];
    let numbersinblock6 = [];
    let numbersinblock7 = [];
    let numbersinblock8 = [];
    let numbersinblock9 = [];
  
    let lengthofblocks = [];
    
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


      
  for (let i=0;i<9;i++) 
  {
     
          if(block1[i][1] != 0) { numbersinblock1.push(block1[i][1]);  numberstobefilledinblock1 = numberstobefilledinblock1.filter(val => !numbersinblock1.includes(val))}
          if(block2[i][1] != 0) { numbersinblock2.push(block2[i][1]); numberstobefilledinblock2 = numberstobefilledinblock2.filter(val => !numbersinblock2.includes(val))}
          if(block3[i][1] != 0) { numbersinblock3.push(block3[i][1]); numberstobefilledinblock3 = numberstobefilledinblock3.filter(val => !numbersinblock3.includes(val))}
          if(block4[i][1] != 0) { numbersinblock4.push(block4[i][1]);   numberstobefilledinblock4 = numberstobefilledinblock4.filter(val => !numbersinblock4.includes(val))}
          if(block5[i][1] != 0) { numbersinblock5.push(block5[i][1]);  numberstobefilledinblock5 = numberstobefilledinblock5.filter(val => !numbersinblock5.includes(val))}
          if(block6[i][1] != 0) { numbersinblock6.push(block6[i][1]);  numberstobefilledinblock6 = numberstobefilledinblock6.filter(val => !numbersinblock6.includes(val))}
          if(block7[i][1] != 0) { numbersinblock7.push(block7[i][1]);   numberstobefilledinblock7 = numberstobefilledinblock7.filter(val => !numbersinblock7.includes(val))}
          if(block8[i][1] != 0) { numbersinblock8.push(block8[i][1]); numberstobefilledinblock8 = numberstobefilledinblock8.filter(val => !numbersinblock8.includes(val))}
          if(block9[i][1] != 0) { numbersinblock9.push(block9[i][1]);   numberstobefilledinblock9 = numberstobefilledinblock9.filter(val => !numbersinblock9.includes(val))}
  
               
    }
    lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
     "block5,"+numbersinblock5.length, 
    "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)
       
    lengthofblocks.sort(function (a, b) {
      a= a.split(',')[1];
      b= b.split(',')[1];
      return b - a;
    });
    
    let possibleval=[]; 
for (let blocknum=0; blocknum<9;blocknum++)
{
    
  let blockvalue = lengthofblocks[blocknum].split(",")[0];
  console.log(blockvalue);
 
   
  for(let i=0;i<9;i++)
   {
    
    let blockval = eval(`${blockvalue}[i][0]`);
    
    if(eval(`${blockvalue}[i][1]`) === 0) 
    {
     //console.log(eval(`${blockvalue}[i][0]`), "is EMPTY");
      let rowval=blockval.substr(0,2);
      let colval=blockval.substr(2,4);
      let count=0;
      
      let onlypossibleval=[];
      for(let num=1; num<=9;num++)
    {
      loop2:
      for (let j=0;j<9;j++)
      {
        
          if(eval(`${rowval}[j][1]`) === num || eval(`${colval}[j][1]`) === num || eval(`${blockvalue}[j][1]`) === num)
          {
            j++;
             
          }
          else {
            count++;

            if(count===9)
            {
              onlypossibleval.push(num);
             // console.log("suitable @",eval(`${blockvalue}[i][0]`),onlypossibleval);
              
              

              if(onlypossibleval.length > 1)
              {
                console.log("TWO")
              for(let k=0;k<onlypossibleval.length;k++)
              {
                loop3:
               for (let m=0;m<9;m++)
               {
                
                let nextcolval=colval.substr(1,2);
                let secondnextcolval=colval.substr(1,2);
                //console.log(nextcolval,secondnextcolval)

                if( colval === "8" || nextcolval === "9" || secondnextcolval === "8" || secondnextcolval === "9" )
                {
                  nextcolval="c9";
                  secondnextcolval="c9";
                  break loop3;
                  
                }
                else {

                nextcolval = eval(`${nextcolval}`)+1;
                nextcolval = "c"+nextcolval;
                
                
                secondnextcolval = eval(`${secondnextcolval}`)+2;
                secondnextcolval = "c"+secondnextcolval;
              }

                //console.log(colval, nextcolval, secondnextcolval)
               
  
                if((eval(`${nextcolval}[m][1]`) === onlypossibleval[k]) || (eval(`${secondnextcolval}[m][1]`) === onlypossibleval[k]) )
                {
                  //console.log(" ONLY suitable @",eval(`${blockvalue}[i][0]`),onlypossibleval[k]);
                  document.getElementById(eval(`${blockvalue}[i][0]`)).innerText=onlypossibleval[0];
                  solution();
                  return;
                }
                else {
                  if(onlypossibleval.length === 1)
            {
              console.log("ONE")
            // console.log(" ONLY suitable @",eval(`${blockvalue}[i][0]`),onlypossibleval);
             document.getElementById(eval(`${blockvalue}[i][0]`)).innerText=onlypossibleval[0];
             solution();
             return;
            }
                }
              }

              }
            }
            
    
              
             }
             
          }

      }
      
      count=0;
    }
    
     
  }
 
   }
}






  }
   


    
    
    
    
    
    const genrandomvalue = document.getElementById("puzzle");
    genrandomvalue.addEventListener("click", randomvalues);
    
    const sudokusolution = document.getElementById("solution");
    sudokusolution.addEventListener("click", solution);





    -----






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
              if (val === null || val === undefined || val === "" || val === "undefined"  )
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
   // console.log(rowcol);
  
    let rc="";
    let rcval=0;
    let countArray= [];
    let countvalue =0;
    /*let countzeros = [];
    if (countzeros  === 0)
    {
      
    }*/
  
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

    let numberstobefilledinblock1 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock2 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock3 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock4 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock5 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock6 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock7 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock8 = [1,2,3,4,5,6,7,8,9];
    let numberstobefilledinblock9 = [1,2,3,4,5,6,7,8,9];
    let numbersinblock1 = [];
    let numbersinblock2 = [];
    let numbersinblock3 = [];
    let numbersinblock4 = [];
    let numbersinblock5 = [];
    let numbersinblock6 = [];
    let numbersinblock7 = [];
    let numbersinblock8 = [];
    let numbersinblock9 = [];
  
    let lengthofblocks = [];
    
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


      
  for (let i=0;i<9;i++) 
  {
     
          if(block1[i][1] != 0) { numbersinblock1.push(block1[i][1]);  numberstobefilledinblock1 = numberstobefilledinblock1.filter(val => !numbersinblock1.includes(val))}
          if(block2[i][1] != 0) { numbersinblock2.push(block2[i][1]); numberstobefilledinblock2 = numberstobefilledinblock2.filter(val => !numbersinblock2.includes(val))}
          if(block3[i][1] != 0) { numbersinblock3.push(block3[i][1]); numberstobefilledinblock3 = numberstobefilledinblock3.filter(val => !numbersinblock3.includes(val))}
          if(block4[i][1] != 0) { numbersinblock4.push(block4[i][1]);   numberstobefilledinblock4 = numberstobefilledinblock4.filter(val => !numbersinblock4.includes(val))}
          if(block5[i][1] != 0) { numbersinblock5.push(block5[i][1]);  numberstobefilledinblock5 = numberstobefilledinblock5.filter(val => !numbersinblock5.includes(val))}
          if(block6[i][1] != 0) { numbersinblock6.push(block6[i][1]);  numberstobefilledinblock6 = numberstobefilledinblock6.filter(val => !numbersinblock6.includes(val))}
          if(block7[i][1] != 0) { numbersinblock7.push(block7[i][1]);   numberstobefilledinblock7 = numberstobefilledinblock7.filter(val => !numbersinblock7.includes(val))}
          if(block8[i][1] != 0) { numbersinblock8.push(block8[i][1]); numberstobefilledinblock8 = numberstobefilledinblock8.filter(val => !numbersinblock8.includes(val))}
          if(block9[i][1] != 0) { numbersinblock9.push(block9[i][1]);   numberstobefilledinblock9 = numberstobefilledinblock9.filter(val => !numbersinblock9.includes(val))}
  
               
    }
    lengthofblocks.push("block1,"+numbersinblock1.length, "block2,"+numbersinblock2.length, "block3,"+numbersinblock3.length,"block4,"+numbersinblock4.length,
     "block5,"+numbersinblock5.length, 
    "block6,"+numbersinblock6.length,"block7,"+numbersinblock7.length,"block8,"+numbersinblock8.length,"block9,"+numbersinblock9.length)
       
    lengthofblocks.sort(function (a, b) {
      a= a.split(',')[1];
      b= b.split(',')[1];
      return b - a;
    });
    
    let possibleval=[]; 
for (let blocknum=0; blocknum<9;blocknum++)
{
    
  let blockvalue = lengthofblocks[blocknum].split(",")[0];
  console.log(blockvalue);
 
   
  for(let i=0;i<9;i++)
   {
    
    let blockval = eval(`${blockvalue}[i][0]`);
    
    if(eval(`${blockvalue}[i][1]`) === 0) 
    {
     //console.log(eval(`${blockvalue}[i][0]`), "is EMPTY");
      let rowval=blockval.substr(0,2);
      let colval=blockval.substr(2,4);
      let count=0;
      
      let onlypossibleval=[];
      for(let num=1; num<=9;num++)
    {
      loop2:
      for (let j=0;j<9;j++)
      {
        
          if(eval(`${rowval}[j][1]`) === num || eval(`${colval}[j][1]`) === num || eval(`${blockvalue}[j][1]`) === num)
          {
            j++;
             
          }
          else {
            count++;
          }
            if(count===9)
            {
              onlypossibleval.push(num);
              console.log("suitable @",eval(`${blockvalue}[i][0]`),onlypossibleval);
            }
      }
              if(onlypossibleval.length > 1 || onlypossibleval.length ===1)
              {
               // console.log("TWO")
              for(let k=0;k<onlypossibleval.length;k++)
              {
                loop3:
               for (let m=0;m<9;m++)
               {
                
                let nextcolval=colval.substr(1,2);
                let secondnextcolval=colval.substr(1,2);
                let nextrowval=rowval.substr(1,2);
                let secondnextrowval=rowval.substr(1,2);
                if( colval === "8" || nextcolval === "8" 
                || nextrowval === "8" || secondnextrowval ==="9" || secondnextcolval === "9" )
                {
                  nextcolval="c9";
                  secondnextcolval="c7";
                  nextrowval="r9";
                  secondnextrowval="r7";
                  break loop3;
                  
                }
                if( colval === "9" || nextcolval === "9" 
                || nextrowval === "9" || secondnextrowval ==="8" || secondnextcolval === "8" )
                {
                  nextcolval="c8";
                  secondnextcolval="c7";
                  nextrowval="r8";
                  secondnextrowval="r7";
                  break loop3;
                  
                }
                else {

                nextcolval = eval(`${nextcolval}`)+1;
                nextcolval = "c"+nextcolval;
                nextrowval = eval(`${nextrowval}`)+1;
                nextrowval = "r"+nextrowval;
                
                
                secondnextcolval = eval(`${secondnextcolval}`)+2;
                secondnextcolval = "c"+secondnextcolval;
                secondnextrowval = eval(`${secondnextrowval}`)+2;
                secondnextrowval = "r"+secondnextrowval;
              }

               if((eval(`${nextcolval}[m][1]`) === onlypossibleval[k]) 
               || (eval(`${secondnextcolval}[m][1]`) === onlypossibleval[k])
               || (eval(`${nextrowval}[m][1]`) === onlypossibleval[k])
               || (eval(`${secondnextrowval}[m][1]`) === onlypossibleval[k])
               
               )
                {
                  console.log("PLACED @",eval(`${blockvalue}[i][0]`),onlypossibleval);
                  document.getElementById(eval(`${blockvalue}[i][0]`)).innerText=onlypossibleval[0];
                  solution();
                  return;
                }
              }
             
             }
            
          }
          count=0;
         
      }
      

    }
    
     
  }
 
   }
}
   
    
    const genrandomvalue = document.getElementById("puzzle");
    genrandomvalue.addEventListener("click", randomvalues);
    
    const sudokusolution = document.getElementById("solution");
    sudokusolution.addEventListener("click", solution);





    if(
      ((eval(`${nextcolval}[m][1]`) === possibleval[k][1]) 
     || (eval(`${nextrowval}[m][1]`) === possibleval[k][1]))
     && ((eval(`${secondnextrowval}[m][1]`) === possibleval[k][1])
     || (eval(`${secondnextcolval}[m][1]`) === possibleval[k][1]))
     

     if(colval === "c1") {  nextcolval="c2" ; secondnextcolval="c3" } 


     if(colval === "c1" || rowval === "r1")
                {
                  nextcolval="c2"
                  secondnextcolval="c3"
                  nextrowval="r2"
                  secondnextrowval="r3"

                }
                if(colval === "c2" || rowval === "r2")
                {
                  nextcolval="c3"
                  secondnextcolval="c1"
                  nextrowval="r3"
                  secondnextrowval="r1"

                }
                
                if(colval === "c3" || rowval === "r3")
                {
                  nextcolval="c2"
                  secondnextcolval="c1"
                  nextrowval="r2"
                  secondnextrowval="r1"

                }

                if(colval === "c4" || rowval === "r4")
                {
                  nextcolval="c5"
                  secondnextcolval="c6"
                  nextrowval="r5"
                  secondnextrowval="r6"

                }

                if(colval === "c5" || rowval === "r5")
                {
                  nextcolval="c6"
                  secondnextcolval="c4"
                  nextrowval="r6"
                  secondnextrowval="r4"

                }

                if(colval === "c6" || rowval === "r6")
                {
                  nextcolval="c5"
                  secondnextcolval="c4"
                  nextrowval="r5"
                  secondnextrowval="r4"

                }

                if(colval === "c7" || rowval === "r7")
                {
                  nextcolval="c8"
                  secondnextcolval="c9"
                  nextrowval="r8"
                  secondnextrowval="r9"

                }

                if(colval === "c8" || rowval === "r8")
                {
                  nextcolval="c9"
                  secondnextcolval="c7"
                  nextrowval="r9"
                  secondnextrowval="r7"

                }

                if(colval === "c9" || rowval === "r9")
                {
                  nextcolval="c8"
                  secondnextcolval="c7"
                  nextrowval="r8"
                  secondnextrowval="r7"

                }3
















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
for (let blocknum=1; blocknum<=4;blocknum++)
{
      
let blockvalue = "block"+blocknum;
console.log(blockvalue);
let possibleval=[];
let values=[];

for(let i=0;i<3;i++)
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
if((eval(`${nextcolval}[m][1]`) === values[k])) { console.log(values[k]), possiblevaluearray.push(nextcolval)}
if((eval(`${secondnextcolval}[m][1]`) === values[k])) {console.log(values[k]),possiblevaluearray.push(secondnextcolval)}
if((eval(`${nextrowval}[m][1]`) === values[k])) {console.log(values[k]),possiblevaluearray.push(nextrowval)}
if((eval(`${secondnextrowval}[m][1]`) === values[k])) {console.log(values[k]),possiblevaluearray.push(secondnextrowval)}
}

possiblevaluearray1 = [...new Set(possiblevaluearray)]
let onlyotherpossibleposition = uniquepossiblevaluearray.filter(x => !possiblevaluearray1.includes(x));
console.log(onlyotherpossibleposition)

/*if(uniquepossiblevaluearray.length === 3)
{
    //console.log(valuesarray);
    //onlypossibleval.push(values[k])
    console.log(values[k], "possible at", rowval,colval)
    onlypossibleval.push(values[k]);
}
else{
    //console.log(valuesarray, possiblevaluearray, onlypossibleval);
}*/
}

      




          }
           return onlypossibleval;
        }

        const onlypossibleval = possiblevalue(values);
       
          
            if(onlypossibleval.length === 1 || onlypossibleval.length>1 )
            {
              const surelyonlypossibleval = [...new Set(onlypossibleval)]
             console.log(surelyonlypossibleval, surelyonlypossibleval)
              if(surelyonlypossibleval.length ===1 )
                {
              console.log("PLACING @",eval(`${blockvalue}[i][0]`),surelyonlypossibleval[0]);
              document.getElementById(eval(`${blockvalue}[i][0]`)).textContent=surelyonlypossibleval[0];
              solution();
              return;
                }
                /*if(surelyonlypossibleval.length === 2 )
                {
                  values.push(surelyonlypossibleval)
                  possiblevalue(values);
                }*/
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
