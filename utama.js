import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda'
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import List from './list'

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/TentangSaya" component={TentangSaya} />
        <Route exact path="/Karya" component={Karya} />
        <Route exact path="/Kontak" component={Kontak} />
        <Route path="/List" component={List} />
    </Switch>
)

export default Utama;