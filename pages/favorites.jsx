import FavoritesProductsList from '../components/FavoritesProductsList/FavoritesProductsList';
import { myAxios } from '../utils/myAxios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthProtect from '../components/AuthProtect/AuthProtect';
import Loader from '../components/Loader/Loader';

const favorites = () => {
  return (
    <AuthProtect>
      <section className="favorites">
        <div className="container">
        <FavoritesProductsList />
        </div>
      </section>
    </AuthProtect>
  )
}

export default favorites