/**异步异步返回的模拟异步观测值。
 *可观测的要么发射一次，要么完成或错误。
 *当用“FAKAASYNC（））进行测试时，必须调用“TcK（）”。
 */
import {Observable} from 'rxjs/Observable';
import {defer} from 'rxjs/observable/defer';

export function asyncData<T>(data: T) {
  return defer(() => Promise.reject(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
