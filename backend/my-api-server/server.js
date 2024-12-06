const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(bodyParser.json());
// Mock user data
const users = [{ user_id: 1, username: 'testuser', password: 'password' }];

// Mock todos data
const todos = [
  {
    todo_id: 7,
    user: '걸어봐위엄라이커라이온',
    date: '2024-06-17T17:00:00.123456+09:00',
    content: '멋사와 함께 행복 개발하기',
    is_checked: false,
    emoji: '',
  },
  {
    todo_id: 8,
    user: '걸어봐위엄라이커라이온',
    date: '2024-06-16T11:30:15.123456+09:00',
    content: '투두리스트 API 개발 끝내기',
    is_checked: false,
    emoji: '',
  },
  {
    todo_id: 9,
    user: '걸어봐위엄라이커라이온',
    date: '2024-06-20T15:15:15.123456+09:00',
    content: '건강하기',
    is_checked: false,
    emoji: '',
  },
];

// Register endpoint
app.post('/api/users/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ user_id: users.length + 1, username, password });
  res
    .status(200)
    .json({ detail: '회원가입 요청이 성공적으로 처리되었습니다.' });
});

// Login endpoint
app.post('/api/users/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (username === '걸어봐위엄라이커라이온' && password === 'q1w2e3r4') {
    res.status(200).json({ user_id: 3 });
} else {
    res.status(401).json({ message: 'Unauthorized' });
}

});

// ToDos endpoint
app.get('/api/todos/:userId', (req, res) => {
  const { userId } = req.params;
  const { month, day } = req.query;
  const dateString = `2024-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

  const userTodos = todos.filter(
    (todo) =>
      todo.user === users[userId - 1].username &&
      todo.date.startsWith(dateString)
  );
  res.status(200).json(userTodos);
});

// Add ToDo endpoint
app.post('/api/todos/:userId', (req, res) => {
  const { userId } = req.params;
  const { date, content } = req.body;
  const newTodo = {
    todo_id: todos.length + 1,
    user: users[userId - 1].username,
    date,
    content,
    is_checked: false,
    emoji: '',
  };
  todos.push(newTodo);
  res.status(200).json(newTodo);
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
