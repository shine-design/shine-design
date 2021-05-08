/**
 * @File 组件库 - 声明 - 扩展文件类型
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 10:51:22
 */

declare module "*.css" {
    const style: any;
    export default style
}

declare module "*.scss" {
    const style: any;
    export default style
}

declare module "*.less" {
    const style: any;
    export default style
}

declare module '*.svg' {
    const path: string
    export default path
}

declare module '*.bmp' {
    const path: string
    export default path
}

declare module '*.gif' {
    const path: string
    export default path
}

declare module '*.jpg' {
    const path: string
    export default path
}

declare module '*.jpeg' {
    const path: string
    export default path
}

declare module '*.png' {
    const path: string
    export default path
}
