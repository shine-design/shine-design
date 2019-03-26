/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Progress, Bar} from 'shineDev';

const components = {Progress, Bar};

export default {
  basic: {
    components,
    jsx: `
      <Progress className="shine-progress-helper">
        <Bar percent={0} />
      </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={25} />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={50} />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={75} />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={100} />
      </Progress>
`,
  },
  bg: {
    components,
    jsx: `
      <Progress className="shine-progress-helper">
        <Bar percent={10} className="shine--bg-success" />
      </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={25} className="shine--bg-danger" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={50} className="shine--bg-warning" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={75} className="shine--bg-info" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={100} className="shine--bg-brand" />
      </Progress>
`,
  },
    height: {
      components,
      jsx: `
      <Progress height="small" className="shine-progress-helper">
        <Bar percent={80} className="shine--bg-success" />
      </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={80} className="shine--bg-danger" />
        </Progress>
      <Progress height="large" className="shine-progress-helper">
        <Bar percent={80} className="shine--bg-warning" />
        </Progress>
      <Progress height="60px" className="shine-progress-helper">
        <Bar percent={80} className="shine--bg-info" />
        </Progress>
`,
    },
    striped: {
      components,
      jsx: `
      <Progress className="shine-progress-helper">
        <Bar percent={10} isStriped={true} className="shine--bg-success" />
      </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={25} isStriped={true} className="shine--bg-danger" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={50} isStriped={true} className="shine--bg-warning" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={75} isStriped={true} className="shine--bg-info" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={100} isStriped={true} className="shine--bg-brand" />
      </Progress>
`,
    },
    animated: {
      components,
      jsx: `
      <Progress className="shine-progress-helper">
        <Bar percent={10} isAnimated={true} className="shine--bg-success" />
      </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={25} isAnimated={true} className="shine--bg-danger" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={50} isAnimated={true} className="shine--bg-warning" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={75} isAnimated={true} className="shine--bg-info" />
        </Progress>
      <Progress className="shine-progress-helper">
        <Bar percent={100} isAnimated={true} className="shine--bg-brand" />
      </Progress>
`,
    },
    multi: {
      components,
      jsx: `
      <Progress className="shine-progress-helper">
        <Bar percent={10} className="shine--bg-success" />
        <Bar percent={20} className="shine--bg-danger" />
        <Bar percent={30} className="shine--bg-warning" />
        <Bar percent={20} className="shine--bg-info" />
        <Bar percent={10} className="shine--bg-primary" />
        <Bar percent={10} className="shine--bg-grace" />
      </Progress>
`,
    },
  }
