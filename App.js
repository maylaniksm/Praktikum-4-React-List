import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
    <div>
    <nav class="navbar navbar-dark bg-dark">
    <div class="card-header">
    <ul class="nav nav-tabs">
    <button><li class="nav-item" class="btn btn-success">
    <a class="nav-link active " >
    <Link to="/">Beranda</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-warning">
    <a class="nav-link active" href="#">
    <Link to="/tentangsaya"> Tentang Saya</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-danger">
    <a class="nav-link active" href="#">
    <Link to="/karya"> Karya</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-info">
    <a class="nav-link active" href="#">
    <Link to="/kontak"> Kontak</Link></a>
    </li></button>
    <div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>

    <button><li class="nav-item" class="btn btn-info">
    <a class="nav-link active" href="#">
    <Link to="/list"> List</Link></a>
    </li></button>
    </ul>
    </div>
     </nav>
    <div class="card-body">
    <p><Utama /></p>
    </div>
     </div>
    
    );
  }
}

export default App;
