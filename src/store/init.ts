const files = require.context('./modules', false, /\.ts$/)
let state: any = {}
const actions: any = {}

files.keys().forEach((el: any) => {
  const namespace = files(el).default.namespace || el.slice(el.lastIndexOf('/') + 1, el.lastIndexOf('.ts'))
  state[namespace] = files(el).default.state || {}
  actions[namespace] = files(el).default.actions || {}
});

(function () {
  if (localStorage.localState) {
    state = JSON.parse(localStorage.localState)
    state.play.playing = false
    state.play.details = sessionStorage.playingDetails === 'true'
  }
}())

interface StoreAction {
  type: string;
  value: any;
}

interface StoreState {
  [propName: string]: any;
}

function reducer (state: StoreState, action: StoreAction): object {
  const namespace = action.type.split('/')[0]
  const actionName = action.type.split('/')[1]
  const fn = actions[namespace][actionName]
  if (typeof fn !== 'function') {
    console.error(`'${action.type}' is not a function.`)
  } else {
    fn(state[namespace], action.value)
  }
  // 保存状态信息到本地
  localStorage.localState = JSON.stringify(state)
  sessionStorage.playingDetails = state.play.details
  return Object.assign({}, state)
}

export { state, reducer }
