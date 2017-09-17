{
	let arr=['hello','world'];
	let map=arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}

{
	let obj={
		start:[1,3,5],
		end:[7,9,10],
		[Symbol.iterator](){
			let _self=this;
			let index=0;
			let arr=_self.start.concat(_self.end);
			let len=arr.length;
			console.log(arr);
			return {
				next(){
					if (index < len) {
						return {
							value:arr[index++],
							done:false
						}
					} else {
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}

	for (let key of obj){
		console.log('key',key);
	}
}

{
	let draw=function(count){
		//具体抽奖逻辑
		console.log(`剩余${count}次`);
	}

	let reside=function* (count){
		while(count>0){
			count--;
			yield draw(count);
		}
	}

	let star=reside(6);
	let btn=document.createElement('button');
	btn.id='start';
	btn.textContent='抽奖';
	document.body.appendChild(btn);
	document.getElementById('start').addEventListener('click',function(){
		star.next()
	},false)
}

{
	//长轮询
	let ajax=function* (){
		yield new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve({code:0})
			},200)
		})
	};

	let pull=function(){
		let generator=ajax();
		let star=generator.next();
		star.value.then(function(d){
			if (d.code!=0) {
				pull();
				console.info('wait');
			} else {
				console.info(d);
			}
		})
	}

	pull();
}