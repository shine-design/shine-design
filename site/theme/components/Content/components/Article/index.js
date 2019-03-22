/* eslint-disable */
/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 15:07
 */
import React, {Component} from 'react';
import {DocPreview} from 'docz';
import H1 from '../../../Base/H1';
import H2 from '../../../Base/H2';
import Ul from '../../../Base/Ul';
import Code from '../../../Base/Code';
import Table from '../../../Base/Table';

export default class extends Component {

  render() {
    return (
      <article className="col-lg-9 col-xxl-10 doc-content">

        <div className="row justify-content-between doc-content-body">
          <article className="col-md-9 col-xxl-8">

            <DocPreview
              components={{
                h1: H1,
                h2: H2,
                ul: Ul,
                code: Code,
                table: Table,
              }}
            />

          </article>
        </div>
      </article>
    );
  }
}
