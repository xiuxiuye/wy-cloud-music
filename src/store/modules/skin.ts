export default {
  namespace: 'skin',
  state: {
    current: 1,
    colors: {
      primaryColor: 'rgba(198, 47, 47, 1)',
      subColor: 'rgba(232, 60, 60, 1)',
      contentBGColor: 'rgba(250, 250, 250, 1)',
      siderBGColor: 'rgba(252, 252, 253, 1)',
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
