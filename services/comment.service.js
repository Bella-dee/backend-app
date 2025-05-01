export const getComment = async (req, res) => {
  try {
    // fetch the data from the API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return res.status(200).json({
      success: true,
      message: "comment fetched successfully",
      comment: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch comment",
      error: error.message,
    });
  }
};

export const getCommentName = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  const data = await response.json();

  console.log(data);
  return res.status(200).json({
    sucess: true,
    message: "comment name successfully fetched",
    comment: {
      id: data?.id,
      name: data?.name,
    },
  });
};

export const getCommentEmail = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  const data = await response.json();

  console.log(data);
  return res.status(200).json({
    sucess: true,
    message: "user comment email successfully fetched",
    comment: {
      id: data?.id,
      email: data?.email,
    },
  });
};


export const getCommentBody = async (req,res) => {
    const id = req.params.id;

    const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`    
    );
    const data = await response.json();

    return res.status(200).json({
        sucess : true,
    message : " comment body successfully fetched",
    comment : {
        id: data?.id,
        comment : data?.body,
    },
    });
};