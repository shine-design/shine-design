/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Col, Dropdown, Row} from 'shineDev';

const components = {Dropdown, Row, Col};
export default {
  basic: {
    components,
    jsx:
      `<div className="shine-dropdown-helper">
    <Dropdown 
      title="下拉菜单"
      options={[
        {label:'操作按钮一'}},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      bgColor="success"
      title="下拉菜单"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      bgColor="danger"
      title="下拉菜单"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      bgColor="primary"
      title="下拉菜单"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
</div>`,
  },
  onlyIcon: {
    components,
    jsx:
      `<div className="shine-dropdown-helper">
    <Dropdown 
      isHideToggle={true}
      bgColor={true}
      toggleProps={{icon:'flaticon-more-1', isOnlyIcon:true, hoverColor: 'danger' }}
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      isHideToggle={true}
      bgColor={true}
      toggleProps={{icon:'flaticon-more-1', isOnlyIcon:true, bgColor: 'success' }}
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      isHideToggle={true}
      bgColor={true}
      toggleProps={{icon:'flaticon-more', isOnlyIcon:true, hoverColor: 'accent' }}
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      isHideToggle={true}
      bgColor={true}
      toggleProps={{icon:'flaticon-more', isOnlyIcon:true, bgColor: 'warning' }}
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
</div>`,
  },
  icon: {
    components,
    jsx:
      `<div className="shine-dropdown-helper">
    <Dropdown 
      title="带图标的菜单"
      bgColor="brand"
      options={[
        {label:'操作按钮一', iconName: 'flaticon-share'},
        {label:'操作按钮二', value:2, iconName: 'flaticon-settings'},
        {label:'操作按钮二', value:3, iconName: 'flaticon-graphic-2'}
      ]}
    />
    <Dropdown 
      title="自定义图标菜单"
      bgColor="grace"
      options={[
        {label:'操作按钮一', iconName: 'bell', iconProps: {source: 'line-awesome'}},
        {label:'操作按钮二', value:2, iconName: 'cloud-upload', iconProps: {source: 'line-awesome'}},
        {label:'操作按钮二', value:3, iconName: 'cog', iconProps: {source: 'line-awesome'}}
      ]}
    />
</div>`,
  },
  split: {
    components,
    jsx:
      `<div className="shine-dropdown-helper">
    <Dropdown 
      isSplit
      title="下拉菜单"
      bgColor="focus"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      isSplit
      title="下拉菜单"
      bgColor="accent"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      isSplit
      bgColor="danger"
      title="下拉菜单"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      isSplit
      bgColor="primary"
      title="下拉菜单"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
</div>`,
  },
  size: {
    components,
    jsx:
      `<div className="shine-dropdown-helper">
  <Row>
    <Col col={12}>
      <Dropdown 
        title="大的下拉菜单"
        toggleProps={{size:'lg'}}
        options={[
          {label:'操作按钮一'},
          {label:'操作按钮二', value:2},
          {label:'操作按钮二', value:3}
        ]}
      />
    </Col>
    <Col col={12}>
      <Dropdown 
        isSplit
        title="大的下拉菜单"
        toggleProps={{size:'lg'}}
        options={[
          {label:'操作按钮一'},
          {label:'操作按钮二', value:2},
          {label:'操作按钮二', value:3}
        ]}
      />
    </Col>
    <Col col={12}>
      <Dropdown 
        bgColor="danger"
        title="小的下拉菜单"
        toggleProps={{size:'sm'}}
        options={[
          {label:'操作按钮一'},
          {label:'操作按钮二', value:2},
          {label:'操作按钮二', value:3}
        ]}
      />
    </Col>
    <Col col={12}>
      <Dropdown 
        isSplit
        bgColor="danger"
        title="小的下拉菜单"
        toggleProps={{size:'sm'}}
        options={[
          {label:'操作按钮一'},
          {label:'操作按钮二', value:2},
          {label:'操作按钮二', value:3}
        ]}
      />
    </Col>  
  </Row>
</div>`,
  },
  direction: {
    components,
    jsx:
      `<div className="shine-dropdown-helper helper center">
    <Dropdown 
      title="向右菜单"
      direction="right"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      title="向下菜单"
      direction="down"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      title="向上菜单"
      direction="up"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      title="向左菜单"
      direction="left"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
</div>`,
  },
  align: {
    components,
    jsx:
      `<div className="shine-dropdown-helper helper center">
    <Dropdown 
      title="左对齐"
      menuAlign="left"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      title="右对齐"
      menuAlign="right"
      options={[
        {label:'操作按钮一'},
        {label:'操作按钮二', value:2},
        {label:'操作按钮二', value:3}
      ]}
    />
</div>`,
  },
  item: {
    components,
    jsx:
      `<div className="shine-dropdown-helper">
    <Dropdown 
      title="文本菜单"
      options={[
         {label:'我是一个文本',type:'label'},
        {label:'操作按钮一'},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      title="分割线菜单"
      options={[
        {label:'操作按钮一'},
        {type:'divider'},
        {label:'操作按钮二', value:3}
      ]}
    />
    <Dropdown 
      title="各种状态"
      options={[
        {label:'默认状态'},
        {label:'禁用状态', value:3, disabled:true},
        {label:'激活状态', value:3, active:true},
      ]}
    />
</div>`,
  },
  event: {
    components,
    jsx:
      `<div className="shine-dropdown-helper">
        <Dropdown 
          title="下拉菜单"
          options={[
            {label:'操作按钮一', onClick: ()=>alert('操作按钮一')},
            {label:'操作按钮二', onClick: ()=>alert('操作按钮二')},
            {label:'操作按钮三', onClick: ()=>alert('操作按钮三')}
          ]}
        />
    </div>`,
  },
};
