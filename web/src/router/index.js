import React  from 'react';
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Employee from '../pages/Employee';
import Contact from '../pages/Contact';
import routes from './config'

const Router=()=> {
    return(
        <Suspense fallback={null}>
          <Header/>
        <h1 hidden>SEO</h1>
        <main>
        <Routes>
                <Route
                   path="/"
                   exact={true}
                   element={<Home sign={"login"}/>}
                 />

                <Route  
                  path="/register"
                  exact={true}
                  element={<Home sign={"register"}/>}
                />

                <Route  
                  path="/contact"
                  exact={true}
                  element={<Contact/>}
                />
          

                <Route  
                  path="/add-employee"
                  exact={true}
                  element={<Employee category={"add-employee"}/>}
                />  

                <Route  
                  path="/view-employee"
                  exact={true}
                  element={<Employee category={"view-employee"}/>}
                />

                <Route  
                  path="/delete-employee"
                  exact={true}
                  element={<Employee category={"delete-employee"}/>}
                />
            {/* {routes.map((routeItem) => {
                return (
                  <Route
                   key={routeItem.key}
                    path={routeItem.path}
                    exact={routeItem.exact}
                    element={<routeItem.component/>
                    }
                  />
   
                
                )
            })} */}
            </Routes>
        </main>
      </Suspense>
  )
}

export default Router;
