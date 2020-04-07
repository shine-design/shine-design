/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Divider, Icon, Portlet, Tabs} from 'shineDev';

const components = {Portlet, Icon, Divider, Tabs};
export default {
  basic: {
    components,
    jsx:
      `<div className="shine-portlet-helper">
    <Portlet>
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
</div>`,
  },
  header: {
    components,
    jsx:
      `<div className="shine-portlet-helper">
    <Portlet 
      hasHeader 
      hasFooter
      title="这是一个容器" 
      subTitle="这是副标题"
      actions={[
        {label: '确定', bgColor: 'brand', wide: true},
        {label: '取消', bgColor: 'secondary', wide: true}
      ]}
    >
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
</div>`,
  },
  border: {
    components,
    jsx:
      `<div className="shine-portlet-helper">
    <Portlet 
      isBordered
      hasHeader 
      hasFooter
      title="这是一个容器" 
      subTitle="这是副标题"
      actions={[
        {label: '确定', bgColor: 'brand', wide: true},
        {label: '取消', bgColor: 'secondary', wide: true}
      ]}
    >
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
</div>`,
  },
  toolbar: {
    components,
    jsx:
      `<div className="shine-portlet-helper">
    <Divider message="带图标的Toolbar" className="shine-margin-b-10" />
    <Portlet 
      isBordered
      hasHeader 
      title="这是一个容器" 
      subTitle="这是副标题"
      headerConfig={{
        hasToolbar: true,
        actions: [
          {icon: <Icon iconName="angle-down" iconProps={{source: 'line-awesome'}} />, isOnlyIcon: true, size: 'sm'},
          {icon: <Icon iconName="refresh" iconProps={{source: 'line-awesome'}} />, isOnlyIcon: true, size: 'sm'},
          {icon: <Icon iconName="close" iconProps={{source: 'line-awesome'}} />, isOnlyIcon: true, size: 'sm'}
        ]
      }}
    >
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
    <Divider message="自定义的Toolbar" className="shine-margin-b-10" />
    <Portlet 
      isBordered
      hasHeader 
      title="这是一个容器" 
      subTitle="这是副标题"
      headerConfig={{
        hasToolbar: true,
        toolbarRenderer: (
            <Tabs
              isPill
              isSingle
              tabConfig={[
                  {label: '日志', value: 1},
                  {label: '数据汇总', value: 2},
                  {label: '系统设置', value: 3}
              ]}
            />
        )
      }}
    >
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
</div>`,
  },
  bgColor: {
    components,
    jsx:
      `<div className="shine-portlet-helper">
    <Portlet 
      hasHeader 
      hasFooter
      title="这是一个容器" 
      subTitle="这是副标题"
      bgColor="danger"
    >
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
    <Portlet 
      hasHeader 
      hasFooter
      title="这是一个容器" 
      subTitle="这是副标题"
      bgColor="success"
    >
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
    <Portlet 
      hasHeader 
      hasFooter
      title="这是一个容器" 
      subTitle="这是副标题"
      bgColor="warning"
    >
        孤独这两个字拆开来看，有孩童，有瓜果，有小犬，有蝴蝶，
        足以撑起一个盛夏傍晚间的巷子口，人情味十足。稚儿擎瓜柳棚下，
        细犬逐蝶窄巷中，人间繁华多笑语，惟我空余两鬓风。孩童水果猫狗飞蝶当然热闹，
        可都和你无关，这就叫孤独。
    </Portlet>
</div>`,
  },
};
