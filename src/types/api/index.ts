export type APIErrorBase = {
  code: string;
  message: string;
  name: string;
  status: number;
  stack: string;
  response: {
    data: {
      message: string;
      error: string;
      statusCode: number;
    };
  };
};
