export default {
  props: {
    renderFun: {
      type: Function,
      default: () => ''
    },
  },
  render(c) {
    return this.renderFun(c);
  }
}