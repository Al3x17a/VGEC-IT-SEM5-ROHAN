const twosum = function (Array,target) 
{
    for(let i=0; i<Array.length; i++) 
    {
        for(let j=0; j<=Array.length; j++) 
        {
            if(i == j) {
                continue;

            }
            if (Array[i] + Array[j] == target) 
            {
                console.log("Output:[",i,",",j,"]");
            }
        }

    }
};
twosum([1,3,7,9,15],12)