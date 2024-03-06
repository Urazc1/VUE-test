import axios from "axios";

async function post(router: string, array: any) {
	const fetch = () => {
		return new Promise(resolve => {
			axios.post('https://localhost:7998/'+router, array).then(res => {
				console.log(res.data);
				resolve(res.data)
			}).catch(err => {
				console.log("获取数据失败" + err);
			})
		})
	}
	return await fetch()
}

export default post;