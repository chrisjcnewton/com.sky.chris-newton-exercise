import { Lightning, Utils } from '@lightningjs/sdk'
export default class MediaListItem extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 224,
      h: 314,
    }
  }
  _init() {
    this.patch({ src: Utils.asset(this.item.url) })
  }
  _focus() {
    this.patch({ smooth: { scale: 1.05 } })
  }
  _unfocus() {
    this.patch({ smooth: { scale: 1 } })
  }
}
