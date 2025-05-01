export const getAlbums = async (res) => {
  try {
    // fetch the data from the API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums",
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return res.status(200).json({
      success: true,
      message: "Albums fetched successfully",
      albums: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch albums",
      error: error.message,
    });
  }
};

export const getAllAlbumTitle = async (res) => {
  try {
    // fetch the data from the API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums",
      {
        method: "GET",
      }
    );
    const data = await response.json();

    const getAllDataTitle = data?.map((item) => ({
      idowu: item.title,
      id: item.id,
    }));

    return res.status(200).json({
      success: true,
      message: "Albums fetched successfully",
      albums: getAllDataTitle,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch albums",
      error: error.message,
    });
  }
};


