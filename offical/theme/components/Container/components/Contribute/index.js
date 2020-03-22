import React, {Component, Fragment} from 'react';
import Background from 'siteSrc/components/Common/Background';
import Article from 'siteSrc/components/Common/Article';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Background title="贡献指南" />
                <div id='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-content">
                                    <Article title='贡献指南'>
                                        <p>Hi，首先感谢你使用 Shine Design。</p>
                                        <p>Shine Design 是一套为开发者、设计师和产品经理准备的开源 UI 设计语言，旨在提供统一的用户交互设计。它基于 React
                                            开发，并提供了配套的设计资源，充分满足可定制化的需求。
                                        </p>
                                        <p>Shine Design 的成长离不开大家的支持，如果你愿意为 Shine Design
                                            贡献代码或提供建议，这篇指南会指导你如何贡献一份自己的力量，请在你要提 issue 或者 pull request
                                            之前花几分钟来阅读一遍这篇指南。
                                        </p>
                                        <h4>行为准则</h4>
                                        <p>我们有一份<a
                                          href='//github.com/shine-design/shine-design/blob/master/CODE_OF_CONDUCT.md'
                                        >行为准则
                                                </a>，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。
                                        </p>
                                        <h4>透明的开发</h4>
                                        <p>我们所有的工作都会放在 <a
                                          href='//github.com/shine-design/shine-design'
                                        >GitHub
                                                       </a> 上。不管是核心团队的成员还是外部贡献者的
                                            Pull Request 都需要经过同样流程的 Code Review。
                                        </p>
                                        <h4>分支管理</h4>
                                        <p>基于我们的<a
                                          href='/changelog'
                                        >发布周期
                                                </a>，我们长期维护两个分支 <code>master</code> 和 <code>feature</code>。如果你要修一个Bug，那么请发
                                            Pull Request 到 <code>master</code>；如果你要提一个增加新功能的 Pull
                                            Request，那么请基于 <code>feature</code> 分支来做。
                                        </p>
                                        <h4>Bugs</h4>
                                        <p>我们使用 <a href='//github.com/shine-design/shine-design/issues'>GitHub
                                            Issues
                                                </a> 来做 Bug 追踪。 如果你想要你发现的 Bug 被快速解决，最好的办法就是通过我们提供的 <a
                                                  href='//github.com/shine-design/shine-design/blob/master/.github/ISSUE_TEMPLATE/bug_report.md'
                                                >Bug
                                            Report
                                                                                                   </a> 模板
                                            来提供重现。
                                        </p>
                                        <p>在你报告一个 bug 之前，请先确保已经搜索过已有的 Issue 和阅读了我们的 <a href='/faq'>FAQ</a>。</p>
                                        <h4>Features</h4>
                                        <p>如果你有改进我们的产品或者新增功能的想法，我们同样推荐你使用我们提供的 <a
                                          href='//github.com/shine-design/shine-design/blob/master/.github/ISSUE_TEMPLATE/feature_request.md'
                                        >Feature
                                            Request
                                                                               </a> 模板来新建一个添加新功能的 Issue。
                                        </p>
                                        <h4>第一次贡献</h4>
                                        <p>如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这篇文章来学习：</p>
                                        <p><a href='//segmentfault.com/a/1190000000736629'>如何优雅地在github上贡献代码</a></p>
                                        <p>如果你打算开始处理一个 issue，请先检查一下 issue 下面的留言以确保没有别人正在处理这个
                                            Issue。如果当前没有人在处理的话你可以留言告知其他人你将会处理这个 Issue，以免别人重复劳动。
                                        </p>
                                        <p>如果之前有人留言说会处理这个 Issue 但是一两个星期都没有动静，那么你也可以接手处理这个 Issue，当然还是需要留言告知其他人。</p>
                                        <h4>Pull Request</h4>
                                        <p>Shine Design 团队会关注所有的 Pull Request，我们会 Review
                                            以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。
                                        </p>
                                        <p>在你<b>发送 Pull Request 之前</b>，请确认你是按照下面的步骤来做的：</p>
                                        <ol>
                                            <li><p>基于正确的分支做修改。</p></li>
                                            <li><p>在项目根目录下运行了 <code>npm install</code>。</p></li>
                                            <li><p>如果你修复了一个 Bug 或者新增了一个功能，请确保经过了相应的测试，这很重要。</p></li>
                                            <li><p>确保你所有的代码都通过了 <code>Eslint</code> 代码规范检查。</p></li>
                                        </ol>
                                        <p>由于 Shine Design 拥有固定的更新周期，所以你的 Pull Request 不一定会在第一时间被发布。</p>
                                        <p>如果你是修复了某个 Bug，那么我们在合并你的修改后会尽快发布一个修订版本，然后你只要重新安装你的依赖就可以使用新发布的版本了。</p>
                                        <p>如果你的 Pull Request 是新增了某个功能，我们会根据功能优先级进行评估，并在合适版本上线。</p>
                                        <h4>开发流程</h4>
                                        <p>在你 clone 了 Shine Design 的代码并且使用 <code>npm
                                            install
                                                                           </code> 安装完依赖后，你还可以运行下面几个常用的命令：
                                        </p>
                                        <ol>
                                            <li><p><code>npm start</code> 在本地运行 Shine Design 的网站。</p></li>
                                            <li><p><code>npm run lint</code> 检查代码风格。</p></li>
                                            <li><p><code>npm test</code> 运行测试。</p></li>
                                            <li><p><code>npm run publish</code> 构建 Shine Design 的 UMD 版本到 dist 目录。</p></li>
                                        </ol>
                                    </Article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
