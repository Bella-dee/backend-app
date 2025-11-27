import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "1.0.0",
    title: "Bella API",
    description: "API documentation for Bella collection website",
    contact: {
      name: "Bella",
      email: "okutuboidowu@gmail.com",
    },
  },
  servers: [
    // {
    //   url: "https://ved-backend.vercel.app",
    //   description: "Deployment server",
    // },
    {
      url: "http://localhost:8000",
      description: "Local server",
    },
  ],
  consumes: ["application/json"],
  producces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "User Auth Endpoints",
    },
    {
      name: "Ticket",
      description: "Ticket Endpoints",
    },
    {
      name: "Vehicle",
      description: "Vehicle Endpoints",
    },
        {
      name: "House",
      description: "House Endpoints",
    },

    {
      name: "Shoe Collection",
      description: "Shoe Collection Endpoints",
    },
  ],
  securityDefinitions: {
    jwtAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description: "Value: Bearer {jwt}",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
  security: [
    {
      jwtAuth: [],
    },
  ],
  definitions: {
    UserLoginModel: {
      $email: "mailnator@gmail.com",
      $password: "Password123#",
    },
    UserVerifyEmailModel: {
      $code: 333333,
    },
    UserForgotPasswordModel: {
      $email: "mail@mail.com",
    },
    UserResetPasswordModel: {
      $code: 999999,
      $new_password: "Password789#",
    },
    ChangePasswordModel: {
      $oldPassword: "Password123#",
      $newPassword: "Password789#",
    },
    CreateUserModel: {
      $firstName: "",
      $lastName: "",
      $email: "",
      $address: "",
      $lga: "",
      $phoneNumber: "",
    },
    CreateShoeModel: {
      $shoe_name: "",
      $description: "",
      $price: 0,
      $product_color: "",
      $product_size: "",
      $product_image: "",
    },
    UpdateTicketModel: {
      $fees: "",
      $status: "",
    },
    updateVehicleModel:{
      $plateNumber: "",
      $color: "",
      $model: "",
      $brand: "",
      $type: "",
  },
  createHouseModel: {
    $houseNumber:"",
    $street: "",
    $city: "",
    $state: "",
    $country: "",
    $houseType: "",
    $numberOfOccupants: "",
  },
  UpdateHouseModel: {
    $houseNumber:"",
    $street: "",
    $city: "",
    $state: "",
  },
    UpdateShoeModel: {
      $shoe_name: "",
      $description: "",
      $price: 0,
      $product_color: "",
      $product_size: "",
      $product_image: "",
    },
  },
};

const endpointsFiles = ["./routes/index.js"];
const outputFile = "./swagger-output.json";

swaggerAutogen({
  openapi: "3.0.0",
})(outputFile, endpointsFiles, doc);