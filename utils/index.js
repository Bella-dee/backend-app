export const successResponse = (res, data, message = "Success", statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

const handleResponse = (res, status, message, data) =>
  res.status(status).json({ message, data });

export default handleResponse;