module.exports = {
    error_file: "err.log",
    out_file: "out.log",
    log_file: "combined.log",
    time: true,
    apps: [
      {
        name: "myapp-api",
        script: "./app/server.js",
        watch: true,
        env: {

        },
        // env_production: {
        //   DB_USER: "postgres",
        //   DB_PASS: "QWEqwe123",
        //   DB_HOST: "coco-instance.cfijsfk7f2ng.ap-southeast-2.rds.amazonaws.com",
        //   DB_PORT: 5432,
        //   DB_NAME: "coco",
        //   SUPERHEROAPI_TOKEN: 4190104761000825,
        //   NODE_ENV: "development",
        //   NODE_ENV: "production",
        // },
      },
    ],
  };
  