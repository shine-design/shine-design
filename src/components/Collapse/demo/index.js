/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-05 12:28
 */
import {Collapse} from 'shineDev';

const components = {Collapse};
export default {
  basic: {
    components,
    jsx:
`
    <Collapse>
        <Collapse.Panel title="第一个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第二个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第三个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
    </Collapse>
`,
  },
  light: {
    components,
    jsx:
      `
    <Collapse isLight toggleType="plus">
        <Collapse.Panel title="第一个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第二个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第三个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
    </Collapse>
`,
  },
  solid: {
    components,
    jsx:
      `
    <Collapse isSolid toggleType="plus">
        <Collapse.Panel title="第一个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第二个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第三个折叠面板">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
    </Collapse>
`,
  },
  icon: {
    components,
    jsx:
      `
    <Collapse isSolid toggleType="plus">
        <Collapse.Panel title="第一个折叠面板" iconName="flaticon-pie-chart-1">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第二个折叠面板" iconName="flaticon2-notification">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
        <Collapse.Panel title="第三个折叠面板" iconName="flaticon2-chart">
            孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
            足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
            细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
            可都和你无关，这就叫孤独。
        </Collapse.Panel>
    </Collapse>
`,
  },
};
