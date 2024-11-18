# SecondBrain 🧠

SecondBrain is a web application that helps users store and share their bookmarked content with a single click. It's built with TypeScript, Node.js, Express.js, and MongoDB.

## Features ✨

- **Smart Bookmarking**: Save your favorite web content with custom tags and categories
- **One-Click Sharing**: Share your curated content with the world using a single button
- **User Authentication**: Secure login and registration system
- **Personalized Collections**: Organize your bookmarks into custom collections
- **Cloud Storage**: All your data is securely stored in MongoDB

## Tech Stack 🛠️

- **Backend**: Node.js + Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Prerequisites 📋

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running
- TypeScript installed globally (`npm install -g typescript`)

## Installation 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/SecondBrain.git
cd SecondBrain
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/secondbrain
JWT_SECRET=your_jwt_secret
```

4. Build and run the application:
```bash
npm run build
npm start
```

## API Endpoints 🔌

### Authentication
- `POST http://localhost:3000/user/login` - Login user 
- `POST http://localhost:3000/user/register` - Register a new user
- `POST http://localhost:3000/user/changepassword` - Change Password

### Bookmarks
- `GET http://localhost:3000/sharing/:username` - Get Shared Brain
- `POST http://localhost:3000/content/newbrain` - Add new brain
- `Post http://localhost:3000/user/braintoggle` - Toggle brain sharing


## Project Structure 📁

```
SecondBrain/
├── src/
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── index.ts
├── dist/
├── tests/
├── package.json
└── tsconfig.json
```

## Scripts 📝

- `npm run build` - Build the TypeScript code
- `npm start` - Start the production server
- `npm run dev` - Start the development server
- `npm test` - Run tests
- `npm run lint` - Run linting

## Contributing 🤝

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support 💬

If you have any questions or need support, please create an issue in the GitHub repository or contact the maintainers.
