/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-19 14:13
 */
import React, {Component, Fragment} from 'react';
// import Note from "../common/Note/Note";
import Background from 'siteSrc/components/Common/Background';
import Article from 'siteSrc/components/Common/Article';
import Code from 'siteSrc/components/Common/Code';
import Step from 'siteSrc/components/Common/Step';
import Content from 'siteSrc/components/Common/Content';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Background title="构建工具" />
        <Content>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-content">
                  <Article>
                    <h4>什么是 Shine Tool？</h4>
                    <p>
                      Shine Tool 是一个用于快速构建基于 React 和 Redux 的轻量应用框架的脚手架工具，底层实现来自 Facebook
                      公司提供的
                      <a href='https://github.com/facebook/create-react-app#readme'>create-react-app</a>
                      ，支持 side effects、热替换、动态加载、react-native、SSR 等，同时集成了最新的 Shine Design 开发环境
                      ，可以通过该工具快速搭建项目并进行开发。
                    </p>
                    <h4>安装</h4>
                    <Step {...{
                      steps: [
                        {
                          title: '安装 Shine Tool',
                          content: (
                            <Fragment>
                              <p>你可以通过在命令行中输入如下指令，完成 Shine Tool 的安装。</p>
                              <Code {...{
                                code: `
npm install shine-tool -g
                    `,
                                language: 'apacheconf',
                              }}
                              />
                            </Fragment>
                          ),
                        }, {
                          title: '创建新应用',
                          content: (
                            <Fragment>
                              <p>安装完 Shine Tool 之后，就可以在命令行里访问到 <code>shine-tool</code> 命令（<a
                                href='https://stackoverflow.com/questions/15054388/global-node-modules-not-installing-correctly-command-not-found'
                              >不能访问？
                                                                                          </a>）。现在，你可以通过
                                <code>shine-tool init</code>
                                创建新应用，你可以通过在命令行中输入如下指令，其中 <code>projectName</code> 为项目名称。
                              </p>
                              <Code {...{
                                code: `
shine-tool init projectName
                    `,
                                language:'apacheconf',
                              }}
                              />
                              <p>这会创建 <code>projectName</code>
                                目录（若不存在），包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据
                                mock
                                服务、代理服务器等功能。
                              </p>
                            </Fragment>
                          ),
                        }, {
                          title: '启动服务器',
                          content: (
                            <Fragment>
                              <p>通过 <code>cd</code> 命令进入 <code>projectName</code>
                                目录，并启动开发服务器，你可以在命令行中输入如下指令启动服务器。
                              </p>
                              <Code {...{
                                code: `
//进入projectName项目
cd projectName

//开启测试服务器
npm run dev
                    `,
                                language:'apacheconf',
                              }}
                              />
                              <p>静待片刻，开发服务器启动成功后，你可以在浏览器中访问 <a
                                href='http://127.0.0.1:8000'
                              >http://127.0.0.1:8000
                                                            </a> ，当看到欢迎页面时，项目搭建成功。
                              </p>
                            </Fragment>
                          ),
                        }, {
                          title: '打包上线',
                          content: (
                            <Fragment>
                              <p>当项目开发完成，需要将代码进行编译，混淆和打包之后，部署至服务器上，你可以在命令行中输入如下指令完成项目打包。</p>
                              <Code {...{
                                code: `
//进入projectName项目
cd projectName

//编译项目
npm run build
                    `,
                                language:'apacheconf',
                              }}
                              />
                              <p>静待片刻，项目即可打包完成，打包后项目文件位于 <code>/dist</code> 目录下，可以将该文件夹下的所有文件部署至服务器上，即可完成上线。
                              </p>
                            </Fragment>
                          ),
                        },
                      ],
                    }}
                    />
                    <h4>目录结构</h4>
                  </Article>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Fragment>
    );
  }
}
