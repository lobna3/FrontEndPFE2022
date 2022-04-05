import React, { Component } from 'react';
import {Bar,} from 'react-chartjs-2';
import { ProgressBar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {
  //Button,
  //ButtonGroup,
  //Card,
  //CardBody,
  //CardHeader,
  //Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  //Row,
} from 'reactstrap';


export class Dashboard extends Component {
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  constructor(props){
    super(props)
    this.state = {
      startDate: new Date(),
      visitSaleData: {},
      visitSaleOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display:false,
              min: 0,
              stepSize: 20,
              max: 80
            },
            gridLines: {
              drawBorder: false,
              color: 'rgba(235,237,242,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            }
          }],
          xAxes: [{
            gridLines: {
              display:false,
              drawBorder: false,
              color: 'rgba(0,0,0,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            },
            ticks: {
              padding: 20,
              fontColor: "#9c9fa6",
              autoSkip: true,
            },
            categoryPercentage: 0.5,
            barPercentage: 0.5
        }]
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        }
      },
      trafficData: {},
      trafficOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: false,
      },
      todos: [
        {
            id: 1,
            task: 'Pick up kids from school',
            isCompleted: false
        },
        {
            id: 2,
            task: 'Prepare for presentation',
            isCompleted: true
        },
        {
            id: 3,
            task: 'Print Statements',
            isCompleted: false
        },
        {
            id: 4,
            task: 'Create invoice',
            isCompleted: false
        },
        {
            id: 5,
            task: 'Call John',
            isCompleted: true
        },
        {
            id: 6,
            task: 'Meeting with Alisa',
            isCompleted: false
        }
      ],
      inputValue: '',
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  statusChangedHandler(event, id) {

    //const todoIndex = this.state.todos.findIndex( t => t.id === id );
    const todo = {...this.state.todos[id]};
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
        todos: todos
    })
  }

  addTodo (event) {
      event.preventDefault();

      const todos = [...this.state.todos];
      todos.unshift({
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          task: this.state.inputValue,
          isCompleted: false
          
      })

      this.setState({
          todos: todos,
          inputValue: ''
      })
  }

  removeTodo (index) {
      const todos = [...this.state.todos];
      todos.splice(index, 1);

      this.setState({
          todos: todos
      })
  }

  inputChangeHandler(event) {
      this.setState({
          inputValue: event.target.value
      });
  }
  
  componentDidMount(){
    //your code
    var ctx = document.getElementById('visitSaleChart').getContext("2d")
    var gradientBar1 = ctx.createLinearGradient(0, 0, 0, 181)
    gradientBar1.addColorStop(0, 'rgba(218, 140, 255, 1)')
    gradientBar1.addColorStop(1, 'rgba(154, 85, 255, 1)')

    var gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360)
    gradientBar2.addColorStop(0, 'rgba(54, 215, 232, 1)')
    gradientBar2.addColorStop(1, 'rgba(177, 148, 250, 1)')

    var gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300)
    gradientBar3.addColorStop(0, 'rgba(255, 191, 150, 1)')
    gradientBar3.addColorStop(1, 'rgba(254, 112, 150, 1)')

    var gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 181)
    gradientdonut1.addColorStop(0, 'rgba(54, 215, 232, 1)')
    gradientdonut1.addColorStop(1, 'rgba(177, 148, 250, 1)')

    var gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 50)
    gradientdonut2.addColorStop(0, 'rgba(6, 185, 157, 1)')
    gradientdonut2.addColorStop(1, 'rgba(132, 217, 210, 1)')

    var gradientdonut3 = ctx.createLinearGradient(0, 0, 0, 300)
    gradientdonut3.addColorStop(0, 'rgba(254, 124, 150, 1)')
    gradientdonut3.addColorStop(1, 'rgba(255, 205, 150, 1)')



    const newVisitSaleData = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
      datasets: [
        {
          label: "CHN",
          borderColor: gradientBar1,
          backgroundColor: gradientBar1,
          hoverBackgroundColor: gradientBar1,
          legendColor: gradientBar1,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [20, 40, 15, 35, 25, 50, 30, 20]
        },
        {
          label: "USA",
          borderColor: gradientBar2,
          backgroundColor: gradientBar2,
          hoverBackgroundColor: gradientBar2,
          legendColor: gradientBar2,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [40, 30, 20, 10, 50, 15, 35, 40]
        },
        {
          label: "UK",
          borderColor: gradientBar3,
          backgroundColor: gradientBar3,
          hoverBackgroundColor: gradientBar3,
          legendColor: gradientBar3,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [70, 10, 30, 40, 25, 50, 15, 30]
        }
      ]
    }
    const newTrafficData = {
      datasets: [{
        data: [30, 30, 40],
          backgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          hoverBackgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          borderColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          legendColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Search Engines',
        'Direct Click',
        'Bookmarks Click',
      ]
    };
    this.setState({visitSaleData: newVisitSaleData, trafficData:newTrafficData} )
  }
  
  state = {
    modal: false,
    modal1:false,
    modal2:false,
    modal3:false,
    modal_backdrop: true,
    modal_nested_parent: true,
    modal_nested: true,
    backdrop: true,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  toggle1 = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal1: !this.state.modal1,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal1_${modalType}`],
    });
  };

  toggle2 = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal2: !this.state.modal2,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal2_${modalType}`],
    });
  };

  toggle3 = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal3: !this.state.modal3,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal3_${modalType}`],
    });
  };
 

  render () {
    return (

           
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span> Dashboard </h3>
            <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Aperçu<i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>

        <Modal
            isOpen={this.state.modal}
            toggle={this.toggle()}
            className={this.props.className}>
            <ModalHeader toggle={this.toggle()} className="card-header bg-primary text-white">Nouvelle opération</ModalHeader>
            <ModalBody className="">
               <h4><i className="mdi mdi-arrow-left"></i>Choissisez votre opération souhaité</h4>
                <div className="card">
                <button className="btn btn-outline-primary btn-icon-text" onClick={this.toggle1()}>
                        <i className="mdi mdi-account mdi-36px"></i>
                        <span className="d-inline-block text-left">   Nouveau Client
                       <small className="font-weight-light d-block">Créer un nouvelle client</small>  
                        </span>
                </button>
                <p></p>
                <button className="btn btn-outline-primary btn-icon-text" onClick={this.toggle2()}>
                        <i className="mdi mdi-account-multiple mdi-36px"></i>
                        <span className="d-inline-block text-left"> Ancien Client
                          <small className="font-weight-light d-block">Aller au tableau des clients</small>
                        </span>
                      </button>
              
                </div>              
            </ModalBody>
            <ModalFooter><p></p></ModalFooter>
        </Modal>

        <Modal
            isOpen={this.state.modal1}
            toggle={this.toggle1()}
            className={this.props.className}>
            <ModalHeader toggle={this.toggle1()} className="card-header bg-primary text-white">Nouveau client </ModalHeader>
            <ModalBody className="">
            <div className=" grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description"> Basic form layout </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Username</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="Username" size="lg" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                </form>
              </div>
            </div>
            </div>      
            </ModalBody>
            <ModalFooter>
            <button type="button" className="btn btn-gradient-dark btn-fw">Retour</button>  
            <button type="button" className="btn btn-gradient-primary btn-fw">Suivant</button>
            </ModalFooter>
                
        </Modal>

        <Modal
            isOpen={this.state.modal2}
            toggle={this.toggle2()}
            className={this.props.className}
            dialogClassName="modal-90w"
            >
            <ModalHeader toggle={this.toggle2()} className="card-header bg-primary text-white">Tableau des clients </ModalHeader>
            <ModalBody className="">
            <h4>Choissir votre client</h4>
            <div className=" grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-top">
                    <thead  class="thead-light">
                      <tr>
                        <th>User</th>
                        <th>Product</th>
                        <th>Sale</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jacob</td>
                        <td>Photoshop</td>
                        <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                        <td><label className="badge badge-danger">Pending</label></td>
                      </tr>
                      <tr>
                        <td>Messsy</td>
                        <td>Flash</td>
                        <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                        <td><label className="badge badge-warning">In progress</label></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Premier</td>
                        <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                        <td><label className="badge badge-info">Fixed</label></td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>After effects</td>
                        <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>53275535</td>
                        <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                        <td><label className="badge badge-warning">In progress</label></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
           </div>
            </ModalBody>
            <ModalFooter>
            <button type="button" className="btn btn-gradient-dark btn-fw">Retour</button>  
            <button type="button" className="btn btn-gradient-primary btn-fw" onClick={this.toggle3()}>Suivant</button>
            </ModalFooter>
        </Modal>

        <Modal
            isOpen={this.state.modal3}
            toggle={this.toggle3()}
            className={this.props.className}>
            <ModalHeader toggle={this.toggle3()} className="card-header bg-primary text-white">Nouvelle opération</ModalHeader>
            <ModalBody className="">
               <h4><i className="mdi mdi-arrow-left"></i>Choissisez votre opération souhaité</h4>
                <div className="card">
                <button className="btn btn-outline-primary btn-icon-text">
                        <i className="mdi mdi-file-document mdi-36px"></i>
                        <span className="d-inline-block text-left">   Créer votre Devis
                       <small className="font-weight-light d-block">Nouveau devis</small>  
                        </span>
                </button>
                <p></p>
                <button className="btn btn-outline-primary btn-icon-text">
                        <i className=" mdi mdi-file-chart mdi-36px"></i>
                        <span className="d-inline-block text-left"> Créer votre Facture
                          <small className="font-weight-light d-block"> Nouvelle facture</small>
                        </span>
                      </button>
              
                </div>              
            </ModalBody>
            <ModalFooter><p></p></ModalFooter>
        </Modal>
            
        <div className="row">
        <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="clearfix mb-4">
                  <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                  <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right">
                    <ul>
                      <li>
                        <span className="legend-dots bg-primary">
                        </span>CHN
                      </li>
                      <li>
                        <span className="legend-dots bg-danger">
                        </span>USA
                      </li>
                      <li>
                        <span className="legend-dots bg-info">
                        </span>UK
                      </li>
                    </ul>
                  </div>
                </div>
                <Bar ref='chart' className="chartLegendContainer" data={this.state.visitSaleData} options={this.state.visitSaleOptions} id="visitSaleChart"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin ml-auto">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <h4 className="card-title text-center text-white">Créer votre opération vente</h4>
                <div className="media text-center">
                  <div className="media-body">
                  <button type="button" className="btn btn-gradient-light btn-rounded btn-fw" onClick={this.toggle()}>  Nouvelle Opération</button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title text-center text-white">Créer votre Projet</h4>
                <div className="media text-center">
                  <div className="media-body">
                  <button type="button" className="btn btn-gradient-light btn-rounded btn-fw">Nouveau Projet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          {/*  <div className="col-md-4  ml-auto grid-margin stretch-card">
            <div className="card bg-gradient-info card-img-holder text-white ">
              <div className="card-body">
                <h4 className="card-title text-center">Créer votre opération vente</h4>
                <div className="media text-center">
                  <div className="media-body">
                  <button type="button" className="btn btn-gradient-primary btn-rounded btn-fw" onClick={this.toggle()}>  Nouvelle Opération</button>
                  </div>
                </div>
              </div>
              <p></p>
              <div className="card-body border border-top-primary">
                <h4 className="card-title text-center  text-primary">Créer votre Projet</h4>
                <div className="media text-center">
                  <div className="media-body">
                  <button type="button" className="btn btn-gradient-primary btn-rounded btn-fw">Nouveau Projet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
         
          
        </div>

        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Weekly Sales <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">$ 15,0000</h2>
                <h6 className="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Weekly Orders <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">45,6334</h2>
                <h6 className="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">95,5741</h2>
                <h6 className="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Striped Table</h4>
                <p className="card-description"> Add className <code>.table-striped</code>
                </p>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User </th>
                        <th> First name </th>
                        <th> Progress </th>
                        <th> Amount </th>
                        <th> Deadline </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">
                          <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
                        </td>
                        <td> Herman Beck </td>
                        <td>
                          <ProgressBar variant="success" now={25} />
                        </td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={require("../../assets/images/faces/face2.jpg")} alt="user icon" />
                        </td>
                        <td> Messsy Adam </td>
                        <td>
                          <ProgressBar variant="danger" now={75} />
                        </td>
                        <td> $245.30 </td>
                        <td> July 1, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={require("../../assets/images/faces/face3.jpg")} alt="user icon" />
                        </td>
                        <td> John Richards </td>
                        <td>
                          <ProgressBar variant="warning" now={90} />
                        </td>
                        <td> $138.00 </td>
                        <td> Apr 12, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={require("../../assets/images/faces/face4.jpg")} alt="user icon" />
                        </td>
                        <td> Peter Meggik </td>
                        <td>
                          <ProgressBar variant="primary" now={50} />
                        </td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={require("../../assets/images/faces/face5.jpg")} alt="user icon" />
                        </td>
                        <td> Edward </td>
                        <td>
                          <ProgressBar variant="danger" now={60} />
                        </td>
                        <td> $ 160.25 </td>
                        <td> May 03, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={require("../../assets/images/faces/face6.jpg")} alt="user icon" />
                        </td>
                        <td> John Doe </td>
                        <td>
                          <ProgressBar variant="info" now={65} />
                        </td>
                        <td> $ 123.21 </td>
                        <td> April 05, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={require("../../assets/images/faces/face7.jpg")} alt="user icon" />
                        </td>
                        <td> Henry Tom </td>
                        <td>
                          <ProgressBar variant="warning" now={20} />
                        </td>
                        <td> $ 150.00 </td>
                        <td> June 16, 2015 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> 
    );
  }
}

export default Dashboard;