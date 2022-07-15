const axios=require("axios")
const redis=require("redis")


// connecting to reddis for cache purpose
const redisClient=redis.createClient(
    13689,
    "redis-13689.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    {no_ready_check:true}
);
redisClient.auth("NzZfQY19JxmdHy7Wa2PtFqISnbNL1W10", function(err){
    if(err) throw err;
});
redisClient.on("connect", async function(){
    console.log("connected to reddis");
});


const getnews=async function(req,res){
    const options={
        method:"get",
        url:`https://gnews.io/api/v4/top-headlines?token=b237a23b4b585ca0858dc8c134298cfe&lang=en`
    }
    let result=await axios(options)
    let temp=result.data.main.temp
    return res.status(200).send({data:temp})
}
module.exports.getnews=getnews