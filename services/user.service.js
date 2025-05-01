// we want to create a service for users by fetching from an API and returning the data.


// try catch block to handle the business logic of the service and return the data. Along with the data, we want to return the status code of the response.
// Also throw an error if the response is not successful.

// fetch is a built-in function that allows us to fetch data from an API. by default it is a GET request.

// fetch the users data from the API
export const getUsers = async (res) => {
  try {
    // fetch the data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();
    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

// fetch the user data from the API
export const getSingleUser = async (req, res) => {
  const id = req.params?.id;

  try {
    // fetch the data from the API
    const response = await fetch(
    );
    const data = await response.json();
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};

export const getUserFullName = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return res.status(200).json({
    success: true,
    message: "User fetched successfully",
    user: {
      id: data?.id,
      name: data?.name,
    },
  });
};

export const getUserUserName = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  console.log(data)
  return res.status(200).json({
    success: true,
    message: "user fetched successfully",
    user: {
      id: data?.id,
      name: data?.userName,
    },
  });
};

export const getUserEmail = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return res.status(200).json({
    success: true,
    message: "user fetched sucessfully",
    user: {
      id: data?.id,
      name: data?.email,
    },
  });
};

export const getUserStreet = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return res.status(200).json({
    success: true,
    message: "user fetched successfully",
    user: {
      id: data?.id,
      name: data?.street,
    },
  });
};

export const getUserPhone = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  console.log(data)
  return res.status(200).json({
    success: true,
    message: "user phone details fetched successfully",
    user: {
      id: data?.id,
      phoneDetails: data?.phone,
    },
  });
};

export const getUserAddress = async (req, res) => {
  const id = req.params?.id;
console.log(id)
  const respnse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await respnse.json();

console.log(data)
  return res.status(200).json({
    sucess: true,
    message: "user address details fetched successfully",
    user: {
      id: data?.id,
      addressDetails: data?.address,
    },
  });
};

export const getUserCity = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return res.status(200).json({
    sucess: true,
    message: "user city name fetched sucessfully",
    user: {
      id: data?.id,
      cityName: data?.address?.city,
    },
  });
};


export const getUserWebsite = async (req,res) => {
  const id =req.params?.id;
console.log(id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}` 
  );
  const data = await response.json();

  console.log(data)
  return res.status(200).json({
    sucess: true,
    message:"user website details successfully fetched",
    user:{
     id: data?.id,
     websiteDetails: data?.website,
    },
  });
};

export const getUserCompanyName = async ( req,res) => {
  const id = req.params?.id;

console.log(id)
const response= await fetch(
  `https://jsonplaceholder.typicode.com/users/${id}` 
);
const data = await response.json();

console.log(data)
return res.status(200).json({
  sucess: true,
  message : "user company name details fetched successfully",
  user: {
    id : data?.id,
    companyNameDetails: data?.company?.name,
  },
});
};

export const getUserCatchPhrase = async (req,res) => {
  const id = req.params?.id;

  console.log(id)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`  
  );
const data = await response.json();

console.log(data)
return res.status(200).json({
  sucess: true,
  message :"user company catch phrase is successfully fetched",
  user: {
    id : data?.id,
    companyCatchPhrase: data?.company?.catchPhrase,
  },
});
};


export const getUserBs = async (req,res) => {
  const id = req.params?.id;

  console.log(id)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`   
  );
  const data= await response.json();

  console.log(data)
  return res.status(200).json({
sucesss : true,
message : "user company bs is successfully fetched",
user : {
  id : data?.id,
  companyBs : data?.company?.bs,
},
  });
};