/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Divider, Pagination} from 'shineDev';

const components = {Pagination, Divider};
export default {
  basic: {
    components,
    jsx:
      `<div className="shine-pagination-helper">
    <Divider message="基础页码" />
    <Pagination totalPageCount={20} currentPage={3} />
    <Divider message="其他尺寸的页码" />
    <Pagination totalPageCount={20} currentPage={20} size="sm" />
    <Pagination totalPageCount={20} currentPage={2} size="lg" />
    <Divider message="圆形样式的页码" />
    <Pagination totalPageCount={20} currentPage={1} circleStyle currentLineCount={100} />
    <Divider message="不同颜色的页码" />
    <Pagination totalPageCount={20} currentPage={7} bgColor="danger" circleStyle />
    <Pagination totalPageCount={20} currentPage={5} bgColor="success" currentLineCount={30} />
    <Pagination totalPageCount={20} currentPage={2} bgColor="accent" />
</div>`,
  },
};
