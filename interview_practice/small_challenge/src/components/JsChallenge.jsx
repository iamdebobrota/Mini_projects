import React, { useEffect, useState } from "react";

function JsChallenge() {
  ////// CHALLENGE -1 //////////
  //print unique number
  // let input1 = { a: 1, b: 33, c: 21, m: 44, d: 88 };
  // let input2 = { d: 88, a: 3, m: 44, b: 8, c: 11 };
  // // let outPut={m:44, d:88}

  // const[state, setState]=useState({})
  // function getUnique(input1, input2) {
  //   let obj = {};
  //   for (let i in input1) {
  //     if (input1[i] === input2[i]) {
  //       obj[i] = input1[i];
  //     }
  //   }
  //   return obj;
  // }
  // useEffect(() => {
  //   console.log(getUnique(input1, input2));
  // }, []);

  //////////// CHALLENGE -2 //////////
  // print second  leargest Number
  //   let arr1= [2, 3, 11, -2, 0, 7, 88];  // output = 11
  //   let arr2= [ -5, -9, 6, 8, 9, 9] // output = 8

  // const secondLearget=(arr)=>{
  // let newArr= [...new Set(arr)].sort((a, b)=> a-b);
  // return newArr[newArr.length-2]
  // }
  //   useEffect(() => {
  //     console.log(secondLearget(arr1));
  //     console.log(secondLearget(arr2));
  //   }, []);


  /////////// CHALLENGE-3 ////////////
  // ROTATE ARRAY BY TWO PLACE LIKE THIS:
//   let input= [2, 7, 11, 4, -2, 8]
//   let output = [11, 4, -2, 2, 8, 7]

//   function rotateArray(input){
//     for (let i=0;i<2;i++){
//         let temp=input[0];
//         for(let j=0;j<input.length-1;j++){
//             input[j]=input[j+1];
//         }
//         input[input.length-1]=temp;
//     }
//     return input
//   }
// useEffect(()=>{
//    console.log(rotateArray(input))
// },[])




return (
    <>
      <h2>{}</h2>
    </>
  );
}
export default JsChallenge;
