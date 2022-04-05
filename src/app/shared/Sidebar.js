import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
      {path:'/clients'},
      {path:'/recette'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>Administrateur</Trans></span>
                <span className="text-secondary text-small"><Trans>Chef de projet</Trans></span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Tableau du bord</Trans></span>
              <i className="mdi mdi-home  mdi-18px menu-icon"></i>
            </Link>
          </li>   
         {/* <li className={ this.isPathActive('/clients') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Client</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account menu-icon"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/clients/ajouter-client') ? 'nav-link active' : 'nav-link' } to="/clients/ajouter-client"><Trans>Nouveau Client</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/clients/listes-client') ? 'nav-link active' : 'nav-link' } to="/clients/listes-client"><Trans>Ancien Client</Trans></Link></li>
              </ul>
            </Collapse>
          </li>*/} 
          <li className={ this.isPathActive('/recette') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Recette</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account-multiple-outline mdi-18px  menu-icon"></i>
            </div>
            <Collapse in={ this.state.formElementsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">   <Link className={ this.isPathActive('/recette/recette') ? 'nav-link active' : 'nav-link' } to="/recette/recette"><Trans>Recette</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/recette/devis') ? 'nav-link active' : 'nav-link' } to="/recette/devis"><Trans>Devis en cours</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/recette/commandes') ? 'nav-link active' : 'nav-link' } to="/recette/commandes"><Trans>Commandes en cours</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/recette/facture') ? 'nav-link active' : 'nav-link' } to="/recette/facture"><Trans>Facture</Trans></Link></li>
                <li className="nav-item">   <Link className={ this.isPathActive('/recette') ? 'nav-link active' : 'nav-link' } to="/recette"><Trans>Ventes</Trans></Link></li>
                <li className="nav-item">   <Link className={ this.isPathActive('/recette') ? 'nav-link active' : 'nav-link' } to="/recette"><Trans>Brouillon</Trans></Link></li>
              </ul>
            </Collapse>
          </li> 
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title "><Trans>Projets</Trans></span>
              <i className="mdi mdi-folder-account mdi-18px menu-icon"></i>
            </Link>
          </li> 
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title"><Trans>Contrat</Trans></span>
              <i className="mdi mdi-file-document mdi-18px menu-icon"></i>
            </Link>
          </li> 
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
             <Link className="nav-link  menu-expanded" to="/dashboard">
              <span className="menu-title"><Trans>Bénéficiares</Trans></span>
              <i className="mdi mdi-transit-transfer mdi-18px menu-icon"></i>
              </Link>
          </li> 
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title"><Trans>Dépenses</Trans></span>
              <i className="mdi mdi-finance mdi-18px  menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title"><Trans>Mes opérations</Trans></span>
              <i className="mdi mdi-briefcase-account mdi-18px  menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title"><Trans>Trésorerie</Trans></span>
              <i className="mdi mdi-square-inc-cash mdi-18px  menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title"><Trans>Produit Service</Trans></span>
              <i className="mdi mdi-cart  mdi-18px  menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title"><Trans>Banque</Trans></span>
              <i className="mdi mdi-bank mdi-18px  menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashbord') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashbord">
              <span className="menu-title"><Trans>Configuration</Trans></span>
              <i className="mdi mdi-settings  mdi-18px menu-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);