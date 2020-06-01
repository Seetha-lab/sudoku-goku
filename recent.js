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
if(onlyotherpossibleposition[0].substr(0,1) === "r")
{
id=onlyotherpossibleposition[0]+colval;
}
if(onlyotherpossibleposition[0].substr(0,1) === "c")
{
id=rowval+onlyotherpossibleposition[0];

}
//console.log(id.toString());

let value = document.getElementById(id).innerText;

if (value != null || value != undefined || value != "" || value != "undefined"  )
{
onlypossibleval.push(values[k]);                           

}
else {
document.getElementById(id).innerText=0;
}

}

if(onlyotherpossibleposition.length === 0)
{
onlypossibleval.push(values[k]);  
}



if(onlyotherpossibleposition.length === 2)
{

let id=rowval+colval;
for(let a=0;a<2;a++)
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
onlyotherpossibleposition.splice(a,1);
a++;

}
if (value === null || value === undefined || value === "" || value === "undefined"  )
{

//onlypossibleval.push(0);
a++;
}
}


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

   












   let count1=0;
            for(let m=0;m<values.length;m++)
            {
              for(let n=0;n<possibleval.length;n++)
              {
                if(values[m]===possibleval[n][1])
                  {
                    count1++;
                  }
              }
              //console.log(values[m],count1);
            }