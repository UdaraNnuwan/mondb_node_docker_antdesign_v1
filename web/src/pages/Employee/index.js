import React from 'react'
import AddEmployee from '../../components/AddEmployee'
import DeleteEmployee from '../../components/DeleteEmployee';
import ViewEmployee from '../../components/ViewEmployee';

const Employee = (props) => {
  const {category } = props
  console.log(category);
    return (
    <>

        {
          category=='add-employee' ?
                    <AddEmployee/> : 
                    (
                      category=='view-employee' ? 
                                <ViewEmployee/> :
                                                (
                                                category=='delete-employee' ? 
                                                            <DeleteEmployee/>:"404")
            )
        }

        
       
    </>
  )
}

export default Employee
