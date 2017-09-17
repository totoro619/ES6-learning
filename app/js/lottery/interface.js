import $ from 'jquery';


class Interface{

	/**
	 * [getOmit 获取遗漏数据]
	 * @param {string} issue {当前期号}
	 */
	getOmit(issue){
		let _self=this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/omit',    //接口地址
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					_self.setOmit(res.data);
					resolve.call(_self,res);
				},
				error:function(err){
					reject.call(err);
				}
			})
		});
	}


	/**
	 * [getOpenCode 获取开奖号码]
	 *  @param {string} issue {当前期号}
	 */
	 getOpenCode(issue){
	 	let _self=this;
	 	return new Promise((resolve,reject)=>{
	 		$.ajax({
	 			url:'/get/opencode',
	 			data:{
	 				issue:issue
	 			},
	 			dataType:'json',
	 			success:function(res){
	 				_self.setOpenCode(res.data);
	 				resolve.call(_self,res);
	 			},
	 			error:function(err){
	 				reject.call(err);
	 			},
	 		})
	 	});
	 }


	 /**
	 * [getState 获取当前状态]
	 *  @param {string} issue {当前期号}
	 */
	getState(issue){
		let _self=this;
	 	return new Promise((resolve,reject)=>{
	 		$.ajax({
	 			url:'/get/state',
	 			data:{
	 				issue:issue
	 			},
	 			dataType:'json',
	 			success:function(res){
	 				resolve.call(_self,res);
	 			},
	 			error:function(err){
	 				reject.call(err);
	 			},
	 		})
	 	});
	}

}

export default Interface