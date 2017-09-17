{
	let ajax=function(){
		console.log('执行1');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},1000);
		})
	};

	ajax()
	  .then(function(){
	  	console.log('timeout1');
	  	return new Promise(function(resolve,reject){
	  		setTimeout(function(){
	  			resolve()
	  		},2000);
	  	});
	  }).then(function(){
	  	console.log('timeout2');
	  })
}

{
	let ajax=function(num){
		console.log('执行2');
		return new Promise((resolve,reject)=>{
			if (num>5) {
				resolve()
			} else {
				// throw new Error('出错了')
				reject('啊呀，出现bug了')
			}
		})
	}

	ajax(6).then(function(){
		console.log('num',6);
	}).catch(function(err){
		console.log(err);
	})

	ajax(3).then(function(){
		console.log('num',3);
	}).catch(function(err){
		console.log(err);
	})
}

{
	//所有图片加载完后再加载页面
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img=document.createElement('img');
			img.src=src;
			img.onload=function(){
				resolve(img)
			};
			img.onerror=(err)=>reject(err);
		})
	}

	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
			
		
	}

	Promise.all([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs)

	
	  
}

{
	//一个图片加载完后再加载页面
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img=document.createElement('img');
			img.src=src;
			img.onload=function(){
				resolve(img)
			};
			img.onerror=(err)=>reject(err);
		})
	}

	function showImgs(img){
		let p=document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p)		
	}

	Promise.race([
		loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
		loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
	]).then(showImgs)

	
	  
}
