/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 15:07
 */
import React, {Component} from 'react';
import {DocPreview} from 'docz';

export default class extends Component {
  componentDidMount() {
    new SmoothScroll('[data-scroll]');

    function make_sticky() {
      $(".sticky").stick_in_parent();
    }

    let realWidth = $(window).width();

    if (realWidth < 768) {
      $(".sticky").trigger("sticky_kit:detach");
    } else {
      make_sticky();
    }


    $(window).resize(function () {

      realWidth = $(window).width();

      if (realWidth < 768) {
        $(".sticky").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }

    });

    $('.nav-item .collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
      $(".sticky").trigger("sticky_kit:recalc");
    });

  }

  render() {
    return (
      <article className="col-lg-9 col-xxl-10 doc-content">

        <div className="row justify-content-between doc-content-body">
          <article className="col-md-9 col-xxl-8">
            <DocPreview />
            <h1 className="h2 font-weight-light">Your <b>documentation</b> template can look like this. Check it out.
            </h1>
            <section id="section-1">
              <h2 className="section-title-2">Typography
                <a
                  data-scroll
                  href="#section-1"
                  className="anchor"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Copy URL"
                >
                  <i className="icon-hash"/>
                </a>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet
                perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas
                nesciunt sunt aut cupiditate fugiat!</p>
              <div className="row gutter-3">
                <div className="col-6 col-md-4 col-xxl-3">
                  <div className="type boxed">
                    <div>
                      <span className="badge badge-primary">New</span>
                      <h5 className="type-title">Open Sans</h5>
                      <div className="type-example">
                        <span>Ab</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xxl-3">
                  <div className="type bordered">
                    <div>
                      <h5 className="type-title">Open Sans Bold</h5>
                      <div className="type-example">
                        <span className="font-weight-bold">Ab</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-2">
              <h2 className="section-title-2">Colors
                <a data-scroll href="#section-2" className="anchor" data-toggle="tooltip" data-placement="top"
                   title="Copy URL">
                  <i className="icon-hash"/>
                </a>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet
                perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas
                nesciunt sunt aut cupiditate fugiat!</p>
              <div className="row gutter-2">
                <div className="col-md-6 col-xxl-4">
                  <div className="color boxed">
                    <span className="color-example bg-blue"></span>
                    <div className="color-info">
                      <h5 className="color-title">Blue</h5>
                      <span>#064CDB</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-4">
                  <div className="color bordered">
                    <span className="color-example bg-green"></span>
                    <div className="color-info">
                      <h5 className="color-title">Green</h5>
                      <span>#28a745</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-4">
                  <div className="color bordered">
                    <span className="color-example bg-red"></span>
                    <div className="color-info">
                      <h5 className="color-title">Red</h5>
                      <span>#dc3545</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-3">
              <h2 className="section-title-2">File Tree <a data-scroll href="#section-3" className="anchor"
                                                           data-toggle="tooltip" data-placement="top"
                                                           title="Copy URL"><i className="icon-hash"></i></a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet adipisci non similique quia maxime
                molestias id, laboriosam cumque doloribus reprehenderit eaque minus quisquam eius a perferendis ut.
                Ipsum, dignissimos laboriosam.</p>
              <div className="row">
                <div className="col col-xxl-8">
                  <div className="boxed p-3">
                    <ul className="file-tree">
                      <li className="file-tree-folder empty">Images
                        <span>description</span>
                      </li>
                      <li className="file-tree-folder">CSS
                        <span>description</span>
                        <ul>
                          <li>file name <span>description</span></li>
                          <li>file name <span>description</span></li>
                        </ul>
                      </li>
                      <li className="file-tree-folder">HTML
                        <span>description</span>
                        <ul>
                          <li className="file-tree-folder">PAGES
                            <span>description</span>
                            <ul>
                              <li>file name <span>description</span></li>
                              <li>file name <span>description</span></li>
                              <li>file name <span>description</span></li>
                            </ul>
                          </li>
                          <li>file name <span>description</span></li>
                          <li>file name <span>description</span></li>
                        </ul>
                      </li>
                      <li>index.html <span>description</span></li>
                      <li>components.html <span>description</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>


            <section id="section-4">
              <h2 className="section-title-2">Table <a data-scroll href="#section-4" className="anchor"
                                                       data-toggle="tooltip" data-placement="top" title="Copy URL"><i
                className="icon-hash"></i></a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet adipisci non similique quia maxime
                molestias id, laboriosam cumque doloribus reprehenderit eaque minus quisquam eius a perferendis ut.
                Ipsum, dignissimos laboriosam.</p>
              <div className="row">
                <div className="col col-xxl-8">
                  <div className="table-responsive-md">
                    <table className="table table-striped boxed">
                      <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>


            <section id="section-5">
              <h2 className="section-title-2">Accordion <a data-scroll href="#section-5" className="anchor"
                                                           data-toggle="tooltip" data-placement="top"
                                                           title="Copy URL"><i className="icon-hash"></i></a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet adipisci non similique quia maxime
                molestias id, laboriosam cumque doloribus reprehenderit eaque minus quisquam eius a perferendis ut.
                Ipsum, dignissimos laboriosam.</p>
              <div className="row">
                <div className="col col-xxl-8">
                  <div className="accordion accordion-card" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button className="btn btn-link" type="button" data-toggle="collapse"
                                  data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Panel One
                          </button>
                        </h5>
                      </div>

                      <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                           data-parent="#accordionExample">
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                          squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                          labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                          haven't heard of them accusamus labore sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Panel Two
                          </button>
                        </h5>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                           data-parent="#accordionExample">
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                          squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                          labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                          haven't heard of them accusamus labore sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                  data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Panel Three
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                           data-parent="#accordionExample">
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                          squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                          labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                          haven't heard of them accusamus labore sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section id="section-6">
              <h2 className="section-title-2">Video <a data-scroll href="#section-6" className="anchor"
                                                       data-toggle="tooltip" data-placement="top" title="Copy URL"><i
                className="icon-hash"></i></a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet adipisci non similique quia maxime
                molestias id, laboriosam cumque doloribus reprehenderit eaque minus quisquam eius a perferendis ut.
                Ipsum, dignissimos laboriosam.</p>
              <div className="row">
                <div className="col">
                  <video
                    id="video"
                    className="youtube video-js vjs-default-skin video-16-9"
                    controls
                    width="640" height="264"
                    data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=DkeiKbqa02g"}], "youtube": { "ytControls": 2 } }'
                  >
                  </video>
                </div>
              </div>
            </section>


            <section id="section-7">
              <h2 className="section-title-2">Code <a data-scroll href="#section-7" className="anchor"
                                                      data-toggle="tooltip" data-placement="top" title="Copy URL"><i
                className="icon-hash"></i></a></h2>
              <p>To switch directories, type <kbd className="kbd">cd</kbd> followed by the name of the directory. To
                edit settings, press <kbd className="kbd">ctrl + ,</kbd></p>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header no-border bg-white pb-0">
                      <ul className="nav nav-pills card-header-pills lavalamp" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                             aria-controls="home" aria-selected="true">HTML</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                             aria-controls="profile" aria-selected="false">CSS</a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <pre><code className="language-markup"></code></pre>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <pre><code className="language-css"></code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section id="section-8">
              <h2 className="section-title-2">Alert <a data-scroll href="#section-8" className="anchor"
                                                       data-toggle="tooltip" data-placement="top" title="Copy URL"><i
                className="icon-hash"></i></a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet adipisci non similique quia maxime
                molestias id, laboriosam cumque doloribus reprehenderit eaque minus quisquam eius a perferendis ut.
                Ipsum, dignissimos laboriosam.</p>
              <div className="row">
                <div className="col">
                  <div className="alert alert-warning" role="alert">
                    <h4>Tip</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos minus, qui error eveniet! Et
                      consequuntur fugit nulla nam</p>
                    <i className="icon-alert-circle"></i>
                  </div>
                </div>
              </div>
            </section>


            <section id="section-9">
              <h2 className="section-title-2">List <a data-scroll href="#section-9" className="anchor"
                                                      data-toggle="tooltip" data-placement="top" title="Copy URL"><i
                className="icon-hash"></i></a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet adipisci non similique quia maxime
                molestias id, laboriosam cumque doloribus reprehenderit eaque minus quisquam eius a perferendis ut.
                Ipsum, dignissimos laboriosam.</p>
              <div className="row">
                <div className="col-md-6 col-xxl-4">
                  <ul className="list-group list-group-lines">
                    <li className="list-group-item d-flex align-items-center boxed">
                      <i className="icon-check2 mr-2 text-primary fs-24"></i>
                      Cras justo odio
                      <span className="badge badge-green">New</span>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="icon-check2 mr-2 text-primary fs-24"></i>
                      Dapibus ac facilisis in
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-xxl-4">
                  <ul className="list-group list-group-lines">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="icon-check2 mr-2 text-primary fs-24"></i>
                      Cras justo odio
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="icon-check2 mr-2 text-primary fs-24"></i>
                      Dapibus ac facilisis in
                    </li>
                  </ul>
                </div>
              </div>
            </section>


            <section id="section-10">
              <h2 className="section-title-2">Carousel <a data-scroll href="#section-10" className="anchor"
                                                          data-toggle="tooltip" data-placement="top" title="Copy URL"><i
                className="icon-hash"></i></a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sed, voluptatibus repudiandae facere
                aperiam nemo fugit iusto eaque voluptatem delectus ea similique excepturi exercitationem iure, possimus
                minus fugiat. Eaque, hic.</p>
              <div className="row">
                <div className="col">
                  <div className="owl-carousel" data-items="[1,1,1]" data-margin="20" data-nav="true">
                    <figure className="photo">
                      <a className="lightbox" href="../../assets/images/image-1.jpg" title="Image title">
                        <img src="../../assets/images/image-1.jpg" alt="Image"/>
                      </a>
                    </figure>
                    <figure className="photo">
                      <a className="lightbox" href="../../assets/images/image-1.jpg" title="Image title">
                        <img src="../../assets/images/image-1.jpg" alt="Image"/>
                      </a>
                    </figure>
                    <figure className="photo">
                      <a className="lightbox" href="../../assets/images/image-1.jpg" title="Image title">
                        <img src="../../assets/images/image-1.jpg" alt="Image"/>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
          </article>


          <aside className="col-md-3 col-xxl-3 d-none d-md-block">
            <div className="sticky">
              <ul id="toc" className="nav flex-column toc">
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-1">Typography</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-2">Colors</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-3">File Tree</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-4">Table</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-5">Accordion</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-6">Video</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-7">Code</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-8">Alert</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-9">List</a>
                </li>
                <li className="nav-item">
                  <a data-scroll className="nav-link" href="#section-10">Carousel</a>
                </li>
              </ul>
            </div>
          </aside>


        </div>

      </article>
    );
  }
}
