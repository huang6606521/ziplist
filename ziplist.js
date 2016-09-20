/**
 *
 * Created by jipenghuang on 9/19/16.
 */
const testList1 = [1,2,3];
const testList2 = ['a','b','c'];

function zipListSimpleWay(list1,list2) {
  let list =[];
  let j =0,k=0;
  for(let i=0;i<list1.length*2;i++){
    if(i%2===0){
      list[i]= list1[j];
      j++;
    }
    else {
      list[i]=list2[k];
    }
  }
  return list;
}

console.log(zipListSimpleWay(testList1,testList2));