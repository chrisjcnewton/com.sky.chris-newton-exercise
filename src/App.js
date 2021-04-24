/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'
import MediaList from './components/MediaList'
import Media from './mediaData/media'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        // color: 0xff141414,
        // rect: true,
        src: Utils.asset('images/netflix-placholder.jpg'),
      },
      MediaList: {
        x: 150,
        y: 605,
        type: MediaList,
        signals: {
          updateHeader: true,
        },
      },
    }
  }

  _init() {
    this.tag('MediaList').items = Media.data.map(tile => ({ url: tile.url }))
    this._setState('MediaList')
  }

  static _states() {
    return [
      class MediaList extends this {
        _getFocused() {
          return this.tag('MediaList')
        }
      },
    ]
  }
}
