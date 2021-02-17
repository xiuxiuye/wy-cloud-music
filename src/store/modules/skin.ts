export default {
  namespace: 'skin',
  state: {
    current: 0,
    colors: {
      primaryColor: 'rgba(33, 33, 36, 1)',
      subColor: 'rgba(33, 33, 36, 1)',
      contentBGColor: 'rgba(22, 24, 28, 1)',
      siderBGColor: 'rgba(25, 27, 31, 1)',
      balanceColor: 'rgba(198, 47, 47, 1)'
    }
  },
  actions: {
    setCurrent (state: object, value: number) {
      (state as any).current = value
    },
    setColors (state: object, value: object) {
      (state as any).colors = value
    }
  }
}
