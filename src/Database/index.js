const B=require("./childDatabase");function D(t){try{this.fileName=t,this.id=0,this.childCount=0,t?t.endsWith(".bookman")?this.fileName=t:this.fileName=`${t}.bookman`:this.fileName="database.bookman",require("./methods/checkFile")(this.fileName,this.id),this.set=function(t,e){try{let r=JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"));require("../customLodash").set(r[this.id],t,e),require("./methods/writeFile")(this.fileName,r)}catch(t){throw new Error("[BookmanDB] "+t)}},this.get=function(t){try{let e=JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"));return require("../customLodash").get(e[this.id],t)}catch(t){throw new Error("[BookmanDB] "+t)}},this.fetch=function(t){try{let e=JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"));return require("../customLodash").get(e[this.id],t)}catch(t){throw new Error("[BookmanDB] "+t)}},this.push=function(t,e){try{this.update(t,t=>(t.push(e),t))}catch(t){throw new Error("[BookmanDB] "+t)}},this.has=function(t){try{let e=JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"));return require("../customLodash").has(e[this.id],t)}catch(t){throw new Error("[BookmanDB] "+t)}},this.shift=function(t){try{this.update(t,t=>(t.shift(),t))}catch(t){throw new Error("[BookmanDB] "+t)}},this.unshift=function(t,e){try{this.update(t,t=>(t.unshift(e),t))}catch(t){throw new Error("[BookmanDB] "+t)}},this.pop=function(t){try{this.update(t,t=>(t.pop(),t))}catch(t){throw new Error("[BookmanDB] "+t)}},this.add=function(t,e){try{this.update(t,t=>t+=e)}catch(t){throw new Error("[BookmanDB] "+t)}},this.subtract=function(t,e){try{this.update(t,t=>t-=e)}catch(t){throw new Error("[BookmanDB] "+t)}},this.update=function(t,e){try{let r=JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"));require("../customLodash").update(r[this.id],t,e),require("./methods/writeFile")(this.fileName,r)}catch(t){throw new Error("[BookmanDB] "+t)}},this.delete=function(t){try{let e=JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"));require("../customLodash").unset(e[this.id],t),require("./methods/writeFile")(this.fileName,e)}catch(t){throw new Error("[BookmanDB] "+t)}},this.map=function(){try{return JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"))[this.id]}catch(t){throw new Error("[BookmanDB] "+t)}},this.mapChild=function(){try{return JSON.parse(require("fs").readFileSync(`./${this.fileName}`,"utf8"))}catch(t){throw new Error("[BookmanDB] "+t)}},this.createChild=function(){return new B(this)}}catch(t){throw new Error("[BookmanDB] "+t)}}module.exports=D;