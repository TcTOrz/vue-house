export default function (Vue) {
  const version = Number(Vue.version.split('.')[0])
  // 低版本不支持
  if (version >= 2) {
    Vue.mixin({ beforeCreate: houseInit })
  }
}

function houseInit() {
  const options = this.$options
  // this.$house = {}
  if (options.house) {
    this.$house = typeof options.house === 'function'
      ? options.house()
      : options.house
  } else if (options?.parent?.$house) {
    this.$house = options.parent.$house
  }

  // else if (options.parent && options.parent.$house) {
  //   this.$house = options.parent.$house
  // }
}