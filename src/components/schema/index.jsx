import * as Yup from 'yup'

export const modalSchema = Yup.object({
    productName: Yup.string()
      .max(20,"do not exceed 10 characters")
      .required("please fill out this field"),
    productPrice: Yup.number()
                     .min(1,"price can not be 0 or negative number")
                     .max(10000000,"price can not exceed 1 crore")
                     .required("please fill out this field"),
    
    productDescription : Yup.string()
                            .max(20,"do not exceed 20 characters")
                            .required("please fill out this field")                     
    ,
    UserContact : Yup.number()
                     .min(0,"phone number should not less than 11 digits")
                     .max(99999999999,"do not exceed 11 numbers")   
                     .required("please fill out this field")           
    ,
    detailDescription : Yup.string()
                           .max(50,"detail can not exceed 50 characters")
                           .required("please fill out this field")
    ,
    location : Yup.string()
                  .min(3,"city name should be at least 3 characters")
                  .max(30,"city name can not exceed 30 characters") 
                  .required("please fill out this field") 
    ,
    area :     Yup.string()
                  .min(3,"city name should be at least 3 characters")
                  .max(30,"city name can not exceed 30 characters")
                  .required("please fill out this field") 
    ,
    ProductCondition :Yup.number()
                  .min(1,"can not be 0 or negative number")
                  .max(10,"can not more than 10")   
                  .required("please fill out this field")  
    ,
    sellerName :Yup.string()
                  .min(2,"area name should be at least 3 characters")
                  .max(20,"area name can not exceed 30 characters") 
                  .required("please fill out this field") 
    ,
    })




