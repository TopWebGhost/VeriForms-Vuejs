import { SHOWLOGIN ,HIDELOGIN,SHOWLOADING,HIDELOADING} from './mutation-types'

export default {
 
  [SHOWLOGIN] (state) {
    state.login.show = true
  },
  [HIDELOGIN] (state) {
    state.login.show = false
  },
  [SHOWLOADING] (state){
    state.loading = true
  },
  [HIDELOADING] (state){
    state.loading = false
  }
}
