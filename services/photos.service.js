export const getPhotos = async (req, res) => {
  const id = req.params?.id;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos`
    );
    const data = await response.json();
console.log(data)
    return res.status(200).json({
      sucess: true,
      message: " photos fetched successfully",
      comment: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: " failed to fetch photo",
      error: error.message,
    });
  }
};

export const getPhotoTitle = async (req,res) => {
  const id = req.params.id;

  const response = await fetch(
     `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  const data = await response.json();

  return res.status(200).json({
    success : true,
    message : "photo titles details fetched successfully",
    photo : {
     id : data?.id,
     title : data?.title,
    },
  });
};

export const getPhotoUrl = async (req,res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  const data = await response.json();

  return res.status(200).json({
    success : true,
    message : "photo url details fetched successfully",
    photo : {
      id : data?.id,
      url: data?.url,
    },
  });
};


export const getThumbNailUrl = async (req,res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`   
  );
  const data = await response.json();

  return res.status(200).json({
    success : true,
  message : "Thumb nail url fetched successfully",
photo : {
  id : data?.id,
  thumbnailUrl : data?.thumbnailUrl,
},
  });
};