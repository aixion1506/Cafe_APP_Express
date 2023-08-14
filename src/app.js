import express from 'express';

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//메인페이지
app.get('/', (req, res) => {
  res.send('어서오세요~ 카페 라니 입니다.');
});

// router, service 구현
app.use(menuRouter);
app.use(orderRouter);

// 순서 중요
app.use(errorMiddleware);

export { app };
