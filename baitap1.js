async function findTheLargestNumber(arr) {
  if (arr instanceof Array) {
      let max = arr[0];
      for (let i =0; i<arr.length; i++) {
          if (max<arr[i]) {
              max=arr[i];
          }
      }
      return max;
    }
    throw new Error("Khong phai 1 mang");
}
async function f() {
    try {
        let result = await findTheLargestNumber([1,2,3,4,5]);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
f();