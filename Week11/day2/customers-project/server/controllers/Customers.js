import db from '../connections/db.js'

export const getAllCustomers = (req, res) =>{
  db('customer')
  .select('customer_id','first_name','last_name')
  .orderBy('first_name')
  .limit(20)
  .offset(1)
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

export const searchCustomer = (req,res)=>{
  db('customer')
  .select('customer_id','first_name','last_name')
  .orderBy('first_name')
  .whereILike('first_name',`${req.query.name}%`)
  .limit(20)
  .offset(1)
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}


export const getCustometData = (req,res) =>{
  db('customer')
  .select('customer_id',
          'first_name',
          'last_name',
          'email',
          'address',
          'district',
		      'city',
		      'country' )
  .join('address','address.address_id','=','customer.address_id')
  .join('city','city.city_id','=','address.city_id')
  .join('country','country.country_id','=','city.country_id')
  .where({customer_id:req.params.id})
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}
