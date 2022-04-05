import React, { Component } from 'react'
//import { ProgressBar } from 'react-bootstrap';

import { Form } from 'react-bootstrap';


export class Devis extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span> Recette </h3> 
            
                   <nav aria-label="breadcrumb" className="navbar navbar-expand-lg ">
                        <ul className="breadcrumb">
                        <li className="breadcrumb-item "><a href="!#" onClick={event => event.preventDefault()}>Recette</a></li>
                        <li className="breadcrumb-item active"><a href="!#" onClick={event => event.preventDefault()}>Devis en cours</a></li>
                        <li className="breadcrumb-item  active"><a href="!#" onClick={event => event.preventDefault()}>Commandes en cours</a></li>
                        <li className="breadcrumb-item active "><a href="!#" onClick={event => event.preventDefault()}>Facture</a></li>
                        <li className="breadcrumb-item active"><a href="!#" onClick={event => event.preventDefault()}>Ventes</a></li>
                        <li className="breadcrumb-item active "><a href="!#" onClick={event => event.preventDefault()}>Brouillon</a></li>
                       {/* <li className="breadcrumb-item active" aria-current="page">Recette</li> */} 
                        </ul>
            </nav> 
            {/* <nav class="navbar navbar-expand-lg navbar-light bg- ">
               <div class="collapse navbar-collapse" id="navbarNav">
                 <ul class="navbar-nav">
                    <li class="nav-item active">
                       <a class="nav-link" href="#">Recette <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="#">Devis en cours</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="#">Commandes en cours</a>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="#">Facture</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Ventes</a>
                  </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">Brouillon</a>
                </li>
    
              </ul>
            </div>
              </nav> */}
             
          
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Devis en cours</h4>
                <div className="col-md-6 ml-auto"> 
                <button type="button" className="btn btn-gradient-success btn-fw">+ Ajout Devis</button>
                <button type="button" className="btn btn-gradient-success  btn-fw">+ Nouvelle Opération</button>
                </div>
               <p></p>
            
            <div ClassName="col-12">
              <div>
              <div class="d-flex align-items-center">
                <p class="mb-2 mr-2">Rechercher dans le tableau:</p>
                <label for="search-bar-0" class="search-label">
                  <span class="sr-only">Rechercher dans ce tableau</span>
                  <Form.Control id="search-bar-0" type="text" aria-label="enter text you want to search" class="form-control " placeholder="Rechercher" value=""/></label>
              </div>
              <div className=" react-bootstrap-table  orders-table table-responsive">
                 <table class="table table-striped">
                    <thead>
                      <tr>
                        <th tabindex="0" className="sortable"> Référence #<span class="order-4"></span></th>
                        <th tabindex="0" className="sortable">Client<span class="caret-4-asc"></span></th>
                        <th tabindex="0" className="sortable">Email<span class="order-4"></span></th>
                        <th tabindex="0" className="sortable">NTel<span class="order-4"></span></th>
                        <th tabindex="0" className="sortable">Monatant<span class="order-4"></span></th>
                        <th tabindex="0" className="sortable">Date<span class="order-4"></span></th>
                        <th tabindex="0" className="sortable">Status<span class="order-4"></span></th>
                        <th tabindex="0" className="text-center">Action</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                         <td>WD-71</td>
                         <td>Aleena</td>
                         <td>New York</td>
                         <td>123456789</td>
                         <td>$1600</td>
                         <td>30-03-2022</td>
                         <td><label class="badge badge-info">Arrivée à l'échéence</label></td>
                         <td>
                         <div>
                         <button class="btn btn-light"><i class="mdi mdi-eye-outline text-primary"></i>Visualiser</button>
                         <button class="btn btn-light"><i class="mdi mdi-printer text-danger"></i>Imprimer</button>
                         <button class="btn btn-light"><i class="mdi mdi-email text-primary"></i>Envoyer</button>
                         <button class="btn btn-light"><i class="mdi mdi-close text-danger"></i>Supprimer</button>
                         </div>
                         </td>
                      </tr>
                      <tr>
                        <td>WD-72</td>
                        <td>Alphy</td>
                        <td>Brazil</td>
                        <td>123456789</td>
                        <td>$5500</td>
                        <td>30-03-2022</td>
                        <td><label class="badge badge-warning">En attente</label></td>
                        <td>
                        <div>
                        <button class="btn btn-light"><i class="mdi mdi-eye-outline text-primary"></i>Visualiser</button>
                        <button class="btn btn-light"><i class="mdi mdi-printer text-danger"></i>Imprimer</button>
                         <button class="btn btn-light"><i class="mdi mdi-email text-primary"></i>Envoyer</button>
                         <button class="btn btn-light"><i class="mdi mdi-close text-danger"></i>Supprimer</button>
                        </div> </td>
                      </tr>
                      <tr>
                         <td>WD-74</td>
                         <td>Catherine</td>
                         <td>Brazil</td>
                         <td>123456789</td>
                         <td>$1600</td>
                         <td>04-04-2022</td>
                         <td><label class="badge badge-success">Accepté</label></td>
                         <td><div>
                         <button class="btn btn-light"><i class="mdi mdi-eye-outline text-primary"></i>Visualiser</button>
                         <button class="btn btn-light"><i class="mdi mdi-printer text-danger"></i>Imprimer</button>
                         <button class="btn btn-light"><i class="mdi mdi-email text-primary"></i>Envoyer</button>
                         <button class="btn btn-light"><i class="mdi mdi-close text-danger"></i>Supprimer</button>
                         </div></td>
                      </tr>
                      <tr>
                         <td>WD-75</td>
                         <td>Aleena</td>
                         <td>New York</td>
                         <td>123456789</td>
                         <td>$1600</td>
                         <td>30-03-2022</td>
                         <td><label class="badge badge-danger">Refusé</label></td>
                         <td>
                         <div>
                         <button class="btn btn-light"><i class="mdi mdi-eye-outline text-primary"></i>Visualiser</button>
                         <button class="btn btn-light"><i class="mdi mdi-printer text-danger"></i>Imprimer</button>
                         <button class="btn btn-light"><i class="mdi mdi-email text-primary"></i>Envoyer</button>
                         <button class="btn btn-light"><i class="mdi mdi-close text-danger"></i>Supprimer</button>
                         </div>
                         </td>
                     </tr>
                     <tr>
                        <td>WD-73</td>
                        <td>Alphy</td>
                        <td>Brazil</td>
                        <td>123456789</td>
                        <td>$5500</td>
                        <td>30-03-2022</td>
                        <td><label class="badge badge-dark">Annulé</label></td>
                        <td>
                        <div>
                        <button class="btn btn-light"><i class="mdi mdi-eye-outline text-primary"></i>Visualiser</button>
                        <button class="btn btn-light"><i class="mdi mdi-printer text-danger"></i>Imprimer</button>
                        <button class="btn btn-light"><i class="mdi mdi-email text-primary"></i>Envoyer</button>
                        <button class="btn btn-light"><i class="mdi mdi-close text-danger"></i>Supprimer</button>
                        </div> </td>
                     </tr>
                    </tbody>
                 </table>
             </div>
             {/*<div ClassName="card">
               <p></p>
             <nav aria-label="Page navigation example">
               <ul class="pagination justify-content-end">
                 <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Précédent</a>
                </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                 <a class="page-link" href="#">Suivant</a>
            </li>
             </ul>
            </nav>
             </div> */}
             
           
             </div>
            </div>
             
          
            
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Devis