
/**
 * objArror对象数组第一个出现属性等于prname的对象索引
 */
export const find =   function (objArror:any[], prNamn:string, value:any) {
	for (let i = objArror.length - 1; i >= 0; i--) {
		if (objArror[i][prNamn] == value) {
			return i
		}
	}
	return -1;
}