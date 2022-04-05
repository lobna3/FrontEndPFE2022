import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));


const AjouterClient = lazy(() => import('./clients/AjouterClient'));
const ListeClient = lazy(() => import('./clients/ListeClient'));

const Recette = lazy(() => import('./recette/Recette'));
const Devis = lazy(() => import('./recette/Devis'));
const Commande = lazy(() => import('./recette/Commande'));
const Facture= lazy(() => import('./recette/Facture'));


const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));






class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />


          <Route path="/clients/ajouter-client" component={ AjouterClient } />
          <Route path="/clients/listes-client" component={ ListeClient } />

          <Route path="/recette/recette" component={ Recette} />
          <Route path="/recette/devis" component={ Devis} />
          <Route path="/recette/commandes" component={ Commande} />
          <Route path="/recette/facture" component={ Facture} />
      

          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;