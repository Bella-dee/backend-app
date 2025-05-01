export const getTodos = async (req,res) => {
    const id = req.params?.id;
try{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
    );
    const data = await response.json();
    return res.status(200).json({
        success: true,
        message: "todos fetched successfully",
        comment: data,
    });
} catch (error) {
    return res.status(500).json({
        success: false,
        message: "failed to fetch todos",
        error: error.message,
    });
}
};