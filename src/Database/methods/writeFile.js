module.exports=((r,o)=>{try{require("fs").writeFileSync(`./${r}`,JSON.stringify(o,null,4),r=>{if(r)throw new Error("[Bookman DB] "+r)})}catch(r){throw new Error("[BookmanDB] "+r)}});