import React, { Fragment, Component } from 'react';
import classNames from 'classnames';
import ProductList from '../product-list/product-list';
import MainNav from '../main-nav/main-nav';
import Header from '../header/header';
import Categories from '../categories/categories'
import Container from '../container/container'
import Footer from '../footer/footer'
import Socials from '../socials/socials'

// styles
import styles from './catalog.scss';

export default class Catalog extends Component { 
  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <MainNav />
        <Header />
        <Categories />
        <Container products={products} />
        <Footer />
        <Socials />
      </Fragment>
    )
  }
};
