import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            alt="sideimg"
            src="/assets/images/side-img.svg"
            className="hidden xl:block bg-no-repeat h-screen w-1/2 object-cover"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
