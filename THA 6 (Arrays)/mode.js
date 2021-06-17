var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
count = 0;
high=0;
function mode(arr){
    arr.map((item)=>{
        arr.map((items)=>{
            if(item==items)
            {
                count=count+1;
            }
        })
        if(count>high)
        {
            high=count;
        }
        count=0;
    })
    console.log(high);
}
mode(arr1);
